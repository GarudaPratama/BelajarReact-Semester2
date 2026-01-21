import './HelloWorld.css'

export default function Container({children}) {
    return (
        <div>
            <nav>
                <h1>Programmer</h1>
            </nav>
            
            {children}
            <footer>
                <p className='footer'>2024 Programmer</p>
            </footer>
        </div>
    )
}
