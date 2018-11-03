import React, {Component} from 'react';
import styled from 'styled-components'
// import './css/Image.css';


const IMA = styled.img`
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

// const Image = (props) => ()

class Image extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    handleClick() {
        this.setState({isBig: !this.state.isBig});
        this.state.isBig ? this.setState({id: "none"}) : this.setState({id: "expanded"});
    }

    render() {
        const {path, styling, url} = this.props.data;
        return (

            <IMA src={path}
                 alt="Sketch" />
            // <a className="normalA" href={url}>
            //     <img className={styling}
            //          id={this.state.id}
            //          src={path}
            //          alt="Sketch"
            //          onClick={() => this.handleClick()}>
            //     </img>
            // </a>
        )
    }
}


export default Image;
