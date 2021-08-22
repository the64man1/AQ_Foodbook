import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import NewRecipe from "./pages/Create";
import RecipeList from "./components/RecipeList";
import Nav from './components/Nav';
import DropdownNav from "./components/DropdownNav";
import Profile from './pages/Profile'
import { Container } from "tailwind-react-ui";
import "semantic-ui-css/semantic.min.css";
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log('graphQLErrors', graphQLErrors);
  }
  if (networkError) {
    console.log('networkError', networkError);
  }
});

const httpLink = createHttpLink({
	uri: "/graphql",
});

const link = ApolloLink.from([errorLink, httpLink]);

const authLink = setContext((_, { headers }) => {
	
	const token = localStorage.getItem("id_token");
	
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(link),
	cache: new InMemoryCache(),
});

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

	return ( 
    <ApolloProvider client={client}>
      <Router>
        {/* <Container className='w-screen'> */}
        <div className="container">
          <Banner />
          <Nav toggle={toggle} />
          <DropdownNav isOpen={isOpen} toggle={toggle} /> 
          <Switch>
            <Route exact path="/">
              <RecipeList />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/home">
              {/* <Home /> */}
              <RecipeList />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route path="/recipe-list">
              <RecipeList />
            </Route>
            <Route path="/create-recipe">
              <NewRecipe />
            </Route>
          </Switch>
        </div>
        {/* </Container> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;