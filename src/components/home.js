import React, { Component } from 'react'
import logo from './newslogo.png'

export default class home extends Component {
  render() {
    return (
      <div className="container  text-center" style={{marginTop:'100px'}}>
        <h1 >This is a new App made by me, Anubhav</h1>

        <img src={logo} className="rounded mx-auto d-block mt-3" style={{width:'100px'}} alt="news Don"></img>
        <h3 className="my-2">NEWS DON</h3>

        <h4 className="my-5">LIST OF ITEMS I HAVE USED IN THIS PROJECT</h4>
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><a href="https://react.dev/" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">React js</a></li>
            <li className="list-group-item"><a href="https://getbootstrap.com/" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Bootstrap</a></li>
            <li className="list-group-item"><a href="https://newsapi.org/" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">For news-news api</a></li>
            <li className="list-group-item"><a href="https://chat.openai.com/" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">For errors-Chat Gpt</a></li>
            <li className="list-group-item"><a href="https://www.codewithharry.com/" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Inspiration-code with harry</a></li>
        </ul>
      </div>
    )
  }
}
