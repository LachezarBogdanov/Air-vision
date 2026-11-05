import { useState } from 'react';
import Aside from '../Aside/Aside';
import styles from './AirlineDesk.module.css'

export default function AirlineDesk() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <>
            <div className={styles["app-shell"]}>
                <Aside />
                <main className={styles["main-content"]}>
                    <header className={styles["page-title"]}>
                        <div>
                            <span className={styles.eyebrow}>CHECK-IN INFORMATION</span>
                            <h1>Airline Desk Table</h1>
                            <p>Find the check-in desk for your airline.</p>
                        </div>
                        <div className={styles["date-chip"]}>▤ Check-in desks</div>
                    </header>

                    <section className={`${styles.panel} ${styles["table-panel"]}`}>
                        <div className={`${styles["table-top"]} ${styles["airline-table-top"]}`}>
                            <div>
                                <h3>Airline directory</h3>
                                <p id="airline-count">10 airlines listed</p>
                            </div>
                            <input
                                id="airline-search"
                                className={styles["search-input"]}
                                type="search"
                                placeholder="⌕  Search airline..."
                            />
                        </div>

                        <div className={styles["table-scroll"]}>
                            <table id="airline-table">
                                <thead>
                                    <tr>
                                        <th>Airline</th>
                                        <th>Desk</th>
                                        <th>Terminal</th>
                                        <th>Services</th>
                                        <th />
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr data-name="Lufthansa">
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.lufthansa}`}>✈</span>
                                                <b>Lufthansa</b>
                                            </span>
                                        </td>
                                        <td><span className={styles["desk-number"]}>3</span></td>
                                        <td>1</td>
                                        <td>Check-in &amp; baggage drop</td>
                                        <td>
                                            <button className={styles["row-action"]} data-airline="Lufthansa" data-desk={3}>
                                                Details →
                                            </button>
                                        </td>
                                    </tr>

                                    <tr data-name="Ryanair">
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.ryanair}`}>R</span>
                                                Ryanair
                                            </span>
                                        </td>
                                        <td><span className={styles["desk-number"]}>12</span></td>
                                        <td>2</td>
                                        <td>Check-in &amp; baggage drop</td>
                                        <td>
                                            <button className={styles["row-action"]} data-airline="Ryanair" data-desk={12}>
                                                Details →
                                            </button>
                                        </td>
                                    </tr>

                                    <tr data-name="Wizz Air">
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.wizz}`}>W!</span>
                                                Wizz Air
                                            </span>
                                        </td>
                                        <td><span className={styles["desk-number"]}>15</span></td>
                                        <td>2</td>
                                        <td>Check-in &amp; baggage drop</td>
                                        <td>
                                            <button className={styles["row-action"]} data-airline="Wizz Air" data-desk={15}>
                                                Details →
                                            </button>
                                        </td>
                                    </tr>

                                    <tr data-name="Bulgaria Air">
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.bulgaria}`}>➤</span>
                                                Bulgaria Air
                                            </span>
                                        </td>
                                        <td><span className={styles["desk-number"]}>7</span></td>
                                        <td>1</td>
                                        <td>Check-in &amp; baggage drop</td>
                                        <td>
                                            <button className={styles["row-action"]} data-airline="Bulgaria Air" data-desk={7}>
                                                Details →
                                            </button>
                                        </td>
                                    </tr>

                                    <tr data-name="Turkish Airlines">
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.turkish}`}>●</span>
                                                Turkish Airlines
                                            </span>
                                        </td>
                                        <td><span className={styles["desk-number"]}>10</span></td>
                                        <td>2</td>
                                        <td>Check-in &amp; baggage drop</td>
                                        <td>
                                            <button className={styles["row-action"]} data-airline="Turkish Airlines" data-desk={10}>
                                                Details →
                                            </button>
                                        </td>
                                    </tr>

                                    <tr data-name="British Airways">
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.ba}`}>➤</span>
                                                British Airways
                                            </span>
                                        </td>
                                        <td><span className={styles["desk-number"]}>9</span></td>
                                        <td>1</td>
                                        <td>Check-in &amp; baggage drop</td>
                                        <td>
                                            <button className={styles["row-action"]} data-airline="British Airways" data-desk={9}>
                                                Details →
                                            </button>
                                        </td>
                                    </tr>

                                    <tr data-name="Air France">
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.af}`}>╱</span>
                                                Air France
                                            </span>
                                        </td>
                                        <td><span className={styles["desk-number"]}>14</span></td>
                                        <td>2</td>
                                        <td>Check-in &amp; baggage drop</td>
                                        <td>
                                            <button className={styles["row-action"]} data-airline="Air France" data-desk={14}>
                                                Details →
                                            </button>
                                        </td>
                                    </tr>

                                    <tr data-name="KLM">
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.klm}`}>KLM</span>
                                                KLM
                                            </span>
                                        </td>
                                        <td><span className={styles["desk-number"]}>11</span></td>
                                        <td>2</td>
                                        <td>Check-in &amp; baggage drop</td>
                                        <td>
                                            <button className={styles["row-action"]} data-airline="KLM" data-desk={11}>
                                                Details →
                                            </button>
                                        </td>
                                    </tr>

                                    <tr data-name="SAS">
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.sas}`}>SAS</span>
                                                SAS
                                            </span>
                                        </td>
                                        <td><span className={styles["desk-number"]}>16</span></td>
                                        <td>2</td>
                                        <td>Check-in &amp; baggage drop</td>
                                        <td>
                                            <button className={styles["row-action"]} data-airline="SAS" data-desk={16}>
                                                Details →
                                            </button>
                                        </td>
                                    </tr>

                                    <tr data-name="easyJet">
                                        <td>
                                            <span className={styles["airline-name"]}>
                                                <span className={`${styles["airline-logo"]} ${styles.easyjet}`}>easyJet</span>
                                                easyJet
                                            </span>
                                        </td>
                                        <td><span className={styles["desk-number"]}>8</span></td>
                                        <td>1</td>
                                        <td>Check-in &amp; baggage drop</td>
                                        <td>
                                            <button className={styles["row-action"]} data-airline="easyJet" data-desk={8}>
                                                Details →
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className={`${styles["empty-state"]} ${styles.hidden}`} id="no-airlines">
                            No airlines match your search.
                        </div>
                    </section>

                    <div className={styles["info-banner"]}>
                        <span className={styles["info-symbol"]}>i</span>
                        <div>
                            <b>Lufthansa is located at desk 3.</b>
                            <p>
                                Desk numbers and airline assignments are sample data and may change.
                            </p>
                        </div>
                    </div>

                    <footer>
                        © 2026 SkyView International Airport{" "}
                        <span>Demo information · Confirm desk details with airport staff</span>
                    </footer>
                </main>
            </div>

            <div className={`${styles["modal-backdrop"]} ${isVisible ? '' : styles.hidden}`} id="desk-modal">
                <div className={styles.modal}>
                    <button
                        className={styles["modal-close"]}
                        id="modal-close"
                        aria-label="Close"
                        type="button"
                        onClick={() => setIsVisible(() => false)}
                    >
                        ×
                    </button>

                    <span className={styles.eyebrow}>AIRLINE DESK DETAILS</span>
                    <h2 id="modal-airline">Lufthansa</h2>
                    <p id="modal-copy">Check-in and baggage drop information.</p>

                    <div className={styles["modal-desk"]}>
                        <small>CHECK-IN DESK</small>
                        <strong id="modal-desk">3</strong>
                    </div>

                    <p className={styles.muted}>
                        This is example airport information, not a live assignment.
                    </p>

                    <button 
                        className={styles.btn}
                        id="modal-done" 
                        type="button"
                        onClick={() => setIsVisible(() => false)}
                        >
                        Done
                    </button>
                </div>
            </div>
        </>
    );
};
