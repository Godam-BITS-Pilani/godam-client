# Godam Dashboard
[![Netlify Status](https://api.netlify.com/api/v1/badges/1c91b1ba-ffbd-4ab1-a1e6-84f74e8e7082/deploy-status)](https://app.netlify.com/sites/actdashboard/deploys)  

**Deploys live at:** [Godam Dashboard](https://godam-dashboard.netlify.app/)

## About
This repository contains the codebase for the Godam dashboard. The webapp uses `React.js` to display an overview and detailed list of donors from a particular organisation. 

### Features
1. **Authentication** — communicates with an API to authenticate and login users, saving the auth token in local storage.  
2. **Visualisation** — renders information as an overview, through dynamic graphs, and by populating a table.
3. **Download** — allows users to download the information as a PDF report

### Additional Information
- Uses **React Hooks** — `useState` (to update the API response), `useEffect` (to make GET requests to the API), `useContext` (to authenticate the user)
- Uses the `Chakra UI` library for the frontend UI components

### To Do
- [ ] Single page view 
- [ ] Add dark mode toggle  
- [ ] Add signup, password reset, and double auth functionality  

## Project Setup
- run ```git clone https://github.com/godam-dashboard.git``` to clone the repository
- run ```npm install``` to install dependencies
- run ```npm start``` to start local server
- view local deploy at [localhost:3000](http://localhost:3000/)




