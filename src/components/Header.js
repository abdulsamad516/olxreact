import React from 'react';






class Header extends React.Component{
    render(){
        return(
          <div className='mainHeader'>
              <ul>
                  <li><img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/OLX_New_Logo.png/220px-OLX_New_Logo.png' alt='logo'/></li>
                  <li><input className='inputHead' id='text'/></li>
                  <li><input className='inputSearch' placeholder='Find Cars, Mobile Phones And More' id='text'/></li>
                  <li><a href='#'><img className='searchIcon' src='https://upload.wikimedia.org/wikipedia/commons/4/4f/Search-button.png' alt='search'/></a></li>
                  <li><a className='loginBtn' href='#'>Login</a></li>
                  <li><button className='sellBtn'>+SELL</button></li>
              </ul>
              
          </div>
        )
    }
}


export default Header;








              
             