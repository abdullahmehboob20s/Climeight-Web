import React from "react";
import "./Hero.css";
import { HiChartBar } from "react-icons/hi";
import userImg1 from "assets/images/user-img-1.png";
import UserAvatar from "components/UserAvatar/UserAvatar";
import sponsor1 from "assets/images/sponsor-1.png";
import sponsor2 from "assets/images/sponsor-2.png";
import sponsor3 from "assets/images/sponsor-3.png";
import sponsor4 from "assets/images/sponsor-4.png";
import heroPhone from "assets/images/hero-mobile.png";

function Hero() {
  return (
    <div className="hero-wrapper">
      <img src={heroPhone} className="hero-phone-img" alt="" />
      <div className="container-wrapper">
        <div className="hero white mb-50px">
          <div className="hero-title-bar text-center mb-25px">
            <div className="hero-title-bar-top">
              <div>
                <p className="hero-title-left font-monument-regular fs-14px uppercase">
                  Gps <HiChartBar />
                </p>
                <p className="hero-title-right font-monument-regular fs-14px uppercase">
                  KLIMA GERETTET.
                </p>
              </div>
              <p className="font-monument-bold fs-48px">Werde jetzt Teil,</p>
            </div>
            <p className="font-monument-bold fs-48px">des Klimaschutzes.</p>
            <p className="hero-gradient-text font-monument-regular fs-12px hero-title-bottom">
              climeight. - die App, die das Fahrradfahren verändert.
            </p>
          </div>
          <p className="fs-20px weight-4 mb-25px">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>

          <div className="hero-input-wrapper mb-40px">
            <input
              type="text"
              placeholder="Deine E-Mail Adresse:"
              className="hero-input fs-20px "
            />
            <button className="font-monument-regular fs-18px black pointer">
              Anmelden
            </button>
          </div>

          <div className="users-active-wrapper">
            <div className="users-active">
              <p className="user-active-number  white weight-8">1.6k+</p>
              <UserAvatar img={userImg1} />
              <UserAvatar img={userImg1} />
              <UserAvatar img={userImg1} />
              <UserAvatar img={userImg1} />
              <UserAvatar img={userImg1} />
              <UserAvatar img={userImg1} />
            </div>
            <div>
              <p className="fs-12px white weight-5">
                1.600 Personen haben sich einschreiben lassen in den letzten 24
                Stunden
              </p>
            </div>
          </div>
        </div>
        <div className="sponsors">
          <img src={sponsor1} alt="" />
          <img src={sponsor2} alt="" />
          <img src={sponsor3} alt="" />
          <img src={sponsor4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
