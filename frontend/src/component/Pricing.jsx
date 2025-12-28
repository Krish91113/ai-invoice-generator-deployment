import React, { useState } from "react";
import { pricingStyles, pricingCardStyles } from "../assets/dummyStyles";
import { useAuth, useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const clerk = useClerk();
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  const pricingCard =({
    title,
  price,
  period,
  description,
  features = [],
  isPopular = false,
  isAnnual = false,
  delay = 0,
  onCtaClick,
  })=>{
    <div className={`${pricingCardStyles.card} ${
        isPopular ? pricingCardStyles.cardPopular: pricingCardStyles.cardRegular
    }`} style={`${delay}ms`}>
        {isPopular && (
            <div className={pricingCardStyles.popularBadge}>
                <div className={pricingCardStyles.popularBadgeContent}>
            Most Popular
                </div>
            </div>
        )}
        {isPopular && <div className={pricingCardStyles.gradientOverlay}/>}
        <div className={pricingCardStyles.animatedBorder}>
        <div className={pricingCardStyles.content}>
            <div className={pricingCardStyles.header}>
        <h3 className={`${pricingCardStyles.title} ${
            isPopular ? pricingCardStyles.titlePopular : pricingCardStyles.titleRegular
        }`}>

        </h3>
        <p className={pricingCardStyles.description}>{description}</p>
            </div>

        </div>
        <div className={pricingCardStyles.priceContainer}>
        <div className={pricingCardStyles.priceWrapper}>
        <span className={`${pricingCardStyles.price} ${
            isPopular ? pricingCardStyles.pricePopular : pricingCardStyles.priceRegular
        }`}>
            {price}
        </span>
        {period && (
            <span className={}></span>
        )}
        </div>
        </div>
        </div>
    </div>
  }
  const plans = {
    monthly: [
      {
        title: "Starter",
        price: "₹0",
        period: "month",
        description: "Perfect for freelancers and small projects",
        features: [
          "5 invoices per month",
          "Basic AI parsing",
          "Standard templates",
          "Email support",
          "PDF export",
        ],
        isPopular: false,
      },
      {
        title: "Professional",
        price: "₹499",
        period: "month",
        description: "For growing businesses and agencies",
        features: [
          "Unlimited invoices",
          "Advanced AI parsing",
          "Custom branding",
          "Priority support",
          "Advanced analytics",
          "Team collaboration (3 members)",
          "API access",
        ],
        isPopular: true,
      },
      {
        title: "Enterprise",
        price: "₹1,499",
        period: "month",
        description: "For large organizations with custom needs",
        features: [
          "Everything in Professional",
          "Unlimited team members",
          "Custom workflows",
          "Dedicated account manager",
          "SLA guarantee",
          "White-label solutions",
          "Advanced security",
        ],
        isPopular: false,
      },
    ],
    annual: [
      {
        title: "Starter",
        price: "₹0",
        period: "month",
        description: "Perfect for freelancers and small projects",
        features: [
          "5 invoices per month",
          "Basic AI parsing",
          "Standard templates",
          "Email support",
          "PDF export",
        ],
        isPopular: false,
        isAnnual: false,
      },
      {
        title: "Professional",
        price: "₹399",
        period: "month",
        description: "For growing businesses and agencies",
        features: [
          "Unlimited invoices",
          "Advanced AI parsing",
          "Custom branding",
          "Priority support",
          "Advanced analytics",
          "Team collaboration (3 members)",
          "API access",
        ],
        isPopular: true,
        isAnnual: true,
      },
      {
        title: "Enterprise",
        price: "₹1,199",
        period: "month",
        description: "For large organizations with custom needs",
        features: [
          "Everything in Professional",
          "Unlimited team members",
          "Custom workflows",
          "Dedicated account manager",
          "SLA guarantee",
          "White-label solutions",
          "Advanced security",
        ],
        isPopular: false,
        isAnnual: true,
      },
    ],
  };
  function handleCtaClick (planeMeta, flags={}){
    if(flags.openSignInFallBack || !isSignedIn){
        if(clerk && typeof clerk.openSignIn === "function"){
            clerk.openSignIn({redirectUrl: "/app/create-invoice"})
        }else{
            navigate("/sign-in")
        }
    }
    navigate("/app/create-invoice", {
        state : {fromPlan : planeMeta?.title || null}
    })
  }
  const currentPlans = plans[billingPeriod];

  return (
    <section id="pricing" className={pricingStyles.section}>
        <div className={pricingStyles.bgElement1}></div>
        <div className={pricingStyles.bgElement2}></div>
        <div className={pricingStyles.bgElement3}></div>
        <div className={pricingStyles.container}>
            <div className={pricingStyles.headerContainer}>
            <div className={pricingStyles.badge}>
                <span className={pricingStyles.badgeDot}></span>
                <span className={pricingStyles.badgeText}>Transparent Pricing </span>
            </div>
            <h2 className={pricingStyles.title}> 
                Simple , {" "}
                <span className={pricingStyles.titleGradient}>Fair Pricing</span>
            </h2>

            <p className={pricingStyles.description}>
                Start free, Upgrade as you grow .No hidden fees, no surprise charges.
            </p>
            <div className={pricingStyles.billingToggle} style={{marginTop : 12}}>
                <button onClick={()=> setBillingPeriod("monthly")} className={`${pricingStyles.billingButton} ${
                    billingPeriod === "monthly" ? pricingStyles.billingButtonActive : pricingStyles.billingButtonInactive
                }`}>
                    Monthly
                </button>
                <button onClick={()=> setBillingPeriod("annual")} className={`${pricingStyles.billingButton} ${
                    billingPeriod === "annual" ? pricingStyles.billingButtonActive : pricingStyles.billingButtonInactive
                }`}>
                    Annual
                    <span className={pricingStyles.billingBadge}>Save 20%</span>
                </button>
            </div>
            </div>
            <div className={pricingStyles.grid}>

            </div>
        </div>
    </section>
  )
}

export default Pricing;
