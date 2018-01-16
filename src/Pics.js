import React, {Component} from 'react';
//import axios from 'axios';




var apiUrl = `https://pixabay.com/api/?key=7653881-c9827f8a3cdb8c7cfc7e08e62&q=`
class Pics extends Component{
	constructor(props){
		super(props);

		this.state = {
			picresults:[],
			

			
		};
		this.clicked = this.clicked.bind(this);
	}
	
	clicked(){
	fetch(apiUrl)
      .then((response) => response.json())
      .then((responseJson) => { 
      	const picresults = responseJson.hits.map(obj => obj.webformatURL)
      	this.setState({picresults})       
        
      })
      .catch((error) => {
        console.error(error);
      });
  }
	
	render(){
		
		return(
			<div>
				 <button onClick={this.clicked}>Get images</button>
					{
            this.state.picresults.map((link, i) => {
              console.log(link);
              var picture = <div key={i} className="pict"><img  width="500" height="250" src={link} /></div>
              return picture;
            })
          }
          {this.picture}
			</div>
			);
	}
}
export default Pics