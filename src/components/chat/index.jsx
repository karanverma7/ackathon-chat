import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import Close from "../../assets/images/close.svg";
import Next from "../../assets/images/next-icon.svg";
import Search from "../../assets/images/search.png";
import PlaceHolder from "../../assets/images/placeholder.png";
import Home from "../../assets/images/bottom-nav/home.svg";
import Chat from "../../assets/images/bottom-nav/chat.svg";
import Offers from "../../assets/images/bottom-nav/offers.svg";
import GetQuote from "../../assets/images/bottom-nav/get-quote.svg";
import Grp from "../../assets/images/grp.png";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="chat-home">
      <div className="top-nav">
        <img onClick={() => navigate("/")} src={Logo} alt="chat" />
        <img onClick={() => navigate("/")} src={Close} alt="close" />
      </div>
      <div className="people">
        <img src={Grp} alt="grp" />
        <div className="text1">Hello there.</div>
        <div className="text2">How can we help?</div>
      </div>
      <div className="chat-option" onClick={() => navigate("/chat-space")}>
        <div>
          <div className="title">{"Chat with us"}</div>
          <div className="desc">
            {"Get an instant reply for our customer care"}
          </div>
        </div>
        <img src={Next} alt="close" />
      </div>
      <div className="chat-option" style={{ padding: "10px" }}>
        {/* <img
          style={{ marginTop: "5px", width: "100%" }}
          src={Search}
          alt="close"
        /> */}
        <iframe
          src="https://www.acko.com/support/home/"
          title="Acko support"
          style={{ marginTop: "5px", width: "100%" }}
        ></iframe>
      </div>
      <div className="blog-card">
        <img style={{ width: "100%" }} src={PlaceHolder} alt="close" />
        <div className="title">{"Insurance"}</div>
        <div className="desc">
          {
            "Acko is Awesome. Please buy from Acko. Please give us your money. We will help you out because we are awesome"
          }
        </div>
        <div className="more-btn">{"Learn More"}</div>
      </div>
      <div className="blog-card">
        <img style={{ width: "100%" }} src={PlaceHolder} alt="close" />
        <div className="title">{"Insurance"}</div>
        <div className="desc">
          {
            "Acko is Awesome. Please buy from Acko. Please give us your money. We will help you out because we are awesome"
          }
        </div>
        <div className="more-btn">{"Learn More"}</div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="bottom-nav">
        <div className="bottom-nav-option" onClick={() => navigate("/")}>
          <img src={Home} alt="" />
          <div>Home</div>
        </div>
        <div
          className="bottom-nav-option"
          onClick={() => navigate("/chat-space")}
        >
          <img src={Chat} alt="" />
          <div>Chat</div>
        </div>
        <div className="bottom-nav-option">
          <img src={Offers} alt="" />
          <div>Offers</div>
        </div>
        <div className="bottom-nav-option">
          <img src={GetQuote} alt="" />
          <div>Get Quote</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
