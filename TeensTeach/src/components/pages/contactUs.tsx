// import { ReactElement } from "react";
function ContactPage() {
  return (
    <div className="fullPage">
      <div className="mainWrap">
        <div className="divContainer">
          <div id="pageTitle">Contact Us</div>
        </div>
        <div className="wrapContainer">
          <div className="iconTile">
            <a href="mailto: lamarr@teensteach.org">
              <img
                className="iconImage"
                src="../../src/assets/images/icons/gmail.png"
              ></img>
            </a>
          </div>
        </div>
        <div className="wrapContainer">
          <div className="iconTile">
            <a href="https://www.youtube.com/@TeensTeach1">
              <img
                className="iconImage"
                src="../../src/assets/images/icons/youtube.png"
              ></img>
            </a>
          </div>
        </div>
        <div className="wrapContainer">
          <div className="iconTile">
            <a href="https://www.tiktok.com/@teensteach">
              <img
                className="iconImage"
                src="../../src/assets/images/icons/tiktok.png"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className="background">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default ContactPage;
