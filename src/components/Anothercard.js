import React from 'react';






class Anothercard extends React.Component{
    render(){
        return(
            <div className='anothercardmain'>
            <div className='anotherchildcard'>
            <div className='anotherchildcard2'>
                <img className='img124' src='https://apollo-singapore.akamaized.net/v1/files/fzzysstghp483-PK/image;s=300x600;q=60'/>
               <h1>{this.props.name}</h1>
               <h1>{this.props.price}</h1>
               <h1>{this.props.disc}</h1>
            </div>
            </div>
            </div>
        );
    }
}







export default Anothercard;