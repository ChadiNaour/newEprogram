import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      frameBorder="0"
      ratio="1"

     
      controls="0"
    />
  </div>
)
export default Video