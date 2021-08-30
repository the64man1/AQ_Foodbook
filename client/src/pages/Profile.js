import React from 'react'
import { QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import '../index.css'
import { Card } from 'semantic-ui-react';
import CreatedRecipes from '../components/CreatedRecipes'

function Profile() {
    const { loading, data } = useQuery(QUERY_ME);

    if(loading) {
        return <h2>Loading...</h2>
    } else {
        console.log(data.me.createdRecipes)
        return (
            <>
            <div class="min-h-screen space-y-12 py-10">
  <div class="container mx-auto">
    <div class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105">
      <div class="h-20 bg-red-500 flex items-center justify-between">
        <p class="mr-20 text-white text-lg ml-5 mt-1">{data.me.username}</p>
      </div>

      <p class="pt-3 text-lg tracking-wide ml-5">Name: {data.me.firstName} {data.me.lastName}</p>
      <p class=" text-lg tracking-wide ml-5">Email: {data.me.email}</p>
      
      <div class="flex justify-between px-5 mb-2 text-sm text-gray-600">
        <p>Last Update</p>
        <p>3/08/2021</p>
      </div>
    </div>

    <div class="mx-auto my-5 text-white text-center">
        <h1>Created Recipes</h1>
    </div>
    {data.me.createdRecipes.map((recipe) => {
                    return <CreatedRecipes
                      key={recipe.id}
                      id={recipe.id}
                      title={recipe.title}
                      instructions ={recipe.instructions}
                    />
                })}
  </div>
  </div>
  </>

        )
    }
}

export default Profile;

