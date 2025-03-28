import classnames from 'classnames';
import React, {useEffect, useRef, useState} from "react";
import styles from "./FileNameList.module.scss"
import {Popconfirm} from "antd";

export interface FileNameItemProps {
    value: string,
    activated: boolean,
    creating: boolean,
    readonly: boolean,
    onEditComplete: (name: string) => void,
    onClick: () => void,
    onRemove: () => void,
}

export const FileNameItem: React.FC<FileNameItemProps> = (props) => {
    const {
        value,
        activated = false,
        creating,
        readonly,
        onClick,
        onEditComplete,
        onRemove,
    } = props;

    const [name, setName] = useState(value);
    const [editing, setEditing] = useState(creating);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDoubleClick = () => {
        setEditing(true);
        setTimeout(() => {
            inputRef?.current?.focus();
        }, 0)
    }

    const handelInputBlur = () => {
        setEditing(false);
        onEditComplete(name);
    }

    useEffect(() => {
        if (creating) {
            inputRef?.current?.focus();
        }
    }, [creating]);

    return (
        <div
            className={classnames(styles["tab-item"], activated ? styles.activated : null)}
            onClick={onClick}
        >
            {
                editing ? (
                    <input
                        ref={inputRef}
                        className={styles["tabs-item-input"]}
                        value={name}
                        onBlur={handelInputBlur}
                        onChange={(e) => setName(e.target.value)}
                    />
                ) : (<>
                        <span onDoubleClick={!readonly ? handleDoubleClick : () => {}}>{name}</span>
                        {
                            !readonly ? (
                                <Popconfirm
                                    title="Sure to delete?"
                                    okText="Delete"
                                    cancelText="Cancel"
                                    onConfirm={(e) => {
                                        e?.stopPropagation();
                                        onRemove();
                                    }}>
                                <span style={{marginLeft: 5, display: 'flex'}}>
                                    <svg width='12' height='12' viewBox='0 0 24 24'>
                                        <line stroke='#999' x1='18' y1='6' x2='6' y2='18'></line>
                                        <line stroke='#999' x1='6' y1='6' x2='18' y2='18'></line>
                                    </svg>
                                </span>
                                </Popconfirm>) : null
                        }
                    </>
                )
            }
        </div>
    )
}