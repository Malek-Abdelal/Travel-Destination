import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";

function Home(props) {
  return (
    <>
      <Header/>
          return <Tours data = {props.data}/>;
      <Footer/>
    </>
  );
}

export default Home;
