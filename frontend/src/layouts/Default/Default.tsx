import React, { ReactNode, FC } from 'react'

import Header from '@components/Layout/Header'
import Navigation from '@components/Layout/Navigation'
import Footer from '@components/Layout/Footer'

import * as styles from './Default.module.scss'

interface LayoutProps {
  children: ReactNode
}

const Default: FC<LayoutProps> = ({ children }) => (
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

export default Default
