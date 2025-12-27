import React from "react";
import { heroStyles } from "../assets/dummyStyles";
function Hero() {
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
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
