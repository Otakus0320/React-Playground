import {useContext, useEffect, useState} from "react";
import {PlaygroundContext} from "../PlaygroundContext.tsx";
import {compile} from "./compiler.ts";
import iframeRaw from "./iframe.html?raw"
import {IMPORT_MAP_FILE_NAME} from "../../files.ts";

const Preview = () => {
    const {files} = useContext(PlaygroundContext);
    const [compiledCode, setCompiledCode] = useState("");

    useEffect(() => {
        const res = compile(files);
        setCompiledCode(res)
    }, [files])

    const getIframeUrl = () => {
        const res = iframeRaw
            .replace(
                '<script type="importmap"></script>',
                `<script type="importmap">${files[IMPORT_MAP_FILE_NAME].value}</script>`
            )
            .replace(
                '<script type="module" id="appSrc"></script>',
                `<script type='module' id='appSrc'>${compiledCode}</script>`
            )
        return URL.createObjectURL(new Blob([res], {type: "text/html"}))
    }
    useEffect(() => {
        setIframeUrl(getIframeUrl())
    }, [files[IMPORT_MAP_FILE_NAME].value, compiledCode]);

    const [iframeUrl, setIframeUrl] = useState(getIframeUrl());

    return (
        <div style={{height: '100%'}}>
            <iframe
                src={iframeUrl}
                style={{
                    width: "100%",
                    height: "100%",
                    padding: 0,
                    border: "none",
                }}/>
        </div>
    )
}

export default Preview