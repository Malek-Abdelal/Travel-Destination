
function Tours(props){
    
    return (
        <div>
               <h3>{props.name}</h3>
               <img src={props.image} alt={props.name}/> 
               <hr></hr>
        </div>
    );
}

export default Tours;