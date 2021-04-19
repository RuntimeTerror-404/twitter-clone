import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
import { Input } from "@material-ui/core";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <Input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets_widgetContainer">
        <h2>What is happening</h2>
        <TwitterTweetEmbed tweetId={"1384036985958850571"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="humanbymistake"
          options={{ Height: 400 }}
        />
        <TwitterShareButton
          options={{ text: "#reactjs is awesome", via: "humanbymistake" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
