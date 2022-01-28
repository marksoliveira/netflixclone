import React, { useState } from 'react';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import * as S from './styles';

const MovieRow = ({title, items}) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) x = 0;

    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items.results.length * 150;
    if ((window.innerWidth - listWidth) > x) {
      x = (window.innerWidth - listWidth) - 60;
    }
    setScrollX(x);
  }

  return (
    <S.MovieRowWrapper>
      <h2>{title}</h2>
      <S.MovieRowLeft onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize: 50}} />
      </S.MovieRowLeft>
      <S.MovieRowRight onClick={handleRightArrow}>
        <NavigateNextIcon style={{fontSize: 50}} />
      </S.MovieRowRight>
      <S.ListArea>
        <S.List style={{marginLeft: scrollX, width: items.results.length * 150}}>
          {items.results.length > 0 && items.results.map((item, key) => (
            <S.ListItem key={key}>
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
            </S.ListItem>
          ))}
        </S.List>
      </S.ListArea>
    </S.MovieRowWrapper>
  )
}

export default MovieRow;