import styled from 'styled-components'; 
import Slider from 'react-slick';
 

const SliderWrapper = styled(Slider)`
`
const SliderItemWrapper = styled.div`
    width: auto;
    margin-inline: 5px;
    display: flex;
    //background-color: red;
    width: auto;
    padding: 0px;
    justify-content: center;
    align-items: center;
`


export {SliderWrapper, SliderItemWrapper};