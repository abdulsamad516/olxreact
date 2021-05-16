import React from 'react';




function Footer(){
    return(
        <div>
               <footer>
        <div className="footy">
          <h3>
            Popular categories
          </h3>
          <ul className="ulli2">
            <li><a href="#">Cars</a></li>
            <li><a href="#">Flats For Rent</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Mobile Phones</a></li>
          </ul>
        </div>
        <div className="footy">
          <h3>
            TRENDING SEARCHES
          </h3>
          <ul className="ulli2">
            <li><a href="#">Bikes</a></li>
            <li><a href="#">Watches</a></li>
            <li><a href="#">Books</a></li>
            <li><a href="#">Dogs</a></li>
          </ul>
        </div>
        <div className="footy">
          <h3>
            About
          </h3>
          <ul className="ulli2">
            <li><a href="#">About OLX Group</a></li>
            <li><a href="#">OLX Blog</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">OLX for Businesses</a></li>
          </ul>
        </div>
        <div className="footy">
          <h3>
            OLX
          </h3>
          <ul className="ulli2">
            <li><a href="#">Help</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Legal &amp; Privacy information</a></li>
          </ul>
        </div>
        <div>
          <h3 className="heading">
            FOLLOW US
          </h3>
          <a href="https://www.facebook.com/"><img src="https://png.pngtree.com/element_our/md/20180518/md_5aff6081b74c8.jpg" alt="fb logo" width="25px" className="fb-logo" /> </a>
          <a href="https://www.instagram.com/"><img src="https://thumbnail.imgbin.com/25/23/21/imgbin-computer-icons-instagram-logo-sticker-logo-instagram-logo-yKeX4LvdimuAGKh8FaPfTJ2Q4_t.jpg" alt="fb logo" width="25px" className="insta-logo" /> </a>
          <a href="https://www.youtube.com/"><img src="https://png.pngtree.com/element_our/sm/20180506/sm_5aeee59357bbb.jpg" alt="fb logo" width="25px" className="youtube-logo" /> </a>
          <a href="https://twitter.com/?lang=en"><img src="https://www.soroptimistinternational.org/wp-content/uploads/2020/03/251-2517877_tweet-twitter-icon-icon-chirrup-icon-icon-twitter-png-format-twitter-logo.jpg" alt="fb logo" width="25px" height="25px " className="twitty-logo" /> </a>
        </div>
        <div className="png-div">
          <img src="https://statics.olx.com.pk/external/base/img/appstore.png" alt="" className="png" />
          <img src="https://statics.olx.com.pk/external/base/img/playstore_2x.png" alt="" className="png2" />
        </div>
      </footer>
        </div>
    )
}


export default Footer;