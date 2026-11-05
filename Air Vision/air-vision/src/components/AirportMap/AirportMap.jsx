import Aside from '../Aside/Aside';
import styles from './AirportMap.module.css';

export default function AirportMap() {
    return (
        <>
            <div className={styles["app-shell"]}>
                <Aside />
                <main className={styles["main-content"]}>
                    <header className={styles["page-title"]}>
                        <div>
                            <span className={styles.eyebrow}>FIND YOUR WAY</span>
                            <h1>Airport Map</h1>
                            <p>Explore terminals, gates, facilities and services.</p>
                        </div>
                        <div className={styles["date-chip"]}>⌖ SkyView Airport</div>
                    </header>

                    <div className={styles["map-controls"]}>
                        <div className={styles.tabs}>
                            <button className={`${styles.tab} ${styles.active}`} data-terminal={1}>
                                Terminal 1
                            </button>
                            <button className={styles.tab} data-terminal={2}>
                                Terminal 2
                            </button>
                        </div>

                        <input
                            id="map-search"
                            type="search"
                            placeholder="Find a gate or facility (e.g. A8)"
                        />
                    </div>

                    <section className={styles["map-layout"]}>
                        <div className={styles["map-canvas"]}>
                            <div className={styles["map-caption"]}>
                                <b id="terminal-label">TERMINAL 1</b>
                                <span>Illustrative terminal layout</span>
                            </div>

                            <div className={styles["terminal-map"]} id="terminal-map">
                                <div className={`${styles["map-wing"]} ${styles["left-wing"]}`}>
                                    <span className={`${styles.gate} ${styles["gate-a"]}`}>A2</span>
                                    <span className={`${styles.gate} ${styles["gate-b"]}`}>A4</span>
                                    <span className={`${styles.gate} ${styles["gate-c"]}`}>A6</span>
                                    <span className={`${styles.gate} ${styles["gate-d"]}`}>A8</span>
                                    <span className={`${styles.gate} ${styles["gate-e"]}`}>A10</span>
                                    <span className={`${styles.gate} ${styles["gate-f"]}`}>A12</span>
                                    <span className={`${styles.gate} ${styles["gate-g"]}`}>A14</span>
                                    <span className={`${styles.gate} ${styles["gate-h"]}`}>A16</span>
                                </div>

                                <div className={`${styles["map-wing"]} ${styles["right-wing"]}`}>
                                    <span className={`${styles.gate} ${styles["gate-a"]}`}>B2</span>
                                    <span className={`${styles.gate} ${styles["gate-b"]}`}>B4</span>
                                    <span className={`${styles.gate} ${styles["gate-c"]}`}>B6</span>
                                    <span className={`${styles.gate} ${styles["gate-d"]}`}>B8</span>
                                    <span className={`${styles.gate} ${styles["gate-e"]}`}>B10</span>
                                    <span className={`${styles.gate} ${styles["gate-f"]}`}>B12</span>
                                    <span className={`${styles.gate} ${styles["gate-g"]}`}>B14</span>
                                    <span className={`${styles.gate} ${styles["gate-h"]}`}>B16</span>
                                </div>

                                <div className={styles["map-core"]}>
                                    <div className={styles.facility}>
                                        ▣<small>Security</small>
                                    </div>

                                    <div className={styles["map-corridor"]} />

                                    <div className={`${styles.facility} ${styles.checkin}`}>
                                        ▤<small>Check-in</small>
                                    </div>

                                    <div className={`${styles.facility} ${styles.entrance}`}>
                                        ↑<small>Main entrance</small>
                                    </div>
                                </div>

                                <div className={styles["map-pin"]}>● You are here</div>
                            </div>

                            <div className={styles["map-bottom-note"]}>
                                Use the facilities list to find check-in, security, gates and more.
                            </div>
                        </div>

                        <aside className={`${styles.panel} ${styles["facilities-panel"]}`}>
                            <div className={styles["panel-heading"]}>
                                <div>
                                    <h3>Facilities</h3>
                                    <p>Terminal services</p>
                                </div>
                            </div>

                            <div className={styles["facility-list"]}>
                                <button className={styles["facility-item"]} data-facility="Gates">
                                    <span className={`${styles["facility-icon"]} ${styles.blue}`}>✈</span>
                                    <span>
                                        <b>Gates</b>
                                        <small>Boarding gates A1–B16</small>
                                    </span>
                                    <span>→</span>
                                </button>

                                <button className={styles["facility-item"]} data-facility="Check-in">
                                    <span className={`${styles["facility-icon"]} ${styles.teal}`}>▤</span>
                                    <span>
                                        <b>Check-in</b>
                                        <small>Departure counters</small>
                                    </span>
                                    <span>→</span>
                                </button>

                                <button className={styles["facility-item"]} data-facility="Security">
                                    <span className={`${styles["facility-icon"]} ${styles.blue}`}>▣</span>
                                    <span>
                                        <b>Security</b>
                                        <small>Passenger screening</small>
                                    </span>
                                    <span>→</span>
                                </button>

                                <button className={styles["facility-item"]} data-facility="Baggage Claim">
                                    <span className={`${styles["facility-icon"]} ${styles.orange}`}>▰</span>
                                    <span>
                                        <b>Baggage Claim</b>
                                        <small>Arrivals level</small>
                                    </span>
                                    <span>→</span>
                                </button>

                                <button className={styles["facility-item"]} data-facility="Toilets">
                                    <span className={`${styles["facility-icon"]} ${styles.blue}`}>♙</span>
                                    <span>
                                        <b>Toilets</b>
                                        <small>Located throughout</small>
                                    </span>
                                    <span>→</span>
                                </button>

                                <button className={styles["facility-item"]} data-facility="Restaurants">
                                    <span className={`${styles["facility-icon"]} ${styles.green}`}>♨</span>
                                    <span>
                                        <b>Restaurants</b>
                                        <small>Food and drinks</small>
                                    </span>
                                    <span>→</span>
                                </button>

                                <button className={styles["facility-item"]} data-facility="Shops">
                                    <span className={`${styles["facility-icon"]} ${styles.pink}`}>▣</span>
                                    <span>
                                        <b>Shops</b>
                                        <small>Retail and duty free</small>
                                    </span>
                                    <span>→</span>
                                </button>

                                <button className={styles["facility-item"]} data-facility="Information">
                                    <span className={`${styles["facility-icon"]} ${styles.orange}`}>i</span>
                                    <span>
                                        <b>Information</b>
                                        <small>Passenger assistance</small>
                                    </span>
                                    <span>→</span>
                                </button>
                            </div>

                            <div className={styles["tip-box"]}>
                                <b>ⓘ Helpful tip</b>
                                <p>
                                    Allow enough time to reach your gate. Follow airport signs after
                                    security.
                                </p>
                            </div>
                        </aside>
                    </section>

                    <footer>
                        © 2026 SkyView International Airport{" "}
                        <span>Illustrative map · Not for real-world navigation</span>
                    </footer>
                </main>
            </div>
        </>
    );
};
