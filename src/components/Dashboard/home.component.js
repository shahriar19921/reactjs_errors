import React, {Component} from 'react';

class Home extends Component{


    handleSubmit(e){
        e.preventDefault();
        // try {
        //     await Auth.signIn(this.state.dataUsername, this.state.dataPassword);
        //     this.props.userHasAuthenticated(true);
        //     this.props.history.push("/");
        //   } catch (e) {
        //     alert(e.message);
        //   }

    }



    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <button className="btn btn-primary btn-block btn-lg">Logout</button>
            </form>
        );
    }
}

export default Home;