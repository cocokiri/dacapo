import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//typescript allows only this way
// import styled from 'styled-components'
// import circuitBody from "./images/ElectricBody.gif";
// import female from "./images/Fragmentation.gif";
// import exploit from "./images/Exploitation.png";
// import leavinghome from "./images/LeavingHome.png";
// import narrativeillusion from "./images/NarrativeIllusion.png";
// import socialmedia from "./images/SocialMedia";
// import practice2 from "./images/BargueHead"
// import adman from "./images/TheAdMan.png";
// import practice from "./images/BargueFoot";
// // import bloggersphere from "./images/TheBloggersphere.png";
// import anim from "./images/Anim";
// import unequal from "./images/Inequality_low.jpg"
import theorists from "./images/TheTheorists.png";
import About from './About'
import styled from 'styled-components'
// import './css/Image.css';
import {Column, Image} from './components/SimpleStyled'


function importAll(r: any) {
    return r.keys().map(item => item.replace('./', ''));
}

// return r.keys().map(r)

const im = importAll(require.context('./images/', false, /\.(gif|png|jpe?g|svg)$/));

console.log("im", im)

// const Image = require('./components/Image').default;


let images = [
    {
        name: "The Theorists",
        path: theorists,
        caption: "The theorists sit on a platonic solid, " +
        "discussing their elaborate models while reality is having something else in mind"
    }
]




class App extends Component<{ name: string }> {
    render() {
        return (
            <Column>
                {images.map(image =>(
                    <React.Fragment>
                        <Image src={image.path}/>

                </React.Fragment>
                ))}

                <About/>
            </Column>
        );
    }
}

export default App;
