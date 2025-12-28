import React from "react";
import { heroStyles } from "../assets/dummyStyles";
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-react";
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
      console.error("Failed to open signup modal", error);
    }
  };

  return (
    <section className={heroStyles.section}>
      {/* Background Elements */}
      <div className={heroStyles.bgElement1}></div>
      <div className={heroStyles.bgElement2}></div>
      <div className={heroStyles.bgElement3}></div>
      <div className={heroStyles.gridPattern}></div>

      {/* Main Container */}
      <div className={heroStyles.container}>
        <div className={heroStyles.grid}>
          <div className={heroStyles.content}>
            <div className={heroStyles.contentInner}>
              {/* Badge */}
              <div className={heroStyles.badge}>
                <div className={heroStyles.badgeDot}></div>
                <span className={heroStyles.badgeText}>
                  AI-POWERED INVOICE PLATFORM
                </span>
              </div>

              {/* Main Heading */}
              <h1 className={heroStyles.heading}>
                <span className={heroStyles.headingLine1}>Professional</span>
                <br />
                <span className={heroStyles.headingLine2}>Invoices</span>
                <br />
                <span className={heroStyles.headingLine3}>in Seconds</span>
              </h1>

              {/* Description */}
              <p className={heroStyles.description}>
                Transform conversations into professional invoices with AI.{" "}
                <span className={heroStyles.descriptionHighlight}>
                  Paste any text
                </span>{" "}
                and watch AI extract items, calculate totals, and generate
                ready-to-send invoices instantly.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={heroStyles.ctaContainer}>
              <SignedIn>
                <button
                  type="button"
                  onClick={handleSignedInPrimary}
                  className={heroStyles.primaryButton}
                >
                  <div className={heroStyles.primaryButtonOverlay}></div>
                  <span>Start Creating Free</span>
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
                <button
                  type="button"
                  onClick={handleSignedOutPrimary}
                  className={heroStyles.primaryButton}
                >
                  <div className={heroStyles.primaryButtonOverlay}></div>
                  <span>Start Creating Free</span>
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

              {/* Secondary Button */}
              <a href="#features" className={heroStyles.secondaryButton}>
                <span>Explore Features</span>
                <svg
                  className={heroStyles.primaryButtonIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </a>
            </div>
            {/** Features highlight */}
            <div className={heroStyles.featuresGrid}>
              {[
                { icon: "🤖", label: "AI-Powered", desc: "Smart text parsing" },
                {
                  icon: "⚡",
                  label: "Lightning Fast",
                  desc: "Generate in seconds",
                },
                {
                  icon: "🎨",
                  label: "Professional",
                  desc: "Branded templates",
                },
              ].map((feature, index) => (
                <div key={index} className={heroStyles.featureItem}>
                  <div className={heroStyles.featureIcon}> </div>
                  <div className={heroStyles.featureText}>
                    <div className={heroStyles.featureLabel}>
                      {feature.label}
                    </div>
                    <div className={heroStyles.featureDesc}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/** Right side*/}
          <div className={heroStyles.demoColumn}>
            <div className={heroStyles.demoFloating1}></div>
            <div className={heroStyles.demoFloating2}></div>
            <div className={heroStyles.demoContainer}>
              <div className={heroStyles.demoCard}>
                <div className={heroStyles.cardHeader}>
                  <div className="space-y-1">
                    <div className={heroStyles.cardLogoContainer}>
                      <div className={heroStyles.cardLogo}>AI</div>
                      <div>
                        <div className={heroStyles.cardClientName}>
                          Aniket Gupta
                        </div>
                        <div className={heroStyles.cardClientGst}>
                          GST:2792AKC029
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={heroStyles.cardInvoiceInfo}>
                    <div className={heroStyles.cardInvoiceLabel}>Invoice</div>
                    <div className={heroStyles.cardInvoiceNumber}>
                      #INV-1023
                    </div>
                    <div className={heroStyles.cardStatus}>Paid</div>
                  </div>
                </div>
                <div className={heroStyles.itemsContainer}>
                  {[
                    {
                      description: "Website Design & Development",
                      amount: "₹15,000",
                    },
                    { description: "Consultation (2 hours)", amount: "₹3,000" },
                    { description: "Premium Hosting Setup", amount: "₹2,500" },
                  ].map((item, index) => (
                    <div key={index} className={heroStyles.itemRow}>
                      <div className="flex items-center gap-3">
                        <div className={heroStyles.itemDot}></div>

                        <span className={heroStyles.itemDescription}>
                          {item.description}
                        </span>
                        <span className={heroStyles.itemAmount}>
                          {item.amount}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={heroStyles.calculationContainer}>
                  <div className={heroStyles.calculationRow}>
                    <span className={heroStyles.calculationLabel}>
                      Subtotal
                    </span>
                    <span className={heroStyles.calculationValue}>₹20,500</span>
                  </div>
                  <div className={heroStyles.calculationRow}>
                    <span className={heroStyles.calculationLabel}>
                      GST (18%)
                    </span>
                    <span className={heroStyles.calculationValue}>₹3,240</span>
                  </div>
                  <div className={heroStyles.totalRow}>
                    <span className={heroStyles.totalLabel}>Total Amount</span>
                    <span className={heroStyles.totalValue}>₹23,740</span>
                  </div>
                </div>
                <div className={heroStyles.actionButtons}>
                  <button className={heroStyles.previewButton}>
                    <span className={heroStyles.previewButtonText}>Preview</span>
                  </button>
                  <button className={heroStyles.sendButton}>
                    <span className={heroStyles.sendButtonText}>Send Invoices</span>
                  </button>
                </div>
              </div>
              <div className={heroStyles.aiIndicator}>
                  <div className={heroStyles.aiIndicatorContent}>
                  <div className={heroStyles.aiIndicatorDot}></div>
                  <span>AI parse from</span>
                  <span className={heroStyles.aiIndicatorText}>"Invoice for web design - $150...."</span>
                  </div>
              </div>
              <div className={heroStyles.cornerAccent1}></div>
              <div className={heroStyles.cornerAccent2}></div>
              <div className={heroStyles.cardBackground}></div>
            </div>
          </div>
          <div className={heroStyles.scrollIndicator}>
                  <div className={heroStyles.scrollContainer}>
                  <span className={heroStyles.scrollText}> Scroll to Explore</span>
                  </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
