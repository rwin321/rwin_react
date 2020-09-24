import React, { useState } from "react"
import s from "./Post.module.css"
import postImg from '../../../../assets/imgs/postLogo.jpg'
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'

const Post = (props) => {

    const [likes, setLikesCounter] = useState(0)

    const likesCounter = () => {

        let i = likes

        for( i; i < 1; i++ ) {
            setLikesCounter(i + 1)
        }
    }

    return (
        <div className={ s.item }>
            <img src={ postImg }/>
            <div className={ s.postContent }>{ props.message }</div>
            <div className={ s.likesCont }>likes: { likes } </div>
            <button className={s.likeBtn }
                    onClick={ likesCounter }>
                <ThumbUpAltIcon></ThumbUpAltIcon>
            </button>
            <IconButton>
                <DeleteIcon className={ s.deleteBtn } onClick={ () => {
                    props.deletePost( props.post.id )
                }} />
            </IconButton>
        </div>
    )
}

export default Post
