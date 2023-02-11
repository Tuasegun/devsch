import React, {Fragment, PropsWithChildren} from 'react'

import {Header, Footer} from '../components'

interface MainLayoutProps extends PropsWithChildren<{}> {
  isWhite?: boolean; 
}

export const MainLayout = ({children, isWhite}: MainLayoutProps) => {
  return (
        <Fragment>
            <Header isWhite={isWhite} />
            {children}
            <Footer/>
        </Fragment>
  )
}
