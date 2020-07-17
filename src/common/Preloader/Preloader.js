import preloader from "../../assets/imgs/preloader.svg";
import React from "react";
import s from './Preloader.module.css'

let Preloader = (props) => {
    return <div>
        <div>
            <img className={s.preloader} src={preloader}/>
        </div>
    </div>
}

export default Preloader