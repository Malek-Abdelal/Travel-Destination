import { Link } from "react-router-dom";
import './Tour.css'
function Tour(props){

    return (
        <Link id="link" to = {`/city/${props.id}`}>
            <div>
                <h3>{props.name}</h3>
                <img src={props.image} alt={props.name}/> 
            </div>
        </Link>
    );
}

export default Tour;