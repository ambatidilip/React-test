import React from 'react';
import Test from './Test';

// export default class Circle extends React.Component {
//   // ...
//   render() {
//     return <div>{this.state.hello}</div>;
//   }
// }

export default ({ circleName }) => <div> This is Circle with {circleName}
  <Test name="passing name" />
</div>;