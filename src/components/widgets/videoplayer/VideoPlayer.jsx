import React from 'react'
import ReactPlayer from 'react-player/lazy'

export default function VideoPlayer() {
  const showQuestions = async()=>{
      alert("display question")
  }
  return (
    <ReactPlayer
     url='https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/49_20HQOeijh9fog1/videoblocks-20053_b5pdzwqmk__7ed819dd7cf44b9d44af2e51babcbcf6__P360.mp4' 
     controls={true}
     onEnded={showQuestions}
     />
  )
}
