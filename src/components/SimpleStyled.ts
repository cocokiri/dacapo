import styled from "styled-components";

const Column = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Grid = styled.section`
   display: flex;
   -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
`

const Row = styled.section`
display:flex;
flex-direction: row;
width: 100vw;
justify-content: space-between;
text-align: left;
`

const BackGround = styled.div`
    background-image: linear-gradient(-170deg, #2376ae 0%, #c16ecf 100%);;
`

const Sketch = styled.img`
    max-height: 25vw;
`

const Interlude = styled.div`
    margin: 1em;
    padding: 1em;
    background: black;
    color: white;
`

const Button = styled.button`
    cursor: pointer;
    color: white;
   
    background: turquoise;
    
     &:hover {
    background: #786b99;
  }
  z-index: 5;
    transition-duration: 700ms;
    padding: 0.8em;
    font-size: 1.5em;
    font-weight: bold;
    width: 82%;
     -webkit-box-shadow: 0 5px 12px rgba(0, 0, 0, 0.6);
     box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
`

const FeatureHighlight = styled.div`
    color: rgba(50,50,50,0.9);
    background: yellow;
    padding: 1em;
    margin: 1em;
    font-size: 14px;
    font-weight: bold;
`

const Image = styled.img`
  max-width: 85vw;
  max-height: 80vh;
  
  z-index: 2;
  /*margin: 2em; */
  //max-height:70vh;
  transition: 0.3s;
  background: white;
  
  /*border: solid white 3px;*/
  padding: 0.5em;
  //border: 0.5rem white;
  -ms-flex-item-align: center;
  align-self: center;
  -webkit-box-shadow: 0 5px 12px rgba(0, 0, 0, 0.6);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6);
`

// @ts-ignore
const Text = styled<{ primary?: boolean }, 'p'>('p')`
  background: yellow;
  text-align: center;
  align-self: center;
  padding: 1em;
  //padding-top: 0.6em;
  //padding-bottom: 0.6em;
  margin: 0;
  max-width: ${props => props.primary ? "50%" : "30%"};
  /*margin-top: -1em;*/
  color: rgba(50,50,50,0.9);
  -webkit-border-radius: 1px;
  -moz-border-radius:1px;
  border-radius:1px;
  -webkit-box-shadow:0 4px 9px rgba(0, 0, 0, 0.3);
  box-shadow:0 2px 5px rgba(0, 0, 0, 0.3);
`

const TextWhite = styled.p`
  //background: yellow;
  text-align: center;
  align-self: center;
  padding: 1em;
  margin: 0;
  /*margin-top: -1em;*/
  color: whitesmoke;
`
// @ts-ignore
const Header = styled<{ primary?: boolean }, 'h1'>('h1')`
  margin:0;
  padding: ${p => p.primary ? "1em" : "0.6em"};
  text-align: center;
  background: black;
  color: white;
  width: ${p => p.primary ? "60vw" : "40vw"};
  font-weight: ${p => p.primary ? "bold" : "400"};
  font-size: 1.8rem;
  min-width: 40vw;
   -webkit-box-shadow:0 2px 4px rgba(0, 0, 0, 0.3);
  box-shadow:0 3px 2px rgba(0, 0, 0, 0.2);
`

const HeaderWide = styled.h1`
  margin:0;
  padding-top: 0.6em;
  padding-bottom: 0.6em;
  text-align: center;
  width: 100%;
  background: black;
  color: white;
  font-weight: bold;
  font-size: 1.8rem;
  min-width: 40vw;
   -webkit-box-shadow:0 2px 4px rgba(0, 0, 0, 0.3);
  box-shadow:0 3px 2px rgba(0, 0, 0, 0.2);
`

export {Row, TextWhite, BackGround, Interlude, HeaderWide, Grid, Button, Column, Header, Text, FeatureHighlight, Image}