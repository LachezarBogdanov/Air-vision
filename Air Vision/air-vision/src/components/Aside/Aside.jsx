import { NavLink } from "react-router-dom";

import styles from './Aside.module.css'

export default function Aside() {
    return (
        <>
            <aside className={styles.sidebar}>
                <a className={styles.brand} href="index.html">
                    <span className={styles["brand-mark"]}>✈</span>
                    <span>
                        <b>Airport Vision</b>
                        <small>International Airport Guide</small>
                    </span>
                </a>
                <nav>
                    <NavLink to={'/'} className={({isActive}) =>
                                `${styles["nav-link"]} ${isActive ? styles.active : ''}`}>
                        <span>⌂</span>Home
                    </NavLink>
                    <NavLink to={'/schedule'} className={({isActive}) =>
                                `${styles["nav-link"]} ${isActive ? styles.active : ''}`}>
                        <span>▦</span>Schedule
                    </NavLink>
                    <NavLink to={'/airportMap'} className={({isActive}) =>
                                `${styles["nav-link"]} ${isActive ? styles.active : ''}`}>
                        <span>⌖</span>Airport Map
                    </NavLink>
                    <NavLink to={'/airlineDesk'} className={({isActive}) =>
                                `${styles["nav-link"]} ${isActive ? styles.active : ''}`}>
                        <span>♙</span>Airline Desk
                    </NavLink>
                </nav>
                <div className={styles["sidebar-weather"]}>
                    <div className={styles.sun}>☀</div>
                    <div>
                        <b>18°C</b>
                        <small>Partly cloudy</small>
                        <small>Local airport time</small>
                    </div>
                </div>
            </aside>
        </>
    );
};
