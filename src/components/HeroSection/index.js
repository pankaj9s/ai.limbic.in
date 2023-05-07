import React, { useState } from 'react'
import { Button } from '../ButtonElements';
import Video from '../../images/robovid.mp4';
import childImage1 from '../../images/pixels/1.jpg';
import { HeroContainer, HeroBg,ImgBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    };
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                <VideoBg  autoPlay loop muted src={Video} type='video/mp4'/>
                <VideoBg  autoPlay loop muted src={Video} type='video/mp4'/> 
            </HeroBg>
            <HeroBg>
            <VideoBg  autoPlay loop muted src={Video} type='video/mp4'/> 
            <VideoBg  autoPlay loop muted src={Video} type='video/mp4'/>
            <VideoBg  autoPlay loop muted src={Video} type='video/mp4'/>
            <VideoBg  autoPlay loop muted src={Video} type='video/mp4'/> 
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    <HeroP>
                    Welcome to Limbic AI & Robotics. Start Learing AI and art & craft.
                </HeroP>
                </HeroH1>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
                        primary='true'
                        dark='true'>
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        <ImgBg src={childImage1} alt='loading...'/>
        </HeroContainer>
    )
}

export default HeroSection
