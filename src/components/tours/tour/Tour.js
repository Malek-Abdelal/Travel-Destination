import { Link, useParams } from "react-router-dom";
import './Tour.css'
function Tour(props){

    let {id} = useParams();
    id = props.id;
    
    return (

        <Link id="link" to = {`/city/${id}`}>
            <div>
                <h3>{props.name}</h3>
                <img src={props.image} alt={props.name}/> 
            </div>
                {/* <hr></hr> */}
        </Link>
    );
}

export default Tour;