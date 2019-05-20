import React,{Component} from 'react';
import Header from './components/shared/Header/header.component';
import Footer from './components/shared/Footer/footer.component';
import Login from './components/Login/login.component';
import { Link, withRouter } from "react-router-dom";


class App extends Component{

    handleLogout = async event => {
        await Auth.signOut();
      
        this.userHasAuthenticated(false);
      
        this.props.history.push('./components/Login/login.component.js');
      }
      
  render(){
    return(
      <div className="container">
        <div className="row">
            <div className="col">
                <Header/>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4 offset-md-4">
                <Login/>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <Footer/>
            </div>
        </div>
    </div>
    );
  }
}



export default withRouter(App);


