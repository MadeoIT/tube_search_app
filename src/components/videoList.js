import React from 'react'
import VideoListItem from './videoListItem';

import './videoList.css'
import { GridList } from 'material-ui';

const VideoList = (props) => {
    const videos = props.videos.map((val, id) => {
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                key={id} 
                video={val} />
        )
    });
    return (
        <div className="root">
            <GridList className="gridList" cols={5.1} >
                {videos}
            </GridList>
        </div>
    )
}

export default VideoList;