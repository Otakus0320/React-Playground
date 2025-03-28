import React, {useEffect, useState} from "react";
import classnames from "classnames";
import styles from "./message.module.scss"

export interface MessageProps {
    type: "error" | "warn";
    content: string;
}

const Message: React.FC<MessageProps> = (props) => {
    const { type, content } = props;
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setVisible(!!content);
    }, [content]);

    return (
        visible?
            <div className={classnames(styles.msg, styles[type])}>
                <pre dangerouslySetInnerHTML={{__html: content}}></pre>
                <button className={styles.dismiss} onClick={() => setVisible(false)}>x</button>
            </div>
            : null
    )
}

export default Message;