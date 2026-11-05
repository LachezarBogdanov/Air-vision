import styles from './Home.module.css'
import Aside from '../Aside/Aside';

export default function Home() {
    return (
        <>
            <div className={styles["app-shell"]}>
                <Aside />
                <main className={styles["main-content"]}>
                    <section className={styles.hero}>
                        <div className={styles["hero-top"]}>
                            <span className={styles.eyebrow}>WELCOME TO SKYVIEW</span>
                            <span className={styles["live-dot"]}>● Airport information</span>
                        </div>
                        <h1>
                            Your journey
                            <br />
                            starts here.
                        </h1>
                        <p>Everything you need for a smooth airport experience.</p>
                        <form className={styles["search-bar"]} action="schedule.html">
                            <span>⌕</span>
                            <input
                                name="q"
                                placeholder="Search flight, destination or airline..."
                                aria-label="Search flights"
                            />
                            <button className={styles.btn} type="submit">
                                Search flights →
                            </button>
                        </form>
                    </section>
                    <div className={styles["page-heading"]}>
                        <div>
                            <span className={styles.eyebrow}>AT A GLANCE</span>
                            <h2>Flight information</h2>
                        </div>
                        <a className={styles["text-link"]} href="schedule.html">
                            Full schedule →
                        </a>
                    </div>
                    <section className={styles["two-column"]}>
                        <article className={styles.panel}>
                            <div className={styles["panel-heading"]}>
                                <div className={styles["heading-icon"]}>↗</div>
                                <div>
                                    <h3>Departures</h3>
                                    <p>Upcoming flights</p>
                                </div>
                                <a className={styles["text-link"]} href="schedule.html">
                                    View all
                                </a>
                            </div>
                            <div className={styles["mini-table"]}>
                                <div className={`${styles["mini-row"]}, ${styles["table-label"]}`}>
                                    <span>Flight</span>
                                    <span>Destination</span>
                                    <span>Time</span>
                                    <span>Status</span>
                                </div>
                                <div className={styles["mini-row"]}>
                                    <b>LH203</b>
                                    <span>Frankfurt</span>
                                    <span>10:15</span>
                                    <span className={`${styles["status"]}, ${styles["boarding"]}`}>Boarding</span>
                                </div>
                                <div className={styles["mini-row"]}>
                                    <b>SK451</b>
                                    <span>Stockholm</span>
                                    <span>10:40</span>
                                    <span className={`${styles["status"]}, ${styles["on-time"]}`}>On time</span>
                                </div>
                                <div className={styles["mini-row"]}>
                                    <b>W6 3172</b>
                                    <span>Budapest</span>
                                    <span>11:20</span>
                                    <span className={`${styles["status"]}, ${styles["on-time"]}`}>On time</span>
                                </div>
                                <div className={styles["mini-row"]}>
                                    <b>FR2106</b>
                                    <span>Dublin</span>
                                    <span>12:05</span>
                                    <span className={`${styles["status"]}, ${styles["delayed"]}`}>Delayed</span>
                                </div>
                            </div>
                        </article>
                        <article className={styles.panel}>
                            <div className={styles["panel-heading"]}>
                                <div className={styles["heading-icon"]}>↙</div>
                                <div>
                                    <h3>Arrivals</h3>
                                    <p>Flights arriving soon</p>
                                </div>
                                <a className={styles["text-link"]} href="schedule.html?type=arrivals">
                                    View all
                                </a>
                            </div>
                            <div className={styles["mini-table"]}>
                                <div className={`${styles["mini-row"]}, ${styles["table-label"]}`}>
                                    <span>Flight</span>
                                    <span>From</span>
                                    <span>Time</span>
                                    <span>Status</span>
                                </div>
                                <div className={styles["mini-row"]}>
                                    <b>LH202</b>
                                    <span>Munich</span>
                                    <span>09:50</span>
                                    <span className={`${styles["status"]}, ${styles["arrived"]}`}>Arrived</span>
                                </div>
                                <div className={styles["mini-row"]}>
                                    <b>SK450</b>
                                    <span>Copenhagen</span>
                                    <span>10:35</span>
                                    <span className={`${styles["status"]}, ${styles["on-time"]}`}>On time</span>
                                </div>
                                <div className={styles["mini-row"]}>
                                    <b>W6 3171</b>
                                    <span>Warsaw</span>
                                    <span>11:15</span>
                                    <span className={`${styles["status"]}, ${styles["on-time"]}`}>On time</span>
                                </div>
                                <div className={styles["mini-row"]}>
                                    <b>FR2105</b>
                                    <span>Dublin</span>
                                    <span>12:00</span>
                                    <span className={`${styles["status"]}, ${styles["on-time"]}`}>On time</span>
                                </div>
                            </div>
                        </article>
                    </section>
                    <section className={styles["quick-grid"]}>
                        <a className={styles["quick-card"]} href="map.html">
                            <span className={styles["quick-icon"]}>⌖</span>
                            <span>
                                <b>Airport Map</b>
                                <small>Explore terminals and gates</small>
                            </span>
                            <span className={styles.arrow}>→</span>
                        </a>
                        <a className={styles["quick-card"]} href="airlines.html">
                            <span className={styles["quick-icon"]}>▤</span>
                            <span>
                                <b>Airline Desk Table</b>
                                <small>Find your check-in desk</small>
                            </span>
                            <span className={styles.arrow}>→</span>
                        </a>
                        <a className={styles["quick-card"]} href="schedule.html">
                            <span className={styles["quick-icon"]}>▦</span>
                            <span>
                                <b>Flight Schedule</b>
                                <small>View all flights</small>
                            </span>
                            <span className={styles.arrow}>→</span>
                        </a>
                    </section>
                    <footer>
                        © 2026 SkyView International Airport{" "}
                        <span>Demo information · Flight details are illustrative</span>
                    </footer>
                </main>
            </div>

        </>
    );
};
