import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';
function Home(props) {
    const data = props.data;
    return (
    <>
    <Header/>
    { 
        data.map(ele => {
            return ( 
                <Tours name = {ele.name} image = {ele.image}/>
            )
        }
        )
    }
    <Footer/>
    </>
    );
}

export default Home;