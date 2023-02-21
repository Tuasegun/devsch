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
    url: '/',
    icon: FaTwitter,
  },
  {
    name: 'Instagram',
    url: '/',
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
    title: 'Services',
    links: [
      {
        name: 'About us',
        url: '/',
      },
      {
        name: 'Contact us',
        url: '/',
      },
      {
        name: 'Courses',
        url: '/',
      },
      {
        name: 'Testimonials',
        url: '/',
      },
      {
        name: 'Join community',
        url: '/',
      },
    ],
  },
  {
    title: 'Class Plans',
    links: [
      {
        name: 'Basic Class',
        url: '/',
      },
      {
        name: 'Advanced Class',
        url: '/',
      },
      {
        name: 'Premium Class',
        url: '/',
      },
      {
        name: 'International',
        url: '/',
      },
      {
        name: 'Community',
        url: '',
      },
    ],
  },
  {
    title: 'Newsletter',
    links: [
      {
        name: 'perxels@gmail.com',
        url: 'mailto:perxels@gmail.com',
      },
      {
        name: '+2348135369680',
        url: 'tel:+2348135369680',
      },
    ],
  },
]
