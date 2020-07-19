import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import '../App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic1: {
      title: "Get to San Francisco Food Tours",
      body: "Sidewalk Food Tours of San Francisco is a culinary experience company offering delicious, informative, and fun walking food tours in three distinctly different neighborhoods."
      },
      topic2: {
      title: "The Best of Brooklyn",
      body: "Brooklyn is big! If it was not part of New York City, it would still be the 4th largest city in the USA; it has 43 distinct neighborhoods full of diversity with people from almost every country on Earth. With that comes all of the amazing traditions, history, and mouth-watering food they’ve brought with them. To put it simply, no trip to New York is complete without a stop across the bridge to experience and eat your way through Brooklyn."
      },
      topic3: {
      title: "Discover what the locals know!",
      body: "Each tour is a back-stage pass to Sydney's authentic and modern multicultural cuisines, all enhanced by Australia's freshest local ingredients. The tours support diverse local communities through training programs and employment opportunities."
      }
    }
  }
  
    render () {
    return (
      <div className="home">
        <h1>Latest news</h1>
        <div className="reviewBox">
        
          <span className="homeBox">
          <h1>{this.state.topic1.title}</h1>
          <p>{this.state.topic1.body}</p>
          </span>
          <span className="homeBox">
          <h1>{this.state.topic2.title}</h1>
          <p>{this.state.topic2.body}</p>
          </span>
          <span className="homeBox">
          <h1>{this.state.topic3.title}</h1>
          <p>{this.state.topic3.body}</p>
          </span>
          </div>
      </div>
    )
  }
}
export default Home;