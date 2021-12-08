import React from 'react'
import styles from './styles.module.css'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { ScrollTrigger, Tween } from 'react-gsap'
export function ServicesInProjectMa() {
    return (
        <section id="how" className={styles.sectionContainer}>
            <div className={styles.tittleServices}>
                <Tween from={{ opacity: 0, transform: 'translate3d(0, 50px, 0)' }} ease="back.out(1.4)">
                    <h1>O que oferecemos</h1>
                </Tween>
                <Tween from={{ opacity: 0, transform: 'translate3d(0, -50px, 0)' }} ease="back.out(1.4)">
                    <p>Dentro da plataforma possuímos dois tipos de serviços:
                        o cursinho que é exclusivo para pessoas carentes que
                        fazem perte das ONG’s parceiras que esão cursando ou já completaram o ensino médio. E os cursos
                        profissionalizantes, os quais são abertos ao público</p>
                </Tween>
            </div>

            <section>
                <ScrollTrigger start="-200px center" end="500px bottom" scrub={0.5}>
                    <Tween from={{ opacity: 0, transform: 'translate3d(0, 50px, 0)' }} ease="back.out(1.4)">
                        <h1>Apoio Educacional</h1>
                    </Tween>
                    <div className={styles.gridContainer}>
                        <div>
                            <Tween from={{ opacity: 0, transform: 'translate3d(-50px, 0, 0)' }} ease="back.out(1.4)">
                                <h2>“Quero ir pra faculdade, mas não tenho condições de pagar”</h2>
                                <p>Com a Project MA você pode fazer cursinho de qualidade online
                                    e sem custo adicional. </p>
                            </Tween>
                        </div>
                        <ul className={styles.benefitsContainer}>
                            <Tween from={{ opacity: 0, transform: 'translate3d(50px, 0, 0)' }} ease="back.out(1.4)">
                                <li><MdOutlineKeyboardArrowRight /> Aulas online</li>
                                <li><MdOutlineKeyboardArrowRight /> Simulados com questões de anos anteriores</li>
                                <li><MdOutlineKeyboardArrowRight /> Correção de redações</li>
                                <li><MdOutlineKeyboardArrowRight /> Dashboard de desempenho</li>
                                <li><MdOutlineKeyboardArrowRight /> Somente para pessoas carentes de ONG’s parceiras</li>
                            </Tween>
                        </ul>
                    </div>

                </ScrollTrigger>
            </section>
            <section>
                <ScrollTrigger start="-200px center" end="500px center" scrub={0.5}>
                    <Tween from={{ opacity: 0, transform: 'translate3d(0, 50px, 0)' }} ease="back.out(1.4)">
                        <h1>Apoio Profissional</h1>
                    </Tween>
                    <div className={styles.gridContainer}>
                        <div>
                            <Tween from={{ opacity: 0, transform: 'translate3d(-50px, 0, 0)' }} ease="back.out(1.4)">
                                <h2>“Preciso arrumar emprego, mas não tenho formação alguma”</h2>
                                <p>Na plataforma temos diversos cursos profissionalizantes com
                                    certificado os quais são muito bem vistos pelo mercado.
                                    Além disso, as empresas parceiras também disponibilizam
                                    treinamentos para possíveis candidatos interessados em fazer
                                    parte da empresa. </p>
                            </Tween>
                        </div>
                        <ul className={styles.benefitsContainer}>
                            <Tween from={{ opacity: 0, transform: 'translate3d(50px, 0, 0)' }} ease="back.out(1.4)">
                                <li><MdOutlineKeyboardArrowRight /> Aulas online</li>
                                <li><MdOutlineKeyboardArrowRight /> Diversas áreas</li>
                                <li><MdOutlineKeyboardArrowRight /> Cursos alinhados as vagas do mercado</li>
                                <li><MdOutlineKeyboardArrowRight /> Aberto ao público</li>
                            </Tween>
                        </ul>
                    </div>
                </ScrollTrigger>
            </section>
        </section>
    )
}