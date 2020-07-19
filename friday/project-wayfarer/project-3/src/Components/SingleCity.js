import React, {Component} from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { cityPosts, postPost } from '../Service/api_helper';
import CityPosts from './CityPosts';
import CreatePostForm from './CreatePostFrom'; 
import './allcities.css'


class SingleCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    const posts = await cityPosts(this.props.id);
    this.setState({
      posts: posts 
    })
  }
  createPost = async (e, postData) => {
    e.preventDefault();
    const newPost = await postPost(postData, this.props.id);
    const posts = this.state.posts;
    posts.push(newPost.data);
    this.setState({
      posts: posts
    })
  }

  render() {
    const hello = this.props.city.filter(cities => {
      return parseInt(this.props.id) === cities.id;
    })
    return(
    <div className="singleCity">
      <h1> Welcome to {hello[0].name}</h1>
      <h2>Located in: {hello[0].state},  {hello[0].country}</h2>
      <img src={hello[0].img} alt={hello[0].name} />

      
      {this.state.posts ? <CityPosts posts={this.state.posts}/> : <p>Loading...</p> }
      {this.state.posts ?<CreatePostForm handleSubmit={this.createPost}/> : <p>Loading...</p> }
    </div>
    )
  }
}

export default withRouter(SingleCity);

