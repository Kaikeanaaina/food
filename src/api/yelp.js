import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer UcLQ7pM-xwKXjkxLifQOGzBr2cpMzITdldWWxJ9AoQ9n4uIGISavJk3cU2thziAHvF6AILi5QwchOThfLJC_z_R81I-L4uk8DnZcM-beRodUnKODeJSP5AAk-WRvXXYx'
    }
});