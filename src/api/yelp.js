import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer E0kfDicjNmrbGLCC0jTUl_Kt6ymXgNQst89VvzWjW3lplsrmUcWyIWYsSkI3jgYqNp5oD0W34AIwle4wryZJxry4vwASS376VmVkJ3oMzZRPQuWZdwHILBGUzTwZYHYx'
    }
});

