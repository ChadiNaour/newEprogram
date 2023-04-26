import styled from 'styled-components'


const CounterSectionWrapper = styled.section`
    padding-block: 5rem;
    background-color: #F9F9F9;
    .counter__item {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 00px;
        span{
            color: ${props => props.theme.black};
            font-size: 35px;
            font-weight: 800;
            margin-top: 10px;
            margin-bottom: 5px;
        }
        p {
            color: ${props => props.theme.black};
            font-size: 16px;
            font-weight: 600;
            margin: 0;
        }
    }
    
    @media only screen and (max-width: 912px) {
        padding-block: 0rem;
        padding-top: 50px;
        .counter__item {
            text-align: center;
            margin-bottom: 50px;
        }
     }
    
`

export default CounterSectionWrapper;