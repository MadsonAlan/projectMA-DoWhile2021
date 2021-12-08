import Head from 'next/head'
import { Header } from '../components/Header'
import React from 'react'
import { Apresentation } from '../components/Apresentation/Index'
import { Description } from '../components/Description'
import { ServicesInProjectMa } from '../components/ServicesInProjectMA'
import { PartnerForm } from '../components/PartnerForm'

export default function Home() {
  return (
    <div className="container">
      <div>
        <Head>
          <title>Project MA</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <Apresentation />
        <Description />
        <ServicesInProjectMa />
        <PartnerForm />
      </div>
    </div>
  )
}
