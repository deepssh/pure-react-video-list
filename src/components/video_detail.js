import React from 'react';

const VideoDetail = ({video}) => {

  if (!video){
    return <div>Loading ...</div>
  };
// this gets the information from video above
  const videoid = video.id.videoid;

  const url = `https://www.youtube.com/embed/${videoid}`;
  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details" >
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
