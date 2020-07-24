import React from "react";
import s from "./Post.module.css";
import postImg from '../../../../assets/imgs/postLogo.jpg'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={postImg}/>
            <span>  {props.message} </span>
            <span className={s.likesCont}>likes: {props.likeCount} </span>
            <button className={s.deleteBtn} onClick={() => {
                props.deletePost(props.post.id)
            }}>delete
            </button>
        </div>

    );
};

export default Post;
