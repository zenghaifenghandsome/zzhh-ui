import {render} from "solid-js/web";
import {Button} from "../src/components/button"
const App = () =>{
    return(
        <>
            <div>zzhh-ui init</div>
            <Button>zzhh-ui-button</Button>
        </>
    )
}

render(
    () =>(<App />),document.getElementById("root") as HTMLDivElement
);