import React from 'react';
import instagram from '../Login/instagram.png';
import { FaFacebookSquare } from 'react-icons/fa';
import styles from './Signup.module.css';
import playstore from '../Login/playstore.png';
import microsoft from '../Login/microsoft.png';
import Footer from '../Login/Footer/Footer';

function Signup() {
  return (
    <div className={styles.signUpWrapper}>
        <div className={styles.signUpContainer}>
            
                <img src={instagram} alt='instagram' /> 
                <div className={styles.headingContainer}>
                <h3>
                    Sign up to see photos and videos from your friends.
                </h3>
                <button><a href='https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%25221ibor8m10t72xl1ww06wh1y02y725d0oex1w3sfbk19w7ab61jmn3x6%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D820d6cd4-f8a3-43bc-9965-6365c2c6293a%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221ibor8m10t72xl1ww06wh1y02y725d0oex1w3sfbk19w7ab61jmn3x6%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0' rel='noreferrer'> <FaFacebookSquare className={styles.fbIcon}/>Log in with Facebook</a></button>
                </div>
                <div className={styles.horizontals}>
              <hr
                style={{
                  width: "33%",
                  display: "inline-block",
                  marginRight: "1rem",
                }}
              ></hr>
              <section>OR</section>
              <hr
                style={{
                  width: "33%",
                  display: "inline-block",
                  marginLeft: "1rem",
                }}
              ></hr>
            </div>

            <div className={styles.inputContainers}>
                <input type='text' placeholder='Mobile Number or Email'/>
                <input type='text' placeholder='Full Name'/>
                <input type='text' placeholder='Username'/>
                <input type='password' placeholder='Password'/>

            </div>
            <div className={styles.termsContainer}>
                <p>
                People who use our service may have uploaded your contact information to Instagram. <a href='https://www.facebook.com/help/instagram/261704639352628' target='_blank' rel='noreferrer'>Learn More</a>
                </p>
                <p>
                By signing up, you agree to our <a href='https://help.instagram.com/581066165581870/?locale=en_US' target='_blank' rel='noreferrer'>Terms</a> , <a href='https://www.facebook.com/privacy/policy' target='_blank' rel='noreferrer'>Privacy Policy</a> and <a href='https://help.instagram.com/1896641480634370/' target='_blank' rel='noreferrer'>Cookies Policy</a>.
                </p>
                <button>Sign up</button>
            </div>            
        </div>
        <div className={styles.login}>
            Have an account? <section>Log in</section>
        </div>
        <p className={styles.getTheApp}> Get the app.</p>
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
          <div className={styles.footer}><Footer/></div>
    </div>
  )
}

export default Signup