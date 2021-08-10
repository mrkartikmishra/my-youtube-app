import React from 'react';
import './VideoCard.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const VideoCard = ({ video }) => {
    console.log(video);
    return(
        <div className="videoCard">
            <div className="videoCard__thumbnails">
                <img className="videoCard__thumbnails__image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            </div>
            <div className="videoCard_details">
                <div className="videoCard_details_left">
                    <AccountCircleIcon className="videoCard_details_left__avatar" />
                </div>
                <div className="videoCard_details_right">
                    <h4 className="videoCard_details_title">{video.snippet.title}</h4>
                    <h5 className="videoCard_details_channelTitle">{video.snippet.channelTitle}</h5>
                    <h5 className="videoCard_details_views">43k views . 5 months ago</h5>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;