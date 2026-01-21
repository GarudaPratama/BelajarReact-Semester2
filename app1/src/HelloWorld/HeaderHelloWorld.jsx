import './HelloWorld.css'

export function HeaderHelloWorld(props) {
    
    return (
        <div>
            <h1 className='title'>{props.title}</h1>
            <h2 className='subtitle'>{props.subtitle}</h2>


            <p style = {{
                color: "red",
                backgroundColor: "aqua"
            }}>{props.text.toUpperCase()}</p>
        </div>
    )
}