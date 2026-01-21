export function ParagraphHelloWorld({text = "Selamat Belajar ReactJS"}) {
    
    return (
        <div>
            <p>{text.toLowerCase()}</p>
        </div>
    )
}