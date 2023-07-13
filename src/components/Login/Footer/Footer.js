import React from "react";
import styles from "./Footer.module.css";
import { AiOutlineCopyright } from 'react-icons/ai';

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <section>Meta</section>
        <section>About</section>
        <section>Blog</section>
        <section>Jobs</section>
        <section>Help</section>
        <section>API</section>
        <section>Privacy</section>
        <section>Terms</section>
        <section>Top Accounts</section>
        <section>Locations</section>
        <section>Instagram Lite</section>
        <section>Threads</section>
        <section>Contact Uploading & Non-Users</section>
        <section>Meta Verified</section>
      </div>
      <div className={styles.footerNote}>
        <AiOutlineCopyright />
        2023 Instagram from Meta
      </div>
    </div>
  );
}

export default Footer;
