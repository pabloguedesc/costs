import img from "../../images/savings.svg"
import ButtonLink from "./ButtonLink"
import styles from "./Home.module.css"
function Home() {

    return (
        <main className={styles.main}>
            <div className={styles.divMain}>
                <div>
                    <div id={styles.titleMain}>
                        <h1 className={styles.title}>Bem vindo ao</h1>
                        <h1 id={styles.fucusTitile}>Costs</h1>
                    </div>
                    <p className={styles.subTitle}>Comece a gerenciar seus projetos agora mesmo!</p>
                    <ButtonLink to="/newproject" text="Criar Projeto" />
                </div>
                <img className={styles.imgCosts} src={img} alt="lal" />
            </div>
        </main>
    )
}
export default Home