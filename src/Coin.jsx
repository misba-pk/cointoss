import React,{ Component } from 'react'

class Coin extends Component{
render(){
	return(
	<div class='Coin'>
		<img className="rounded-circle" 
		style={{ width:'200px', height:'200px',marginLeft:650 ,marginBottom:50}}
		src={this.props.info.imgSrc}
		/>
	</div>
	)
}
}

export default Coin
