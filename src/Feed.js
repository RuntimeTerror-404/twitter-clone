import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post.js";
import db from "./firebase";
function Feed() {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("Posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>

      <TweetBox />
      {Posts.map((posts) => (
        <Post
          displayName={posts.displayName}
          userName={posts.userName}
          verified={posts.verified}
          text={posts.text}
          avatar={posts.avatar}
          image={posts.image}
        />
      ))}
    </div>
  );
}

export default Feed;
