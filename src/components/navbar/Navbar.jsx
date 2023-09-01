import { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import DarkMode from '../darkMode/DarkMode';
import Button from '@/components/button/Button';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'About',
    url: '/about',
  },
  {
    id: 3,
    title: 'Services',
    url: '/info',
  },
  {
    id: 4,
    title: 'FAQ',
    url: '/faq',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${styles.container} ${menuOpen ? styles.open : 'none'}`}>
      <Link href="/" className={styles.logo}>
        BLAY-HUB
      </Link>
      <div className={styles.navWrapper}>
        <div className={`${styles.menuIcon} ${menuOpen ? styles.open : 'none'}`} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <div className={styles.links}>
          <DarkMode />
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          ))}
          <Button url="/dashboard/signup" text="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
