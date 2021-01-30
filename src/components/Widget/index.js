import styled from 'styled-components'

const Widget = styled.div`
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.darkOpacity};
  border-radius: 5px;
  padding: 20px;
  
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`

Widget.Content = styled.div`
  padding: 10px 15px;
  margin-bottom: 10px;
  text-align: left; 
  & > *:first-child {
    margin-top: 0%;
  }
  & > *:last-child {
    margin-bottom: 0%;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  a {
    color: #fff;
  }
`

Widget.Header = styled.header`
  display: flex;
  justify-content: left;
  align-items: left;
  padding: 28px 52px;
  background-color: ${({theme}) => theme.colors.darkOpacity};

  * {
    margin: 0;
  }
`

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({theme}) => theme.colors.contrastText};
  background-color: ${({theme}) => `${theme.colors.primary}60`};
  padding: 10px 15px;
  margin-bottom: 8px;
  border-radius: ${({theme}) => theme.borderRadius};
  transition: .3s;
  display: block;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: .5;
  }
`

export default Widget