import styles from './styles.module.css'
import { toast } from 'react-toastify';
export function Header() {
    const notify = () => toast("Ótimo saber que está interessado!🤩");
    return (
        <header className={styles.header}>
            <div>
                <h1 className={styles.tittleHeader}>Project MA</h1>
                <ul className={styles.menu}>
                    <li><a href="#what">O que fazemos</a></li>
                    <li><a href="#why">Porque fazemos</a></li>
                    <li><a href="#how">Como Funciona</a></li>
                    <li><a href="#be-a-partner" className={styles.secondaryButton} >Ser um parceiro</a></li>
                    <li><button className={styles.primaryButton} onClick={notify}>Login MA</button></li>
                </ul>
                <ul className={styles.menuMobile}>
                    <li><button className={styles.primaryButton} onClick={notify}>Login MA</button></li>
                </ul>
            </div>
        </header>
    )
}