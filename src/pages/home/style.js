import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
`

export const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 54px;

    div{
        display: flex;
        gap: 10px;
        align-items: center;    
    }
    button{
        border: 0;
         background: none;
         cursor: pointer;
    }
  
`

export const Movies = styled.div`
    margin-top: 57px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerCarousel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
`
