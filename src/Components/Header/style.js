import styled from 'styled-components'

export const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 54px;
    background: green;
    background-color: #FFFFFF;

    h1{
        background: none;
        color: #A8AAAC;
    }
    span{
        color: #BDD62E;
        background: none;
    }

    div{
        display: flex;
        gap: 10px;
        align-items: center;   
        justify-content: center ;
        background: none;
       
    }
    button{
        border: 0;
        cursor: pointer;
        margin-left: 20px;
        background-color: #A8CF45;
        padding: 5px 5px;
        border-radius: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        color: white;
        
        &:hover{
            opacity: 0.8;
        }
        &:active{
            opacity: 0.6;
        }
    }
    a{
        text-decoration: none;
        background: none;
    }
    svg{
        background: none;
    }


  
`
export const Button = styled.button`
        border: 0;
        cursor: pointer;
        background-color: #A8CF45;
        border-radius: 17px;
        padding: 9px;

        &:hover{
            opacity: 0.8;
        }
        &:active{
            opacity: 0.6;
        }
`
