import {useContext, useEffect, useState} from "react";
import {PlaygroundContext} from "../../../PlaygroundContext.tsx";
import {FileNameItem} from "./FileNameItem.tsx";
import styles from "./FileNameList.module.scss"
import {APP_COMPONENT_FILE_NAME, ENTRY_FILE_NAME, IMPORT_MAP_FILE_NAME} from "../../../../files.ts";

const FileNameList = () => {
    const {
        files,
        selectedFileName,
        addFile,
        updateFileName,
        setSelectedFileName,
        removeFile,
    } = useContext(PlaygroundContext)

    const [tabs, setTabs] = useState([''])
    const [creating, setCreating] = useState(false);
    const readonlyFilenames = [ENTRY_FILE_NAME, IMPORT_MAP_FILE_NAME, APP_COMPONENT_FILE_NAME];

    useEffect(() => {
        setTabs(Object.keys(files))
    }, [files])

    const handelEditComplete = (name: string, prevName: string) => {
        updateFileName(prevName, name);
        setSelectedFileName(name);
        setCreating(false);
    }

    const addTab = () => {
        const newFileName: string = "comp" + Math.random().toString().slice(2,6) + ".tsx";
        addFile(newFileName);
        setSelectedFileName(newFileName);
        setCreating(true);
    }

    const handleRemove = (name: string) => {
        removeFile(name);
        setSelectedFileName(ENTRY_FILE_NAME);
    }

    return (
        <div className={styles.tabs}>
            {
                tabs.map((item, index, arr) => (
                <FileNameItem
                    key={item+index}
                    value={item}
                    readonly={readonlyFilenames.includes(item)}
                    creating={creating && index === arr.length - 1}
                    activated={selectedFileName === item}
                    onClick={() => setSelectedFileName(item)}
                    onEditComplete={(name:string) => {handelEditComplete(name, item)}}
                    onRemove={() => handleRemove(item)}
                ></FileNameItem>
            ))
            }
            <div className={styles.add} onClick={addTab}> + </div>
        </div>
    )
}

export default FileNameList;