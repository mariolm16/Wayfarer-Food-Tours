import React from 'react';

function CityPosts(props){
    return (
    <div className="cityPosts">
        {props.posts.map((post, id) => {
            return(
            <div className="singleCityPost" key={id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
            )
            })}
    </div>
    )
}         
        
export default CityPosts;