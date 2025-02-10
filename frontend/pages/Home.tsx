import '@/css/Home.css';
import { LaunchpadHeader } from "@/components/LaunchpadHeader.tsx";
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <LaunchpadHeader title="Home" />
      <section className="pt-6 pb-7" id="features">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <h2 className="heading-black">Buy And Sell Tickets as an NFT!</h2>
              <p className="text-muted lead">Artists sell their concert/show tickets as NFTs to prevent various ticket scams.</p>
              <Link to={"/create-collection"}>
                <button className="btn btn-primary d-inline-flex flex-row align-items-center">
                  Create NFT Tickets
                  <em className="ml-2" data-feather="arrow-right"></em>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-7 bg-dark section-angle top-right bottom-right" id="pricing">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <h2 className="text-white heading-black">Features</h2>
              <p className="text-light lead">Build proudly on the Aptos Chain!</p>
            </div>
          </div>
          <div className="row mt-6">
            <div className="col-md-7 offset-md-2 text-center">
              <ul className="features-list">
                <li>Lightning-fast platform</li>
                <li>No more fake tickets</li>
                <li>Controlled resales</li>
                <li>Low gas fees</li>
                <li>Fast NFT production</li>
                <li>Extra revenue for artists</li>
                <li>Collect memories as NFTs</li>
                <li>Track NFT ownership</li>
              </ul>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-8 col-12 divider top-divider mx-auto pt-5 text-center">
              <h3>Build Using MOVE Language</h3>
              <p className="mb-4">The MOVE language provides many additional features like type safety, performance improvements, and managed resources over traditional languages.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-7" id="faq">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <h2>Frequently Asked Questions</h2>
              <p className="text-muted lead">Answers to the most common questions.</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-10 mx-auto">
              <div className="row">
                <div className="col-md-6 mb-5">
                  <h6>Is it safe?</h6>
                  <p className="text-muted">Yes, the platform is totally safe for buying and selling NFTs as tickets.</p>
                </div>
                <div className="col-md-6 mb-5">
                  <h6>Do you have hidden fees?</h6>
                  <p className="text-muted">The only fees artists have to pay are gas fees, and nothing else!</p>
                </div>
                <div className="col-md-6 mb-5">
                  <h6>Can I track tickets?</h6>
                  <p className="text-muted">Yes! Anyone can track NFT tickets globally using the Aptos explorer.</p>
                </div>
                <div className="col-md-6 mb-5">
                  <h6>Is the process difficult?</h6>
                  <p className="text-muted">No, the whole process of buying and selling NFTs on this platform is very easy!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 mx-auto text-center">
              <h5 className="mb-4">Have questions?</h5>
              <Link to="mailto:aryangupta07075@gmail.com" className="btn btn-primary">Contact us</Link>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-6">
        <div className="container">
          <div className="row mt-4 text-center">
            <div style={{"margin-left": "23vw"}} className="col-sm-5 mr-auto">
              <h5>About Our Team</h5>
              <p  className="text-muted">Our team consists of two people, Kairav Bhatia and Aryan Gupta, who have worked very hard to build this project.</p>
              <ul className="list-inline social social-sm">
                <li className="list-inline-item">
                  <Link to="#"><i className="fa fa-facebook"></i></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#"><i className="fa fa-twitter"></i></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#"><i className="fa fa-google-plus"></i></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#"><i className="fa fa-dribbble"></i></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
