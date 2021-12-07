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
                    <li><button ref="Fazer login na plataforma MA">Login MA</button></li>
                    <li><button ref="Ser um parceiro do projeto MA">Parceiro</button></li>
                </ul>
            </div>
        </header>
    )
}