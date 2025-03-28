import FileNameList from "./components/FileNameList/FileNameList.tsx";
import Editor from "./components/Editor/Editor.tsx";
import {useContext} from "react";
import {PlaygroundContext} from "../PlaygroundContext.tsx";

const CodeEditor = () => {
     const {
         theme,
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
            <Editor file={file} onChange={onEditorChange} options={{theme: `vs-${theme}`}} />
        </div>
    )
}

export default CodeEditor;