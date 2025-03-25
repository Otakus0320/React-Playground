import {useContext, useEffect, useState} from "react";
import {PlaygroundContext} from "../../../PlaygroundContext.tsx";
import {FileNameItem} from "./FileNameItem.tsx";
import styles from "./FileNameList.module.scss"

const FileNameList = () => {
    const {
        files,
        selectedFileName,
        setSelectedFileName,
    } = useContext(PlaygroundContext)

    const [tabs, setTabs] = useState([''])

    useEffect(() => {
        setTabs(Object.keys(files))
    }, [files])

    return (
        <div className={styles.tabs}>
            {tabs.map((item, index) => (
                <FileNameItem
                    key={item+index}
                    value={item}
                    activated={selectedFileName === item}
                    onClick={() => setSelectedFileName(item)}
                ></FileNameItem>
            ))}
        </div>
    )
}

export default FileNameList;