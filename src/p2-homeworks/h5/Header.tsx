import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from './Header.module.css'

function Header() {
    return (
        <header>
            <div className={s.navWrap}>
                <ul className={s.nav}>
                    <li>
                        <NavLink
                            to={PATH.PRE_JUNIOR}
                            className={({isActive}) => isActive ? 'active-linkNav' : ''}
                        >PreJunior</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={PATH.JUNIOR}
                            className={({isActive}) => isActive ? 'active-linkNav' : ''}
                        >Junior</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={PATH.JUNIORPLUS}
                            className={({isActive}) => isActive ? 'active-linkNav' : ''}
                        >JuniorPlus</NavLink>
                    </li>
                    <li>
                        <span>MENU</span>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
