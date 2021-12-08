import Head from 'next/head'
import { Header } from '../components/Header'
import React from 'react'
import { Apresentation } from '../components/Apresentation/Index'
import { Description } from '../components/Description'
import { ServicesInProjectMa } from '../components/ServicesInProjectMA'
import { PartnerForm } from '../components/PartnerForm'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (

    <div className="container">
      <div>
        <Head>
          <title>Project MA</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Header />
        <Apresentation />
        <Description />
        <ServicesInProjectMa />
        <PartnerForm />
      </div>
    </div>

  )
}
