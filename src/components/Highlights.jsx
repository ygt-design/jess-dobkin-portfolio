export default function Highlights() {
  return (
    <>
      <div className="highlights-announcements-title"> 
          <span className="circle"></span>
          Announcements
      </div>
      <div className="highlights">
        <img
          src="https://jessdobkin.com/assets/images/JD_front_cover_RGB.jpg"
          alt="Announcement"
          className="highlights-image"
        />

        <div className="highlights-text">
<h2 className="highlights-title">
            Jess Dobkin’s 
            Wetrospective
        </h2>
        <p className="highlights-details">
            Monday, December 9, 2024 / 5 to 7 pm <br />
            NYU Hemispheric Institute <br />
            20 Cooper Square, Fifth Floor
        </p>
        <br />
        <p className="highlights-description">
            Join us for a celebratory launch party with book editor
            Laura Levin, designer Lisa Kiss, artist Jess Dobkin, and surprise
            toasts from collaborators, conspirators, and queer luminaries.
            Wheelchair accessible.
        </p>
        <div className="cta-button">
            RSVP Here
        </div>
        </div>

        
      </div>

      {/* styled-jsx block: these rules are scoped to this component */}
      <style jsx>{`
        .highlights {
          display: flex;
          gap: 3.5rem;
          padding: 2rem;
          background-color: rgb(31, 31, 31);
          margin-bottom: 2rem;
          border-radius: 1rem;
          color: white;
        }

        .highlights-announcements-title {
          width: fit-content;
          font-size: 1rem;
          color: white;
          padding: 1rem 1rem;
          border-radius: 0.5rem;
          background-color: rgb(31, 31, 31);
          margin-bottom: 1rem;
          font-weight: 600;
          display: flex;
          align-items: center;
        }

        .circle{
          width: 1rem;
          height: 1rem;
          background-color: magenta;
          border-radius: 50%;
          display: inline-block;
          margin-right: 0.5rem;
          animation: blink 1s infinite;
        }

        @keyframes blink {
            0% {
                opacity: 1;
            }
            50% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        .highlights-image {
          width: 270px;
          height: auto;
          border-radius: 0.5rem;
          flex-shrink: 0;
        }

        .highlights-text {
          display: flex;
          flex-direction: column;
        }
        .highlights-title {
            font-size: 2rem;
          margin: 0 0 1.5rem 0;
        }
        .highlights-details {
          width: fit-content;
          border-radius: 0.5rem;
          padding: 1rem;
          font-size: 0.9rem;
          line-height: 1.5;
          background-color: rgb(47, 47, 47);
          margin: 0;
        }

        .highlights-description {
          font-size: 1rem;
          line-height: 1.5;
          color: #ccc;
          margin-top: 0.5rem;
        }

        .cta-button {
            width: fit-content;
            margin-top: 1.5rem;
            padding: 0.8rem 1rem;
            background-color: magenta;
            color: white;
            border-radius: 0.375rem;
            font-weight: 500;
            text-align: center;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        @media (max-width: 1133px) {
          .highlights {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }
          .highlights-image {
            width: 100%;
            max-width: none;
          }
        }

        @media (max-width: 468px) {
          .highlights {
            padding: 0.5rem;
            gap: 0.5rem;
          }
          .highlights-title {
            font-size: 1.5rem;
          }
          .highlights-description,
          .highlights-details {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  )
}