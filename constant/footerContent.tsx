import { AiFillInstagram } from 'react-icons/ai'
import {
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa'
interface FooterSocialLink {
  name: string
  url: string
  icon: React.ElementType
}

export const FooterSocialLinks: FooterSocialLink[] = [
  {
    name: 'Twitter',
    url: 'https://www.twitter.com/schfordevs/',
    icon: FaTwitter,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/schfordevs/',
    icon: AiFillInstagram,
  },
  {
    name: 'LinkedIn',
    url: '/',
    icon: FaLinkedin,
  },
  {
    name: 'Youtube',
    url: '/',
    icon: FaYoutube,
  },
]

export const links = [
  {
    title: 'Quick Links',
    links: [
      {
        name: 'Course Overview',
        url: '/enrol',
      },
      {
        name: 'Testimonials',
        url: '/#testimonials',
      },
      {
        name: 'Blog',
        url: '/blog',
      },
      {
        name: 'Events',
        url: '/event',
      },
      {
        name: 'Join community',
        url: '/',
      },
    ],
  },
  // {
  //   title: 'Class Plans',
  //   links: [
  //     {
  //       name: 'Basic Class',
  //       url: '/',
  //     },
  //     {
  //       name: 'Advanced Class',
  //       url: '/',
  //     },
  //     {
  //       name: 'Premium Class',
  //       url: '/',
  //     },
  //     {
  //       name: 'International',
  //       url: '/',
  //     },
  //     {
  //       name: 'Community',
  //       url: '',
  //     },
  //   ],
  // },
  // {
  //   title: 'Newsletter',
  //   links: [
  //     {
  //       name: 'perxels@gmail.com',
  //       url: 'mailto:perxels@gmail.com',
  //     },
  //     {
  //       name: '+2348135369680',
  //       url: 'tel:+2348135369680',
  //     },
  //   ],
  // },
]
