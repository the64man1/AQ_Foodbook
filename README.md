

# Foodbook
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Description

***THIS PROJECT IS MY EFFORT TO CONTINUE THE FOODBOOK PROJECT, A GROUP PROJECT FOR MY FULL STACK WEB DEVELOPMENT BOOTCAMP***
    
This application allows users to view a collection (the Foodbook) of user-generated recipes, and create an account to add their own recipes to the Foodbook.

This project was completed using the MERN stack: React provides the front-end JavaScript library, MongoDB (with Mongoose as the ODM library) is the NoSQL database to store recipes and user data, Express is used for handling routing, and NodeJS provides the runtime environment. Additionally, we used Graphql for handling API requests, Semantic UI as the component library for styling, JWT for authentication, and bcrypt for hashing passwords.

In completing this project, we learned how to build a full-stack MERN application from scratch - from structuring the models and API request routes on the back-end, to using React components and hooks to handle user-input on the front-end.

![aqfoodbook](https://user-images.githubusercontent.com/74144055/132541179-e85af343-78ac-4e33-a83c-db77ba5a2f4c.gif)

## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)
    
## Installation
    
To use the Foodbook, clone the repository by running "git clone `git@github.com:the64man1/AQ_Foodbook.git`' on your console. 

This application requires the use of a .env file to store working environment variables for use with authentication, token and session creation. Users must create a .env file in the parent server folder and create two variables: `secret="<your-secret>"` and `expriation="2h"`, where `<your-secret>` can be customized for use with bcrpyt hashing, and `2h` can be changed to different time intervals for how long a user session will last before logoff.

Then from the parent folder, use the command 'npm install' to install the dependencies. Then run 'npm run seed' to populate the Foodbook with recipes. Then you can run the command 'npm run develop' to test the functionality of the Foodbook on your port localhost:3000. 

Note: As the Foodbook uses MongoDB for database purposes, users must have MongoDB installed properly on the local device for the application to work locally.

## Usage
    
Users are free to use these files to build their own Redux Store locally, or enjoy the functionality of the site on Heroku.

Deployed site on Heroku: https://aq-foodbook.herokuapp.com/
    
## License
    
This project is distrubuted under the GNU License. See more information through this link: [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
    
## Contributing
    
If you would like to contribute to this project by adding sections or modifying functionality, you can fork the project, creature your own feature branch (git checkout -b “feature/NewFeature”), commit your changes (git commit -m “I added NewFeature”), push the branch (git push origin feature/NewFeature), and open a pull request.
    
## Questions
    
For questions, you can contact the contributors through GitHub:

<table class="tg">
<thead>
  <tr>
    <th class="tg-hyan">Letter</th>
    <th class="tg-hyan">Name</th>
    <th class="tg-hyan">GitHub</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax">A</td>
    <td class="tg-0lax">Max Quintanilla</td>
    <td class="tg-0lax">the64man1</td>
  </tr>
  <tr>
    <td class="tg-0lax">B</td>
    <td class="tg-0lax">Katherine Seeburger</td>
    <td class="tg-0lax">kthendavid04</td>
  </tr>
  <tr>
    <td class="tg-0lax">C</td>
    <td class="tg-0lax">Christian Louis</td>
    <td class="tg-0lax">Clouis12</td>
  </tr>
  <tr>
    <td class="tg-0lax">D</td>
    <td class="tg-0lax">Syed Rizvi</td>
    <td class="tg-0lax">rizvi5a</td>
  </tr>
  <tr>
    <td class="tg-0lax">E</td>
    <td class="tg-0lax">Cristobal Canales</td>
    <td class="tg-0lax">CrisC3</td>
  </tr>
</tbody>
</table>
