import React from "react";
import s from "./Post.module.css";
import postImg from '../../../../assets/imgs/postLogo.jpg'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={postImg} />
      <span>  {props.message} </span>
      <div className={s.likes}>
            <span>likes:</span> {props.likeCount}
      </div>
        <button className={s.deleteBtn} onClick={ () => {props.deletePost(props.post.id)} }>delete</button>
    </div>
      
  );
};

export default Post;
