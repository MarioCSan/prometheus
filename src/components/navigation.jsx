import React from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'

const links = [
  {
    label: 'Home',
    route: '/'
  }
]

const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {links.map(({ label, route }) => (
            <li key={route}>
              {' '}
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation