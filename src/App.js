import React, { useEffect, useState } from 'react';

import MovieDB from './MovieDB';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

import './App.css';

const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  
  useEffect(() => {
    loadAll()
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 50) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);
    
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  const loadAll = async() => {
    //Pegando a lista total de filmes
    let list = await MovieDB.getHomeList();
    setMovieList(list);

    //Pegando featured (filme em destaque)
    let originals = list.filter(i => i.slug === "originals");
    let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
    let chosen = originals[0].items.results[randomChosen];
    
    //Pegando as informações mais completas do filme em destaque
    let chosenInfo = await MovieDB.getMovieInfo(chosen.id, 'tv');
    setFeaturedData(chosenInfo);
  }

  return (
    <div>
      <Header black={blackHeader}/>
      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        Feito com <span role="img" aria-label="coração">❤</span> por Marcos Oliveira<br/>
        Direitos de imagem para Netflix<br/>
        Dados pegos do site Themoviedb.org
      </footer>
      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://www.filmelier.com/pt/br/news/wp-content/uploads/2020/03/Netflix_LoadTime-scaled.gif" alt="Loading" />
        </div>
      }
      
    </div>
  )
}

export default App;
