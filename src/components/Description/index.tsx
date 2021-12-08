import React from 'react'
import styles from './styles.module.css'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
export function Description() {
    return (
        <div className={styles.sectionContainer}>
            <section className={styles.gridContainer}>
                <div className={styles.imageContainer}>
                    <img src='/images/ajudandoQuemPrecisa.svg' alt="Construindo futuros" />
                </div>
                <div>
                    <h1>Apoiando quem necessita</h1>
                    <p>Através de apoio de empresas parceiras, construimos fundos para poder oferecer
                        o equipamento necessário às pessoas carentes que são auxiliadas por ONG’s
                        voltadas a educação como Aante, Instituto Ayrton Senna e Amigos do Bem.
                        Eles ganharão:</p>
                    <ul className={styles.benefitsContainer}>
                        <li><MdOutlineKeyboardArrowRight /> Curso de informática basica para saber usar a plataforma, navegar, etc...</li>
                        <li><MdOutlineKeyboardArrowRight /> Equipamentos para estudo (ex.: Tablets com acesso à internet, caneta caderno)</li>
                        <li><MdOutlineKeyboardArrowRight /> Acompanhamento periódico para comprovar o avanço na plataforma</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}