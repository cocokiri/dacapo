import React, {Component} from 'react';
import './App.css';
import {Column, Image, HeaderWide, Text, Button} from './components/SimpleStyled'

const width = "60vw"

const App = (projects) => (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>

        <Column style={{width: width}}>
            <br/>
            <br/>
            <br/>
            {projects.slice(0, 3).concat(projects.slice(-2)).map(p => (
                <>
                    <HeaderWide>{p.title.toUpperCase()}</HeaderWide>
                    {p.subtitle &&
                    <Text style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        color:"white",
                        background: "red",
                        fontWeight: "bold",
                        width: "60vw",
                        maxWidth: 100 + "%"
                    }}>{p.subtitle}</Text>}
                    <Image style={{marginBottom: 0.05 + "em", width: "97%"}} src={p.image}/>
                    {p.link &&
                    <Button style={{width: width}} onClick={() => window.location.replace(p.route)}> P L A Y </Button>}
                    <Text style={{
                        paddingLeft: "10%",
                        paddingRight: "10%",
                        width: width,
                        maxWidth: "80%"
                    }}>{p.alttext || p.text}</Text>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </>
            ))}
        </Column>
    </div>
)

export default App;
