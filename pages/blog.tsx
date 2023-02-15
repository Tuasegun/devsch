import { BlogHero, ContentGrid } from '@/features/blog'
import { MainLayout } from '@/layouts/MainLayout'
import React from 'react'

const blog = () => {
  return (
    <MainLayout>
        <BlogHero/>
        <ContentGrid/>
    </MainLayout>
  )
}

export default blog