import React from "react";

const ZoePage: React.FC = () => {
  return (
    <div>
      <style>{`
        /* Background Gradient - Updated to navy/gold theme */
        body, html {
          background: linear-gradient(135deg, #1a365d, #2d4a66, #4a6fa5);
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 20px 0;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Card Styling */
        .card {
          border: none;
          border-radius: 20px;
          overflow: hidden;
          width: 400px;
          max-width: 95%;
          background: linear-gradient(145deg, #ffffff, #f8f9fa);
          box-shadow: 0 20px 40px rgba(26, 54, 93, 0.2), 0 10px 20px rgba(26, 54, 93, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 2px solid rgba(212, 175, 55, 0.1);
          position: relative;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(26, 54, 93, 0.25), 0 0 20px rgba(212, 175, 55, 0.1);
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #1a365d, #d4af37, #2d4a66);
          z-index: 1;
        }

        .upper img {
          height: 150px;
          object-fit: cover;
          width: 100%;
          transition: transform 0.5s ease;
        }
        .upper img:hover {
          transform: scale(1.05);
        }

        .profile img {
          margin-top: -50px;
          background-color: #fff;
          padding: 3px;
          box-shadow: 0 8px 16px rgba(26, 54, 93, 0.15);
          transition: transform 0.3s ease;
          border: 3px solid #d4af37 !important;
        }
        .profile img:hover {
          transform: scale(1.05);
        }

        .user-info {
          padding: 0 2rem 2rem 2rem;
          text-align: center;
        }
        h4 {
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 0.5rem;
        }
        .company-name {
          background: linear-gradient(135deg, #1a365d, #2d4a66);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 600;
          display: block;
          margin-bottom: 0.3rem;
          font-size: 14px;
          line-height: 1.3;
          max-width: 280px;
          margin-left: auto;
          margin-right: auto;
        }
        .text-muted {
          color: #d4af37 !important;
          font-weight: 500;
        }

        .contact-list {
          background: linear-gradient(145deg, #f8f9fa, #ffffff);
          border-radius: 15px;
          padding: 1.5rem;
          margin-top: 1.5rem;
          box-shadow: inset 0 2px 4px rgba(26, 54, 93, 0.05);
          transition: all 0.3s ease;
          border: 1px solid rgba(212, 175, 55, 0.1);
        }
        .contact-item {
          font-size: 15px;
          color: #2d4a66;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          text-align: left;
          padding: 0.5rem 0;
        }
        .contact-item:last-child {
          margin-bottom: 0;
        }
        .contact-icon {
          width: 25px;
          text-align: center;
          margin-right: 0.75rem;
          flex-shrink: 0;
        }
        .contact-label {
          font-weight: 600;
          color: #1a365d;
          width: 80px;
          flex-shrink: 0;
          margin-right: 0.5rem;
        }
        .contact-value {
          flex: 1;
        }
        .contact-value a {
          font-weight: 500;
          color: #2d4a66;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .contact-value a:hover { color: #d4af37; transform: translateX(2px); }
        .contact-value a[href*="facebook.com"]:hover { color: #1877F2; transform: translateX(3px); }
        .contact-value a[href*="tel:"]:hover { color: #d4af37; }
        .contact-value a[href*="mailto:"]:hover { color: #1a365d; }
        .contact-value a[href*="http"]:not([href*="facebook"]):hover { color: #2d4a66; }

        @media (max-width: 576px) {
          .card { width: 100%; border-radius: 15px; margin: 0 10px; }
          .upper img { height: 120px; }
          .profile img { width: 80px; margin-top: -40px; }
          .user-info { padding: 0 1.5rem 1.5rem 1.5rem; }
          h4 { font-size: 20px; }
          .company-name { font-size: 14px; white-space: nowrap; }
          .contact-list { padding: 1rem; }
          .contact-item { font-size: 14px; flex-wrap: wrap; }
          .contact-label { width: 70px; font-size: 13px; }
        }
      `}</style>

      <div className="card p-0">
        <div className="upper">
          <img src="/images/newbanner.jpg" className="img-fluid w-100" alt="Cover" />
        </div>

        <div className="user text-center">
          <div className="profile">
            <img src="/images/logo-removebg-preview.png" className="rounded-circle border border-3" width={100} alt="ABIC Logo" />
          </div>
        </div>

        <div className="user-info">
          <h4 className="mb-0">Zoe Li</h4>
          <span className="text-muted d-block mb-2">President</span>
          <p className="company-name">
            ABIC Realty &<br />
            Consultancy Corporation
          </p>

          <div className="contact-list">
            <div className="contact-item">
              <i className="fas fa-phone-alt text-primary contact-icon"></i>
              <span className="contact-label">Mobile:</span>
              <div className="contact-value">
                <a href="tel:+639155800518">+63 915 580 0518</a>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-envelope text-danger contact-icon"></i>
              <span className="contact-label">Email:</span>
              <div className="contact-value">
                <a href="mailto:abic.zoe@gmail.com">abic.zoe@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-globe text-success contact-icon"></i>
              <span className="contact-label">Website:</span>
              <div className="contact-value">
                <a href="http://abicrealtyph.com" target="_blank" rel="noreferrer">abicrealtyph.com</a>
              </div>
            </div>

            <div className="contact-item">
              <i className="fab fa-facebook-square text-primary contact-icon"></i>
              <span className="contact-label">Facebook:</span>
              <div className="contact-value">
                <a href="https://www.facebook.com/share/18T9jHVXjD/" target="_blank" rel="noreferrer">
                  ABIC Realty & Consultancy Corporation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoePage;
