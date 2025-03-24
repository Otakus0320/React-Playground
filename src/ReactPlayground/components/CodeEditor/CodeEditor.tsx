import FileName from "./components/FileNameList/FileName.tsx";
import Editor from "./components/Editor/Editor.tsx";

const CodeEditor = () => {
    return (
        <div style={{display: "flex", flexDirection:"column", height: "100%"}}>
            <FileName />
            <Editor />
        </div>
    )
}

export default CodeEditor;