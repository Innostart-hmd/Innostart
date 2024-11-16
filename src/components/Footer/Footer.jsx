import { FaTelegram, FaPhoneFlip, FaLocationDot } from "react-icons/fa6";
import { IoPlanet } from "react-icons/io5";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.logo}>
          <img src="/images/Logo.png" alt="Logo" className={styles.imgLogo} />
          <div className="d-flex flex-column justify-content-center align-items-center mt-1 mt-md-0 me-lg-2">
            <span>مرکز نوآوری شروع</span>
          </div>
        </div>
        <div className={styles.address}>
          <span>
            <FaPhoneFlip style={{ marginLeft: "5px" }} />
            تلفن تماس: 09362379293
          </span>
          <span>
            <FaTelegram style={{ marginLeft: "5px" }} />
            <a href="https://t.me/innostart_hmd">
              کانال تلگرام: innostart_hmd@
            </a>
          </span>
          <span>
            <IoPlanet style={{ marginLeft: "5px" }} />
            <a href="https://innostart.ir/">وبسایت رسمی : www.innostart.ir</a>
          </span>
          <span>
            <FaLocationDot style={{ marginLeft: "5px" }} />
            آدرس: همدان - دانشگاه بوعلی سینا درب کشاورزی قدیم - جنب خوابگاه
            دانشجویی کوثر - مرکز نوآوری شروع
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
