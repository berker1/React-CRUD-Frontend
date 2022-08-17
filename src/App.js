import logo from './logo.svg';
import './App.css';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListStudentComponent from './components/ListStudentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateStudentComponent from './components/CreateStudentComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';
import ViewStudentComponent from './components/ViewStudentComponent';
import LoginPage from './components/LoginPage';
import UserSignupPage from './components/UserSignupPage';



function App() {
  return (
    
    <div>
       
      <Router>
            <HeaderComponent />
                <div className='container'>
                  <Switch>
                    <Route exact path = "/" component={LoginPage}></Route>
                    <Route path = "/login" component={LoginPage}></Route>
                    <Route path = "/signup" component={UserSignupPage}></Route>
                    <Route path = "/students" component={ListStudentComponent}></Route>
                    <Route path = "/add-student/:id" component={CreateStudentComponent}></Route>
                    <Route path = "/view-student/:id" component={ViewStudentComponent}></Route>
                    </Switch>
                    </div>
                  <FooterComponent />
          </Router>
      
    </div>
  );
}

export default App;

/*

<Router>
            <HeaderComponent />
                <div className='container'>
                  <Switch>
                    <Route path = "/" exact component={ListStudentComponent}></Route>
                    <Route path = "/students" component={ListStudentComponent}></Route>
                    <Route path = "/add-student/:id" component={CreateStudentComponent}></Route>
                    <Route path = "/view-student/:id" component={ViewStudentComponent}></Route>
                    </Switch>
                    </div>
                  <FooterComponent />
          </Router>

*/

/*
<Route path = "/update-student/:id" component={UpdateStudentComponent}></Route>
*/