import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  Building2,
  Calculator,
  Check,
  ChevronDown,
  Clock3,
  FileText,
  Home,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import "./styles.css";

// FormSubmit requires the recipient to activate this email address after its first submission.
const FORMSUBMIT_EMAIL = "YOUR_EMAIL@example.com";
const WHATSAPP_NUMBER = "919972855143";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello LoanVeya, I would like to discuss a loan.")}`;
const loanTypes = [
  [
    "Home Loan",
    "Guidance to explore financing for buying, building, or renovating a home.",
    Home,
  ],
  [
    "Personal Loan",
    "Explore options for planned personal needs with clear lender-led terms.",
    Banknote,
  ],
  [
    "Business Loan",
    "Support in understanding options for business growth and working capital.",
    BriefcaseBusiness,
  ],
  [
    "Loan Against Property",
    "Explore secured finance options using eligible property as collateral.",
    Building2,
  ],
  [
    "Vehicle Loan",
    "Compare suitable financing routes for a new or pre-owned vehicle.",
    ArrowRight,
  ],
  [
    "Balance Transfer",
    "Understand whether moving an existing loan may suit your situation.",
    FileText,
  ],
  [
    "Education Loan",
    "Guidance for exploring education financing with participating lenders.",
    Sparkles,
  ],
  [
    "Professional Loan",
    "Explore lending options designed around professional practice needs.",
    BadgeCheck,
  ],
];

function Logo({ compact = false }) {
  return (
    <div className="logo" aria-label="LoanVeya Credit Connect">
      <svg viewBox="0 0 52 52" aria-hidden="true">
        <circle
          cx="26"
          cy="26"
          r="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M16 14v22h17"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m30 30 5 6 6-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="39"
          cy="18"
          r="4"
          fill="#D5A63B"
          stroke="#fff"
          strokeWidth="2"
        />
      </svg>
      {!compact && (
        <span>
          <strong>LoanVeya</strong>
          <small>CREDIT CONNECT</small>
        </span>
      )}
    </div>
  );
}
function Button({ children, onClick, secondary = false, href, ...props }) {
  const className = `button ${secondary ? "button-secondary" : ""}`;
  return href ? (
    <a className={className} href={href} {...props}>
      {children}
    </a>
  ) : (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

function Navbar({ openLead }) {
  const [open, setOpen] = useState(false);
  const links = [
    ["Loan Solutions", "solutions"],
    ["How It Works", "how"],
    ["EMI Calculator", "calculator"],
    ["About", "about"],
    ["FAQs", "faq"],
  ];
  const close = () => setOpen(false);
  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a href="#top" onClick={close}>
          <Logo />
        </a>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={close}>
              {label}
            </a>
          ))}
          <Button
            onClick={() => {
              close();
              openLead();
            }}
          >
            Get a Callback <ArrowRight size={16} />
          </Button>
        </div>
        <button
          className="menu"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}
