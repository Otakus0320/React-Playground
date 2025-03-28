import logoSvg from "./icons/logo.svg"
import styles from "./Header.module.scss"
import {useContext} from "react";
import {PlaygroundContext} from "../PlaygroundContext.tsx";
import {MoonOutlined, SunOutlined} from "@ant-design/icons";

const Header = () => {
    const { theme, setTheme} = useContext(PlaygroundContext)

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img alt="logo" src={logoSvg} />
                <span>React Playground</span>
            </div>

            <div className={styles.links}>
                {
                    theme === "light" && (
                        <MoonOutlined
                            title="Change Dark Theme"
                            className={styles.theme}
                            onClick={() => setTheme("dark")}
                        />
                    )
                }
                {
                    theme === "dark" && (
                        <SunOutlined
                            title="Change Light Theme"
                            className={styles.theme}
                            onClick={() => setTheme("light")}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Header;