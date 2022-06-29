import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from '../AppStyles.module.css';


const MobileNavigation = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    let menu;

    if (showMenu) {
        menu =  <div className={styles.main_Mobile_Bottom}>
                    <div>
                        <NavLink to='/home' className={styles.main_Header_Items} style={ ( {isActive} ) => { return { color: isActive? 'white' : 'black', backgroundColor: isActive? 'black' : 'white'} } }>Home</NavLink>
                    </div>
                    <div>
                        <NavLink to='/categoryPage/Bollywood' className={styles.main_Header_Items} style={ ( {isActive} ) => { return { color: isActive? 'white' : 'black', backgroundColor: isActive? 'black' : 'white'} } }>Bollywood</NavLink>
                    </div>
                    <div>
                        <NavLink to='/categoryPage/Technology' className={styles.main_Header_Items} style={ ( {isActive} ) => { return { color: isActive? 'white' : 'black', backgroundColor: isActive? 'black' : 'white'} } }>Technology</NavLink>
                    </div>
                    <div>
                        <NavLink to='/categoryPage/Hollywood' className={styles.main_Header_Items} style={ ( {isActive} ) => { return { color: isActive? 'white' : 'black', backgroundColor: isActive? 'black' : 'white'} } }>Hollywood</NavLink>
                    </div>
                    <div>
                        <NavLink to='/categoryPage/Fitness' className={styles.main_Header_Items} style={ ( {isActive} ) => { return { color: isActive? 'white' : 'black', backgroundColor: isActive? 'black' : 'white'} } }>Fitness</NavLink>
                    </div>
                    <div>
                        <NavLink to='/categoryPage/Food' className={styles.main_Header_Items} style={ ( {isActive} ) => { return { color: isActive? 'white' : 'black', backgroundColor: isActive? 'black' : 'white'} } }>Food</NavLink>
                    </div>
                </div>
    }


    return(
        <nav className={styles.mobile_Menu}>
            <i className="fas fa-bars fa-2x" onClick={handleClick}></i>
            <div>
                {menu}
            </div>
        </nav>
    )
}

export default MobileNavigation;