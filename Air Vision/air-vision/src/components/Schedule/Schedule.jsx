import Aside from '../Aside/Aside';
import styles from './Schedule.module.css'

export default function Schedule() {
    return (
        <>
            <div className={styles["schedule-shell"]}>
                <Aside />

                <main className={styles["main-content"]}>
                    <header className={styles["page-title"]}>
                        <div>
                            <span className={styles.eyebrow}>FLIGHT INFORMATION</span>
                            <h1>Flight Schedule</h1>
                            <p>
                                Check departures and arrivals at SkyView International Airport.
                            </p>
                        </div>
                        <div className={styles["date-chip"]}>
                            ▦ <span id="today-date">Airport schedule</span>
                        </div>
                    </header>

                    <div className={styles.toolbar}>
                        <div className={styles.tabs}>
                            <button
                                className={`${styles.tab} ${styles.active}`}
                                data-type="departures"
                            >
                                Departures
                            </button>
                            <button className={styles.tab} data-type="arrivals">
                                Arrivals
                            </button>
                        </div>

                        <div className={styles.filters}>
                            <input
                                id="flight-search"
                                type="search"
                                placeholder="Search flight, destination or airline..."
                            />

                            <select id="airline-filter">
                                <option value="">All airlines</option>
                                <option>Lufthansa</option>
                                <option>SAS</option>
                                <option>Wizz Air</option>
                                <option>Ryanair</option>
                                <option>British Airways</option>
                                <option>Turkish Airlines</option>
                                <option>Air France</option>
                                <option>Iberia</option>
                                <option>United Airlines</option>
                            </select>

                            <select id="status-filter">
                                <option value="">All statuses</option>
                                <option>On time</option>
                                <option>Boarding</option>
                                <option>Delayed</option>
                                <option>Arrived</option>
                            </select>
                        </div>
                    </div>

                    <section className={`${styles.panel} ${styles["table-panel"]}`}>
                        <div className={styles["table-top"]}>
                            <div>
                                <h3 id="schedule-label">Departures</h3>
                                <p id="flight-count">10 flights listed</p>
                            </div>
                            <span className={styles["live-dot"]}>● Sample data</span>
                        </div>

                        <div className={styles["table-scroll"]}>
                            <table id="flight-table">
                                <thead>
                                    <tr>
                                        <th>Flight</th>
                                        <th>Airline</th>
                                        <th>To / From</th>
                                        <th>Terminal</th>
                                        <th>Gate</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr data-type="departures" data-airline="Lufthansa" data-status="Boarding">
                                        <td><b>LH203</b></td>
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.lufthansa}`}>✈</span>
                                                Lufthansa
                                            </span>
                                        </td>
                                        <td>Frankfurt (FRA)</td>
                                        <td>1</td>
                                        <td>A8</td>
                                        <td>10:15</td>
                                        <td><span className={`${styles.status} ${styles.boarding}`}>Boarding</span></td>
                                    </tr>

                                    <tr data-type="departures" data-airline="SAS" data-status="On time">
                                        <td><b>SK451</b></td>
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.sas}`}>SAS</span>
                                                SAS
                                            </span>
                                        </td>
                                        <td>Stockholm (ARN)</td>
                                        <td>1</td>
                                        <td>B12</td>
                                        <td>10:40</td>
                                        <td><span className={`${styles.status} ${styles["on-time"]}`}>On time</span></td>
                                    </tr>

                                    <tr data-type="departures" data-airline="Wizz Air" data-status="On time">
                                        <td><b>W6 3172</b></td>
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.wizz}`}>W!</span>
                                                Wizz Air
                                            </span>
                                        </td>
                                        <td>Budapest (BUD)</td>
                                        <td>2</td>
                                        <td>C3</td>
                                        <td>11:20</td>
                                        <td><span className={`${styles.status} ${styles["on-time"]}`}>On time</span></td>
                                    </tr>

                                    <tr data-type="departures" data-airline="Ryanair" data-status="Delayed">
                                        <td><b>FR2106</b></td>
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.ryanair}`}>R</span>
                                                Ryanair
                                            </span>
                                        </td>
                                        <td>Dublin (DUB)</td>
                                        <td>2</td>
                                        <td>D7</td>
                                        <td>12:05</td>
                                        <td><span className={`${styles.status} ${styles.delayed}`}>Delayed</span></td>
                                    </tr>

                                    <tr data-type="departures" data-airline="British Airways" data-status="On time">
                                        <td><b>BA884</b></td>
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.ba}`}>➤</span>
                                                British Airways
                                            </span>
                                        </td>
                                        <td>London (LHR)</td>
                                        <td>1</td>
                                        <td>A14</td>
                                        <td>12:50</td>
                                        <td><span className={`${styles.status} ${styles["on-time"]}`}>On time</span></td>
                                    </tr>

                                    <tr data-type="departures" data-airline="Turkish Airlines" data-status="On time">
                                        <td><b>TK1028</b></td>
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.turkish}`}>●</span>
                                                Turkish Airlines
                                            </span>
                                        </td>
                                        <td>Istanbul (IST)</td>
                                        <td>2</td>
                                        <td>C6</td>
                                        <td>14:30</td>
                                        <td><span className={`${styles.status} ${styles["on-time"]}`}>On time</span></td>
                                    </tr>

                                    <tr data-type="departures" data-airline="Air France" data-status="On time">
                                        <td><b>AF1285</b></td>
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.af}`}>╱</span>
                                                Air France
                                            </span>
                                        </td>
                                        <td>Paris (CDG)</td>
                                        <td>1</td>
                                        <td>A10</td>
                                        <td>15:10</td>
                                        <td><span className={`${styles.status} ${styles["on-time"]}`}>On time</span></td>
                                    </tr>

                                    <tr data-type="departures" data-airline="Lufthansa" data-status="On time">
                                        <td><b>LH722</b></td>
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.lufthansa}`}>✈</span>
                                                Lufthansa
                                            </span>
                                        </td>
                                        <td>Munich (MUC)</td>
                                        <td>2</td>
                                        <td>D8</td>
                                        <td>16:45</td>
                                        <td><span className={`${styles.status} ${styles["on-time"]}`}>On time</span></td>
                                    </tr>

                                    <tr data-type="departures" data-airline="Iberia" data-status="On time">
                                        <td><b>IB3167</b></td>
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.iberia}`}>I</span>
                                                Iberia
                                            </span>
                                        </td>
                                        <td>Madrid (MAD)</td>
                                        <td>1</td>
                                        <td>A12</td>
                                        <td>17:30</td>
                                        <td><span className={`${styles.status} ${styles["on-time"]}`}>On time</span></td>
                                    </tr>

                                    <tr data-type="departures" data-airline="United Airlines" data-status="On time">
                                        <td><b>UA958</b></td>
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.united}`}>U</span>
                                                United Airlines
                                            </span>
                                        </td>
                                        <td>New York (EWR)</td>
                                        <td>2</td>
                                        <td>C4</td>
                                        <td>19:20</td>
                                        <td><span className={`${styles.status} ${styles["on-time"]}`}>On time</span></td>
                                    </tr>

                                    <tr data-type="arrivals" data-airline="Lufthansa" data-status="Arrived">
                                        <td><b>LH202</b></td>
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.lufthansa}`}>✈</span>
                                                Lufthansa
                                            </span>
                                        </td>
                                        <td>Munich (MUC)</td>
                                        <td>1</td>
                                        <td>A3</td>
                                        <td>09:50</td>
                                        <td><span className={`${styles.status} ${styles.arrived}`}>Arrived</span></td>
                                    </tr>

                                    <tr data-type="arrivals" data-airline="SAS" data-status="On time">
                                        <td><b>SK450</b></td>
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.sas}`}>SAS</span>
                                                SAS
                                            </span>
                                        </td>
                                        <td>Copenhagen (CPH)</td>
                                        <td>1</td>
                                        <td>B6</td>
                                        <td>10:35</td>
                                        <td><span className={`${styles.status} ${styles["on-time"]}`}>On time</span></td>
                                    </tr>

                                    <tr data-type="arrivals" data-airline="Wizz Air" data-status="On time">
                                        <td><b>W6 3171</b></td>
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.wizz}`}>W!</span>
                                                Wizz Air
                                            </span>
                                        </td>
                                        <td>Warsaw (WAW)</td>
                                        <td>2</td>
                                        <td>C2</td>
                                        <td>11:15</td>
                                        <td><span className={`${styles.status} ${styles["on-time"]}`}>On time</span></td>
                                    </tr>

                                    <tr data-type="arrivals" data-airline="Ryanair" data-status="On time">
                                        <td><b>FR2105</b></td>
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.ryanair}`}>R</span>
                                                Ryanair
                                            </span>
                                        </td>
                                        <td>Dublin (DUB)</td>
                                        <td>2</td>
                                        <td>D5</td>
                                        <td>12:00</td>
                                        <td><span className={`${styles.status} ${styles["on-time"]}`}>On time</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div id="no-flights" className={`${styles["empty-state"]} ${styles.hidden}`}>
                            No flights match your filters.
                        </div>
                    </section>

                    <footer>
                        © 2026 SkyView International Airport{" "}
                        <span>Demo information · Not live flight data</span>
                    </footer>
                </main>
            </div>
        </>
    );
};
