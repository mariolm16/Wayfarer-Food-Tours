import axios from 'axios'
const api = axios.create({ baseURL: "http://localhost:3001" })

//Sign up new user
export const signUpUser = async (signUpData) => {
    const userData = await api.post('/auth/signup', signUpData);
    localStorage.setItem('authToken', userData.data.token);
    api.defaults.headers.common.authorization = `Bearer ${userData.data.token}`;
    return userData.config.data;
  }

  //Login existing user
  export const loginUser = async (loginData) => {
    const userData = await api.post('/auth/login', loginData);
    localStorage.setItem('authToken', userData.data.token);
    api.defaults.headers.common.authorization = `Bearer ${userData.data.token}`;
    return userData.config.data;
  }

  //Find user profile
  export const getProfile = async (profileRecieved) => {
    const profile = await api.get('/user/profile', profileRecieved)  
    return profile.data;   
  }

  //Edit user profile
  export const putProfile = async (values) => {
    const updatedUser = await api.put('/user/profile', values);
    return updatedUser.data
}
 
//Check if token is saved locally
export const verifyUser = async () => {    
    const token = localStorage.getItem('authToken');
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const userData = await api.get('/auth/verify');
      return userData.config.data;
    } else {
      return false;
    }
  }

  //Get all cities in DB
  export const getAllCities = async () => {
    const cities = await api.get('/city/all');
    return cities.data;

  }

  //Create new posts
  export const postPost = async(postData, id) => { 
    const newPost = await api.post(`/post/${id}`, postData);
    return newPost;
  }

  //Delete apost created by a user 
  export const destroyPost = async (id) => {
    const deletePost = await api.delete(`/post/${id}`)
    return deletePost.data;
  }

  //Get posts by city id
  export const cityPosts = async (id) => {
    const posts = await api.get(`post/city/${id}/all`)
    return posts.data;
  }

  //Edit post created by a user 
  export const editPost = async (id, postData) => {
    const updatedPost = await api.post(`/post/${id}`, postData);
    return updatedPost.data;
  }

  //Get posts created by user
  export const getUserPosts = async () => {
    const allPosts = await api.get('/post/user');
    return allPosts.data
  }
