import axios from 'axios';

const gamesApi = axios.create({
    baseURL: 'https://jv-games-app.herokuapp.com/api',
});

export const getCategories = () => {

    return gamesApi.get('/categories')
    .then(({data}) => {
        return data.categories
    });
}

export const getReviews = (review_slug) => {

    return gamesApi.get(`/reviews?category=${review_slug}`)
    .then(({data}) => {
        return data.reviews
    });
}

export const getComments = (review_id) => {
    return gamesApi.get(`/reviews/${review_id}/comments`)
    .then(({data}) => {
        return data
    });
}

