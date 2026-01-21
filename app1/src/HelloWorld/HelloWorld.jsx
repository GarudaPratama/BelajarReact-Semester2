import { HeaderHelloWorld } from "./HeaderHelloWorld";
import { ParagraphHelloWorld } from "./ParagraphHelloWorld";
import './HelloWorld.css'

function HelloWorld() {
    const data = {
        title : "Hello World",
        subtitle : "Ini adalah subtitle",
        text : "Ini adalah Header",
    }

    return (
        <div>
            <HeaderHelloWorld {...data}/>
            <ParagraphHelloWorld {...data}/>
            
        </div>
    )
}   

export default HelloWorld;