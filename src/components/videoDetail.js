import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './videoDetail.css';

const VideoDetail = ({video}) => {
    if(!video) {
        return <div><CircularProgress /></div>
    }
    const videoId = video.id.videoId;
    const url = `https://youtube.com/embed/${videoId}`;

    return(
        <Card className="card">
                <CardMedia
                    //overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                <iframe src={url} frameBorder="0" className="video-frame"></iframe>
                </CardMedia>
                <CardTitle title={video.snippet.title} />
                <CardText>
                {video.snippet.description}
                </CardText>
        </Card>
    )
}

export default VideoDetail;