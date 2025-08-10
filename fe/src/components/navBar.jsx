//NavBar component version 1 => include these files ('navBar.css', 'css/navBar.module.css') reference from 'root/src/components'.

import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../stylesheet/default.css'
import styles from './stylesheet/navBar.module.css'

function NavBar() {

    //Menu toggle function-------------------------------------------------------------------------

    const [menuOpen, set_menuOpen] = useState(false);

    const toggleMenuHam = () => {
        set_menuOpen(prev => !prev);
    };

    useEffect(() => {
        const hamOpt = document.getElementById('hamOpt');
        const hamOptBg = document.getElementById('hamOptBg');
        const hamBtnLabel = document.getElementById('hamBtnLabel');

        console.log("open menu updated to :", menuOpen);
        if (menuOpen) {
            hamOpt.style.visibility = 'visible';
            hamOpt.style.transform = 'translateY(0%) scale(1)';
            hamOptBg.style.visibility = 'visible';
            hamOptBg.style.pointerEvents = 'all';
            hamOptBg.style.backdropFilter = 'blur(10px) brightness(0.75)';
            hamBtnLabel.textContent = 'close';
        }
        else if (menuOpen === false) {
            hamOpt.style.transform = 'translateY(-150%) scale(0.5)';
            hamOptBg.style.pointerEvents = 'none';
            hamOptBg.style.backdropFilter = 'none';
            hamBtnLabel.textContent = 'Options';
            setTimeout(() => {
                hamOpt.style.visibility = 'hidden';
                hamOptBg.style.visibility = 'hidden';
            }, 500)
        }
        else {
            console.log('unknown error')
        }
    }, [menuOpen])

    //Onload function------------------------------------------------------------------------------

    useEffect(() => {
        console.log("This is function on page load!");
        console.log(menuOpen);
    }, [])

    //Document element*******************************************************************************************************************************
    return (
        <>
            <div className={`${styles.blank} ${styles.localRoot}`}>
                <nav className={styles.nav}>
                    <div className={styles.navHeadCover}>
                        <div className={styles.navLogoCover}>
                            <Link to='/'><img className={styles.navLogo} src='/images/logo/metatosh.png'></img></Link>
                        </div>
                        <p className={styles.navTitle}>Pat's mission control</p>
                    </div>
                    <div className={styles.navOptCover}>
                        <div className={styles.navOptBar}>
                            <Link to='/product'></Link>
                            <Link to='/library'></Link>
                            <Link to='/status'></Link>
                            <Link to='/login'>Log out</Link>
                        </div>
                        <div className={styles.hamBtn} onClick={toggleMenuHam}>
                            <p id='hamBtnLabel'>Options</p>
                        </div>
                    </div>
                </nav>
                <div className={styles.hamOptBg} id='hamOptBg' onClick={() => set_menuOpen(false)}>
                    <div className={styles.hamOptCover}>
                        <div className={styles.hamOpt} id='hamOpt'>
                            <Link to='/product'></Link>
                            <Link to='/library'></Link>
                            <Link to='/status'></Link>
                            <Link to='/login'>Log out</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;