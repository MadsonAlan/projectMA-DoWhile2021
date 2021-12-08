import styles from './styles.module.css'
export function Header() {
    return (
        <header className={styles.header}>
            <div>
                <h1 className={styles.tittleHeader}>Project MA</h1>
                <ul className={styles.menu}>
                    <li>O que fazemos</li>
                    <li>Porque fazemos</li>
                    <li>Como Funciona</li>
                    <li><button className={styles.primaryButton}>Login MA</button></li>
                    <li><button className={styles.secondaryButton} >Parceiro</button></li>
                </ul>
            </div>
        </header>
    )
}