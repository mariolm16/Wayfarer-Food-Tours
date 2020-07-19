import React from 'react';

function SinglePost(props) {
    const currentPost = props.posts.filter(post => {
        return post.id === parseInt(props.postId)
    })
    return (
    <div>
        {currentPost[0] && (
        <div className="singlePost">
            <h2>{currentPost[0].title}</h2>
            <h4>{currentPost[0].body}</h4>
        </div>
        )}
    </div>
    )
}

export default SinglePost;