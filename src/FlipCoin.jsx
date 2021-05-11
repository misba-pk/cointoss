import React,{ Component } from 'react'
import Coin from './Coin'
import Head from './images/head.jpeg';
import Tail from './images/tail.jpeg';
import Bg from './images/bg.jpeg';
class FlipCoin extends Component{
static defaultProps = {
	coins : [
	{side:'head', imgSrc: Head},
	{side:'tail', imgSrc: Tail}
	]
}

constructor(props){
	super(props)
	this.state = {
	currFace : null,
	totalFlips:0,
	heads: 0
	}

	this.handleClick = this.handleClick.bind(this)
}
choice(arr){
	const randomIdx = Math.floor(Math.random() * arr.length)
	return arr[randomIdx]
}

flipCoin(){
	const newFace = this.choice(this.props.coins)
	this.setState(curState => {
	const heads = curState.heads +
	(newFace.side === 'head' ? 1 : 0)
	return {
		currFace:newFace,
		totalFlips:curState.totalFlips + 1,
		heads:heads
	}
	})
}

handleClick(){
	this.flipCoin()
}
render(){
	const {currFace, totalFlips, heads} = this.state
	return(
	<div style={{backgroundImage:`url(${Bg})`}}>
		<h1 style={{textAlign:"center",fontSize:50,padding:40}}><text style={{color:"white"}}>TOSS THE COIN!</text></h1>
		{currFace==null ?( <img className="rounded-circle" src={Head} style={{marginLeft:650,marginBottom:50}}/>): (<Coin info={currFace}/>)}
		<button onClick={this.handleClick}  className="btn btn" style={{width:170,height:50,marginLeft:665,background:"#E27AC2",alignItems:"center"}}><text style={{color:'white',fontStyle:"italic",fontWeight:"bold"}}>TOSS ME!</text></button>
		
		
     <p style={{textAlign:"center",fontSize:30,padding:100}}>
		<span className="badge badge-info"> total no. of tosses=</span><span className="badge badge-light m-2">{totalFlips} {totalFlips<=1 ?(<text>toss</text>):(<text>tosses</text>)}</span> <br/>
        <span className="badge badge-info">no.of heads=</span><span className="badge badge-light m-2">{heads} {heads<=1 ?(<text>head</text>):(<text>heads</text>)}</span><br/>
		<span className="badge badge-info">no.of tails=</span><span className="badge badge-light m-2">{totalFlips - heads} {totalFlips-heads<=1 ?(<text>tail</text>):(<text>tails</text>)}</span><br/>
		</p>


	</div>
	)
}
}

export default FlipCoin
