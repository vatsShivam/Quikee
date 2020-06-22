import React,{Component} from 'react'; 
import axios from 'axios'; 

class ReactRouter extends Component {  
    state = {
        id: window.location.pathname,
        selectedFile:null,
        responseToPost:'',
       
      };
      onChangeHandler=event=>{
        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0,
        })
      }
     onClickHandler = () => {
         let shivam=this.state.id.slice(6);
         console.log(shivam)

      const data = new FormData()
      data.append('file', this.state.selectedFile)
      data.append("editid",shivam)
      axios.post("/edit", data, { 
         
     })
    .then(res => { 
       console.log(res)
       this.setState({responseToPost:res.data})
       setTimeout(this.redirect, 3000);
    })
    }
    redirect = () => {
        window.location.replace("http://localhost:3000/list")
      };
    render(){
       
    return(
            
<div style={{marginTop:'100px'}}>
<div className="col-lg-4 offset-lg-4 col-md-8 offset-md-2 col-sm-10 "style={{backgroundColor:'#F2F3F4'}}>
  <div class="card-body">
    <h5 class="card-title text-center" style={{fontWeight:'bold',fontSize:'25px'}}> Edit Uploaded Files</h5>
   <div >
   <input style={{marginTop:'30px'}} className="offset-sm-4" type="file" name="file" onChange={this.onChangeHandler}/>
      <div  className="offset-sm-4 col-sm-3" style={{marginTop:'30px'}}>
                        <button  type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
                        </div> 
   </div>
  </div>
  </div>
  <p style={{textAlign:'center',marginTop:'40px',fontWeight:"bold",fontSize:'24px'}}>{this.state.responseToPost}</p>
  </div>
    )
    }
}
export default ReactRouter;