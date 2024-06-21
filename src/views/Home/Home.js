import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery-modal';
import './Home.css';
import '../../assets/css/bootstrap/css/bootstrap.min.css'
import tokens from '../../assets/music/tokens.mp3'
import background_sound from '../../assets/music/Earned_it.mp3' 


function Home() {


  useEffect(() => {


  }, []);


  function unblockme (){
      // var tokens = document.getElementById("tokensAudio");
      // tokens.play();

      // var play_audio = document.getElementById("playAudio");
      // play_audio.pause();

      // setTimeout(()=>{
      //   window.location.href = 'https://www.streamatemodels.com/smm/app/signup?email=studio&signup_time=1683308527&studio=83491038&hmac=fd3cdcdb08ed1f5c39a6bae9d4ba53f3686881a89ca459806acea9f1f62f8055';
      // },3000)
  }

  return (
    <div className='logo'>
      <div className="container">

        <div className="col-md-12">
            <div className="neon">
              devs.jar 
            </div>            
        </div> 

      </div>


    </div>
  );
}


export default Home;