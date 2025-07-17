import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';


export function Menu() {

    const [theme, setTheme] = useState<AvailableThemes>('dark');

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
        event.preventDefault();

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        })
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <nav className={styles.menu}>
            <h1>{theme}</h1>
            <a href="#" className={styles.menuLink} aria-label='Home' title='Home'>
                <HouseIcon />
            </a>
            <a href="#" className={styles.menuLink} aria-label='History' title='History'>
                <HistoryIcon />
            </a>
            <a href="#" className={styles.menuLink} aria-label='Settings' title='Settings'>
                <SettingsIcon />
            </a>
            <a href="#"
                className={styles.menuLink}
                aria-label='Theme'
                title='Theme'
                onClick={handleThemeChange}>
                <SunIcon />
            </a>
        </nav>
    )
}

