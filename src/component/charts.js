import React, {Component} from 'react';
import {Bar,Pie} from 'react-chartjs-2';

class Graphs extends Component{
    constructor(props){ 
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);

        this.state = { active: false}
        this.state={
            chartData:props.chartData      
        }
    }

    toggleTag = () => {
        // function that will toggle active/false
        console.log("toggle is working")
          this.setState((prevState) => {
            this.active = !prevState.active
          });
        }
    // static defaultProps = {
    //     displayTitle:true,
    // }

    handleClick() {
            this.setState(function(prevState) {
                return {isToggleOn: !prevState.isToggleOn};
        });
    }

    // toggleChart() {
    //     this.options.type = this.options.type === 'line' ? 'bar' : 'line'
    // }

  


    render(){
        return(
            <div className="wrapper">
                    <div className="Bargraph">
                    <div>
                    <button onClick={this.handleClick}>
                        {this.state.isToggleOn ? 'Bar' : 'Pie'} 
                    </button>


                    <button onClick={this.toggleTag}>Toggle
                        {/* {this.state.isToggleOn ? 'Bar' : 'Pie'}  */}
                    </button>

                    {/* style={this.state.showMyComponent ? {} : { display: 'none' }}  */}

                        <Bar active={this.state.active} onClick={this.toggleTag} 
                        
                        data={this.state.chartData}
                            options={{
                                title:{
                                display:this.props.displayTitle,text:'Bar Chart',fontSize:18
                               }
                        }}
                         />  
               {/* style={this.state.showMyComponent ? {} : { display: 'none' }}  */}
                    <Pie active={this.state.active}
                    
                    data={this.state.chartData}
                        options={{
                            title:{

                                display:this.props.displayTitle,text:'Pie Chart',fontSize:18
                                
                            }
                        }}
                    />
                
                    </div>
            </div> </div>
        )
  }
   
}


export default Graphs;