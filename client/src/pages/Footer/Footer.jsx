import { useEffect } from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.css";
const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <footer className="text-center footer text-center">
      <div
        style={{
          display: "flex",
          margin: 10,
          padding: 35,
          justifyContent: "space-around",
        }}
        className="container p-4"
      >
        <div className="row  text-md-start mt-5">
          {/*Logo Start*/}
          <div className="col-md-4 ">
            <h4 className="pb-3">
              GigFindr <span className="Analyst">..</span>
            </h4>
            <p className="copy-right">
              {" "}
              Copyright © 2008-2019 RPX Corporation. All Rights Reserved.
            </p>
          </div>
          {/*Logo end*/}
          {/*Solutions Start*/}
          <div className="col-md-3">
            <h5 className="pb-3">Solutions </h5>
            <ul className="list-style ps-0 ">
              <li className="pb-3">Patent Licensing and Acquisition</li>
              <li className="pb-3">Portfolio Management and Monetization</li>
              <li className="pb-3">R&amp;D / Market Intelligence</li>
              <li className="pb-3">M&amp;A Opportunity and Due Diligence</li>
              <li className="pb-3">Litigation Risk Assessment and Strategy</li>
              <li className="pb-3">Patent Prosecution</li>
            </ul>
          </div>
          {/*Solutions end*/}
          {/*Quick links Start*/}
          <div className="col-md-3 ">
            <h5 className="pb-3"> Quick links </h5>
            <ul className="list-style ps-0">
              <li className="pb-3">RPX Empower</li>
              <li className="pb-3">RPX Insight</li>
              <li className="pb-3">RPX Corporation</li>
            </ul>
          </div>
          {/*QUick links end*/}
          {/*Other Start*/}
          <div className="col-md-2 ">
            <h5 className="pb-3"> Other </h5>
            <ul className="list-style ps-0">
              <li className="pb-3">Privacy Policy</li>
              <li className="pb-3">Terms of Use</li>
              <li className="pb-3">Features</li>
              <li className="pb-3">Success Stories</li>
              <li className="pb-3">Contact Us</li>
            </ul>
          </div>
          {/*Other end*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
