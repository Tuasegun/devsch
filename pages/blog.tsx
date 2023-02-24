import { BlogHero, ContentGrid } from '@/features/blog'
import { MainLayout } from '@/layouts/MainLayout'
import {Members} from '@/features/home'
import React from 'react'

const blog = () => {
  return (
    <MainLayout>
        <BlogHero/>
        <ContentGrid/>
        <Members/>
    </MainLayout>
  )
}

export default blog