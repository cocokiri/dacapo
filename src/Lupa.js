import React, {useState} from 'react'
import {Row} from './components/SimpleStyled'

const root = "https://wizdomx.herokuapp.com/";


const get = function (url) {
    return fetch(url, {method: 'GET'})
        .then(function (response) {
            return response.json();
        })
        .catch(function (err) {
            console.debug(`
            Content Fetch NO SUCCESS
            URL = ${url}
            ERROR = ${err}
            `)
        })
};


const styling = {
    red: {
        background: "HotPink",
        color: "white",
        fontSize: 14,
        opacity: 0.7,
        marginLeft: 0.5 + 'em'
    },
    cyan: {
        background: "DarkTurquoise",
        color: "white",
        fontWeight: "bold",
        opacity: 0.7,
        fontSize: 14,

    },
    orange: {
        background: "Coral",
        fontSize: 14,

        color: "white",
        opacity: 0.7,
        marginLeft: 0.5 + 'em'
    },
    emojiBox: {
        width: 2.5 + 'rem',
        height: 2.5 + 'rem',
    },
    textField: {
        // layout
        marginLeft: 1 + 'em',
        maxWidth: 50 + 'rem',
        display: 'flex',
        background: "#fff",
        boxShadow: 0.5 + "rem rgba(0, 0, 0, .3)"
    }
}


//TODO random viewers can see the activities of a Lupadillo

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            reviews: []
        }


    }

    componentDidMount() {
       /* get(root + 'reviews/all').then(reviews =>
            this.setState({
                reviews
            })
        )*/
    }


    render() {
        return (
            <div>
                <figcaption style={Object.assign({margin: 2 + 'rem', padding: 2 + 'rem'}, styling.cyan)}>Lupa Reader
                    <br/>
                    <a href={"https://chrome.google.com/webstore/detail/lupa-reader/jldgmbdpnaegnmbejnpdokhkmobbonhg?authuser=0"}>GET
                        the LUPA READER EXTENSION HERE</a>
                    <a href={"https://lupareader.herokuapp.com/"}>Check activity here</a>
                </figcaption>
                {/*<figcaption style={Object.assign({margin: 1 + 'rem', padding: 1 + 'rem'}, styling.orange)}>Group:
                    Handpicked
                    Testies -- {this.state.reviews.length} posts so far!

                </figcaption>
                <div>
                    {this.state.reviews.length < 1
                        ? <div>Loading Reviews ...</div>
                        : this.state.reviews
                            .sort((a, b) => b.timestamp - a.timestamp)
                            .map(review =>
                                <>
                                    <Row style={{marginLeft: 2 + 'rem'}}>
                                        <div key={review._id}>
                                            <button style={styling.cyan}>{"@" + review.handle + " "}</button>
                                            <button style={styling.red}> {" "} {review.title}</button>
                                            <button onClick={() => window.open(review.url, '_blank')}
                                                    style={styling.orange}><i>{review.url}</i></button>
                                        </div>
                                    </Row>
                                    <br/>
                                    <div style={styling.textField}>
                                        <div
                                            style={styling.emojiBox}>{review.emoji ? String.fromCodePoint(review.emoji) : null}</div>
                                        <figcaption style={{marginLeft: 1 + 'rem'}}>{review.comment}</figcaption>
                                    </div>
                                    <br/>
                                    <br/>
                                    <br/>
                                </>
                            )
                    }
                </div>*/}
            </div>)
    }
}

