import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://mynorthwest.com/wp-content/uploads/2019/11/zebra-620Getty.jpg" />
      <span>{props.message} </span>
      <span>likes</span> {props.likeCount}
    </div>
  );
};

export default Post;