function Hero({ openLead }) {
  return (
    <section id="top" className="hero">
      <div className="hero-grid container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Independent loan facilitation
          </p>
          <h1>
            The right loan path <em>starts with clarity.</em>
          </h1>
          <p className="lead">
            Get personalised support to explore suitable bank and NBFC loan
            options—clearly explained, with no misleading promises.
          </p>
          <div className="hero-actions">
            <Button onClick={() => openLead()}>
              Check Your Options <ArrowRight size={18} />
            </Button>
            <Button
              secondary
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> WhatsApp an Advisor
            </Button>
          </div>
          <p className="micro">
            <ShieldCheck size={16} /> Not a bank or lender. Lender decisions
            always apply.
          </p>
        </div>
        <div
          className="route-art"
          aria-label="Illustration of a guided loan journey"
        >
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="art-card home-card">
            <Home />
            <span>Home</span>
          </div>
          <div className="art-card business-card">
            <BriefcaseBusiness />
            <span>Business</span>
          </div>
          <div className="route">
            <i />
            <i />
            <i />
            <b>
              <ArrowRight />
            </b>
          </div>
          <div className="center-mark">
            <Logo compact />
            <span>
              Explore
              <br />
              with clarity
            </span>
          </div>
          <div className="art-card growth-card">
            <Sparkles />
            <span>Growth</span>
          </div>
        </div>
      </div>
    </section>
  );
}
function TrustStrip() {
  return (
    <section className="trust">
      <div className="container">
        <div className="trust-points">
          {[
            ["Multiple loan categories", Banknote],
            ["Clear eligibility guidance", ShieldCheck],
            ["Document support", FileText],
            ["Transparent process", BadgeCheck],
          ].map(([text, Icon]) => (
            <div key={text}>
              <Icon />
              <span>{text}</span>
            </div>
          ))}
        </div>
        <p>
          Loan eligibility, terms, rates, and approval are determined solely by
          the respective lender.
        </p>
      </div>
    </section>
  );
}
function Solutions({ openLead }) {
  return (
    <section id="solutions" className="section container">
      <div className="section-head">
        <div>
          <p className="eyebrow">Loan solutions</p>
          <h2>
            Find the route that fits your <em>next step.</em>
          </h2>
        </div>
        <p>
          Every situation is different. We help make the options easier to
          understand before you approach a lender.
        </p>
      </div>
      <div className="loan-grid">
        {loanTypes.map(([title, text, Icon]) => (
          <article className="loan-card" key={title}>
            <span className="icon-box">
              <Icon />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
            <button onClick={() => openLead(title)}>
              Discuss this loan <ArrowRight size={16} />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
function How() {
  const steps = [
    [
      "01",
      "Share your requirement",
      "Tell us what you are looking to finance and the support you need.",
    ],
    [
      "02",
      "Understand suitable options",
      "We help you explore relevant lender categories and considerations.",
    ],
    [
      "03",
      "Receive document guidance",
      "Get a clear view of commonly requested documents and next steps.",
    ],
    [
      "04",
      "Proceed with the lender",
      "You decide whether to proceed; the lender assesses and decides.",
    ],
  ];
  return (
    <section id="how" className="how">
      <div className="container">
        <div className="section-head centered">
          <div>
            <p className="eyebrow">How it works</p>
            <h2>
              A steadier way to move <em>forward.</em>
            </h2>
          </div>
        </div>
        <div className="steps">
          {steps.map(([num, title, text]) => (
            <article key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <p className="section-note">
          LoanVeya assists with guidance and coordination; it does not make
          lending decisions.
        </p>
      </div>
    </section>
  );
}
function EmiCalculator() {
  const [amount, setAmount] = useState(1500000),
    [rate, setRate] = useState(10.5),
    [years, setYears] = useState(10);
  const monthlyRate = rate / 1200;
  const months = years * 12;
  const emi = monthlyRate
    ? (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
    : amount / months;
  const currency = (v) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(isFinite(v) ? v : 0);
  const fields = [
    ["Loan amount", amount, setAmount, 100000, 10000000, 50000, "₹"],
    ["Annual interest rate", rate, setRate, 6, 24, 0.1, "%"],
    ["Tenure in years", years, setYears, 1, 30, 1, "yrs"],
  ];
  return (
    <section id="calculator" className="section container">
      <div className="calculator">
        <div className="calc-copy">
          <p className="eyebrow">Plan with perspective</p>
          <h2>
            Try the EMI <em>calculator.</em>
          </h2>
          <p>
            Use this simple estimate to begin a more informed conversation about
            your possible repayment journey.
          </p>
          <div className="calc-badge">
            <Calculator />
            <span>Illustrative, private and browser-based</span>
          </div>
        </div>
        <div className="calc-panel">
          {fields.map(([label, value, setValue, min, max, step, suffix]) => (
            <label className="range-field" key={label}>
              <span>
                {label}
                <b>{suffix === "₹" ? currency(value) : `${value} ${suffix}`}</b>
              </span>
              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
              />
              <input
                aria-label={label}
                type="number"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) =>
                  setValue(
                    Math.min(max, Math.max(min, Number(e.target.value) || min)),
                  )
                }
              />
            </label>
          ))}
          <div className="calc-result">
            <div>
              <span>Estimated monthly EMI</span>
              <strong>{currency(emi)}</strong>
            </div>
            <div>
              <span>Total interest</span>
              <b>{currency(emi * months - amount)}</b>
            </div>
            <div>
              <span>Total repayment</span>
              <b>{currency(emi * months)}</b>
            </div>
          </div>
          <p>
            Calculator results are illustrative only and are not a loan offer.
          </p>
        </div>
      </div>
    </section>
  );
}
function Advisor() {
  return (
    <section id="about" className="advisor">
      <div className="container advisor-grid">
        <div className="profile-art">
          <div className="profile-circle">
            <span>V</span>
          </div>
          <div className="profile-label">
            <span>YOUR ADVISOR</span>
            <b>Venkat</b>
            <small>Loan facilitation support</small>
          </div>
        </div>
        <div>
          <p className="eyebrow">A person, not a pipeline</p>
          <h2>
            One point of contact for <em>clearer conversations.</em>
          </h2>
          <p className="lead">
            Document coordination, lender-process guidance, and support in
            understanding your next step—without overpromising an outcome.
          </p>
          <div className="advisor-details">
            <span>
              <Phone /> +91 99728 55143
            </span>
            <span>
              <Clock3 /> Experience: [Years of Experience]
            </span>
            <span>
              <Building2 /> [City]
            </span>
          </div>
          <Button href={whatsappUrl} target="_blank" rel="noreferrer">
            Message Venkat <MessageCircle size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
function Testimonials() {
  return (
    <section className="section container">
      <div className="section-head">
        <div>
          <p className="eyebrow">Feedback, responsibly shared</p>
          <h2>
            Trust is earned, not <em>invented.</em>
          </h2>
        </div>
      </div>
      <div className="testimonial-grid">
        {[1, 2, 3].map((i) => (
          <article key={i}>
            <div>“</div>
            <p>
              Client testimonial placeholder—replace with verified feedback
              before launch.
            </p>
            <span>Verified client feedback to be added</span>
          </article>
        ))}
      </div>
    </section>
  );
}
const faqs = [
  [
    "Is LoanVeya a bank or lender?",
    "No. LoanVeya Credit Connect is an independent loan facilitation and advisory service, not a bank, NBFC, or lender.",
  ],
  [
    "Is loan approval guaranteed?",
    "No. Approval, loan amount, rates, terms, and disbursal are decided solely by the relevant lender.",
  ],
  [
    "What documents may be required?",
    "Requirements vary by lender and loan type. We can guide you on commonly requested documents, but the lender will confirm its requirements.",
  ],
  [
    "Can I compare loan options?",
    "We can help you understand suitable lender categories and factors to compare. Final offers and decisions come directly from lenders.",
  ],
  [
    "Will I receive WhatsApp updates?",
    "Only if you provide consent. You can ask us to stop promotional communication at any time.",
  ],
  [
    "Is there any service charge?",
    "Any applicable facilitation or advisory charge must be clearly disclosed before it is incurred.",
  ],
];
function FAQ() {
  const [active, setActive] = useState(null);
  return (
    <section id="faq" className="faq">
      <div className="container faq-grid">
        <div>
          <p className="eyebrow">Questions, answered</p>
          <h2>
            Clarity matters <em>before anything else.</em>
          </h2>
          <p>
            We believe a helpful conversation starts with a straight answer.
          </p>
        </div>
        <div>
          {faqs.map(([q, a], i) => (
            <article className={active === i ? "active" : ""} key={q}>
              <button
                onClick={() => setActive(active === i ? null : i)}
                aria-expanded={active === i}
              >
                {q}
                <ChevronDown />
              </button>
              {active === i && <p>{a}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function Modal({ children, onClose, title }) {
  const ref = useRef();
  useEffect(() => {
    const close = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", close);
    const first = ref.current?.querySelector("button,input,select,textarea,a");
    first?.focus();
    return () => document.removeEventListener("keydown", close);
  }, [onClose]);
  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      role="presentation"
    >
      <section
        ref={ref}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button className="close" onClick={onClose} aria-label="Close dialog">
          <X />
        </button>
        <h2 id="modal-title">{title}</h2>
        {children}
      </section>
    </div>
  );
}
function LeadModal({ onClose, loanType }) {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    loan: loanType || "",
    time: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState({}),
    [status, setStatus] = useState("");
  const update = (key, value) => setForm({ ...form, [key]: value });
  const submit = async (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!/^[6-9]\d{9}$/.test(form.mobile.replace(/\D/g, "")))
      next.mobile = "Enter a valid 10-digit Indian mobile number.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (!form.city.trim()) next.city = "Please enter your city.";
    if (!form.loan) next.loan = "Please choose a loan type.";
    if (!form.consent) next.consent = "Consent is required before submitting.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("sending");
    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ ...form, _subject: "New LoanVeya enquiry" }),
        },
      );
      if (!response.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };
  if (status === "success")
    return (
      <Modal title="Thank you" onClose={onClose}>
        <div className="feedback success">
          <Check />
          <p>
            Your enquiry has been received. Venkat will get in touch at your
            preferred time.
          </p>
          <Button onClick={onClose}>Close</Button>
        </div>
      </Modal>
    );
  return (
    <Modal title="Let’s start with your enquiry" onClose={onClose}>
      <p className="modal-intro">
        Share only the basics. We never ask here for OTPs, passwords, card
        details, or bank credentials.
      </p>
      {status === "error" && (
        <p className="error-summary">
          We could not send your enquiry. Please try again or WhatsApp Venkat
          directly.
        </p>
      )}
      <form onSubmit={submit} noValidate>
        {Object.keys(errors).length > 0 && (
          <p className="error-summary">
            Please review the highlighted fields and try again.
          </p>
        )}
        <div className="form-grid">
          {[
            ["name", "Full name", "text"],
            ["mobile", "Mobile number", "tel"],
            ["email", "Email address", "email"],
            ["city", "City", "text"],
          ].map(([key, label, type]) => (
            <label key={key}>
              {label}
              <input
                type={type}
                value={form[key]}
                onChange={(e) => update(key, e.target.value)}
                aria-invalid={!!errors[key]}
              />
              {errors[key] && (
                <small className="field-error">{errors[key]}</small>
              )}
            </label>
          ))}
          <label>
            Loan type
            <select
              value={form.loan}
              onChange={(e) => update("loan", e.target.value)}
              aria-invalid={!!errors.loan}
            >
              <option value="">Choose a loan type</option>
              {loanTypes.map(([type]) => (
                <option key={type}>{type}</option>
              ))}
            </select>
            {errors.loan && (
              <small className="field-error">{errors.loan}</small>
            )}
          </label>
          <label>
            Preferred callback time
            <select
              value={form.time}
              onChange={(e) => update("time", e.target.value)}
            >
              <option value="">Any suitable time</option>
              <option>Morning (9am–12pm)</option>
              <option>Afternoon (12pm–4pm)</option>
              <option>Evening (4pm–7pm)</option>
            </select>
          </label>
        </div>
        <label>
          Message{" "}
          <textarea
            rows="3"
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Tell us a little about what you need (optional)"
          />
        </label>
        <label className="consent">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => update("consent", e.target.checked)}
          />{" "}
          <span>
            I agree to the Terms &amp; Conditions and consent to be contacted
            about my enquiry.
          </span>
        </label>
        {errors.consent && (
          <small className="field-error">{errors.consent}</small>
        )}
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Request a Callback"}{" "}
          <ArrowRight size={17} />
        </Button>
      </form>
    </Modal>
  );
}
function TermsModal({ onClose }) {
  return (
    <Modal title="Terms & Conditions" onClose={onClose}>
      <div className="terms">
        <p>
          <b>Last updated: July 2026</b>
        </p>
        <p>
          LoanVeya Credit Connect is an independent loan facilitation and
          advisory service and is not a bank, NBFC, or lender.
        </p>
        <p>
          Any loan approval, interest rate, fees, loan amount, repayment period,
          and disbursal are decided solely by the relevant lender.
        </p>
        <p>
          Content and calculator results are for general information only and
          are not a loan offer, financial advice, or approval commitment.
        </p>
        <p>
          Users must provide accurate information and should review lender
          documents carefully before proceeding.
        </p>
        <p>
          Personal information submitted through the website is used only to
          respond to the enquiry and provide requested assistance, subject to
          the privacy policy.
        </p>
        <p>
          Communications by phone, SMS, email, or WhatsApp occur only with user
          consent. You can request that promotional communication stop at any
          time.
        </p>
        <p>
          Any facilitation or advisory charges, if applicable, must be clearly
          disclosed before they are incurred.
        </p>
        <p>
          LoanVeya will never ask for OTPs, passwords, card PINs, or bank-login
          credentials.
        </p>
        <p>
          You are responsible for independently reviewing lender terms before
          accepting any loan.
        </p>
      </div>
    </Modal>
  );
}
function Footer({ openTerms }) {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>
            A clearer way to explore bank and NBFC loan options, with support
            that stays transparent.
          </p>
          <a href="mailto:YOUR_EMAIL@example.com">YOUR_EMAIL@example.com</a>
          <a href="tel:+919972855143">+91 99728 55143</a>
        </div>
        <div>
          <h3>Explore</h3>
          <a href="#solutions">Loan Solutions</a>
          <a href="#how">How It Works</a>
          <a href="#calculator">EMI Calculator</a>
          <a href="#faq">FAQs</a>
        </div>
        <div className="campaign-card">
          <span>BUSINESS WHATSAPP CAMPAIGNS</span>
          <b>Backend integration required</b>
          <p>
            Campaigns may only be sent to opted-in recipients via the official
            WhatsApp Business Platform or an approved provider using approved
            templates.
          </p>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>
          LoanVeya Credit Connect is not a lender. Loan decisions are made by
          the respective lending institutions.
        </p>
        <button onClick={openTerms}>Terms &amp; Conditions</button>
        <a href="#">Privacy Policy</a>
        <small>© 2026 LoanVeya Credit Connect</small>
      </div>
    </footer>
  );
}
function App() {
  const [lead, setLead] = useState(false),
    [loan, setLoan] = useState(""),
    [terms, setTerms] = useState(false);
  const openLead = (type = "") => {
    setLoan(type);
    setLead(true);
  };
  return (
    <>
      <Navbar openLead={openLead} />
      <main>
        <Hero openLead={openLead} />
        <TrustStrip />
        <Solutions openLead={openLead} />
        <How />
        <EmiCalculator />
        <Advisor />
        <Testimonials />
        <FAQ />
      </main>
      <Footer openTerms={() => setTerms(true)} />
      {lead && (
        <LeadModal onClose={() => setLead(false)} loanType={loan} />
      )}{" "}
      {terms && <TermsModal onClose={() => setTerms(false)} />}
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
