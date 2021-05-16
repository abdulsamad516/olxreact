import logo from './logo.svg';
import './App.css';
import Child from './child';
import { Component } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Lastsearch from './components/Lastsearch'
import Anothercard from './components/Anothercard'
import Allcards from './components/Allcards'
import Lastolx from './components/Lastolx'
import Footer from './components/Footer'
import Lowfoot from './components/Lowfoot'


class App extends Component{
  get_data(data){
    alert(data)
  }
  render(){
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <img className='img1' src='https://statics.olx.com.pk/external/base/img/hero_bg_pk.jpg' alt='sell it'/>
      <img className='imgadd' src='https://s0.2mdn.net/6232239/WordPressBanner_728x90.png' alt='add'/>
    <br/>
    <Lastsearch/>
    <br/>
    <h2 className='freshrec'>Fresh Recommendations</h2>
    <br/>
    <Allcards/>
    <button className="btn2"><a href="#" className="a2">LOAD MORE</a></button>
    <Lastolx/>
    <Footer/>
    <Lowfoot/>

 
    
   
    
    
    
    </div>
  );
}
}

export default App;

// 