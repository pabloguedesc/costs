import { Link } from "react-router-dom"
import logo from "../../images/earth.png"
import styles from "./Navbar.module.css"
import { IoHome } from "react-icons/io5";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.logo} to="/">
                <img src={logo} alt="Logo" />
            </Link>
            <div className={styles.menu}>
                <Link className={styles.link} to="/"> <IoHome className={styles.icon}/> Home</Link>
                <Link className={styles.link} to="/contact">Contato</Link>
                <Link className={styles.link} to="/company">Empresa</Link>
                <Link className={styles.link} to="/newproject">Novo Projeto</Link>
            </div>
        </nav>
    )
}
export default Navbar