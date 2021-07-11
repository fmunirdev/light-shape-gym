import React, { ReactNode, FC } from 'react'

import Header from '@components/Layout/Header'
import Footer from '@components/Layout/Footer'
import Navigation from "@components/Layout/Navigation";

import * as styles from './default.module.scss'

interface LayoutProps {
  children: ReactNode
}

const DefaultLayout: FC<LayoutProps> = ({ children }) => (
  <>
    <div className={ styles.layout }>
      <Header />
      <Navigation />
      <main className={ styles.layout__content }>
        { children }
      </main>
      <Footer />
    </div>
  </>
)

export default DefaultLayout
