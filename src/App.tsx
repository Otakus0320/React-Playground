import ReactPlayground from "./ReactPlayground/ReactPlayground.tsx";
import PlaygroundProvider from "./ReactPlayground/components/PlaygroundProvider.tsx";
import "./App.scss"

const App = () => {
    return (
        <PlaygroundProvider>
            <ReactPlayground />
        </PlaygroundProvider>
    )
}

export default App;