import React, { Component } from 'react';
import ab11 from './ab11.jpg';
import cock from './cock.jpg';
export default class NavbarComp extends Component{
    render(){
        return(
            <div>
                <h1>About</h1>
                <b>
                <ul id="list">
                <li><img id="images" src={ab11} alt="oops!!not displaying"></img></li></ul>
                <h2 id="head">OGGY</h2>
                <p>Oggy's defining trait is arguably his laziness, enjoying watching television, eating, and, on a couple of instances, listening to music. As usual, Oggy always chasing the cockroaches around the house when everytime they keep getting on his nerves</p>
                <ul id="list">
                <li><img id="images1" src={cock} alt="oops!!not displaying"></img></li></ul>
                <h2 id="head">COCKROACHES</h2>
                <p>The Cockroaches are a gang of three cockroaches named Dee Dee, Marky and Joey, who loves playing tricks on other characters such as Oggy and Jack. However, if the cats left, they would miss each other as seen in "Moving Out"</p>
                </b>
            </div>
        )
    }
}