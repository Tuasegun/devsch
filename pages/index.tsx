import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { MainLayout } from "@/layouts/MainLayout";
import {
  Hero,
  Goals,
  Perks,
  CourseDetail,
  Members,
  Testimonial,
} from "../features/home";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>SchforDevs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/assets/ogImage.png" />
        <meta name="description" content="SchforDevs for frontend developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <Hero />
        <Goals />
        <Perks />
        <CourseDetail />
        <Testimonial />
        <Members />
      </MainLayout>
    </>
  );
}
