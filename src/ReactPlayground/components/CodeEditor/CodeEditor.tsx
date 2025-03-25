import FileName from "./components/FileNameList/FileName.tsx";
import Editor from "./components/Editor/Editor.tsx";

const CodeEditor = () => {
    const file = {
        name: "test.tsx",
        value: "import lodash from 'lodash';\nconst a = <div>Test text</div>;\n",
        language: "typescript",
    }

    function onEditorChange() {
        console.log(...arguments);
    }

    return (
        <div style={{display: "flex", flexDirection:"column", height: "100%"}}>
            <FileName />
            <Editor file={file} onChange={onEditorChange} />
        </div>
    )
}

export default CodeEditor;