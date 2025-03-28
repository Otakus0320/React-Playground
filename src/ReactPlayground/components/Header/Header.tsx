import logoSvg from "./icons/logo.svg"
import styles from "./Header.module.scss"
import {useContext} from "react";
import {PlaygroundContext} from "../PlaygroundContext.tsx";
import {MoonOutlined, ShareAltOutlined, SunOutlined} from "@ant-design/icons";
import copy from "copy-to-clipboard";
import {message} from "antd";

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
                <ShareAltOutlined
                    style={{marginLeft: "10px"}}
                    onClick={() => {
                        copy(window.location.href);
                        message.success('Copied share link to clipboard!');
                    }}
                />
            </div>
        </div>
    )
}

export default Header;