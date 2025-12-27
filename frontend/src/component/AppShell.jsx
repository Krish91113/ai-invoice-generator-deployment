import React, { useState } from "react";
import { appShellStyles } from "../assets/dummyStyles";
import { Link, useNavigate } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";
import logo from "../assets/logo.png";
function AppShell() {
  const navigate = useNavigate();
  const { signOut } = useClerk();
  const { user } = useUser();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(() => {
    try {
      return localStorage.getItem("sidebar_collapsed") === "true";
    } catch {
      return false;
    }
  });

  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

   // Check screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) setCollapsed(false);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("sidebar_collapsed", collapsed ? "true" : "false");
    } catch {}
  }, [collapsed]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = ()=>{setCollapsed(!collapsed)};
  return (
    <div className={appShellStyles.root}>
      <div className={appShellStyles.layout}>
        {/* sidebar */}
        <aside
          className={`${appShellStyles.sidebar} ${
            collapsed
              ? appShellStyles.sidebarCollapsed
              : appShellStyles.sidebarExpanded
          }`}
        >
          <div className={appShellStyles.sidebarGradient}>
            <div className={appShellStyles.sidebarContainer}>
              <div>
                <div
                  className={`${appShellStyles.logoContainer} ${
                    collapsed ? appShellStyles.logoContainerCollapsed : ""
                  }`}
                >
                  <Link to="/" className={appShellStyles.logoLink}>
                    <div className="relative ">
                      <img
                        src={logo}
                        alt="logo"
                        className={appShellStyles.logoImage}
                      />
                      <div className="absolute inset-0 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"/>
                      
                    </div>  
                    {!collapsed && (
                        <div className={appShellStyles.logoTextContainer}>
                            <span className={appShellStyles.logoText}>AI Invoice</span>
                            <div className={appShellStyles.logoUnderline}></div>
                        </div>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default AppShell;
