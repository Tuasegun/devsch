import React from 'react'
import { MainLayout } from '@/layouts/MainLayout'
import {EventHero, Speakers} from '../features/event'

const event = () => {
  return (
    <MainLayout isWhite>
        <EventHero />
        <Speakers/>
    </MainLayout>
  )
}

export default event