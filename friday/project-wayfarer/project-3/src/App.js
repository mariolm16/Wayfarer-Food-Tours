import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import './App.css';

//Custom Components 
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Show from './Components/Show';
import Home from './Components/Home';
import SingleCity from './Components/SingleCity';

//Import Axios Calls
import { getAllCities,signUpUser, loginUser, verifyUser, getProfile, putProfile, cityPosts } from './Service/api_helper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      modal: false,
      userProfile: null,
      cities: null,
      cityPost: null
    }
  }

  //Set state - get city and user info
  async componentDidMount() {
    const resp = await getAllCities();
    const currentUser = await verifyUser();
    this.setState({
      currentUser: currentUser,
      cities: resp,
    })
  }

  //Sign up function
  handleSignUp = async (e, user) => {
    e.preventDefault();    
        const loadedUser = await signUpUser(user)
        const userProfile = await getProfile(user);
        console.log(loadedUser);
        this.setState({
          currentUser: loadedUser,
          userProfile: userProfile,
        })
        this.props.history.push(`/profile`);
      }

  //Log in user function    
  handleLogin = async (e, user) => {
    e.preventDefault();
    const loadedUser = await loginUser(user);
    const userProfile = await getProfile(user);
    this.setState({
      currentUser: loadedUser, 
      userProfile: userProfile
    })
    this.props.history.push(`/profile`);
    console.log(this.state.cities)
  }

  //Get individual city posts
  handleCity = async(e, id) => {
    e.preventDefault();
    const cityId = await cityPosts(id)
    this.setState({
      cityPost: cityId
    })
  }

  //Update user Profile
  updateUser = async(e, values) => {
    e.preventDefault();
    console.log(values)
    const updatedUser = await putProfile(values);
    console.log(updatedUser)
    this.setState({
      currentUser: updatedUser
    })
  }

  //Log out user - removes token from local storage
  handleLogout = () => {
    this.setState({
      currentUser: null,
      userProfile: null,
      modal: false,
    })
    localStorage.removeItem('authToken');
    this.props.history.push(`/`);
  }

  //Set state of Modal pop-up : true
  setModalTrue = () => {
    this.setState({
      modal: true
    })
  }

  //Set state of Modal pop-up: false
  setModalFalse = () => {
    this.setState({
      modal: false
    })
  }
  render() {
    Modal.setAppElement('#root')
    return (
    <div className="App">
      <header className="App-header">
        <h2>Wayfarer: Food Tours</h2>
        <Link to={'/'}><button>Home</button></Link>
        {this.state.userProfile && <Link to={'/profile'}><button>Profile</button></Link> }
        
        {this.state.currentUser ?  <button onClick={this.handleLogout}>Logout</button> : (
        <div>
          <button onClick={() => this.setModalTrue()}>Ready to Begin?</button>
          <Modal className="signin" isOpen={this.state.modal}>
            <h2>Welcome to Wayfarer!</h2>
            <SignUp handleSubmit={this.handleSignUp} />
            <Login handleSubmit={this.handleLogin}/>
            <br></br>
            <button onClick={() =>this.setModalFalse()}> Close</button>
          </Modal>
        </div>
        )}
    </header>
    
    <main className="App-main">
      <Route path="/profile" render={() => {return <Profile updateUser={this.updateUser} profile={this.state.userProfile} />}}/>
      
      <Route path="/show" render={() => {return<Show  cities={this.state.cities}/>}} />

      <Route path="/city/:id" render={(props) => {return <SingleCity city={this.state.cities} id={props.match.params.id} handleCity={this.handleCity}/>}}/>
        
      </main>
      
      <Home />
         
    </div>
    );
  }
}

export default withRouter(App);
