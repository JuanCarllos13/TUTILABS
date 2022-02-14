import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    .rec.rec-arrow {
        background-color: #A8CF45;
        color: white;   
        filter: drop-shadow(0px 4px 4px rgba(0, 0,  0, 0.25));
        border: none;
    }

   .rec.rec-arrow:hover {
        border: 2px solid #A8CF45;
         background-color: white;
         color: #A8CF45;
    }

    .rec.rec-arrow:disabled {
        border: none;
        background-color: #bebebf;
        color: white;   
    }
    .sc-jrQzAO {
        background-color: none;
        border: 0;
        
    }
   
`

export const Movies = styled.div`
    margin-top: 57px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

    img{
        width: 250px;
        height: 250px;
    }
`

export const TitleCategory = styled.div`
    width: 80%;
    p{
        font-size: 20px
    }
`
