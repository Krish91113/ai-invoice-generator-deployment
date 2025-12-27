import React from "react";
import { heroStyles } from "../assets/dummyStyles";
import { SignedIn, SignedOut, SignIn, useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  const clerk = useAuth();

  const handleSignedInPrimary = () => {
    navigate("/app/create-invoice");
  };
  const handleSignedOutPrimary = () => {
    try {
      if (clerk && typeof clerk.openSignUp === "function") {
        clerk.openSignUp();
      }
    } catch (error) {
      console.error("Failed to open signup model", error);
    }
  };
  return (
    <section className={heroStyles.section}>
      <div className={heroStyles.bgElement1}></div>
      <div className={heroStyles.bgElement2}></div>
      <div className={heroStyles.bgElement3}></div>
      <div className={heroStyles.gridPattern}></div>
      <div className={heroStyles.container}>
        <div className={heroStyles.grid}>
          <div className={heroStyles.content}>
            <div className={heroStyles.contentInner}>
              <div className={heroStyles.badge}>
                <div className={heroStyles.badgeDot}></div>
                <span className={heroStyles.badgeText}>
                  AI- POWERED INVOICE PLATFORM
                </span>
              </div>
              {/* main heading */}
              <h1 className={heroStyles.heading}>
                <span className={heroStyles.headingLine1}>Proffessional</span>
                <br />
                <span className={heroStyles.headingLine2}>Invoices</span>
                <br />
                <span className={heroStyles.headingLine3}>in Seconds</span>
              </h1>
              <p className={heroStyles.description}>
                Transform conversations into professional invoices with AI.{" "}
                <span className={heroStyles.descriptionHighlight}>
                  Paste any text
                </span>{" "}
                and watch AI extract items, calculate totals, and generate
                ready-to-send invoices instantly.
              </p>
            </div>
            {/*CTA BUTTONS */}
            <div className={heroStyles.ctaContainer}>
              <SignedIn>
                <button
                  type="button"
                  onClick={handleSignedInPrimary}
                  className={heroStyles.primaryButton}
                >
                  <div className={heroStyles.primaryButtonOverlay}></div>
                  <span className={heroStyles.previewButtonText}>
                    Start Creating Free
                  </span>
                  <svg
                    className={heroStyles.primaryButtonIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </button>
              </SignedIn>
              <SignedOut>
                <button type="button" onClick={handleSignedOutPrimary} className={heroStyles.primaryButtonIcon}>
                    <div className={heroStyles.primaryButtonOverlay}></div>
                  <span className={heroStyles.previewButtonText}>
                    Start Creating Free
                  </span>
                  <svg
                    className={heroStyles.primaryButtonIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </button>
              </SignedOut>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
