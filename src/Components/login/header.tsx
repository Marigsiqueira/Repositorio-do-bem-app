import "./header.css"
import { appClient } from "../../api";
function Header(){

    return (
        <div className="header">
        <a href={appClient} className="nav-link">Home</a>
    </div>

    )

}
export default Header;