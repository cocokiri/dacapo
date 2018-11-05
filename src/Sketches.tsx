import React, {Component} from 'react';
import {Column, Grid, Header, Text, Image} from './components/SimpleStyled'
import notebookpic from "./images/notebooks.jpg"

const importAllImages = (r: any) => r.keys().map(r);
const sketches = importAllImages(require.context('./sketches/', false, /\.(gif|png|jpe?g|svg)$/))

const introPic =
    {
        name: "Travel notebooks starting Sep. 2014",
        path: notebookpic,
        caption: `What do you always put in these notebooks?!? people ask. \n\n
        Just for fun, you can catch about ${sketches.length} glimpses here.`,
        alt: "notebooks"
    }

class Sketches extends Component<{}, {zoom?: number}> {
    state: {zoom?: number} ={
        zoom: -1
    }
    render() {
        return (
            <>
                <Column>
                    <Image src={introPic.path} alt={introPic.alt}/>
                    <div style={{marginBottom: '0.2em'}}/>
                    <Header>{introPic.name}</Header>
                    <Text>{introPic.caption}</Text>
                </Column>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Grid>
                    {sketches
                        .map((sketch, index) => <Image
                            onClick={() => this.setState({zoom: index})}
                            src={sketch}
                            style={{maxHeight: this.state.zoom == index ? "75vw":"18vw", margin: '1.5rem'}}
                        />
                    )}
                </Grid>

            </>)
    }
}

export default Sketches;