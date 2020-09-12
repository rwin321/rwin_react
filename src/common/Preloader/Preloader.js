import preloader from "../../assets/imgs/preloader.svg";
import React from "react";
import s from './Preloader.module.css'

const Preloader = () => {
    return <div className={ s.preloader }>
            <img src={ preloader }/>
    </div>
}

export default Preloader