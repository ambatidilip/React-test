import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Hello from './Components/Hello';
import Circle from './Components/Circle';
import Box from './Components/Box';



export default App => (
  // <div style={styles}>
  //   <Hello name="CodeSandbox" age="27" />   
  //   <Circle circleName="Index Circle"/>
  // </div>
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/box">Box</Link></li>
        <li><Link to="/circle">Circle</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Hello} />
      <Route path="/box" component={Box} />
      <Route path="/circle" component={Circle} />
    </div>
  </Router>


);


// export default () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/box">Box</Link></li>
//         <li><Link to="/circle">Circle</Link></li>
//       </ul>

//       <hr />

//       <Route exact path="/" component={Hello} />
//       <Route path="/box" component={Box} />
//       <Route path="/circle" component={Circle} />
//     </div>
//   </Router>


// );

