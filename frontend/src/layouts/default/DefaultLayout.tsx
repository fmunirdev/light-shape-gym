import React, { ReactNode, FC } from 'react'

import Header from '@components/header/Header'
import Footer from '@components/footer/Footer'

import * as styles from './default.module.scss'

interface LayoutProps {
  children: ReactNode
}

const DefaultLayout: FC<LayoutProps> = ({ children }) => (
  <>
    <div className={ styles.layout }>
      <Header />
      <main className={ styles.layout__content }>
        { children }
      </main>
      <Footer />
    </div>
  </>
)

export default DefaultLayout
