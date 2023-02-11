import React from 'react'
import { MainLayout } from '@/layouts/MainLayout'
import {EventHero} from '../features/event'
const event = () => {
  return (
    <MainLayout>
        <EventHero />
    </MainLayout>
  )
}

export default event