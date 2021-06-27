import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { MainPage } from './pages/index';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' component={MainPage} exact />
        {/* <Route path='/user/account/create' component={SignupPage} exact /> */}
        {/* <Route component={NotFoundPage} /> */}
      </Router>
    </div>
  );
}

export default App;
