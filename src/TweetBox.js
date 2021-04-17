import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
          <input placeholder="What is happening ?" type="text" />
        </div>
        <input
          className="tweetBox_inputImage"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetBox_tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
