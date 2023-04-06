import Tour from './tour/Tour';

function Tours(props){
  
    return (
        <div>
            {props.data.map((ele) => {
                return (
                    <div key = {ele.id}>
                        <Tour id = {ele.id} name = {ele.name} image = {ele.image}/>
                    </div>
                );
            })}
       </div>
    );
}

export default Tours;