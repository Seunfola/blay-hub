'use client'
import Link from 'next/link'
import styles from './navbar.module.css';
import DarkMode from '../darkMode/DarkMode';
import Button from '@/components/button/Button';

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Services",
    url: "/info"
  },

  {
    id: 4,
    title: "FAQ",
    url: "/faq",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact"
  },

  // {
  //   id: 6,
  //   title: "Dashboard",
  //   url: "/dashboard"
  // },

];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo} >BLAY-HUB</Link>
      <div className={styles.links}>
        <DarkMode />
        {links.map(link => (<Link key={link.id} href={link.url} className={styles.link}>{link.title}
        </Link>
        ))}

        <Button url="/dashboard" text="Sign Up" />
      </div>

    </div>
  )
}

export default Navbar