import React from 'react';
import Child from '../child';
import { Component } from 'react';







function Lastsearch(){
    return(
        <div className='mainlast'>
            <div className='mainalign'>
            <div className='divh2'>
        <h2 className='h2based'>BASED ON YOUR LAST SEARCH</h2>
        </div>
        <div className='diva'>
        <h3 ><a className='avmore' href='#'>VIEW MORE</a></h3>
        </div>
        </div>
        <Child  disc='this is a watch' name="watch" price="RS 3500"/>
        <Child  disc='this is a house in phase 6' name="house" price="RS 1200000"/>
        <Child  price="RS 4900000" disc='this is a car' name="car" />
        </div>
    );
}








export default Lastsearch;