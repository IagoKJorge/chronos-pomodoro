import { useState } from 'react';
import styles from './styles.module.css';
import { SettingsIcon, SunIcon, HouseIcon, HistoryIcon } from 'lucide-react';


type AvailableThemes = 'dark' | 'light';


export function Menu() {
  
  const [theme, setTheme] = useState<AvailableThemes>('dark');
  console.log(theme, setTheme)
  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para home'
        title='Ir para home'
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mostrar o histórico'
        title='Mostrar o histórico'
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para configurações'
        title='Ir para configurações'
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Trocar o tema'
        title='Trocar o tema'
      >
        <SunIcon />
      </a>
    </nav>
  );
}
