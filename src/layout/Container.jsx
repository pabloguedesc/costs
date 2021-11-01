import styles from "./Container.module.css"

function Container(props) {
    return (
        <div id="container" className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}
export default Container