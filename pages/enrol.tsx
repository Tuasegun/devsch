import { MainLayout } from '@/layouts/MainLayout'
import {Hero, Benefits} from '../features/enrol'
import React from 'react'

const enrol = () => {
  return (
    <div>
        <MainLayout>
            <Hero/>
            <Benefits/>
        </MainLayout>
    </div>
  )
}

export default enrol