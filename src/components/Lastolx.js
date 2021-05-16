import React from 'react';
import playstore from '../playstore.webp';
import appstore from '../appstore.webp';







function Lastolx (){
    return(
        <div className='lastolxmaindiv'>
            
            <div className="bottom1">
        <img className="imgbottom" src="https://statics.olx.com.pk/external/base/img/phone-app.webp" alt="" />
        <div className="bottom2">
          <h1 className="bottomh1">TRY THE OLX APP</h1>
          <p className="bottomp">Buy, sell and find just about anything <br /> using the app on your mobile.</p>
        </div>
        <div>
        <h3 className="bottomh3">GET YOUR APP TODAY</h3>
        <img className="imgapp" src={playstore} alt="" />
        <img className="imgapp imgapp2" src={appstore} alt="" />
      </div>
      </div>
           
        </div>
    )
}



export default Lastolx;