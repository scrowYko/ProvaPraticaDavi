import { useState, useEffect } from "react";

function SearchInfoAPI() {
  const [clubes, setClubes] = useState(null);

  const fetchClub = async () => {
    try {
      const res = await fetch(`https://api.cartola.globo.com/clubes/`);
      const data = await res.json();

      const clubsArray = Object.values(data)
      setClubes(clubsArray);
      console.log(clubes);

    } catch (error) {
      console.error("Impossivel achar este clube", error);
    }
  };

  useEffect(() => {
    fetchClub(); // Fetch clubs on component mount
  }, []);

  if(!clubes){
    return <p>Carregando</p>
  }
  return (
    <div>
      <h1>Clubes</h1>
      {clubes.map((club, index) => (
        <ul key={index} className="clubes">
          <li>
            <img src={club.escudos['60x60']}/>
            <h2>{club.nome}</h2>
            <p>{club.apelido}</p>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default SearchInfoAPI;
