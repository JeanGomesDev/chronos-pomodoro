import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';


export function Menu() {

    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark';
        return storageTheme;
    });

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }

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
        localStorage.setItem('theme', theme);

    }, [theme]);

    return (
        <nav className={styles.menu}>
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
                {nextThemeIcon[theme]}
            </a>
        </nav>
    )
}

