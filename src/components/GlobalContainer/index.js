import styled from 'styled-components'

const GlobalContainer = styled.div`
    display: flex;
    justify-content: center;
    
    width: 100%;
    max-width: 700px;
    margin: 40px auto;
    padding: 40px;

    background-color: rgba(255, 255, 255, .1);
    box-shadow: 20px 20px 50px rgba(0, 0, 0, .6);
    border-radius: 18px;
`

GlobalContainer.Left = styled.div`
    margin-left: -100;
`

export default GlobalContainer