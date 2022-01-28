import React from 'react';

import * as S from './styles'

const FeaturedMovie = ({item}) => {
  
  let firstDate = new Date(item.first_air_date);

  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + '...';
  }

  return (
    <S.SectionFeatured style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
      <S.Vertical>
        <S.Horizontal>
          <S.Name>{item.original_name}</S.Name>
          <S.Info>
            <S.Points>{item.vote_average} pontos</S.Points>
            <S.Year>{firstDate.getFullYear()}</S.Year>
            <S.Seasons>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</S.Seasons>
          </S.Info>
          <S.Description>{description}</S.Description>
          <S.Buttons>
            <S.WatchButton href={`/watch/${item.id}`}>&#x23f5;Assistir</S.WatchButton>
            <S.MylistButton href={`/list/add/${item.id}`}>+ Minha Lista</S.MylistButton>
          </S.Buttons>
          <S.Genres><strong>Gêneros: </strong>{genres.join(', ')}</S.Genres>
        </S.Horizontal>
      </S.Vertical>
    </S.SectionFeatured>
  )
}

export default FeaturedMovie;