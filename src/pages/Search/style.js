import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: navajowhite;

`

export const Header = styled.div`
    height: 60px;
    background: aliceblue;
    display: flex;
    align-items: center;
    padding: 0 18px;
    width: 100%;
    
    `

export const ContainerMovie = styled.div`
    background-color: black;
    color: white;
    min-height: calc(100vh - 60px);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    padding: 20px 10px;
    width: 100%;
 

        @media(max-width: 1200px){
            grid-template-columns: repeat(auto-fit, minmax(200px, auto));
            gap: 10px;
        }

    div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 250px;
            height: 250px;
        }
    }
`
