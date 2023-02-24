import { MainLayout } from '@/layouts/MainLayout'
import {Hero, Benefits, CourseOverview, Tools, Case} from '../features/enrol'
import React from 'react'
import {Testimonial} from '../features/home'
const enrol = () => {
  return (
    <div>
        <MainLayout>
            <Hero/>
            <Benefits/>
            <CourseOverview/>
            <Tools />
            <Testimonial/>
            <Case/>
        </MainLayout>
    </div>
  )
}

export default enrol