import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import { getAllCities, cityPosts, destroyPost, postPost, editPost } from '../Service/api_helper';
import Modal from 'react-modal';
import './allcities.css'

//Custom imports
import AllCities from './AllCities'

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityPost:null,
            modal: false,
            cities: null
        }
    }

    async componentDidMount() {
        const resp = await getAllCities();
        this.setState({
            cities: resp,
        })
    }

    updatePost = async(e, id, values) => {
        e.preventDefault();
        const updatedPost = await editPost(id, values);
        const allPosts = this.state.cityPost;
        const editedPosts = allPosts.map(post => {
            return post.id === parseInt(id) ? updatedPost : post
        }) 
        this.setState({
            cityPost: editedPosts
        })
    }

    setModalTrue = () => {
        this.setState({
            modal: true
        })
    }
          
    setModalFalse = () => {
        this.setState({
            modal: false
        })
    }


    render() {
        Modal.setAppElement('#root')
        return (
        <div >
            <h2 className="cityListTitle">The Hottest Locations</h2>
            <nav>
                {this.props.cities && <AllCities  handleClick={this.handleClick} cities={this.props.cities}/>}
            </nav>
        </div>
        )
    }
}

export default Show;
