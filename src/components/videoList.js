import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props) => {
    let videoItems = props.videos.map( video => {
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                key={video.id.videoId} 
                video={video} />
        );
    });
    
    return(
        <ul className="col-md-4 list group">
            {videoItems}
        </ul>
    );
}

export default VideoList;