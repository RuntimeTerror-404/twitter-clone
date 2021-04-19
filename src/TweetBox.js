import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase";
import "./TweetBox.css";

function TweetBox() {
  const [tweetmessage, setTweetMessage] = useState("");
  const [tweetimage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("Posts").add({
      displayName: "Mohit Parashar",
      userName: "humanbymistake",
      verified: true,
      text: tweetmessage,
      image: tweetimage,
      avatar:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetmessage}
            placeholder="What is happening ?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetimage}
          className="tweetBox_inputImage"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetBox_tweetButton" onClick={sendTweet}>
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
