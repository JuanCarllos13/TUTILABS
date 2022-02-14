import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
   
`

export const ContainerItem = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    width: 100%;
    flex-direction: column;
    ul{
        padding: 0;
        margin-top: 15px;
    }
    h1{
        @media(max-width: 610px){
                font-size: 23px;
            }
    }

    li{
        padding: 0;
        list-style: none;
        min-width: 600px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        @media(max-width: 610px){
            display: flex;
             align-items: center;
            justify-content: space-between;
            flex-direction: column;
            min-width: 0px;

         }

        span{
            font-size: 23px;
            text-align: center;

            @media(max-width: 610px){
                font-size: 20px;
            }

        }

        button{
            margin-left: 10px;
            border: 0;
            padding: 4px;
            border-radius: 4px;
        }
        
        div{
            a{
                text-decoration: none;
                color: brown;
            }

        @media(max-width: 610px){
            margin: 20px 0;

         }
        }
    }

`
