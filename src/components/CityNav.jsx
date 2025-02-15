import { Link } from "react-router-dom"


export default function CityNav() {
    
    return (
        <nav>
            <Link to="/">Main</Link> <br />
            <Link to="/London">London</Link> <br />
            <Link to="/Chicago">Chicago</Link> <br />
          
        </nav>
    );
}
