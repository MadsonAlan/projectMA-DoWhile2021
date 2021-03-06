import React from 'react'
import styles from './styles.module.css'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Tween } from 'react-gsap'
export function Description() {
    return (
        <div id="why" className={styles.sectionContainer}>
            <section className={styles.gridContainer}>
                <div className={styles.imageContainer}>
                    <Tween from={{ opacity: 0, transform: 'translate3d(0, 50px, 0)' }} ease="back.out(1.4)">
                        <img src='/images/ajudandoQuemPrecisa.svg' alt="Ajudando Quem Precisa" />
                    </Tween>
                </div>
                <div>
                    <Tween from={{ opacity: 0, transform: 'translate3d(0, 50px, 0)' }} ease="back.out(1.4)">
                        <h1>Apoiando quem necessita</h1>
                        <p>Através de apoio de empresas parceiras, construímos fundos para poder oferecer
                            o equipamento necessário às pessoas carentes que são auxiliadas por ONG’s
                            voltadas a educação como <a href="http://avante.org.br/" target="_blank" rel="noreferrer">Avante</a>,
                            <a href="https://institutoayrtonsenna.org.br/" target="_blank" rel="noreferrer">Instituto Ayrton Senna</a> e <a href="https://www.amigosdobem.org/" target="_blank" rel="noreferrer">Amigos do Bem</a>.
                            Eles ganharão:</p>
                        <ul className={styles.benefitsContainer}>
                            <li><MdOutlineKeyboardArrowRight /> Curso de informática basica para saber usar a plataforma, navegar, etc...</li>
                            <li><MdOutlineKeyboardArrowRight /> Equipamentos para estudo (ex.: Tablets com acesso à internet, caneta, caderno)</li>
                            <li><MdOutlineKeyboardArrowRight /> Acompanhamento periódico para comprovar o avanço na plataforma</li>
                        </ul>
                    </Tween>
                </div>
            </section>
        </div>
    )
}