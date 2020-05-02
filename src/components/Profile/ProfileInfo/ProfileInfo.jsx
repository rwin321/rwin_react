import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div >
                <img className={s.profileImg}
                    src="https://www.solidbackgrounds.com/images/website/950x534/950x534-blue-abstract-noise-free-website-background-image.jpg" alt='Ervin'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + descp
            </div>
        </div>
    );
};

export default ProfileInfo;
