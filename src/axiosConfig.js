import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 15,
        key: process.env.REACT_APP_YOUTUBE_API_KEY
    }
});

export default axiosConfig;