import styles from './styles.module.css'
import { toast } from 'react-toastify';
import { useState } from 'react';

export function PartnerForm() {
    const notify = () => {
        setEmail('')
        setTextArea('')
        toast.success("Muito obrigado por testar!😊")
    }
    const [email, setEmail] = useState<string>('')
    const [textArea, setTextArea] = useState<string>('')
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
                    <input type="text" placeholder="Email ficticio para contato" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <textarea placeholder="Texto de mensagem ficticia" value={textArea} onChange={(e) => setTextArea(e.target.value)} />
                    <button type="submit" onClick={notify}>Enviar</button>
                </form>
            </section>
        </div>
    )
}