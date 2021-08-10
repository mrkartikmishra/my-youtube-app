import React from 'react';
import './VideoCard.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const VideoCard = ({ video }) => {
    
    const truncateStr = (str, n) => {
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
    }

    return(
        <div className="videoCard">
            <div className="videoCard__thumbnails">
                <img className="videoCard__thumbnails__image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                {/* <iframe 
                    width="350" 
                    height="300" 
                    src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=0`} 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">   
                </iframe> */}
            </div>
            <div className="videoCard_details">
                <div className="videoCard_details_left">
                    <AccountCircleIcon className="videoCard_details_left__avatar" />
                </div>
                <div className="videoCard_details_right">
                    <h4 className="videoCard_details_title">{truncateStr(video?.snippet?.title, 60)}</h4>
                    <h5 className="videoCard_details_channelTitle">{video.snippet.channelTitle}</h5>
                    <h5 className="videoCard_details_views">43k views . 5 months ago</h5>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;