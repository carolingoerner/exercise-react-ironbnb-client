import ApartmentDetails from "./ApartmentDetails";


function ApartmentList({apartments}) {
    console.log(apartments)
  return (
        <div>
          <h1>Apartments List</h1>
          <ul>
            {apartments.map(apartment => (
              <li key={apartment.id}>
                {apartment.title} - {apartment.pricePerDay} - {apartment.img}
              </li>
            ))}
          </ul>
        </div>
      );
}

export default ApartmentList;

