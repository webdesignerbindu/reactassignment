import React, { Component } from 'react';
import Bindu from './Bindu';
import home1 from './home1.jpg';
export default class NavbarComp extends Component{
    render(){
        return(
            <div>
                <h1 id="comp">Home</h1>
                <img id="h_image" src={home1} alt="oops!! no image"></img>
                <b>
                <p id="imgdes">Characters of OGGY AND COCKROACHES</p>
                <p >This Website is Designed by <Bindu/></p></b>
                <h1 id="head">WELCOME TO THE PAGE</h1>
            </div>
        )
    }
}