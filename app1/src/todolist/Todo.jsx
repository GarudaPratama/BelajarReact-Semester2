export default function Todo({text, isCompleted, isDeleted = false}) {
    
    if (isDeleted) {
        return null
    }
    
    else if (isCompleted === "selesai") {
        return (
            <li>
                <del>{text}</del>
            </li>
        )
    } else {
        return (
            <li>{text}</li>
        )
    }
}