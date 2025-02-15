import { Link } from "react-router-dom"

export default function CityNav() {
    return (
        <nav>
            <Link to="/">
                <div>Main</div>
            </Link>
            <Link to="/city" >
                <div>City</div>
            </Link>
        </nav>
    )
}