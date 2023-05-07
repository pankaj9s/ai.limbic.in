import React from 'react';
import Icon1 from '../../images/5.svg';
import Icon2 from '../../images/4.svg';
import Icon3 from '../../images/3.svg';

import {
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesWrapper,
    ServicesIcon,
    ServicesP,
    ServicesCard
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Complete Analysis of Video calls</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Meetings</ServicesH2>
                <ServicesP>Deep Analysis</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Graphical ANalysis</ServicesH2>
                <ServicesP>You can access our platform online anywhere in the world</ServicesP>
                </ServicesCard>
               
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>Unlock our special Benifits by becomeing Premium member</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
