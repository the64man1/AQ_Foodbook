import React from 'react';
import Auth from '../../utils/auth';
import { Container } from 'semantic-ui-react'

const Welcome = () => {
    return (
      <Container style={{
        margin: '10px',
        background:' rgba( 255, 255, 255, 0.25 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 ',
        backdropFilter: 'blur( 4px )',
        WebkitBackdropFilter: 'blur( 4px )',
        borderRadius: '10px',
        border:' 1px solid rgba( 255, 255, 255, 0.18 )'
      }}>
        {Auth.loggedIn() ? (
          <p style={{ textAlign: "center", width: "100%", fontSize: "1.5rem", lineHeight: "3rem", color: "white" }}>
            Checkout the Foodbook for recipes!
          </p>
        ) : (
          <p style={{ textAlign: "center", width: "100%", fontSize: '1.5rem',  lineHeight: "3rem", color: "white" 
          }}>
            Foodbook, the user-created cookbook! Login and share your favorite recipes! 
          </p>
        )}
      </Container>
    );
}

export default Welcome;