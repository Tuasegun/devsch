import { MainLayout } from '@/layouts/MainLayout'
import React from 'react'
import {ViewBlogContent, RelatedArticles} from '../../features/blog/'
const ViewBlog = () => {
  return (
    <div>
      <MainLayout isWhite>
      <ViewBlogContent/>
      <RelatedArticles/>
      </MainLayout>
    </div>
  )
}

export default ViewBlog