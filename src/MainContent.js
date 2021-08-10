import React from 'react';

import './MainContent.css';
import VideoCard from './VideoCard.js';
import VideoCategories from './VideoCategories';

const MainContent = ({ videos }) => {

    console.log(videos);
    return (
        <div className="mainContent">
            {/* <VideoCategories /> */}
            {videos.map((video) => {
               return <VideoCard key={video.id.videoId} video={video} />
            })}
        </div>
    );
}

export default MainContent;