import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";

function Home(props) {
  const data = props.data;
  return (
    <>
      <Header/>
      <div>
        {data.map((ele) => {
          return <Tours id = {ele.id} name = {ele.name} image = {ele.image}/>;
        })}
      </div>
      <Footer/>
    </>
  );
}

export default Home;
