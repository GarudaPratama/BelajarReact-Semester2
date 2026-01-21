export function HeaderHelloWorld() {
    const text = "Hello World";
    return (
        <div>
            <h1 style = {{
                color: "red",
                backgroundColor: "aqua"
            }}>{text.toUpperCase()}</h1>
        </div>
    )
}