import styled from 'styled-components'

export const ContainerMain = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media(max-width: 700px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    
    @media(max-width: 700px){
        width: 100%;
        margin-top: 200px;
    }

    img{
        width: 250px;
        height: 250px;
        padding-top: 20px;

        @media(max-width: 700px){
            width: 80%;
            padding-top: 0px;

         }
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
        background: none;
    }
    

`

export const InfoMovie = styled.div`
        display: flex;
        padding: 10px 10px;
        align-items: center;
        justify-content: center;

        @media(max-width: 700px){
            display: block;
         }

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

    @media(max-width: 700px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    img{
        width: 80%;
        height: 90vh;

        
        @media(max-width: 700px){
            height: 250px;
            width: 250px;
            margin-top: 20px;
         }
    }
`

export const Line = styled.div`
    height: 40px;
    border: 0.5px solid #BABABA;

    @media(max-width: 700px){
            display: none;
         }
`
