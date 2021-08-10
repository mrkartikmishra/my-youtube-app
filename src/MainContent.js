import React from 'react';

import './MainContent.css';
import VideoCard from './VideoCard.js';
import VideoCategories from './VideoCategories';

const MainContent = () => {
    return (
        <div className="mainContent">
            <VideoCategories />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
        </div>
    );
}

export default MainContent;