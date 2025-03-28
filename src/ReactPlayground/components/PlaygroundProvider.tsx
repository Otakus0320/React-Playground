import {PropsWithChildren, useEffect, useState} from "react";
import {compress, fileName2Language, uncompress} from "../utils.ts";
import {Files, PlaygroundContext, Theme} from "./PlaygroundContext.tsx";
import {initFiles} from "../files.ts";

const getFilesFromUrl = () => {
    let files: Files | undefined;
    try {
        const hash = uncompress(window.location.hash.slice(1));
        files = JSON.parse(hash);
    } catch (error) {
        console.error(error);
    }
    return files;
}

const PlaygroundProvider = (props: PropsWithChildren) => {
    const {children} = props;
    const [files, setFiles] = useState<Files>(getFilesFromUrl() || initFiles);
    const [selectedFileName, setSelectedFileName] = useState<string>('App.tsx');
    const [theme, setTheme] = useState<Theme>('light');

    const addFile = (fileName: string) => {
        files[fileName] = {
            name: fileName,
            language: fileName2Language(fileName),
            value: '',
        }
        setFiles({...files});
    }

    const removeFile = (fileName: string) => {
        delete files[fileName];
        setFiles({...files});
    }

    const updateFileName = (oldFieldName: string, newFieldName: string) => {
        if(!files[oldFieldName] || newFieldName === undefined || newFieldName === null) return;
        const {[oldFieldName]: value, ...rest} = files
        const newFile = {
            [newFieldName]: {
                ...value,
                language: fileName2Language(newFieldName),
                name: newFieldName,
            }
        }
        setFiles({
            ...rest,
            ...newFile,
        })
    }

    useEffect(() => {
        const hash = compress(JSON.stringify(files));
        window.location.hash = hash;
    }, [files]);

    return (
        <PlaygroundContext.Provider
            value={{
                files,
                theme,
                setTheme,
                selectedFileName,
                setSelectedFileName,
                setFiles,
                addFile,
                removeFile,
                updateFileName,
            }}
        >
            {children}
        </PlaygroundContext.Provider>
    )
}

export default PlaygroundProvider;