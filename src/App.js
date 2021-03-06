import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Layout from './components/Layout'
import Login from './screens/Login'
import Register from './screens/Register'
import FarmerScreen from './screens/FarmerScreen'
import Dashboard from './screens/Dashboard'
import AuthContext from './store/auth'


function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Layout>
      <Switch>

        <Route path="/" exact>
        {isLoggedIn ?  <Dashboard /> : <Login /> }
        </Route>

        <Route path="/login" exact>
        {isLoggedIn ?  <Dashboard /> : <Login /> }
        </Route>

        <Route path="/register" exact>
        {isLoggedIn ?  <Dashboard /> : <Register /> }
        </Route>

        <Route path="/farmer/:farmerSlug" exact>
        {isLoggedIn ?  <FarmerScreen /> : <Login /> }
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>

      </Switch>
    </Layout>
  );
}

export default App;
