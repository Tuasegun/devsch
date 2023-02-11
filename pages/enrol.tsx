import { MainLayout } from '@/layouts/MainLayout'
import {Hero, Benefits, CourseOverview, Tools, Case} from '../features/enrol'
import React from 'react'

const enrol = () => {
  return (
    <div>
        <MainLayout>
            <Hero/>
            <Benefits/>
            <CourseOverview/>
            <Tools />
            <Case/>
        </MainLayout>
    </div>
  )
}

export default enrol