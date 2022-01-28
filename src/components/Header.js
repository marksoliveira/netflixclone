import React from 'react';

import * as S from './styles';

const Header = ({black}) => {

  return (
    <S.HeaderWrapper value={black}>
      <S.Logo>
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
        </a>
      </S.Logo>
      <S.User>
        <a href="/">
          <img src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1" alt="Usuário" />
        </a>
      </S.User>
    </S.HeaderWrapper>
  )
}

export default Header;