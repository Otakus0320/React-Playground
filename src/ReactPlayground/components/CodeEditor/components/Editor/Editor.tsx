import MonacoEditor, { OnMount } from '@monaco-editor/react'
import {createATA} from "./ata.ts";

const Editor = () => {
    const code = `const App = () => {
    return <div>test</div>    
}
export default App
`;

    const handleEditorMount: OnMount = (editor, monaco) => {
        // format code
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyJ, () => {
            editor.getAction('editor.action.formatDocument')?.run()
        })
        // setup editor's tsconfig
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            jsx: monaco.languages.typescript.JsxEmit.Preserve,
            esModuleInterop: true,
        })

        const ata = createATA((code, path) => {
            monaco.languages.typescript.typescriptDefaults.addExtraLib(code, `file://${path}`);
        })
        editor.onDidChangeModelContent(() => {
            ata(editor.getValue());
        })
        ata(editor.getValue());
    }

    return (
        <MonacoEditor
            height="100%"
            path={"test.tsx"}
            language={"typescript"}
            onMount={handleEditorMount}
            value={code}
            options={
                {
                    fontSize: 14,
                    scrollBeyondLastLine: false,
                    minimap: {
                        enabled: false,
                    },
                    scrollbar: {
                        verticalScrollbarSize: 6,
                        horizontalScrollbarSize: 6,
                    },
                }
            }
        />
    )
}

export default Editor;