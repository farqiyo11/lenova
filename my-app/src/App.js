import React, { Component } from 'react'
import Evos from './1peyc/Evos'

import Navbar1 from './navbar/Navbar1'

// import Cards1 from './caeds/Cards1'
import Main from "./Main.js";


export default class App extends Component {
  render() {
    return (
      <div>



        <Navbar1 />
        <Evos />
        <Main/>
        {/* <Cards1/> */}
      </div>
    )
  }
}

