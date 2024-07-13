import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
  />
  <link rel="stylesheet" href="styles.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  />
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md bg-light navbar-secondary fixed-top">
        <div className="container-fluid">
          <div className="row w-100">
            <div className="col-md-4 d-flex align-items-center">
              <a className="navbar-brand" href="#">
                <img src="logo-dark.png" alt="logo" style={{ width: 100 }} />{" "}
              </a>
            </div>
            <div className="col-6">
              <div className="navbar-nav">
                <a className="nav-item nav-link" href="#">
                  Home
                </a>
                <a className="nav-item nav-link" href="#">
                  Services
                </a>
                <a className="nav-item nav-link" href="#">
                  Features
                </a>
                <a className="nav-item nav-link" href="#">
                  Clients
                </a>
                <a className="nav-item nav-link" href="#">
                  Portfolio
                </a>
                <a className="nav-item nav-link" href="#">
                  Pricing
                </a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="navbar-nav">
                <button className="btn btn-info">Build Yours &gt;&gt;</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div className="container">
      <div id="carouselExample" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: 400, backgroundColor: "white" }}
            >
              <div className="text-center">
                <div className="box01">
                  <span className="box-text">FIND YOUR LIMITS</span>
                </div>
                <h3>Powering Business</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  error maxime ullam veritatis beatae impedit sit illo nulla nemo
                  dolor mollitia ea unde.
                </p>
                <button className="btn btn-primary">Discover more</button>
                <button className="btn btn-primary">Contact us</button>
              </div>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="carousel-item">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: 400, backgroundColor: "white" }}
            >
              <div className="text-center">
                <div className="box01">
                  <span className="box-text">START CONNECTING</span>
                </div>
                <h3>With Online Customers</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  error maxime ullam veritatis beatae impedit sit illo nulla nemo
                  dolor mollitia ea unde.
                </p>
                <button className="btn btn-primary">Discover more</button>
                <button className="btn btn-primary">Contact us</button>
              </div>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="carousel-item">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: 400, backgroundColor: "white" }}
            >
              <div className="text-center">
                <div className="box01">
                  <span className="box-text">MULTI PURPOSE THEME</span>
                </div>
                <h3>To Grow Business</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  error maxime ullam veritatis beatae impedit sit illo nulla nemo
                  dolor mollitia ea unde.
                </p>
                <button className="btn btn-primary">Discover more</button>
              </div>
            </div>
          </div>
        </div>
        {/* Controls */}
        <a
          className="carousel-control-prev"
          href="#carouselExample"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExample"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <img
            src="hero-one-3-bottom-img.png"
            className="img-fluid"
            alt="Image"
          />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="service">
        <div className="row">
          <div className="col text-center">
            <h2 className="services-heading">Our Services</h2>
            <p className="services-text">
              We craft digital, graphic and dimensional thinking, to create
              category leading brand experiences that have meaning and add a value
              for our clients
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="box">
          <div className="symbol">⚠</div>
          <div className="heading">Awesome Support</div>
          <div className="text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content platform.
          </div>
          <h5>Learn More &gt;&gt;</h5>
        </div>
        <div className="box">
          <div className="symbol">💧</div>
          <div className="heading">Dynamic Growth</div>
          <div className="text">
            Credibly brand standards compliant users without extensible services.
            Anibh euismod tincidunt.
          </div>
          <h5>Learn More &gt;&gt;</h5>
        </div>
        <div className="box">
          <div className="symbol">╬</div>
          <div className="heading">Branding Identity</div>
          <div className="text">
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, and large language ocean neary.
          </div>
          <h5>Learn More &gt;&gt;</h5>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="box">
          <div className="symbol">💬</div>
          <div className="heading">Solutions Business</div>
          <div className="text">
            It is a paradisematic country, in which roasted parts of sentences fly
            into your mouth leave for the far World.
          </div>
          <h5>Learn More &gt;&gt;</h5>
        </div>
        <div className="box">
          <div className="symbol">⧉</div>
          <div className="heading">Digital Design</div>
          <div className="text">
            Even the all-powerful Pointing has no control about the blind texts it
            is an almost unorthographic.
          </div>
          <h5>Learn More &gt;&gt;</h5>
        </div>
        <div className="box">
          <div className="symbol">🔰</div>
          <div className="heading">Goal Business</div>
          <div className="text">
            Question Marks and devious Semikoli, but the Little Blind Text didn’t
            listen. She packed her seven versalia.
          </div>
          <h5>Learn More &gt;&gt;</h5>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      {/* Your existing content with boxes */}
      {/* New section with background */}
      <div className="bg-section">
        <div className="computer-image">
          <img src="feature.jpg" alt="Computer Image" style={{ width: 500 }} />
          <div className="text-box">
            <div className="heading">⏳</div>
            <div className="text">
              <h4>200+ Users</h4>
            </div>
          </div>
        </div>
        <div className="text-content">
          <h5>FEATURES</h5>
          <h2>Modern &amp; Powerful Interface</h2>
          <p>
            In an ideal world this website wouldn’t exist, a client would
            acknowledge the importance design starts.
          </p>
          <p>⟿Strategy Solution</p>
          <p>🗔 Easy to Customize</p>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="service">
        <div className="row">
          <div className="col text-center">
            <h2 className="services-heading">What Client Says</h2>
            <p className="services-text">
              It is a long established fact that create category leading brand
              experiences a reader will be distracted by the readable content of a
              page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      id="partitionedCarousel"
      className="carousel slide mt-5"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#partitionedCarousel"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#partitionedCarousel" data-slide-to={1} />
        <li data-target="#partitionedCarousel" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="carousel-box">
            <div className="box1">
              <div className="partition">
                <div className="symbol1">🗯️</div>
                <h3 className="main-heading">Ruben reed</h3>
                <br />
                <h6 className="sub-heading">Web Designer</h6>
              </div>
              <div className="partition">
                <p>
                  Those must scelerisque pretium dolor, sit amet vehicula be to
                  free ourselves by widening our circle of compassion to embrace
                  all living creatures and the whole of quis consectetur nunc sit
                  amet semper justo. nature and its beauty.
                </p>
              </div>
            </div>
            <div className="box1">
              <div className="partition">
                <div className="symbol1">🗯️</div>
                <h3 className="main-heading">Eva Pearce</h3>
                <h6 className="sub-heading"> PHP Developer</h6>
              </div>
              <div className="partition">
                Our task must be to free ourselves by widening our circle of
                compassion to embrace all living creatures and the whole of quis
                consectetur nunc sit amet semper justo. nature and its beauty.
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-box">
            <div className="box1">
              <div className="partition">
                <div className="symbol1">🗯️</div>
                <h3 className="main-heading">Sophie Gant</h3>
                <h6 className="sub-heading">Web Developer</h6>
              </div>
              <div className="partition">
                I've learned that people will forget what you said, people will
                forget what you did, but people will never aliquam in nunc quis
                tincidunt forget how you vestibulum egestas them feel.
              </div>
            </div>
            <div className="box1">
              <div className="partition">
                {" "}
                <div className="symbol1">🗯️</div>
                <h3 className="main-heading">Eva Pearce</h3>
                <h6 className="sub-heading">PHP Developer</h6>
              </div>
              <div className="partition">
                Our task must be to free ourselves by widening our circle of
                compassion to embrace all living creatures and the whole of quis
                consectetur nunc sit amet semper justo. nature and its beauty.
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-box">
            <div className="box1">
              <div className="partition">
                <div className="symbol1">🗯️</div>
                <h3 className="main-heading">Ebony Downe</h3>
                <h6 className="sub-heading">CEO, Founder</h6>
              </div>
              <div className="partition">
                Our task must be to free ourselves by widening our circle of
                compassion to embrace all living creatures Integer varius lacus
                non magna tempor congue natuasre the whole its beauty.
              </div>
            </div>
            <div className="box1">
              <div className="partition">
                <div className="symbol1">🗯️</div>
                <h3 className="main-heading">Jordan Dakin</h3>
                <h6 className="sub-heading">Web Designer</h6>
              </div>
              <div className="partition">
                I feel confident imposing change on myself. It's a lot more fun
                progressing than looking back. That's why scelerisque pretium
                dolor, sit amet vehicula erat pelleque need throw curve balls.
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#partitionedCarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#partitionedCarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
    <div className="spacer" />
    <div className="container-fluid">
      <div className="service">
        <img src="icons.png" className="img-fluid" alt="Image" />
      </div>
    </div>
    <div className="container">
      <div className="service">
        <div className="row">
          <div className="col text-center">
            <h2 className="services-heading">Our Pricing</h2>
            <p className="services-text">
              We thrive when coming up with innovative ideas but also understand
              that a smart concept should be supported with faucibus sapien odio
              measurable results.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="box4">
          <h2 className="main-heading1">Free</h2>
          <h4 className="sub-heading1">Per Month</h4>
          <ul className="options-list">
            <li>Online Space : 500MB</li>
            <li>Bandwidth : 1.5GB</li>
            <li>Support : Yes</li>
            <li>Hidden Fees : No</li>
          </ul>
          <button className="choose-plan">Choose Plan</button>
        </div>
        <div className="box4">
          <h2 className="main-heading1">62$</h2>
          <h4 className="sub-heading1">Per Month</h4>
          <ul className="options-list">
            <li>Online Space : 500MB</li>
            <li>Bandwidth : 1.5GB</li>
            <li>Support : Yes</li>
            <li>Hidden Fees : No</li>
          </ul>
          <button className="choose-plan">Choose Plan</button>
        </div>
        <div className="box4">
          <h2 className="main-heading1">299$</h2>
          <h4 className="sub-heading1">Per Month</h4>
          <ul className="options-list">
            <li>Online Space : 500MB</li>
            <li>Bandwidth : 1.5GB</li>
            <li>Support : Yes</li>
            <li>Hidden Fees : No</li>
          </ul>
          <button className="choose-plan">Choose Plan</button>
        </div>
      </div>
    </div>
    <div className="spacer" />
    <div className="image-grid">
      <div className="image-item">
        <img src="brand-logo-1.png" alt="Image 1" />
      </div>
      <div className="image-item">
        <img src="brand-logo-2.png" alt="Image 2" />
      </div>
      <div className="image-item">
        <img src="brand-logo-3.png" alt="Image 3" />
      </div>
      <div className="image-item">
        <img src="brand-logo-4.png" alt="Image 4" />
      </div>
    </div>
    <div className="spacer" />
    <div className="container-fluid">
      <div className="container">
        <div className="col-md-12">
          <div className="text-center">
            <h2>Contact Us</h2>
            <p>
              To achieve this, it would be necessary to have uniform grammar,
              pronunciation and more common that of the individual languages.
            </p>
          </div>
          <form id="contactForm">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Your Name"
                />
                <div id="nameError" className="invalid-feedback">
                  Please enter your name.
                </div>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputContact">Contact</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputContact"
                  placeholder="+00 1234 5678 90"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputSubject">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputSubject"
                  placeholder=" Your Subject"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputMessage">Message</label>
              <textarea
                className="form-control"
                id="inputMessage"
                rows={3}
                placeholder="Your Message"
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="container-fluid background">
      <div className="container">
        <div className="col-md-6 content">
          <img src="logo-light.png" alt="Image 1" style={{ width: 100 }} />
          <div className="spacer1" />
          <p>
            In an ideal world this text wouldn’t exist, a client would acknowledge
            the importance of having web copy before the design starts.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4">
                  <h5>Company</h5>
                  <ul>
                    <li className="hover-item">About us</li>
                    <li className="hover-item">Media press</li>
                    <li className="hover-item">Career</li>
                    <li className="hover-item">Blog</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h5>Information</h5>
                  <ul>
                    <li className="hover-item">Pricing</li>
                    <li className="hover-item">Agencies</li>
                    <li className="hover-item">Our Apps</li>
                    <li className="hover-item">Sitemap</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h5>More Info</h5>
                  <ul>
                    <li className="hover-item">FAQ</li>
                    <li className="hover-item">Contact</li>
                    <li className="hover-item">Discussion</li>
                    <li className="hover-item">Terms &amp; condition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-4">2024 © Xolcy. Created by Themesdesign</div>
            <div className="col-md-8">
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-github" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" />
      <Script>
        {`
          document.getElementById('contactForm').addEventListener('submit', function(event) {
            var nameInput = document.getElementById('inputName');
            var nameError = document.getElementById('nameError');

            if (!nameInput.value.trim()) {
                nameError.style.display = 'block';
                nameInput.classList.add('is-invalid');
                event.preventDefault(); // Prevent the form submission
            }
          });
        `}
      </Script>
  
  </>
  
  );
};
