import {Allotment} from "allotment";
import 'allotment/dist/style.css'
import Header from "./components/Header/Header.tsx";
import CodeEditor from "./components/CodeEditor/CodeEditor.tsx";
import Preview from "./components/Preview/Preview.tsx";

const ReactPlayground = () => {
    return (
        <div style={{height: "100vh"}}>
            <Header />
            <Allotment defaultSizes={[100, 100]}>
                <Allotment.Pane minSize={500}>
                    <CodeEditor />
                </Allotment.Pane>
                <Allotment.Pane minSize={0}>
                    <Preview />
                </Allotment.Pane>
            </Allotment>
        </div>
    )
}

export default ReactPlayground;