import React from 'react'
import createBrowserHistory from 'history/createBrowserHistory';

import {
    Column,
    Interlude,
    BackGround,
    FeatureHighlight,
    Button,
    TextWhite,
    Image,
    Text,
    Header,
    HeaderWide
} from "./components/SimpleStyled"


const PlayPage = (projects = []) => (
    <BackGround>
        <title>Experiments</title>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Column style={{width: 75 + "%"}}>
                <Interlude>
                    Games that require a Microphone, will NOT work on IE (don't use IE in general).
                    Double-check your browser's microphone access to unblock this site (Settings > Content >
                    Microphone).
                </Interlude>
                <br/>
                <br/>
                <br/>
                {projects.map(p => (
                    <>
                        {p.title === "SpaceShooter 3D" && <Interlude>
                            Beneath are some Unity Experiments. I made them to learn programming.
                            They are buggy and badly written, so no more demos.
                        </Interlude>}

                        {/*<div style={{width: '80%', background: "rgba(0,0,0,0.4)"}}>*/}
                        <Column key={p.title} style={{flexGrow: 1, width: '80%', background: "rgba(0,0,0,0.4)"}}>
                            <HeaderWide>{p.title.toUpperCase()}</HeaderWide>
                            {p.subtitle && <Text style={{paddingLeft: 0, paddingRight: 0, width: "100%", maxWidth: 100 + "%"}}>{p.subtitle}</Text>}
                            <Image style={{marginBottom: 0.05+"em", width: "97%"}} src={p.image}/>
                            {p.link && <Button style={{width: "100%"}} onClick={() => window.location.replace(p.route)}> P L A Y </Button>}
                            <br/>
                            <br/>
                            <> {p.features.map(f => <FeatureHighlight>{f}</FeatureHighlight>)} </>
                            <TextWhite style={{width: "75%", maxWidth: 75 + "%"}}>{p.text}</TextWhite>
                            <br/>
                            <br/>
                        </Column>
                        {/*</div>*/}
                        <br/>
                        <br/>
                        <br/>
                    </>

                ))}
            </Column>
        </div>
    </BackGround>
)
export default PlayPage