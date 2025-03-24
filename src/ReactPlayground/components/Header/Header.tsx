import logoSvg from "./icons/logo.svg"
import styles from "./Header.module.scss"

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img alt="logo" src={logoSvg} />
                <span>React Playground</span>
            </div>
        </div>
    )
}

export default Header;