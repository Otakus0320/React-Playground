import FileNameList from "./components/FileNameList/FileNameList.tsx";
import Editor from "./components/Editor/Editor.tsx";
import {useContext} from "react";
import {PlaygroundContext} from "../PlaygroundContext.tsx";

const CodeEditor = () => {
     const {
         files,
         setFiles,
         selectedFileName,
     } = useContext(PlaygroundContext)

    const file = files[selectedFileName]

    const onEditorChange = (value?: string) => {
        // add assert string
        files[file.name].value = value!;
        setFiles({...files});
    }

    return (
        <div style={{display: "flex", flexDirection:"column", height: "100%"}}>
            <FileNameList />
            <Editor file={file} onChange={onEditorChange} />
        </div>
    )
}

export default CodeEditor;