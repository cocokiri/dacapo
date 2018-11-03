import React, {Component} from 'react';

import circuitBody from "./images/ElectricBody.gif";
import female from "./images/Fragmentation.gif";
import exploit from "./images/Exploitation.png";
import leavinghome from "./images/LeavingHome.png";
import narrativeillusion from "./images/NarrativeIllusion.png";
import socialmedia from "./images/SocialMedia";
import practice2 from "./images/BargueHead"
import adman from "./images/TheAdMan.png";
import practice from "./images/BargueFoot";
// import bloggersphere from "./images/TheBloggersphere.png";
import anim from "./images/Anim";
import unequal from "./images/Inequality_low.jpg"

import {Header, Text, Column, Image} from './components/SimpleStyled'



class About extends Component {
    render() { //soooo hacky..
        return (
            <React.Fragment>
                {/*<Nav/>*/}
                <Text>Hi, I'm Markus</Text>
                <div style={{margin: "2em"}}/>

                <Column>
                    {images.map(image =>(
                        <React.Fragment>
                            <Image src={image.path}/>

                        </React.Fragment>
                    ))}

                    <About/>
                </Column>

                {/*<Illustrate/>*/}

                <Header>Adhocumentaries</Header>
                <Text>Nothing fancy, just an old Iphone 5 and a 6$ desk tripod</Text>

                <br/>
                <Header primary>Adhocumentaries</Header>
                <Text primary>Nothing fancy, just an old Iphone 5 and a 6$ desk tripod</Text>
                <br/>

                <iframe
                    style={{boxShadow: "0 3px 2px rgba(0, 0, 0, 0.2)"}}
                    title="Seclusion: Learning to See" width="560" height="315"
                        src="https://www.youtube.com/embed/Vuq-5UTbry0" frameBorder="0"
                        allowFullScreen/>
                <br/>
                <iframe
                    style={{boxShadow: "0 3px 2px rgba(0, 0, 0, 0.2)"}}
                    title="Induction: Learning to Make" width="560" height="315"
                        src="https://www.youtube.com/embed/ZcmAc-bAXqY"
                        frameBorder="0" allowFullScreen/>
                <br/>
                <br/>

            </React.Fragment>
        );
    }
}

export default About