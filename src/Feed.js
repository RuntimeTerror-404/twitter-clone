import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post.js";
function Feed() {
  return (
    <div className="feed">
      {/* home... */}
      <div className="feed_header">
        <h2>Home</h2>
      </div>

      {/* tweet box */}
      <TweetBox />
      {/* post */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      {/* post */}
      {/* post */}
      {/* post */}
      {/* post */}
    </div>
  );
}

export default Feed;
