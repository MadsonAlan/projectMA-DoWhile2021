import styles from './styles.module.css'

export function Apresentation() {
    return (
        <div id="what" className={styles.sectionContainer}>
            <section className={styles.gridContainer}>
                <div>
                    <h1>A educação construindo futuros</h1>
                    <p>Por acreditar nisso a Project MA visa ajudar as
                        pessoas mais carentes, as quais não possuem condições.
                        Além de oferecer cursos de qualidade voltados ao mercado de
                        trabalho em diversas áreas</p>
                </div>
                <div className={styles.imageContainer}>
                    <img src='/images/buildthefuture.svg' alt="Construindo futuros" />
                </div>
            </section>
        </div>
    )
}