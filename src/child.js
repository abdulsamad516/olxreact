import React from 'react';







class Child extends React.Component{
    render(){
        return(
            <div className='mainChild'>
            <div className='childcard'>
            <div className='childcardsub'>
            <img src='https://apollo-singapore.akamaized.net/v1/files/i3za2xdi66622-PK/image;s=300x600;q=60'/>
            <h1>{this.props.price}</h1>
            <h1>{this.props.name}</h1>
            <h4>{this.props.disc}</h4>
            <button className='getDatabtn' onClick={()=>this.props.get_data('this is car')}>send data</button>
            <button className='getPricebtn' onClick={()=>this.props.get_data('price 25000')}>get price</button>
            </div>
            </div>
            </div>
        )
    }
}





export default Child;