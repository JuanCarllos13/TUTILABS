import styled from 'styled-components'

export const ContainerMain = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    height: 100vh;

    img{
        width: 250px;
        height: 250px;
        padding-top: 20px;
    }
    p{
       font-size: 30px;
       padding: 15px 0;
    }

    span{
        padding: 0 20px;
        font-style: italic;
        margin-bottom: 20px;
    }

`
export const Button = styled.div`
    

    button{
        margin-right: 17px;
        padding: 10px 10px;
        border: none;
        background: green;
        color: white;
        border-radius: 15px;
        cursor: pointer;
    }

    a{
        text-decoration: none;
        outline: none;
        color:white;
    }

`

export const InfoMovie = styled.div`
        display: flex;
        padding: 10px 10px;
        align-items: center;
        justify-content: center;

    p{
        margin-right: 15px;
        font-size: 1rem;
        font-weight: 500;
        color: var(--gray);
    }
    span{
        line-height: 1.5;
         font-size: 0.875rem;
         padding-top:10px;
    }
`

export const ContainerPlay = styled.div`
   display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    justify-content: center;
    height: 100vh;

    img{
        width: 90%;
        height: 90vh;
    }
`

export const Line = styled.div`
    height: 40px;
    border: 0.5px solid #BABABA;
`
