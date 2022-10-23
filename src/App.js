import React, { Component } from 'react'
import $ from 'jquery'

export default class App extends Component {
  jQuerycode = () => {
    $(".pencil").click(function(){
      // change colors 
      $('button').css('background-color', 'white')
      $('.pencil').css('background-color', 'black')
      
      
      $('.canvas').click(function(){
        alert("afasdf")
      });
    });
    $(".eraser").click(function(){
      // change colors
      $('button').css('background-color', 'white')
      $('.eraser').css('background-color', 'black') 
    });
  }
  componentDidMount(){
    this.jQuerycode()
  }
  render() {
    return (
      <div>
        <div class="buttons">
          <button class="pencil">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.yh1xAGV6tkVSAU5tX6fzYwHaHZ%26pid%3DApi&f=1&ipt=149f285199c9399bf1f4338acaba2f037c2af5be886090d4be8891c9a42bc527&ipo=images" alt="pencil" />
          </button>
          <button class="eraser">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipartspub.com%2Fimages%2Feraser-clipart-cartoon-1.jpg&f=1&nofb=1&ipt=45a4ff44772d7de9c7ffdcd548ea6d35da57604e9439c67c52f4c46ed72db6c2&ipo=images" alt="eraser"/> 
          </button>
          <input name="Color Picker" type="color"/>
          <div class="canvas">
            <p>hello</p>
          </div>
        </div>
      </div>
    )
  }
}