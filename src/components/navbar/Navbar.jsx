import { Link } from "react-router-dom"
import logo from "../../images/costs_logo.png"
import styles from "./Navbar.module.css"
// import { IoHome } from "react-icons/io5";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.logo} to="/">
                <img className={styles.logoImg} src={logo} alt="Logo" />
            </Link>
            <div className={styles.menu}>
                <Link className={styles.link} to="/">Home</Link>
                <Link className={styles.link} to="/newproject">Projetos</Link>
                <Link className={styles.link} to="/contact">Contato</Link>
                <Link className={styles.link} to="/company">Empresa</Link>
            </div>
        </nav>
    )
}
export default Navbar