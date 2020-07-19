import React from 'react';
import {Link} from 'react-router-dom';

function PostsUser(props) {
    return (
    <div className="userPosts">
        {props.posts.map(post => {
            return(
            <div className="singlePost">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <button onClick={() => props.destroyPost(post.id)}>Delete</button>
                <button><Link to={`/profile/post/${post.id}/edit`}>Edit Post</Link></button>
            </div>
            )
            })}
    </div>
    )
}

export default PostsUser