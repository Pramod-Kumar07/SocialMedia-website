import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FaHouseUser,FaUserAlt, FaPhoneAlt } from 'react-icons/fa';
import { GiMagicSwirl } from 'react-icons/gi';
import {AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { RiPagesFill } from 'react-icons/ri';
import { HiMenu } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';

function Navbar() {
    const [ toggle, setToggle ] = useState(false);

    function handleToggle() {
        setToggle(!toggle);
    }

  return (
    <div className={styles.Navbar}>
    <div className={styles.main}>
        <div className={styles.name}>
            <h1><span className={styles.first}>PRA</span><span className={styles.last}>MOD</span></h1>
        </div>
        <div className={styles.link_container}>
            <a className={styles.links} href='Home'><FaHouseUser/>Home</a>
            <a className={styles.links} href='About'><FaUserAlt/>About</a>
            <a className={styles.links} href='Skills'><GiMagicSwirl/>Skills</a>
            <a className={styles.links} href='Project'><AiOutlineFundProjectionScreen/>Project</a>
            <a className={styles.links} href='Contact'><FaPhoneAlt/>Contact</a>
            <a className={styles.links} href='Resume'><RiPagesFill/>Resume</a>
        </div>
        <div className={styles.toggle} onClick={handleToggle}>
            {
                !toggle ? <HiMenu/> : <RxCross2/>
            }
        </div>
    </div>
    <div>
        {
            toggle ? 
             <div className={styles.toggleContainer}>
            <a className={styles.togglelinks} href='Home'><FaHouseUser/> Home</a>
            <a className={styles.togglelinks} href='About'><FaUserAlt/> About</a>
            <a className={styles.togglelinks} href='Skills'><GiMagicSwirl/> Skills</a>
            <a className={styles.togglelinks} href='Project'><AiOutlineFundProjectionScreen/> Project</a>
            <a className={styles.togglelinks} href='Contact'><FaPhoneAlt/> Contact</a>
            <a className={styles.togglelinks} href='Resume'><RiPagesFill/> Resume</a>
            </div> 
        : ''
        }
    </div>
    </div>
  )
}

export default Navbar;