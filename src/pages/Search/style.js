import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`

export const Header = styled.div`
    background-color: white;
    height: 54px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 50px;
    align-items: center;

    div{
        display: flex;
        background: none;
        border-radius: 5px;
    }
   
    input{
        border: 0;
        font-size: 15px;
        color: white;
        outline: none;
        border-radius: 0 0 0px 5px;
        background: #A8CF45;
        padding: 8px 5px;
        ::placeholder{
            color: white;
        }
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: none;
        background: #A8CF45;
    }
    svg{
        color: white;
        border-radius: 5px;
        background: #A8CF45;
    }
    a{
            background: none;
             text-decoration: none;
        }
`
export const Button = styled.button`
        border: 0;
        cursor: pointer;
        background-color: #A8CF45;
        border-radius: 17px;
        padding: 9px;
        color: white;

       

        &:hover{
            opacity: 0.8;
        }
        &:active{
            opacity: 0.6;
        }
`

export const ContainerMovie = styled.div`
    //background-color: white;
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

export const Info = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 200px;
    
    p{
        background: white;
        padding: 94px;
        border-radius: 33px;
        font-size: 20px;
    }
`
