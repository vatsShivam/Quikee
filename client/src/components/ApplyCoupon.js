import React, { Component } from 'react';
import axios from 'axios'; 
import { Link } from "react-router-dom";
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 

class SplineAreaChart extends Component {
  constructor(props) {
    super(props);
      this.state = {
         image:'',
         pdf:''
      }
   
  }

  componentDidMount() {
    axios
      .get(
        "/statics",
      
      )
      .then((resp) => {
        console.log(resp)
        // let Rating = [
        //   { title: "Grntee ", value: res["Grntee"] },
        //   { title: "Rating ", value: res["Rating"] },
        //   { title: "Rating_Agency ", value: res["Rating_Agency"] }
       this.setState({image:resp.data[0]})
       this.setState({pdf:resp.data[1]})
        // ];
      })
      .catch((error) => {
        // this.setState({ error, isLoading: false })
        console.log(error);
      });
  }
 
    render() {
      const image="SHIVAm";
      const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title:{
          text: "Graph Showing type of Uploaded files"
        },
        data: [{
          type: "pie", //change type to bar, line, area, pie, etc
          //indexLabel: "{y}", //Shows y value on all Data Points
          indexLabelFontColor: "#5A5757",
          indexLabelPlacement: "outside",
          dataPoints: [
            { y: this.state.image, label: "Image" },
            { y: this.state.pdf, label: "Pdf" }
            
          
           
          ]
        }]
      }
      
      return (

        <div>
                   <span style={{display:"flex",justifyContent:'flex-End'}} >
            <Link to={'/list'}  className="text-success"><p style = {{marginRight : '2vw',fontWeight:"bold",marginTop:"20px"}}>View List</p></Link></span>
      <div style={{marginTop:"100px"}}>

        <CanvasJSChart options = {options} 
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
      </div>
      )}
}

export default SplineAreaChart;                           