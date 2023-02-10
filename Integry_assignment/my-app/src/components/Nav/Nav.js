import React from 'react'
import { Link } from 'react-router-dom';
import styles from './nav.module.css';

export default function Nav(props) {
    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.container}>
                    <Link className={styles.title} to="/">WHERE IS IN THIS WORLD ?</Link>
                    <i className={`far fa-moon ${styles.navLightIcon}`} />
                    <i className={`fas fa-moon ${styles.nightDarkIcon}`} />
                    <button onClick={props.toggleTheme} className={styles.navButton}>Dark mode</button>
                </div>
            </nav>

        </div>
    )
}
