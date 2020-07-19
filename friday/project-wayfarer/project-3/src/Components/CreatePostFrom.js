import React, { Component } from 'react';
import './allcities.css'

//class tells it what to show and how to show it 
class CreatePostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: "",
          body: "",
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
        <div className="createPost">
            <h2>Create new Post</h2>
            <form onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
                <input type="text" name="title" placeholder="title" onChange={this.handleChange} />
                <input type="text" name="body" placeholder="body" onChange={this.handleChange} />
                <input type="submit" value="Create post" />
            </form>
        </div>
        )
    }
}

export default CreatePostForm;