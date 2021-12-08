import React from 'react'
import { Tween } from 'react-gsap'
import styles from './styles.module.css'

export function Apresentation() {
    return (
        <div id="what" className={styles.sectionContainer}>
            <section className={styles.gridContainer}>

                <div >
                    <Tween from={{ opacity: 0, transform: 'translate3d(0, 50px, 0)' }} ease="back.out(1.4)">
                        <h1>A educação construindo futuros</h1>
                        <p>Por acreditar nisso a Project MA visa ajudar as
                            pessoas mais carentes, as quais não possuem condições.
                            Além de oferecer cursos de qualidade voltados ao mercado de
                            trabalho em diversas áreas</p>
                    </Tween>
                </div>
                <div className={styles.imageContainer}>
                    <Tween from={{ opacity: 0, transform: 'translate3d(0, 50px, 0)' }} ease="back.out(1.4)">
                        <img src='/images/buildthefuture.svg' alt="Construindo futuros" />
                    </Tween>
                </div>
            </section>
        </div>
    )
}