import styles from './styles.module.css'

export function PartnerForm() {
    return (
        <div id="be-a-partner" className={styles.sectionContainer}>
            <section className={styles.gridContainer}>
                <div>
                    <h1>Seja uma Empresa/ONG parceira</h1>
                    <p>Nos ajude com essa missão de atingir o máximo de pessoas possíveis.
                        Seu apoio é muito importante para nós.
                    </p>
                </div>
                <form className={styles.formContainer}>
                    <input type="text" placeholder="Email ficticio para contato" />
                    <textarea placeholder="Email ficticio para contato" />
                    <button type="submit">Enviar</button>
                </form>
            </section>
        </div>
    )
}