import classnames from 'classnames';
import React, {useState} from "react";
import styles from "./FileNameList.module.scss"

export interface FileNameItemProps {
    value: string,
    activated: boolean,
    onClick: () => void,
}

export const FileNameItem: React.FC<FileNameItemProps> = (props) => {
    const {
        value,
        activated = false,
        onClick,
    } = props;

    const [name] = useState(value);

    return (
        <div
            className={classnames(styles["tab-item"], activated ? styles.activated : null)}
            onClick={onClick}
        >
            <span>{name}</span>
        </div>
    )
}