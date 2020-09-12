import React, {useState} from "react"
import s from "./Post.module.css"
import postImg from '../../../../assets/imgs/postLogo.jpg'
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"

const Post = (props) => {

    const [likes, setLikesCounter] = useState(0)

    const likesCounter = () => {

        let i = likes

        for( i; i < 1; i++ ) {
            setLikesCounter(i + 1)
        }
    }

    return (
        <div className={s.item}>
            <img src={postImg}/>
            <span>  {props.message} </span>
            <span className={s.likesCont}>likes: {likes} </span>
            <button className={s.likeBtn} onClick={likesCounter}>like</button>
            <IconButton>
                <DeleteIcon className={s.deleteBtn} onClick={ () => {
                    props.deletePost(props.post.id)
                }} />
            </IconButton>
{/*            <button className={s.deleteBtn} onClick={() => {
                props.deletePost(props.post.id)
            }}>delete
            </button>*/}
        </div>
    )
}

export default Post;
