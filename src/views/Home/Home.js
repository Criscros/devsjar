import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery-modal';
import './Home.css';
import '../../assets/css/bootstrap/css/bootstrap.min.css'
import tokens from '../../assets/music/tokens.mp3'
import background_sound from '../../assets/music/Earned_it.mp3' 


function Home() {


  useEffect(() => {

    $('#Terms_Condition').modal();

    $('#Terms_Condition').modal({
      backdrop: 'static',
      keyboard: true, 
      show: true
    }); 
    $("#Terms_Condition").modal('show');

    $('#my-modal-ok').on('click', function() {
      $.modal.close();
      var audio = document.getElementById("playAudio");
      audio.volume = "0.5"
      audio.play();
    });

    $('#my-modal-no').on('click', function() {
      window.location.href = 'https://mokitajar.com';
    });


  }, []);


  function unblockme (){
      var tokens = document.getElementById("tokensAudio");
      tokens.play();

      var play_audio = document.getElementById("playAudio");
      play_audio.pause();

      setTimeout(()=>{
        window.location.href = 'https://www.streamatemodels.com/smm/app/signup?email=studio&signup_time=1683308527&studio=83491038&hmac=fd3cdcdb08ed1f5c39a6bae9d4ba53f3686881a89ca459806acea9f1f62f8055';
      },3000)
  }



  return (
    <div className='logo'>
      <div className="container">

        <div className="col-md-12">
          <div className="neon">
              EnPrivado  
            </div>

            {/* BUTTON STREAMATE */}
            <div className="menu">
                <div className="button" onClick={unblockme}> TRANSMITIR !</div>
            </div>

            {/* TOKEN AUDIO */}
            <audio   id="tokensAudio">
              <source src={tokens} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>

            {/* MUSIC */}
            <audio autoplay  loop id="playAudio">
              <source src={background_sound} type="audio/mp3" />
              Your browser does not support the audio element.

            </audio>
            
        </div> 

        {/* MODAL TERMS AND CONDITON */}
        <div className="modal" role="dialog" id="Terms_Condition">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">

              </div>
              <div className="modal-body">
                <h5 className="modal-title">ENPRIVADO</h5>
                <p>
                      es un plataforma para adultos .
                      Debes tener +18 para entrar
                      y estar de acuerdo con los terminos y condiciones del website  y sus servicios .
                  </p>
              </div>
              <div className="modal-footer">
                <button type="button" id="my-modal-ok" className="btn btn-primary">Aceptar</button>
                <button type="button" id="my-modal-no" className="btn btn-secondary">No</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}


export default Home;