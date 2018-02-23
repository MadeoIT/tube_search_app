import React from 'react';

import {GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';

import './videoList.css';

const VideoListItem = ({video, onVideoSelect}) => {
    return (
        <Paper onClick={() => onVideoSelect(video)} zDepth={4}>
        <GridTile
            title={video.snippet.title}
            className="titleStyle"
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
            <img src={video.snippet.thumbnails.default.url} alt=""/>
        </GridTile>
        </Paper>
    )
}

export default VideoListItem;