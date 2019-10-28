import React, {Component} from 'react';

import './App.css';

import DailyPlan from './DailyPlan/DailyPlan';

class App extends Component {
  state = {
    mon:{name: 'Monday', item1: 'Coding', item2: 'Painting', item3: 'Shisha', item4:''},
    tue:{name: 'Tuesday', item1: 'Coding', item2: 'Drinking', item3: 'Shisha', item4:'Playing'},
    wed:{name: 'Wednesday', item1: 'Coding', item2: '', item3: '', item4:''},
    thu:{name: 'Thursday', item1: 'Coding', item2: 'Excersizing', item3: 'Sleeping', item4:'Eating'},
    fri:{name: 'Friday', item1: 'Coding', item2: 'Visiting', item3: 'Shisha', item4:''},
    sat:{name: 'Saturday', item1: 'Coding', item2: 'Camping', item3: 'Shopping', item4:''},
    sun:{name: 'Sunday', item1: 'Coding', item2: 'Homework', item3: 'Shisha', item4:''}
  }
  render(){
    return (
      <div className="App">
        <DailyPlan 
          name={this.state.mon.name}
          item1={this.state.mon.item1}
          item2={this.state.mon.item2}
          item3={this.state.mon.item3}
          item4={this.state.mon.item4}
        />
        <DailyPlan 
          name={this.state.tue.name}
          item1={this.state.tue.item1}
          item2={this.state.tue.item2}
          item3={this.state.tue.item3}
          item4={this.state.tue.item4}
        />

        <DailyPlan 
          name={this.state.wed.name}
          item1={this.state.wed.item1}
          item2={this.state.wed.item2}
          item3={this.state.wed.item3}
          item4={this.state.wed.item4}
        />

        <DailyPlan 
          name={this.state.thu.name}
          item1={this.state.thu.item1}
          item2={this.state.thu.item2}
          item3={this.state.thu.item3}
          item4={this.state.thu.item4}
        />

        <DailyPlan 
          name={this.state.fri.name}
          item1={this.state.fri.item1}
          item2={this.state.fri.item2}
          item3={this.state.fri.item3}
          item4={this.state.fri.item4}
        />

        <DailyPlan 
          name={this.state.sat.name}
          item1={this.state.sat.item1}
          item2={this.state.sat.item2}
          item3={this.state.sat.item3}
          item4={this.state.sat.item4}
        />

        <DailyPlan 
          name={this.state.sun.name}
          item1={this.state.sun.item1}
          item2={this.state.sun.item2}
          item3={this.state.sun.item3}
          item4={this.state.sun.item4}
        />
      </div>
    );
  }
}

export default App;
