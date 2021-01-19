import React from "react";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import "./App.css";

function App() {
  return (
    <div class="App">
      <header class="header">
        <div class="header__logo-box">
          <img
            src={require("../src/img/logo-white.png")}
            alt="Logo"
            class="header__logo"
          />
        </div>
        <div class="header__text-box">
          <h1 class="heading-primary">
            <span class="heading-primary--main">Outdoors</span>
            <span class="heading-primary--sub"> is where life happens</span>
          </h1>
          <a href="#" class="btn btn--white btn--animated">
            Discovery our tours
          </a>
        </div>
      </header>

      <main>
        <section class="section-about">
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">
              Exciting tours for adventurous people.
            </h2>
          </div>

          <div class="row">
            <div class="col-1-of-2">
              <h3 class="heading-tertiary u-margin-bottom-small">
                You're going to fall in love with nature.
              </h3>
              <p class="paragraph">
                lorem jaisdbf askks askdfjn asdkjfnaksdvaksbdv kasjdfhsdhf
              </p>

              <h3 class="heading-tertiary u-margin-bottom-small">
                Live adventurous like you never have before.
              </h3>
              <p class="paragraph">
                lorem jaisdbf askks askdfjn asdkjfnaksdvaksbdv kasjdfhsdhf
              </p>

              <a href="#" class="btn-text">
                Learn more <text>&#8594;</text>
              </a>
            </div>
            <div class="col-1-of-2">
              <div class="composition">
                <img
                  src={require("../src/img/nat-1-large.jpg")}
                  alt="Photo 1"
                  class="composition__photo composition__photo--p1"
                />
                <img
                  src={require("../src/img/nat-2-large.jpg")}
                  alt="Photo 2"
                  class="composition__photo composition__photo--p2"
                />
                <img
                  src={require("../src/img/nat-3-large.jpg")}
                  alt="Photo 3"
                  class="composition__photo composition__photo--p3"
                />
              </div>
            </div>
          </div>
        </section>

        <section class="section-features">
          <div class="row">
            <div class="col-1-of-4">
              <div class="feature-box">
                <LanguageOutlinedIcon class="feature-box__icon"></LanguageOutlinedIcon>
                <h3 class="heading-tertiary u-margin-bottom-small">
                  explore the world
                </h3>
                <p class="feature-box__text">
                  Blasbhkab Blasdhflkh Bl;ahhbasdibib KHHO,,kdfghodufhv.
                </p>
              </div>
            </div>

            <div class="col-1-of-4">
              <div class="feature-box">
                <ExploreOutlinedIcon class="feature-box__icon"></ExploreOutlinedIcon>
                <h3 class="heading-tertiary u-margin-bottom-small">
                  Meet nature
                </h3>
                <p class="feature-box__text">
                  Blasbhkab Blasdhflkh Bl;ahhbasdibib KHHO,,kdfghodufhv.
                </p>
              </div>
            </div>

            <div class="col-1-of-4">
              <div class="feature-box">
                <MapOutlinedIcon class="feature-box__icon"></MapOutlinedIcon>
                <h3 class="heading-tertiary u-margin-bottom-small">
                  Find your way
                </h3>
                <p class="feature-box__text">
                  Blasbhkab Blasdhflkh Bl;ahhbasdibib KHHO,,kdfghodufhv.
                </p>
              </div>
            </div>

            <div class="col-1-of-4">
              <div class="feature-box">
                <FavoriteBorderOutlinedIcon class="feature-box__icon"></FavoriteBorderOutlinedIcon>
                <h3 class="heading-tertiary u-margin-bottom-small">
                  enjoy life
                </h3>
                <p class="feature-box__text">
                  Blasbhkab Blasdhflkh Bl;ahhbasdibib KHHO,,kdfghodufhv.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="section-tours">
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">Most popular tours.</h2>
          </div>

          <div class="row">
            <div class="col-1-of-3">
              <div class="card">
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--1">&nbsp;</div>
                  <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--1">
                      The sea explorer
                    </span>
                  </h4>
                  <div class="card__details">
                    <ul>
                      <li>3 day tours</li>
                      <li>Up to 30 people</li>
                      <li>2 tour guildes</li>
                      <li>Sleep in cozy hotels</li>
                      <li>Difficulty easy</li>
                    </ul>
                  </div>
                </div>
                <div class="card__side card__side--back card__side--back-1">
                  <div class="card__cta">
                    <div class="card__price-box">
                      <p class="card__price-only">Only</p>
                      <p class="card__price-value">$297</p>
                    </div>
                    <a href="#" class="btn btn--white">
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-1-of-3">
              <div class="card">
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--2">&nbsp;</div>
                  <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--2">
                      The sea explorer
                    </span>
                  </h4>
                  <div class="card__details">
                    <ul>
                      <li>3 day tours</li>
                      <li>Up to 30 people</li>
                      <li>2 tour guildes</li>
                      <li>Sleep in cozy hotels</li>
                      <li>Difficulty easy</li>
                    </ul>
                  </div>
                </div>
                <div class="card__side card__side--back card__side--back-2">
                  <div class="card__cta">
                    <div class="card__price-box">
                      <p class="card__price-only">Only</p>
                      <p class="card__price-value">$297</p>
                    </div>
                    <a href="#" class="btn btn--white">
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-1-of-3">
              <div class="card">
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--3">&nbsp;</div>
                  <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--3">
                      The sea explorer
                    </span>
                  </h4>
                  <div class="card__details">
                    <ul>
                      <li>3 day tours</li>
                      <li>Up to 30 people</li>
                      <li>2 tour guildes</li>
                      <li>Sleep in cozy hotels</li>
                      <li>Difficulty easy</li>
                    </ul>
                  </div>
                </div>
                <div class="card__side card__side--back card__side--back-3">
                  <div class="card__cta">
                    <div class="card__price-box">
                      <p class="card__price-only">Only</p>
                      <p class="card__price-value">$297</p>
                    </div>
                    <a href="#" class="btn btn--white">
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="u-center-text u-margin-top-big">
            <a href="#" class="btn btn--green">
              Discover all tours
            </a>
          </div>
        </section>

        <section class="section-stories" autoplay muted>
          <div class='bg-video'>
            <video class='bg-video__content'>
              <source src="img/video.mp4" type='video/mp4'></source>
              <source src="img/video.webm" type='video/webm'></source>
your browser is not supported!
            </video>
          </div>
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">We make people genuinely happy</h2>
          </div>

          <div class='row'>
            <div class='story'>
              <figure class='story__shape'>
                <img src={require("../src/img/nat-8.jpg")} class='story__img' alt='Person on a tour' />
                <figcaption class="story__caption" >Mary Smith</figcaption>
              </figure>
              <div class='story__text'>
                <h3 class='heading-tertiary u-margin-bottom-small'>
                  I had the best week ever with my family.
                </h3>
                <p>
                  lkasjdhflkasdjfh asdkljfhklasdhf lkasjdfhaksd  
                  lksadhfkas lksadhf  slkdfsks aksdfh sskshfs
                  dfkjndf sdfgkjdfkn  sdfjkvnksdjfv
                  lkasjdhflkasdjfh asdkljfhklasdhf lkasjdfhaksd  
                  lksadhfkas lksadhf  slkdfsks aksdfh sskshfs
                  dfkjndf sdfgkjdfkn  sdfjkvnksdjfv
                  \lkasjdhflkasdjfh asdkljfhklasdhf lkasjdfhaksd  
                  lksadhfkas lksadhf  slkdfsks aksdfh sskshfs
                  dfkjndf sdfgkjdfkn  sdfjkvnksdjfv
                </p>
              </div>
            </div>
          </div>

          <div class='row'>
            <div class='story'>
              <figure class='story__shape'>
                <img src={require("../src/img/nat-9.jpg")} class='story__img' alt='Person on a tour' />
                <figcaption class="story__caption" >Jack Wilson</figcaption>
              </figure>
              <div class='story__text'>
                <h3 class='heading-tertiary u-margin-bottom-small'>
                  My life is completely different now.
                </h3>
                <p>
                  lkasjdhflkasdjfh asdkljfhklasdhf lkasjdfhaksd  
                  lksadhfkas lksadhf  slkdfsks aksdfh sskshfs
                  dfkjndf sdfgkjdfkn  sdfjkvnksdjfv
                  lkasjdhflkasdjfh asdkljfhklasdhf lkasjdfhaksd  
                  lksadhfkas lksadhf  slkdfsks aksdfh sskshfs
                  dfkjndf sdfgkjdfkn  sdfjkvnksdjfv
                  \lkasjdhflkasdjfh asdkljfhklasdhf lkasjdfhaksd  
                  lksadhfkas lksadhf  slkdfsks aksdfh sskshfs
                  dfkjndf sdfgkjdfkn  sdfjkvnksdjfv
                </p>
              </div>
            </div>
          </div>

          <div class="u-center-text u-margin-top-big">
            <a href="#" class="btn btn-text">
              Read all stories
            </a>
          </div>
        </section>
      </main>
      {/*
      <section class="grid-test">
        <div class="row">
          <div class="col-1-of-2">Col 1 of 2</div>
          <div class="col-1-of-2">Col 1 of 2</div>
        </div>

        <div class="row">
          <div class="col-1-of-3">Col 1 of 3</div>
          <div class="col-1-of-3">Col 1 of 3</div>
          <div class="col-1-of-3">Col 1 of 3</div>
        </div>

        <div class="row">
        <div class="col-1-of-3">Col 1 of 3</div>
        <div class="col-2-of-3">Col 2 of 3</div>
        </div>
        
        <div class="row">
          <div class="col-1-of-4">Col 1 of 4</div>
          <div class="col-1-of-4">Col 1 of 4</div>
          <div class="col-1-of-4">Col 1 of 4</div>
          <div class="col-1-of-4">Col 1 of 4</div>
        </div>

        <div class="row">
        <div class="col-1-of-4">Col 1 of 4</div>
        <div class="col-1-of-4">Col 1 of 4</div>
        <div class="col-2-of-4">Col 2 of 4</div>
        </div>
        
        <div class="row">
        <div class="col-1-of-4">Col 1 of 4</div>
        <div class="col-3-of-4">Col 3 of 4</div>
      </div>
      </section>
 */}
    </div>
  );
}

export default App;
