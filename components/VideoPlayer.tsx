import React from 'react'
import ReactPlayer from 'react-player'

type Props = {}

export default function VideoPlayer(props:any) {
  return (
    <ReactPlayer
    url={props.video}
    height='85vh'
    width='100vh'
    controls={true}
    className="bg-dark overflow-hidden"
    ></ReactPlayer>
  )
}