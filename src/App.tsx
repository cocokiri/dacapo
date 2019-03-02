import React, {Component} from 'react';
import './App.css';
import {Column, Image, HeaderWide, Text, Button} from './components/SimpleStyled'
import Widget from './Widget'


const width = "60vw"
const App = (projects) => (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>

        <Column style={{width: width}}>
            <br/>
            <br/>
            <br/>
            {projects.slice(-4).reverse().concat(projects.slice(0, 3)).map(p => (
                <>
                    <HeaderWide>{p.title.toUpperCase()}</HeaderWide>
                    {p.subtitle &&
                    <Text style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        color:"white",
                        background: "#ff8b40",
                        fontWeight: "bold",
                        width: "60vw",
                        maxWidth: 100 + "%"
                    }}>{p.subtitle}</Text>}
                    <Image style={{marginBottom: 0.05 + "em", width: "97%"}} src={p.image}/>
                    {p.link &&
                    <Button style={{width: width}} onClick={() => window.location.replace(p.route || p.link)}> P L A Y </Button>}
                    <Text style={{
                        paddingLeft: "10%",
                        paddingRight: "10%",
                        width: width,
                        maxWidth: "80%"
                    }}><br/>{p.alttext || p.text}<br/></Text>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </>
            ))}
        </Column>
        <Widget/>
    </div>
)




export default App;
