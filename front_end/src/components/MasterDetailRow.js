import react, { useState } from "react";
// import Card from "./Card";
import styles from "./MasterDetailRow.module.scss";

const MasterDetailRow = ({status, headerLabel, mainLabel, phone1, state, rowNumber, setPortalRowState, cardClick}) => {

    const [statusAccount, setStatusAccount] = useState(status);
    const [activeRow , setActiveRow] = useState(state);

    // console.log("index", index);
    // console.log("props", props);

    // const setActivePortalRow = () => {
    //     setActiveRow("active");
    //     props.setPortalRowState(Number(props.rowNumber));
    //     console.log("test",Number(props.rowNumber));

    // }

    const rowOnClickHandler = (ev) => {
        cardClick(rowNumber);
        console.log(rowNumber)
    }

    return (
        <div className={state === "active" ? styles.portalRow : styles.portalRowInactive} onClick={rowOnClickHandler} >
            <div
                className={`${styles.status} ${styles.statusBackground}`}
                status={status} // changes css classes for left edge of portal row
            >
                <div className={styles.statusText}>{status}</div>
            </div>

            <div className={styles.labelContainer}>
                <div className={styles.headerLabel}>
                    {headerLabel}
                </div>

                <div className={styles.mainLabel}>{mainLabel}</div>
                <div className={styles.subLabel}>{phone1}</div>
            </div>
        </div>
    );
};

export default MasterDetailRow;
