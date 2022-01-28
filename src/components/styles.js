import styled from 'styled-components';

// ---------- Styles from component MovieRow ------------

export const MovieRowWrapper = styled.div `
  margin-bottom: 30px;

  h2 {
    margin: 0px 0px 0px 30px;
  }
`

export const ListArea = styled.div `
  overflow-x: hidden;
  padding-left: 30px;
`

export const MovieRowLeft = styled.div `
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  left: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.5s;

  &:hover {
    opacity: 1;
  }

  ${MovieRowWrapper}:hover & {
    opacity: 1;
  }

  @media (max-width: 760px) {
    opacity: 1;
  }
`

export const MovieRowRight = styled.div `
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.5s;

  &:hover {
    opacity: 1;
  }

  ${MovieRowWrapper}:hover & {
    opacity: 1;
  }

  @media (max-width: 760px) {
    opacity: 1;
  }
`

export const List = styled.div `
  transition: all ease 0.5s;
`

export const ListItem = styled.div `
  display: inline-block;
  width: 150px;
  cursor: pointer;

  img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
  }

  img:hover {
    transform: scale(1);
  }
`

// ---------- Styles from component FeaturedMovie ------------

export const SectionFeatured = styled.section `
  height: 100vh;
  background-size: cover;
  background-position: center;

  @media (max-width: 760px) {
    height: 95vh;
  }
`

export const Vertical = styled.div `
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`

export const Horizontal = styled.div `
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 25%, transparent 80%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  padding-bottom: 100px;
  padding-top: 70px;
`

export const Name = styled.div `
  font-size: 60px;
  font-weight: bold;

  @media (max-width: 760px) {
    font-size: 40px;
  }
`

export const Info = styled.div `
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;

  @media (max-width: 760px) {
    font-size: 16px;
  }
`

export const Points = styled.div `
  display: inline-block;
  color: #46d369;
  margin-right: 15px;
`

export const Year = styled.div `
  display: inline-block;
  margin-right: 15px;
`

export const Seasons = styled.div `
  display: inline-block;
  margin-right: 15px;
`

export const Description = styled.div `
  margin-top: 15px;
  font-size: 20px;
  color: #DCDCDC;
  max-width: 40%;

  @media (max-width: 760px) {
    font-size: 16px;
    max-width: 100%;
    margin-right: 30px;
  }
`

export const Buttons = styled.div `
  margin-top: 15px;
`

export const WatchButton = styled.a `
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  background-color: #FFF;
  color: #000;
  opacity: 1;
  transition: all ease 0.2s;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 760px) {
    font-size: 16px;
  }
`

export const MylistButton = styled.a `
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px; 
  background-color: #333;
  color: #FFF;
  opacity: 1;
  transition: all ease 0.2s;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 760px) {
    font-size: 16px;
  }
`
export const Genres = styled.div `
  margin-top: 15px;
  font-size: 18px;
  color: #DCDCDC;

  @media (max-width: 760px) {
    font-size: 16px;
  }
`

// ---------- Styles from component Header ------------

export const HeaderWrapper = styled.header `
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: ${props => (props.value ? `#141414` : `transparent`)};
  transition: all ease 0.8s;
`

export const Logo = styled.div `
  height: 25px;

  img {
    height: 100%;   
  }
`

export const User = styled.div `
  height: 35px;

  img {
    height: 100%;
    border-radius: 4px;   
  }
`