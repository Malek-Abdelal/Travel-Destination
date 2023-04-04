import Tour from './tour/Tour';

function Tours(props){
  
    return (
       <div>
       <Tour id = {props.id} name = {props.name} image = {props.image}/>
       </div>
    );
}

export default Tours;