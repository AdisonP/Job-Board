import React from 'react';
import Navbar_in from './components/navbar/navbar_in';
import Navbar from './components/navbar/navbar';
import { useSelector } from "react-redux";
import Company from './components/company/company';
import Admin from './components/admin/admin';
import Home from './components/home/home';
import Form_login from './components/form/Form_login';
import Form_register from './components/form/Form_register';
import Form_reset from './components/form/Form_reset_pwd';
import Form_account from './components/form/Form_account';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProtectedRoute from './components/route/protected_route';
import CpProtectedRoute from './components/route/cp_protected_routes';
import AppliedList from './components/applied/applied_list';
import Form_login_cp from './components/form/Form_login_cp';
import Form_login_admin from './components/form/Form_login_admin';
import AdminProtectedRoute from './components/route/admin_protected_routes';
import Form_register_cp from './components/form/Form_register_cp';






const App = () => {
  const bundle = useSelector(state => state.auth);
  const isLog = bundle.isLoggedIn
  var nav = isLog ? <Navbar_in /> : <Navbar />
  return (
    <div className="App">
        {nav}
          <Router>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/login' component={Form_login}/>
              <Route exact path='/login/admin' component={Form_login_admin}/>
              <Route exact path='/register/company' component={Form_register_cp} />
              <Route exact path='/login/cp' component={Form_login_cp}/>
              <Route exact path='/register' component={Form_register}/>
              <Route exact path='/reset_password' component={Form_reset}/>
              <ProtectedRoute exact path='/account' component={Form_account}/>
              <ProtectedRoute exact path='/applied' component={AppliedList} />
              <Route exact path='/company' component={Company}/>
              <AdminProtectedRoute exact path='/admin' component={Admin}/>
            </Switch>
          </Router>
    </div>
  );
}

export default App;
