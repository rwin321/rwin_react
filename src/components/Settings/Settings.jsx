import React, { useState } from 'react'
import s from './Settings.module.css'

const Settings = (props) => {

    const [ menu, setActiveMenu ] = useState(false)

    const activateMenu = () => {
        setActiveMenu(true)
    }

    return  (
        <div>
            <button className={ s.menuBtn }
                    onClick={ activateMenu }>settings menu</button>
            {
                menu &&
                <ul className={s.menu}>
                    <li>personal settings</li>
                    <li>optional settings</li>
                    <li>view settings</li>
                    <li>security settings</li>
                </ul>
            }
        </div>
    )
}

export default Settings