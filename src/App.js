import { useState, useEffect } from 'react';
import axiosConfig from './axiosConfig';

import './App.css';
import MainContent from './MainContent';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function App() {

  const [videos, setVideos] = useState([]);
  const [searchParam, setSearchParam] = useState('technologies');

  useEffect(() => {
    const getVideos = async (searchTerm) => {
      const response = await axiosConfig.get('/search', {
        params: {
            q: searchTerm
        }
      });
      setVideos(response.data.items);
    }

    getVideos(searchParam);

  }, [])

  return (
    <div className="app">
      <Navbar />
      <div className="app__mainPage">
        <Sidebar />
        <MainContent videos={videos} />
      </div>
    </div>
  );
}

export default App;
