import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <img
              src="/public/images/Logo.png"
              alt="Logo"
              className={styles.imgLogo}
            />
            <div className="d-flex flex-column justify-content-center align-items-center mt-1 mt-md-0 me-lg-2">
              <span>مرکز نوآوری شروع</span>
              <span>Shoroue Innovation Center</span>
            </div>
          </div>
          <hr className="my-0 mx-auto w-75" />
          <div>
            <p className="text-center"> لیست پروژه ها </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
