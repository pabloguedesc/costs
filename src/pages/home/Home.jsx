import img from "../../images/savings.svg"
import styles from "./Home.module.css"
function Home() {

    return (
        <main className={styles.main}>
            <div className={styles.divMain}>
                <div>
                    <h1 className={styles.title}>Seja bem vindo!</h1>
                    <div id={styles.titleMain}>
                        <h1 className={styles.title}>ao</h1>
                        <h1 id={styles.fucusTitile}>Costs</h1>
                    </div>
                    <p className={styles.subTitle}>Comece a gerenciar seu dinheiro agora mesmo!</p>
                    <button className={styles.btnStart}>Vamos Começar</button>
                </div>
                <img className={styles.imgCosts} src={img} alt="lal" />
            </div>
        </main>
    )
}
export default Home