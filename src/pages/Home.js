import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="footer">
        <div className="footer1">
          <div className="copyright-tanah-air">Copyright Tanah Air Studio</div>
          <div className="contact">
            <a className="phone" href="tel:+9710555555">
              <img
                className="communication-call"
                alt=""
                src="/communication--call.svg"
              />
              <div className="div">+271 386-647-3637</div>
            </a>
            <div className="email">
              <img
                className="communication-call"
                alt=""
                src="/communication--email.svg"
              />
              <a
                className="ourstudiohellocom"
                href="mailto:aamishanwer@gmail.com"
              >
                ourstudio@hello.com
              </a>
            </div>
            <div className="address">
              <img
                className="communication-location-on"
                alt=""
                src="/communication--location-on.svg"
              />
              <div className="ohio-st-south-container">
                <p className="ohio-st-south">8819 Ohio St. South Gate,</p>
                <p className="ohio-st-south">California 90280</p>
              </div>
            </div>
            <b className="contact1">Contact</b>
          </div>
          <div className="our-social-media">
            <b className="what-our-customer">Our Social Media</b>
            <div className="div">
              <p className="ohio-st-south">Facebook</p>
              <p className="ohio-st-south">&nbsp;</p>
              <p className="ohio-st-south">Twitter</p>
              <p className="ohio-st-south">&nbsp;</p>
              <p className="ohio-st-south">Instagram</p>
              <p className="ohio-st-south">&nbsp;</p>
              <p className="ohio-st-south">Youtube</p>
            </div>
          </div>
          <div className="ourstudio-is-a">
            OurStudio is a digital agency UI / UX Design and Website Development
            located in Ohio, United States of America
          </div>
          <img className="dummy-logo02-icon" alt="" src="/dummy-logo02.svg" />
        </div>
      </div>
      <div className="testimonials">
        <b className="what-our-customer">What Our Customer Says</b>
        <div className="testimonials1">
          <div className="card" />
          <div className="product-designer">Product Designer</div>
          <b className="shalima-hayden">Shalima Hayden</b>
          <div className="tanahair-is-the">
            Tanahair is the friendliest and most efficient company I have ever
            used. The whole thing takes time to introduce the product and as a
            result puts forward only the best opportunities that really suit
            you. they help from start to finish to create a great product
            identity for your company
          </div>
          <div className="image-placeholder" />
          <button className="navigation">
            <img
              className="outlined-navigation-expand"
              alt=""
              src="/outlined--navigation--expand-more.svg"
            />
          </button>
          <div className="navigation1">
            <button className="outlined-navigation-expand1">
              <img className="path-icon" alt="" />
              <img className="icon-color" alt="" src="/-icon-color.svg" />
            </button>
          </div>
        </div>
      </div>
      <div className="best-seller">
        <div className="card1">
          <b className="b">$1000</b>
          <div className="medium-shoulder-bag">Medium Shoulder Bag</div>
          <b className="queens-summer">Queen’s Summer</b>
          <div className="bags">Bags</div>
          <img
            className="container-icon"
            alt=""
            src="https://res.cloudinary.com/dcpte972l/image/upload/v1688984910/Screenshot_2023-07-10_142717_ms1j7z.png"
          />
          <div className="container" />
          <button className="heart">
            <img className="vector-icon" alt="" src="/vector.svg" />
          </button>
        </div>
        <div className="card2">
          <b className="b">$1000</b>
          <div className="medium-shoulder-bag">Medium Shoulder Bag</div>
          <b className="queens-summer">Queen’s Summer</b>
          <div className="bags">Bags</div>
          <img
            className="container-icon"
            alt=""
            src="https://res.cloudinary.com/dcpte972l/image/upload/v1688984910/Screenshot_2023-07-10_142717_ms1j7z.png"
          />
          <div className="container" />
          <button className="heart">
            <img className="vector-icon" alt="" src="/vector.svg" />
          </button>
        </div>
        <div className="card3">
          <b className="b">$1000</b>
          <div className="medium-shoulder-bag">Medium Shoulder Bag</div>
          <b className="queens-summer">Queen’s Summer</b>
          <div className="bags">Bags</div>
          <img
            className="container-icon"
            alt=""
            src="https://res.cloudinary.com/dcpte972l/image/upload/v1688984910/Screenshot_2023-07-10_142717_ms1j7z.png"
          />
          <div className="container" />
          <button className="heart">
            <img className="vector-icon" alt="" src="/vector.svg" />
          </button>
        </div>
        <div className="card4">
          <b className="b">$1000</b>
          <div className="medium-shoulder-bag">Medium Shoulder Bag</div>
          <b className="queens-summer">Queen’s Summer</b>
          <div className="bags">Bags</div>
          <img
            className="container-icon"
            alt=""
            src="https://res.cloudinary.com/dcpte972l/image/upload/v1688984910/Screenshot_2023-07-10_142717_ms1j7z.png"
          />
          <div className="container" />
          <button className="heart">
            <img className="vector-icon" alt="" src="/vector.svg" />
          </button>
        </div>
        <b className="best-seller1">Best Seller</b>
      </div>
      <div className="discount">
        <button className="button">
          <div className="click-here-parent">
            <b className="click-here">Got it</b>
            <div className="communication-call">
              <div className="group-child" />
              <img
                className="arrow-chevron-right"
                alt=""
                src="/arrow-chevron-right.svg"
              />
            </div>
          </div>
        </button>
        <b className="up-to-70">Up to 70% off</b>
        <b className="march-discount">March Discount</b>
      </div>
      <div className="new-arrival">
        <div className="card5">
          <b className="b">$1000</b>
          <div className="medium-shoulder-bag">Medium Shoulder Bag</div>
          <b className="queens-summer">Queen’s Summer</b>
          <div className="bags">Bags</div>
          <div className="container4" />
          <img className="heart-icon" alt="" src="/heart.svg" />
        </div>
        <div className="card6">
          <b className="b">$1000</b>
          <div className="medium-shoulder-bag">Medium Shoulder Bag</div>
          <b className="queens-summer">Queen’s Summer</b>
          <div className="bags">Bags</div>
          <img
            className="container-icon"
            alt=""
            src="https://res.cloudinary.com/dcpte972l/image/upload/v1688984910/Screenshot_2023-07-10_142717_ms1j7z.png"
          />
          <div className="container" />
          <button className="heart">
            <img className="vector-icon" alt="" src="/vector.svg" />
          </button>
        </div>
        <div className="card1">
          <b className="b">$1000</b>
          <div className="bags">Bags</div>
          <div className="medium-shoulder-bag">Medium Shoulder Bag</div>
          <b className="queens-summer">Queen’s Summer</b>
          <img
            className="container-icon"
            alt=""
            src="https://res.cloudinary.com/dcpte972l/image/upload/v1688984910/Screenshot_2023-07-10_142717_ms1j7z.png"
          />
          <div className="container" />
          <button className="heart">
            <img className="vector-icon" alt="" src="/vector.svg" />
          </button>
        </div>
        <div className="card2">
          <b className="b">$1000</b>
          <div className="medium-shoulder-bag">Medium Shoulder Bag</div>
          <b className="queens-summer">Queen’s Summer</b>
          <div className="bags">Bags</div>
          <img
            className="container-icon"
            alt=""
            src="https://res.cloudinary.com/dcpte972l/image/upload/v1688984910/Screenshot_2023-07-10_142717_ms1j7z.png"
          />
          <div className="container" />
          <button className="heart">
            <img className="vector-icon" alt="" src="/vector.svg" />
          </button>
        </div>
        <div className="card3">
          <b className="b">$1000</b>
          <div className="medium-shoulder-bag">Medium Shoulder Bag</div>
          <b className="queens-summer">Queen’s Summer</b>
          <div className="bags">Bags</div>
          <img
            className="container-icon"
            alt=""
            src="https://res.cloudinary.com/dcpte972l/image/upload/v1688984910/Screenshot_2023-07-10_142717_ms1j7z.png"
          />
          <div className="container" />
          <button className="heart">
            <img className="vector-icon" alt="" src="/vector.svg" />
          </button>
        </div>
        <div className="card4">
          <b className="b">$1000</b>
          <div className="medium-shoulder-bag">Medium Shoulder Bag</div>
          <b className="queens-summer">Queen’s Summer</b>
          <div className="bags">Bags</div>
          <div className="container4" />
          <div className="container" />
          <button className="heart">
            <img className="vector-icon" alt="" src="/vector.svg" />
          </button>
        </div>
        <button className="slide-button">
          <img
            className="navigation2"
            alt=""
            src="/outlined--navigation--expand-more.svg"
          />
          <img className="navigation3" alt="" src="/navigation-.svg" />
        </button>
        <a className="see-all" href="https://home/">
          See All
        </a>
        <b className="new-arrival1">New Arrival</b>
      </div>
      <div className="cards">
        <img
          className="image-placeholder-icon"
          alt=""
          src="https://res.cloudinary.com/dcpte972l/image/upload/v1688984909/Screenshot_2023-07-10_142634_c2p7ku.png"
        />
        <img
          className="image-placeholder-icon1"
          alt=""
          src="https://res.cloudinary.com/dcpte972l/image/upload/v1688984909/Screenshot_2023-07-10_142634_c2p7ku.png"
        />
        <img
          className="image-placeholder-icon2"
          alt=""
          src="https://res.cloudinary.com/dcpte972l/image/upload/v1688984909/Screenshot_2023-07-10_142634_c2p7ku.png"
        />
        <img
          className="image-placeholder-icon3"
          alt=""
          src="https://res.cloudinary.com/dcpte972l/image/upload/v1688984909/Screenshot_2023-07-10_142634_c2p7ku.png"
        />
        <img
          className="image-placeholder-icon4"
          alt=""
          src="https://res.cloudinary.com/dcpte972l/image/upload/v1688984909/Screenshot_2023-07-10_142634_c2p7ku.png"
        />
        <div className="div1">
          <button className="button1">
            <div className="button-child" />
            <div className="rectangle-group">
              <div className="group-child" />
              <img
                className="arrow-chevron-right"
                alt=""
                src="/arrow-right.svg"
              />
            </div>
          </button>
          <div className="lorem-ipsum-is-container">
            <p className="ohio-st-south">{`Lorem Ipsum is simply dummy text `}</p>
            <p className="ohio-st-south">
              of the printing and typesetting industry.
            </p>
          </div>
          <b className="dresses">Dresses</b>
        </div>
      </div>
      <div className="hero">
        <img
          className="image-icon"
          alt=""
          src="https://res.cloudinary.com/dcpte972l/image/upload/v1688984909/Screenshot_2023-07-10_142531_uyckag.png"
        />
        <img
          className="image-icon1"
          alt=""
          src="https://res.cloudinary.com/dcpte972l/image/upload/v1688984909/Screenshot_2023-07-10_142552_u8tv2c.png"
        />
        <Link className="button2" to="/shop-full-width">
          <div className="click-here-parent">
            <b className="what-our-customer">Shop</b>
            <div className="communication-call">
              <div className="group-child" />
              <img
                className="arrow-chevron-right"
                alt=""
                src="/arrow-chevron-right1.svg"
              />
            </div>
          </div>
        </Link>
        <div className="we-will-help">
          We will help to develop every smallest thing into a big one for your
          company.
        </div>
        <b className="sort-out-your-container">
          <p className="ohio-st-south">{`Sort out Your `}</p>
          <p className="ohio-st-south">Spring Look</p>
        </b>
      </div>
      <div className="navbar">
        <div className="container11" />
        <div className="icons">
          <button className="user-profile-2">
            <img className="group-icon" alt="" src="/group.svg" />
          </button>
          <button className="heart9">
            <img className="vector-icon9" alt="" src="/vector1.svg" />
          </button>
          <button className="shopping-cart">
            <img className="vector-icon10" alt="" src="/vector2.svg" />
          </button>
          <div className="badge">
            <div className="container12" />
            <div className="div2">3</div>
          </div>
        </div>
        <div className="menu">
          <a className="faq" href="https://home/">
            FAQ
          </a>
          <a className="blog" href="https://home/">
            Blog
          </a>
          <a className="about" href="https://home/">
            About
          </a>
          <a className="home1" href="https://home/">
            Home
          </a>
        </div>
        <div className="socmed">
          <button className="socmed1">
            <div className="container13" />
            <div className="fb">Fb</div>
          </button>
          <button className="socmed1">
            <div className="container13" />
            <div className="fb">Tw</div>
          </button>
          <button className="socmed1">
            <div className="container13" />
            <div className="ig">Ig</div>
          </button>
          <button className="socmed1">
            <div className="container13" />
            <div className="yt">Yt</div>
          </button>
        </div>
        <button className="dummy-logo02">
          <img className="arrow-chevron-right" alt="" />
          <img className="group-icon1" alt="" src="/group1.svg" />
        </button>
        <a className="call-centre" href="tel:+97105555555">
          <img className="phone-icon" alt="" src="/phone.svg" />
          <div className="div3">+022 319 821 967</div>
        </a>
      </div>
    </div>
  );
};

export default Home;
