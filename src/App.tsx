import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';
import { MainPage } from './pages/index';
import { RestaurantsPage } from './pages/RestaurantsPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' component={MainPage} exact />
          {/* <Route path='/calgary' exact>
            <Route path='restaurants' component={RestaurantsPage} exact />
          </Route> */}
          {/* <Route path='/user/account/reset-password' component={ResetPasswordPage} exact /> */}
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
