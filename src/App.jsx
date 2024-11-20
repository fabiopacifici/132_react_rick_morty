import { useState } from 'react'

function App() {
  const [charactersData, setCharactersData] = useState({})



  function handleClick(e) {
    fetchData()
  }

  function fetchData(url = 'https://rickandmortyapi.com/api/character') {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        setCharactersData(data)
      })

    /*  axis.get(url)
       .then(res => {
         console.log(res);
 
       }) */
  }


  return (
    <>
      <h1>Rick Morty</h1>


      <button type='button' onClick={handleClick}>Fetch Characters</button>




      <section className='characters'>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">


            {/* Loop over the results */}

            {
              charactersData.results ?

                charactersData.results.map(character => (

                  <div className="col" key={character.id}>
                    <div className="card">
                      <img src={character.image} alt="" />
                      <p>
                        {character.name}
                      </p>
                    </div>
                  </div>

                )) :

                <p>No results yet</p>

            }


          </div>
        </div>

      </section>



    </>
  )
}

export default App
