import styles from "./NewProject.module.css"
import btnStyle from "../home/Home.module.css"

function NewProject() {
    return (
        <div className={styles.newProject}>
            <div className={styles.newProjectContainer}>
                <h1 className={styles.title}>Novo Projeto</h1>
                <p>Crie seu projeto para depois adicionar os serviços</p>
                <form className={styles.form}>
                    <p>Nome do projeto:</p>
                    <input type="text"  placeholder="Ex: Criar e-comerce"/>
                    <p>Orçamento:</p>
                    <input type="number"  placeholder="ex: 2000"/>
                    <p>Selecione a categoria:</p>
                    <select>
                        <option value="">Selecione</option>
                        <option value="">Web</option>
                        <option value="">lala</option>
                    </select>
                    <button className={btnStyle.btnStart}>Criar</button>
                </form>
            </div>
        </div>
    )
}
export default NewProject