"use client";

import React from "react";
import YouTube from "react-youtube";

interface Props {
  videoId: string;
  height?: string;
  width?: string;
  onReady?: string;
}

export default class YoutubeVideo extends React.Component<Props> {
  render() {
    const { videoId, height, width } = this.props;
    const opts = {
      height: height || "390",
      width: width || "640",
      //   playerVars: {
      //     autoplay:  0,
      //   },
    };

    return (
      <div>
        <h3>GeeksforGeeks - Youtube</h3>
        <YouTube videoId={videoId} opts={opts} />
      </div>
    );
  }

  //   _onReady(event) {
  //     event.target.pauseVideo();
  //   }
}
