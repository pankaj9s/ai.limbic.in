import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {  
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIconLink,
    SocialIcons,
    WebsiteRights
} from "./FooterElements";
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
          };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/signin">About us</FooterLink>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms and conditions</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to="/signin">Submit Video</FooterLink>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms and conditions</FooterLink>
                        </FooterLinkItems>
                        </FooterLinkWrapper>

                        <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/signin">Instagram</FooterLink>
                        <FooterLink to="/signin">Facebook</FooterLink>
                        <FooterLink to="/signin">Youtube</FooterLink>
                        <FooterLink to="/signin">Twitter</FooterLink>
                        <FooterLink to="/signin">Linkedin</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/signin">About us</FooterLink>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms and conditions</FooterLink>
                        </FooterLinkItems>
                        </FooterLinkWrapper>
                </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo onClick={toggleHome}>
                   {process.env.REACT_APP_PROJECT_NAME}
                    </SocialLogo>
                    <WebsiteRights>
                    {process.env.REACT_APP_PROJECT_NAME}©{new Date().getFullYear()}. 
                        All rights reserved. D/B:Pankaj
                        </WebsiteRights>
                        <SocialIcons>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="Youtube">
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="Linkedin">
                            <FaLinkedin/>
                        </SocialIconLink>
                        </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
            </FooterWrap>
        </FooterContainer>
        
    )
}

export default Footer
