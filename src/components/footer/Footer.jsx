import styles from "./Footer.module.css"
import {IoLogoLinkedin} from "react-icons/io"
import {IoLogoFacebook} from "react-icons/io"
import {IoLogoInstagram} from "react-icons/io"

function Footer () {
    return (
        <footer className={styles.footer}>
            <div>
                <div className={styles.socialIcons}>
                    <IoLogoFacebook className={styles.icons}/>                
                    <IoLogoInstagram className={styles.icons}/>
                    <IoLogoLinkedin className={styles.icons}/>
                </div>
                <p className={styles.footerText}>
                    <span>Costs</span> &copy; 2021
                </p>
            </div>
        </footer>
    )
}
export default Footer