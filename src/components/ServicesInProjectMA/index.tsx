import React from 'react'
import styles from './styles.module.css'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
export function ServicesInProjectMa() {
    return (
        <section id="how" className={styles.sectionContainer}>
            <div className={styles.tittleServices}>
                <h1>O que oferecemos</h1>
                <p>Dentro da plataforma possuímos dois tipos de serviços:
                    o cursinho que é exclusivo para pessoas carentes que
                    fazem perte das ONG’s parceiras. E os cursos
                    profissionalizantes, os quais são abertos ao público</p>
            </div>
            <h1>Apoio Educacional</h1>
            <div className={styles.gridContainer}>
                <div>
                    <h2>“Quero ir pra faculdade, mas não tenho condições de pagar”</h2>
                    <p>Com a Project MA você pode fazer cursinho de qualidade online
                        e sem custo adicional. </p>
                </div>
                <ul className={styles.benefitsContainer}>
                    <li><MdOutlineKeyboardArrowRight /> Aulas online</li>
                    <li><MdOutlineKeyboardArrowRight /> Simulados com questões de anos anteriores</li>
                    <li><MdOutlineKeyboardArrowRight /> Correção de redações</li>
                    <li><MdOutlineKeyboardArrowRight /> Dashboard de desempenho</li>
                    <li><MdOutlineKeyboardArrowRight /> Somente para pessoas carentes de ONG’s parceiras</li>
                </ul>
            </div>
            <h1>Apoio Profissional</h1>
            <div className={styles.gridContainer}>
                <div>
                    <h2>“Preciso arrumar emprego, mas não tenho formação alguma”</h2>
                    <p>Na plataforma temos diversos cursos profissionalizantes com
                        certificado os quais são muito bem vistos pelo mercado.
                        Além disso, as empresas parceiras também disponibilizam
                        treinamentos para possíveis candidatos interessados em fazer
                        parte da empresa. </p>
                </div>
                <ul className={styles.benefitsContainer}>
                    <li><MdOutlineKeyboardArrowRight /> Aulas online</li>
                    <li><MdOutlineKeyboardArrowRight /> Diversas áreas</li>
                    <li><MdOutlineKeyboardArrowRight /> Cursos alinhados as vagas do mercado</li>
                    <li><MdOutlineKeyboardArrowRight /> Aberto ao público</li>
                </ul>
            </div>
        </section>
    )
}