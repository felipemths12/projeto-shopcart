import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom"

export default function NavBar() {

    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate(-1)
    }
    
    return(
        <>
        <div className="navbar">
            <ul>
                <li className="back"><button className="bback" onClick={handleBackClick}>VOLTAR</button></li>
                <li className="title"><strong>ShopCart</strong></li>
                <li className="cart"><button className="ccart">CARRINHO</button></li>
            </ul>
        </div>
        </>
    )
}