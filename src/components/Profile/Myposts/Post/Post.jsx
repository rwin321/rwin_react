import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://mynorthwest.com/wp-content/uploads/2019/11/zebra-620Getty.jpg" />
      <span>  {props.message} </span>
      <div className={s.likes}>
            <span>likes:</span> {props.likeCount}
      </div>
    </div>
  );
};

export default Post;
