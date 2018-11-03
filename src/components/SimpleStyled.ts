import styled from "styled-components";

const Column = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Image = styled.img`
    max-width: 85vw;
  z-index: 2;
  margin: 2em;
  max-height:70vh;
  transition: 0.3s;
  /*border: solid white 3px;*/

  padding: 0.5em;
  -ms-flex-item-align: center;
  align-self: center;
  -webkit-box-shadow: 0 5px 12px rgba(0, 0, 0, 0.6);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6);
`

const Text = styled<{primary? : boolean}, 'figcaption'>('figcaption')`
  background: yellow;
  text-align: center;
  align-self: center;
  padding: 1em;
  max-width: ${props => props.primary ? "50%" : "30%"};
  /*margin-top: -1em;*/
  color: rgba(50,50,50,0.9);

  -webkit-border-radius: 1px;
  -moz-border-radius:1px;
  border-radius:1px;
  -webkit-box-shadow:0 4px 9px rgba(0, 0, 0, 0.3);
  box-shadow:0 4px 9px rgba(0, 0, 0, 0.3);
`

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

export {Column, Header, Text, Image}