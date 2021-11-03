import img from "../../images/img.png"
import styles from "./Home.module.css"
function Home() {

    return (
        <main className={styles.main}>
            <div className={styles.divMain}>
                <div>
                    <h1 className={styles.title}>Seja bem vindo!</h1>
                    <h1 className={styles.title} id={styles.titleMain}>ao Costs</h1>
                    <p className={styles.subTitle}>Comece a gerenciar seu dinheiro agora mesmo</p>
                    <button className={styles.btnStart}>Vamos Começar</button>
                </div>
                <img src={img} alt="lal" />
            </div>
        </main>
    )
}
export default Home