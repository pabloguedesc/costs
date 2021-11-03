import {Link} from "react-router-dom"
import styles from "./Home.module.css"

function ButtonLink({to, text}){
    return (
        <Link className={styles.btnStart} to={to}>
            {text}
        </Link>
    )
}

export default ButtonLink