import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
export const HeroContainer = styled.div`
//background: #cccccc;
background: #000000;
display: flex;
justify-content: center;
align-items: center;
//padding: 0 30px;
height: 688px;
position: relative;
z-index: 1;
//border-style: solid;
//border-color: red;
:before{
    content:'';
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: linear-gradient(180deg, rgba(0,0,0,0,2) 0%, transparent 100%);
    z-index:2;
}
`;

export const HeroBg= styled.div`
position: absoulute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
//border-style: grey;
//border-color: green;
`;

export const VideoBg = styled.video`
width: 50%;
height: 50%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
//border-style: solid;
//border-color: blue;
`;

export const ImgBg = styled.img`
width: 100%;
height:100%;
margin: 0 0 10px 0;
padding-right: 0;
//border-style: double;
//border-color: yellow;
`;

export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
//border-style: dotted;
//border-color: red;
`;

export const HeroH1 = styled.h1`
//margin-top:1px;
color: #fff;
font-size: 48px;
text-align: center;

@media screen and (max-width:768px){
    font-size:40px;
}
@media screen and (max-width: 480px){
    font-size: 32px;
}
`;

export const HeroP = styled.p`
padding-top: 50px;
margin-top: 90px;
color: #fff;
font-size: 20px;
text-align: center;
max-width: 1500px;
padding

@media screen and (max-width:768px){
    font-size:24px;
}
@media screen and (max-width: 480px){
    font-size: 18px;
}
`;

export const HeroBtnWrapper= styled.div`
padding-left:25px;
//padding-top:5px;
//padding-bottom:2px;
margin-top: 15px;
display: flex;
flex-direction: column;
align-items: center;
//border-style: line;
//border-color: red;
`;

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size:20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size:20px;

`;