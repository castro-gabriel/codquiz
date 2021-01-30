import styled from 'styled-components'

const GlobalContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    margin: 25px;

    width: 100%;
    height: 100%;
    max-width: 500px;
    padding: 0px 15px;

    background-color: rgba(255, 255, 255, .2);
    box-shadow: 20px 20px 50px rgba(0, 0, 0, .8);
    border-radius: 10px;

    z-index: 0;
    filter: blur(2px);
`

export default GlobalContainer