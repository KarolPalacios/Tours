import Tour from "./Tour";

const Tours = ({tours, removeTour}) => {

  return (
    <section className="tours">
      <div className="title">
        <h1>Our Tours</h1>
        <div className="sidebar"></div>
      </div>
      <div className="tours-container">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour}/>
        ))}
      </div>
    </section>
  );
};

export default Tours;