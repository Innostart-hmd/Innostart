import { PiCaretLeftFill } from "react-icons/pi";
import styles from "./Card.module.css";

function Card({ data }) {
  return (
    <>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.info}>
        <div className={styles.category}>
          <PiCaretLeftFill size={20} />
          رشته: {data.category}
        </div>
        <div className={styles.domain}>
          <PiCaretLeftFill size={20} />
          حوزه: {data.domain}
        </div>
      </div>
    </>
  );
}

export default Card;
