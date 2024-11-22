import { useState, useEffect } from 'react'
import AppJumbotron from './AppJumbotron'
import AppCard from './AppCard'
import AppPagination from './AppPagination'

export default function AppMain({ children }) {
  const [charactersData, setCharactersData] = useState({})
  const [activePage, setActivePage] = useState(1)


  function fetchData(url = 'https://rickandmortyapi.com/api/character') {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        setCharactersData(data)
      })

  }

  function handlePaginationButtonClick(e) {
    console.log(e.target);
    // find the url
    const url = e.target.getAttribute('data-url')
    //console.log(url);


    // fetch the data
    fetchData(url)


    // find out if next was clicked or next
    const action = e.target.getAttribute('data-action')
    console.log(action);
    if (action === 'prev') {
      // decrement activePage
      // activePage = activePage - 1
      setActivePage(activePage - 1)
    } else {
      // increment active Page
      setActivePage(activePage + 1)
    }

  }
  useEffect(fetchData, [])




  return (
    <main>


      <AppJumbotron />

      <section className='characters'>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">


            {/* Loop over the results */}

            {
              charactersData.results ?

                charactersData.results.map(character => (

                  <AppCard key={character.id} character={character} />

                )) :

                <p>No results yet</p>

            }


          </div>

          {/* Pagination  */}
          {/* {prevUrl, nextUrl, activePage, pages, handlePaginationClick} */}

          <AppPagination prevUrl={charactersData.info?.prev} nextUrl={charactersData.info?.next} activePage={activePage} pages={charactersData.info?.pages} handlePaginationClick={handlePaginationButtonClick} />

        </div>
      </section>

      {children}
    </main>
  )
}