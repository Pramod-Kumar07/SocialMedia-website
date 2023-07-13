import React, { Fragment } from "react";
import instagram from "./instagram.png";
import { FaFacebookSquare } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
import styles from  "./Login.module.css";
import playstore from "./playstore.png";
import microsoft from "./microsoft.png";
import Footer from "./Footer/Footer";

function Login() {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.imagePhone}></div>
          <div className={styles.imagePhone1}></div>
        </div>
        <div className={styles.loginPageContainer}>
          <div className={styles.loginDetails}>
            <img src={instagram} alt="instagram" />
            <div className={styles.loginInputs}>
              <input
                type="text"
                placeholder="Phone number, username, or email"
              />
              <input type="password" placeholder="Password" />
              <button>Log in</button>
            </div>
            <div className={styles.horizontals}>
              <hr
                style={{
                  width: "38%",
                  display: "inline-block",
                  marginRight: "1rem",
                }}
              ></hr>
              <section>OR</section>
              <hr
                style={{
                  width: "38%",
                  display: "inline-block",
                  marginLeft: "1rem",
                }}
              ></hr>
            </div>
            <a
              className={styles.loginWithFacebook}
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare />
              Log in with facebook
            </a>
            <p>Forgot password?</p>
          </div>
          <div className={styles.signUp}>
            <p>Don't have an account?</p>
            <section>Sign up</section>
            {/* <NavLink to='/signup'>Sign up</NavLink> */}
          </div>
          <p> Get the app.</p>
          <div className={styles.anchors}>
            <a
              href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D77664189-D4FF-4917-92D7-C5A2BC85072A%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1"
              target="_blank"
              rel="noreferrer"
              className={styles.anchorTag}
            >
              <img src={playstore} alt="playstore" />
            </a>
            <a
              href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=807%2C15%2C993%2C1005"
              target="_blank"
              rel="noreferrer"
              className={styles.anchorTag}
            >
              <img src={microsoft} alt="microsoft" />
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
}

export default Login;
