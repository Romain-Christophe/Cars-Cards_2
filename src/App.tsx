import Header from "./components/header";
import "./components/app.css"
import Card from "./components/Card";
import data from "./components/Data";


function App() {
  return (
    <>
    <Header/>
    <section className="card-section">
        {data.map((car) => (
          <Card
            key={car.id}
            model={car.model}
            brand={car.brand}
            year={car.year}
            imgSrc={car.imgSrc}
          />
        ))}
      </section>





    </>


  );
}

export default App;
