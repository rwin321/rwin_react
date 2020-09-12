import React, {useState} from 'react'
import { styled } from '@material-ui/core/styles'
import Button from "@material-ui/core/Button"
import s from './News.Style'
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from '@material-ui/icons/Delete'

const News = ( props ) => {
    const [clicker, setClicker] = useState([]);
    const onClick = () => {
        alert('Veronica Princess')
    }

    const ButtonComponent = styled(Button)({...s})

    return  (
        <div>
            <ButtonComponent onClick = { onClick }>Princess button</ButtonComponent>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </div>
    )
}

export default News