import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AboutUs from './Pages/aboutUs/AboutUs';
import SignInTwo from './Pages/auth/SignInTwo';
import SignUpTwo from './Pages/auth/SignUpTwo';
import Conditions from './Pages/Home/conditions/Conditions';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
// import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import SingleCondition from './Pages/singleCondition/SingleCondition';
import SingleService from './Pages/singleService/SingleService';




function App() {
  return (
    <div className="App">
       <AuthProvider>
       <BrowserRouter>
        <Header/>
      <Switch>
        <Route exact path="/"><Home/> </Route>
        <Route path="/home"><Home/> </Route>
        <Route path="/services"><Services/></Route>
        <Route path="/conditions"><Conditions/></Route>
        <Route path="/aboutUs"><AboutUs/></Route>
        <PrivateRoute path="/singleService/:id"><SingleService/></PrivateRoute>
        <PrivateRoute path="/singleCondition/:id"><SingleCondition/></PrivateRoute>
        <Route path="/login"> <SignInTwo/></Route>
        <Route path="/signUpTwo"> <SignUpTwo/></Route>
        <Route path="*"><NotFound/></Route>
      </Switch>
      </BrowserRouter>
       </AuthProvider>
    </div>
  );
}

export default App;
