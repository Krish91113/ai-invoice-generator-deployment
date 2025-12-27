import React, { useRef, useState } from "react";
import { navbarStyles } from "../assets/dummyStyles";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { SignedOut, useAuth, useClerk, useUser } from "@clerk/clerk-react";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user } = useUser();
  const { getToken, isSignedIn } = useAuth;
  const clerk = useClerk();
  const navigate = useNavigate();
  const profileRef = useRef(null);
  const TOKEN_KEY = "token";

  //functions
  function openSignIn() {
    try {
      if (clerk && typeof clerk.openSignIn === "function") {
        clerk.openSignIn();
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("openSignIN failed", error);
      navigate("/login");
    }
  }
  function openSignUp() {
    try {
      if (clerk && typeof clerk.openSignUp === "function") {
        clerk.openSignUp();
      } else {
        navigate("/signup");
      }
    } catch (error) {
      console.error("openSignup failed", error);
      navigate("/signup");
    }
  }
  return (
    <header className={navbarStyles.header}>
      <div className={navbarStyles.container}>
        <nav className={navbarStyles.nav}>
          <div className={navbarStyles.logoSection}>
            <Link to="/" className={navbarStyles.logoLink}>
              <img src={logo} alt="logo" className={navbarStyles.logoImage} />
              <span className={navbarStyles.logoText}> Ai Invoice</span>
            </Link>
            <div className={navbarStyles.desktopNav}>
              <a href="#features" className={navbarStyles.navLink}>
                Features
              </a>
              <a href="#pricing" className={navbarStyles.navLinkInactive}>
                Pricing
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className={navbarStyles.authSection}>
              <SignedOut>
                <button
                  onClick={openSignIn}
                  className={navbarStyles.signInButton}
                  type="button"
                >
                  Sign In
                </button>
                <button
                  onClick={openSignUp}
                  className={navbarStyles.signUpButton}
                  type="button"
                >
                  Sign Up
                  <svg
                    className={navbarStyles.signUpIcon}
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
            {/* MObile toggle view  */}
            <button onClick={()=> setOpen(!open) } className={navbarStyles.mobileMenuButton}>
                <div className={navbarStyles.mobileMenuIcon}>
                    <span className={`${navbarStyles.mobileMenuLine1} ${
                        open ? navbarStyles.mobileMenuLine1Open : navbarStyles.mobileMenuLine1Closed
                    }`}></span>
                    <span className={`${navbarStyles.mobileMenuLine2} ${
                        open ? navbarStyles.mobileMenuLine2Open : navbarStyles.mobileMenuLine2Closed
                    }`}></span>
                    <span className={`${navbarStyles.mobileMenuLine3} ${
                        open ? navbarStyles.mobileMenuLine3Open : navbarStyles.mobileMenuLine3Closed
                    }`}></span>
                </div>
            </button>
          </div>
        </nav>
      </div>
      <div className={`${open ? "block" : "hidden"} ${navbarStyles.mobileMenu}`}>
            <div className={navbarStyles.mobileMenuContainer}>
                    <a href="#features" className={navbarStyles.mobileNavLink}>
                        Features
                    </a>
                     <a href="#pricing" className={navbarStyles.mobileNavLink}>
                        Pricing
                    </a>
            </div>
      </div>
    </header>
  );
}

export default NavBar;
