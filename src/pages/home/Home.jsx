import React from "react";
// import "./App.css";
import logo from "../../assets/profile.png";
import github from "../../assets/Icon.png";
import slack from "../../assets/Slack_icon.png";
// import vector from "../../assets/Vector.png";
// import I4G from "../../assets/I4G.png";
import share from "../../assets/Icon-share.png";
import dot from "../../assets/Icon-dot.png";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="linktree">
        {/* Share Button Start */}
        <div className="share-button">
          <img src={share} alt="" className="share" />
          <img src={dot} alt="" className="dot" />
        </div>
        {/* Share Button end */}

        {/* Profile Section start */}
        <div className="profile-section">
          <img src={logo} alt="" id="profile__img" />
          <h2 id="twitter">Ezeala Godswill</h2>
          <a id="slack" href="https://godswill-hq.slack.com" hidden>Slack Link</a>
        </div>
        {/* Profile Section */}

        {/* Link section Start */}
        <div className="link-section">
          
            <a href="https://twitter.com/EzealaGodswill" rel="Twitter link">
              Twitter Link
            </a>
          
        
            <a href="https://training.zuri.team/" id="btn__zuri">
              Zuri Team
            </a>
          
        
            <a href="http://books.zuri.team" id="books">
              Zuri Books
            </a>
          
        
            <a
              href="https://books.zuri.team/python-for-beginners?ref_id=jamico"
              id="book__python"
            >
              Python Books
            </a>
          
        
            <a href="https://background.zuri.team" id="pitch">
              Background Check for Code
            </a>
          
        
            <a href="https://books.zuri.team/design-rules" id="book__design">
              Design Books
            </a>
          
        
            <a href="./Contact" id="contact">
              Contact Me
            </a>
          
        </div>
        {/* Link section ends */}

        {/* Social Section Start */}
        <div className="social-section">
          <img src={slack} alt="" height="30" />
          <img src={github} alt="" height="30" />
        </div>
      </div>
    </>
  );
}

export default Home;
