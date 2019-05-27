
import React, {Component} from 'react';
import Graphs from './component/charts';
//import Toggle from './component/toggle';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      chartData:props.chartData
    }
  }
  componentWillMount(){
    this.getChartData();
  }

getChartData(){
  this.setState({
      chartData:{ 
        labels:['Plane Ticket', 'Hotel ', 'Rental Car', 'Dinner', 'PostCards'],
            
      datasets:[{
        
         data:[ 268,199,49, 112, 3],
         backgroundColor:[
             'rgba(255, 99, 132, 0.6)',
             'rgba(54, 162, 235, 0.6)', 
             'rgba(255, 206, 86, 0.6)', 
             'rgba(75, 192, 192, 0.6)', 
             'rgba(255, 159, 64, 0.6)',
         ]
      }]
  }   

  })
}

 


  render() {
  return (
    <div className="App">
  <Graphs chartData={this.state.chartData}/>
 
 
    </div>
  );
}
}

export default App;
