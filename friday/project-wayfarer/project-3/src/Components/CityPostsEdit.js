import React, {Component} from 'react';

class CityPostsEdit extends Component {
    constructor(props) {
        super(props);

        this.state= {
            title: "",
            body:"",
            img:"",
            cityId: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() { 
        return(
            <div className="editPost">
            <form onSubmit={(e) => this.props.updatePost(e, this.props.postId, this.state)}>
                <h1>Edit Current Post</h1>
                <input type="text" name="title" placeholder="Title" onChange={this.handleChange} />
                <input type="text" name="body" placeholder="Body" onChange={this.handleChange} />
                <input type="submit" value="Submit Post" />
                
            </form>
            </div>
        )
    }
}

export default CityPostsEdit;