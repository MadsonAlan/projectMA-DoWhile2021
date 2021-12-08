import styles from './styles.module.css'
export function Header() {
    return (
        <header className={styles.header}>
            <div>
                <h1 className={styles.tittleHeader}>Project MA</h1>
                <ul className={styles.menu}>
                    <li><a href="#what">O que fazemos</a></li>
                    <li><a href="#why">Porque fazemos</a></li>
                    <li><a href="#how">Como Funciona</a></li>
                    <li><a href="#be-a-partner" className={styles.secondaryButton} >Ser um parceiro</a></li>
                    <li><button className={styles.primaryButton}>Login MA</button></li>
                </ul>
            </div>
        </header>
    )
}