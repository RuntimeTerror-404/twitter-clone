import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavouriteBorderIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PublishIcon from "@material-ui/icons/Publish";

function Post(displayName, userName, verified, text, image, avatar) {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src="https://images.unsplash.com/photo-1510589751317-000ce48678ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80 " />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              Mohit Parashar{" "}
              <span className="post_headerSpecial">
                <VerifiedUserIcon className="post_badge" /> @lucif3r
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>I am a computer programmer who like web development most</p>
          </div>
        </div>

        <img
          src="https://media.giphy.com/media/T8Dhl1KPyzRqU/giphy.gif"
          alt=""
        />

        <div className="post_footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavouriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
