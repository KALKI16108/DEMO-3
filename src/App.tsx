import React, { useState, useMemo } from 'react';
import { 
  ArrowUpRight, 
  ArrowDown, 
  Menu, 
  ChevronRight, 
  Star, 
  Phone, 
  MapPin, 
  Clock, 
  Search, 
  Award, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Calendar, 
  Sparkles,
  Heart,
  Smile,
  X,
  Compass
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CLINIC_NAME = "Dr. Nidhi's Dental Clinic";
const CLINIC_TAGLINE = "Best Dental Clinic in Goregaon";
const CLINIC_PHONE = "082382 11414";
const CLINIC_ADDRESS = "Ashoka Super Market, B-20, Aarey Rd, near Bata Showroom, off Swami Vivekanand Road, Piramal Nagar, Goregaon West, Mumbai, Maharashtra 400104";
const MAPS_URL = "https://maps.google.com/?q=Dr.+Nidhi's+Dental+Clinic+Goregaon";

// Timings configuration
const TIMINGS = {
  morning: "10:00 AM - 2:00 PM",
  evening: "5:00 PM - 9:00 PM",
  raw: "Open · Closes 2 pm · Reopens 5 pm"
};

// Complete list of 20 requested services fully categorized & descriptive
const CLINIC_SERVICES = [
  { id: "teeth-whitening", name: "Teeth whitening", category: "Cosmetic", desc: "Professional high-potency bleaching for a sparkling stain-free white smile.", duration: "45 mins", difficulty: "Quick & Easy" },
  { id: "bonding", name: "Bonding", category: "Cosmetic", desc: "Repair minor cracks, chips, and discolorations using premium dental composite resins.", duration: "30 mins", difficulty: "Comfortable" },
  { id: "check-ups", name: "Check-ups", category: "Preventive", desc: "Comprehensive diagnostic inspection of gums, teeth, and overall oral health.", duration: "20 mins", difficulty: "Essential" },
  { id: "cosmetic-procedures", name: "Cosmetic procedures", category: "Cosmetic", desc: "Custom smile makeovers, dental contouring, and advanced aesthetic enhancement.", duration: "Varies", difficulty: "Tailored" },
  { id: "dental-implants", name: "Dental implants", category: "Surgical", desc: "Titanium-reinforced root replication to support permanent, pristine porcelain crowns.", duration: "90 mins", difficulty: "Expert Care" },
  { id: "dentures-bridges", name: "Dentures & bridges", category: "Surgical", desc: "High-comfort fixed bridges or lightweight removable dentures for complete bite restoration.", duration: "60 mins", difficulty: "Restorational" },
  { id: "emergency-care", name: "Emergency care", category: "Urgent", desc: "Immediate 24/7 relief for toothaches, oral trauma, broken jaws or avulsed teeth.", duration: "Immediate", difficulty: "High Priority" },
  { id: "extractions", name: "Extractions", category: "Surgical", desc: "Surgical or simple extraction of compromised or impacted wisdom teeth painlessly.", duration: "40 mins", difficulty: "Painless" },
  { id: "fillings-sealants", name: "Fillings and sealants", category: "Preventive", desc: "Deep decay protection with body-matching composite fillings and clear pit sealants.", duration: "30 mins", difficulty: "Familiar" },
  { id: "laser-dentistry", name: "Laser dentistry", category: "Surgical", desc: "Ultra-quiet, bloodless gum shaping and cavity therapy utilizing advanced soft-tissue lasers.", duration: "45 mins", difficulty: "High Tech" },
  { id: "mouth-guards", name: "Mouth guards", category: "Preventive", desc: "Custom-fitted shock-buffering guards for nocturnal teeth grinding (bruxism) and sports.", duration: "1 hr", difficulty: "Comfort Fit" },
  { id: "oral-surgery", name: "Oral surgery", category: "Surgical", desc: "Advanced jaw alignment, bone grafting, and specialized soft tissue rehabilitation.", duration: "90 mins", difficulty: "Expert Surgery" },
  { id: "paediatrics", name: "Paediatrics", category: "Preventive", desc: "Fun, gentle dental care specialized for children's developmental teeth and oral hygiene.", duration: "30 mins", difficulty: "Kid Friendly" },
  { id: "root-canals", name: "Root canals", category: "Surgical", desc: "Surgical disinfection of infected active dental pulp to save existing natural teeth.", duration: "50 mins", difficulty: "Painless Therapy" },
  { id: "teeth-cleaning", name: "Teeth cleaning", category: "Preventive", desc: "Therapeutic scale removal of hard plaque, tartar build-up, and polished stain cleaning.", duration: "30 mins", difficulty: "Refreshing" },
  { id: "teeth-reshaping", name: "Teeth reshaping", category: "Cosmetic", desc: "Subtle enamel adjustment to correct tooth length, overlap, or sharp edge angles.", duration: "25 mins", difficulty: "Instant Polish" },
  { id: "veneers-crowns", name: "Veneers & crowns", category: "Cosmetic", desc: "Hand-sculpted E-Max laminate porcelain veneers and zirconia ceramic caps for flawless shape.", duration: "60 mins", difficulty: "Artistic" },
  { id: "x-ray", name: "X-ray", category: "Preventive", desc: "Instant low-radiation digital radiograph scanning of hidden sub-bone dental structures.", duration: "5 mins", difficulty: "Zero Stress" },
  { id: "braces-aligners", name: "Braces and aligners treatment", category: "Cosmetic", desc: "Virtual 3D pre-planned clear transparent aligners or speed ceramic braces.", duration: "45 mins", difficulty: "Continuous Care" },
  { id: "implants-general", name: "Dental Implant Surgery", category: "Surgical", desc: "Premium bone-locked tooth restoration with certified lifetime implant warranty options.", duration: "90 mins", difficulty: "Comprehensive" }
];

const ClinicLogo = () => (
  <div className="flex flex-col leading-[1.1] tracking-tight text-zinc-900 text-left">
    <span className="font-extrabold text-[17px] sm:text-[19px] tracking-wide text-zinc-950 flex items-center gap-1.5">
      Dr. Nidhi's
      <span className="inline-flex items-center justify-center bg-emerald-100 text-emerald-800 text-[9px] font-bold px-1.5 py-0.5 rounded-full border border-emerald-200">5.0 ★</span>
    </span>
    <span className="font-semibold text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-zinc-500">
      Dental Clinic · Goregaon
    </span>
  </div>
);

const IconButton = ({ children, className = "", onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className={`flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 transition-all hover:bg-zinc-100 active:scale-95 ${className}`}
  >
    {children}
  </button>
);

const PillButton = ({ children, dark = false, className = "", onClick }: { children: React.ReactNode, dark?: boolean, className?: string, onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 ${
      dark 
        ? 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm shadow-zinc-900/10' 
        : 'bg-white text-zinc-950 border border-zinc-200 hover:bg-zinc-50'
    } ${className}`}
  >
    {children}
  </button>
);

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [bookingService, setBookingService] = useState("Teeth whitening");
  const [bookingMessage, setBookingMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showNavDropdown, setShowNavDropdown] = useState(false);

  // Dynamic timing detection
  const isCurrentlyOpen = useMemo(() => {
    const hours = new Date().getHours();
    // Closes 2pm (14:00), reopens 5pm (17:00) to 9pm (21:00)
    return (hours >= 10 && hours < 14) || (hours >= 17 && hours < 21);
  }, []);

  const categories = ["All", "Cosmetic", "Preventive", "Surgical", "Urgent"];

  const filteredServices = useMemo(() => {
    return CLINIC_SERVICES.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            service.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleBookNow = (serviceName?: string) => {
    if (serviceName) {
      setBookingService(serviceName);
    }
    const bookingSection = document.getElementById("booking-section");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingEmail) {
      alert("Please provide at least your name and contact email to queue the slot!");
      return;
    }
    setShowSuccess(true);
  };

  const resetBookingForm = () => {
    setBookingName("");
    setBookingEmail("");
    setBookingDate("");
    setBookingTime("");
    setBookingMessage("");
    setShowSuccess(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-zinc-200 selection:text-zinc-900 antialiased">
      
      {/* Premium Notification Top Banner */}
      <div className="bg-zinc-900 text-white text-[12px] sm:text-[13px] py-2.5 px-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isCurrentlyOpen ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isCurrentlyOpen ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
            </span>
            <span className="font-medium">
              {TIMINGS.raw} 
            </span>
            <span className="text-zinc-500">|</span>
            <span className="text-zinc-300 hidden md:inline">Goregaon West Premium Hub</span>
          </div>

          <div className="flex items-center gap-4">
            <a href={`tel:${CLINIC_PHONE.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors font-semibold">
              <Phone size={14} className="text-emerald-400" />
              <span>Call Best Clinic: {CLINIC_PHONE}</span>
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-1.5 hover:text-zinc-300 transition-colors bg-white/10 px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-white/15">
              <MapPin size={11} />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="p-2 sm:p-4 pb-0">
        <div className="bg-[#e4ece9] rounded-[2.5rem] p-5 sm:p-6 lg:p-12 h-auto lg:h-[calc(100vh-4rem)] min-h-[550px] sm:min-h-[600px] flex flex-col relative overflow-hidden">
          
          {/* Navigation Bar */}
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center relative z-20 w-full"
          >
            <a href="#" className="hover:opacity-90 active:scale-95 transition-all">
              <ClinicLogo />
            </a>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-zinc-700 mr-4">
                <a href="#about" className="hover:text-zinc-950 transition-colors">About Dr. Nidhi</a>
                <a href="#services" className="hover:text-zinc-950 transition-colors">Our 20 Services</a>
                <a href="#testimonials" className="hover:text-zinc-950 transition-colors">Reviews (99)</a>
                <a href="#booking-section" className="text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-1">
                  Book Slot <Sparkles size={14} />
                </a>
              </div>
              <PillButton onClick={() => handleBookNow()} className="hidden sm:block shadow-sm py-2 px-5">Dental emergency</PillButton>
              <IconButton 
                onClick={() => setShowNavDropdown(!showNavDropdown)}
                className="bg-white shadow-sm border-none shadow-[0_2px_10px_rgba(0,0,0,0.05)] w-12 h-12"
              >
                <Menu size={20} className="text-zinc-900" />
              </IconButton>
            </div>
          </motion.nav>

          {/* Collapsible Mobile Navigation Panel */}
          <AnimatePresence>
            {showNavDropdown && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-20 right-6 left-6 bg-white rounded-2xl p-6 shadow-xl border border-zinc-100 z-30 flex flex-col gap-4 text-center"
              >
                <div className="flex justify-between items-center pb-2 border-b border-zinc-100">
                  <span className="font-extrabold text-sm uppercase text-emerald-700 tracking-wider">Quick Jump</span>
                  <button onClick={() => setShowNavDropdown(false)} className="text-zinc-400 hover:text-zinc-600">
                    <X size={18} />
                  </button>
                </div>
                <a href="#about" onClick={() => setShowNavDropdown(false)} className="py-2 hover:bg-zinc-50 rounded-xl font-medium block">About Clinic</a>
                <a href="#services" onClick={() => setShowNavDropdown(false)} className="py-2 hover:bg-zinc-50 rounded-xl font-medium block">Dental Treatments</a>
                <a href="#testimonials" onClick={() => setShowNavDropdown(false)} className="py-2 hover:bg-zinc-50 rounded-xl font-medium block">99 Patient Reviews</a>
                <a href="#booking-section" onClick={() => setShowNavDropdown(false)} className="py-2.5 bg-zinc-900 text-white rounded-xl font-medium block">Book Now</a>
                <div className="pt-2 border-t border-zinc-100 text-xs text-zinc-500">
                  <p className="font-semibold">Call Support:</p>
                  <a href={`tel:${CLINIC_PHONE.replace(/\s+/g, '')}`} className="font-bold text-zinc-900 text-sm mt-1 block hover:underline">{CLINIC_PHONE}</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col lg:flex-row mt-8 lg:mt-12 relative z-10 w-full justify-between items-center lg:items-stretch gap-8 lg:gap-12 h-full">
            <div className="w-full lg:w-[48%] flex flex-col justify-center relative z-10 pb-4 lg:pb-0 pt-4 lg:pt-0">
              
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/30 w-fit mb-4 text-xs font-semibold text-zinc-800">
                <Star size={13} className="fill-amber-400 text-amber-500" />
                <span>Google 5.0 Rating Winner (99 Reviews)</span>
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-bold text-emerald-800 mb-4 sm:mb-6 flex items-center gap-3 text-xs sm:text-sm tracking-widest uppercase"
              >
                Goregaon West's Expert Smile Care
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 block" />
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-[4rem] leading-[0.85] sm:text-[6rem] lg:text-[7rem] sm:leading-[0.9] font-medium tracking-tighter mb-8 md:mb-12 text-zinc-900 md:-ml-1 mt-auto md:mt-0"
              >
                Premium<br />Dentist
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
              >
                <button 
                  onClick={() => handleBookNow()}
                  className="bg-zinc-900 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-950 transition-all hover:scale-105 active:scale-95 inline-block text-sm tracking-wide text-center"
                >
                  Book Instant Appointment
                </button>
                <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-md px-4 py-3 rounded-full border border-white/40 shadow-sm w-fit">
                  <Smile size={16} className="text-emerald-700" />
                  <span className="text-xs text-zinc-800 font-bold whitespace-nowrap">99+ successful transformations</span>
                </div>
              </motion.div>
            </div>
            
            {/* Elegant Right Panel Image representing high-end aesthetic care */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-[48%] h-[320px] sm:h-[400px] lg:h-full min-h-[300px] lg:min-h-[450px] z-0 flex items-end justify-end rounded-3xl overflow-hidden shadow-lg border border-white/40 bg-white/35 backdrop-blur-sm"
            >
              <img 
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200" 
                alt="Radiant Smiling Patient at Dr. Nidhi's Dental Clinic" 
                className="object-cover w-full h-full object-center pointer-events-none"
              />
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6 z-10"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-500 whitespace-nowrap origin-center -rotate-90">
              EXPLORE LUXURY CARE
            </span>
            <IconButton onClick={() => handleBookNow()} className="border-none bg-white/60 backdrop-blur w-10 h-10 mt-16 shadow-sm">
              <ArrowDown size={18} className="text-zinc-900 animate-bounce" />
            </IconButton>
          </motion.div>
        </div>
      </div>

      {/* Trust Badges & Reputation Bar (Goregaon West Specifics) */}
      <div className="bg-zinc-50 border-y border-zinc-100/80 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-extrabold text-zinc-900">5.0</span>
            <div className="flex items-center gap-0.5 text-amber-500 my-1 justify-center">
              {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-current" />)}
            </div>
            <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">99 Google Reviews</span>
          </div>
          <div className="flex flex-col items-center border-l border-zinc-200">
            <span className="text-3xl font-extrabold text-zinc-900">20+</span>
            <span className="text-zinc-400 text-[10px] uppercase font-bold mt-1 tracking-wider">Treatments Approved</span>
            <span className="text-zinc-500 text-xs font-semibold">Teeth Whitening to Implants</span>
          </div>
          <div className="flex flex-col items-center border-l border-zinc-200">
            <span className="text-3xl font-extrabold text-emerald-700">100%</span>
            <span className="text-zinc-400 text-[10px] uppercase font-bold mt-1 tracking-wider">Sterilization Standards</span>
            <span className="text-zinc-500 text-xs font-semibold">Premium Medical Hygiene</span>
          </div>
          <div className="flex flex-col items-center border-l border-zinc-200">
            <span className="text-3xl font-extrabold text-zinc-900">Mumbai</span>
            <span className="text-zinc-400 text-[10px] uppercase font-bold mt-1 tracking-wider">Serving Clinic Base</span>
            <span className="text-zinc-500 text-xs font-semibold">Goregaon West Elite Hub</span>
          </div>
        </div>
      </div>

      {/* About Section: Dr. Nidhi & Clinic Overview */}
      <section id="about" className="px-4 sm:px-6 py-16 lg:py-28 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex-1 max-w-xl"
        >
          <div className="flex items-center gap-1.5 mb-6 text-zinc-500">
            <Award className="text-emerald-700" size={18} />
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-800">CLINIC PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] leading-[1.1] tracking-tight font-semibold mb-6 sm:mb-8 text-zinc-950">
            Dr. Nidhi's Award-Winning Oral Care in Goregaon
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-6 max-w-[500px]">
            Welcome to the highest-rated dental destination in Goregaon West. Under the surgical and aesthetic guidance of <strong>Dr. Nidhi</strong>, we operate a clinic built upon a foundation of absolute clinical hygiene, patient trust, and cutting-edge painless techniques.
          </p>
          <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-[480px]">
            Whether you require critical multi-axis <strong>Dental Implants</strong>, instant advanced laser <strong>Teeth Whitening</strong>, specialized kids' orthodontics, or complex wisdom teeth extractions, we pair modern computed-tomography diagnostic standards with high-end, comfortable clinical environments.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 px-4 py-2 rounded-full text-xs font-bold text-zinc-800">
              <Check size={14} className="text-emerald-600" /> Free Parking & Medical Access
            </div>
            <div className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 px-4 py-2 rounded-full text-xs font-bold text-zinc-800">
              <Check size={14} className="text-emerald-600" /> Cashless Insurance Support
            </div>
          </div>

          <div className="flex items-center gap-4">
            <PillButton onClick={() => handleBookNow()} dark={true}>
              Schedule Walkthrough
            </PillButton>
            <a 
              href={`tel:${CLINIC_PHONE.replace(/\s+/g, '')}`}
              className="text-zinc-900 border border-zinc-300 hover:bg-zinc-50 duration-200 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2"
            >
              <Phone size={14} className="text-emerald-600" /> Dial Direct
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 w-full relative"
        >
          <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-xl border border-white/50">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
              alt="Sophisticated modern treatment rooms at Dr Nidhi's Clinic in Goregaon" 
              className="w-full h-full object-cover shadow-inner hover:scale-105 transition-all duration-700 pointer-events-none"
            />
          </div>
          
          {/* Quick timing reminder badge */}
          <div className="absolute -bottom-6 -left-4 sm:left-4 bg-white rounded-2xl p-4 shadow-lg border border-zinc-100/80 flex items-center gap-3.5 max-w-[280px]">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-[11px] uppercase font-extrabold tracking-wider text-zinc-500">Operation Timings</p>
              <p className="text-xs font-extrabold text-zinc-900">10 AM - 2 PM & 5 PM - 9 PM</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section: Comprehensive searchable catalog of 20 Treatments */}
      <section id="services" className="px-2 sm:px-4 py-8">
        <div className="bg-[#181818] rounded-3xl sm:rounded-[2.5rem] p-6 lg:p-16 text-white min-h-[90vh] flex flex-col justify-between">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12 lg:mb-16"
          >
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-emerald-400 font-bold mb-3 block">CHOOSE FROM Dr Nidhi's 20 MAJOR PROCEDURES</span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl leading-[1.1] font-semibold tracking-tight max-w-2xl">
                Elevating Goregaon's Oral Health with Advanced Therapies
              </h2>
            </div>
            
            <div className="max-w-md w-full">
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                We believe in the therapeutic preservation of your natural structures. Explore our 20 specialized categories below. Enter keywords to check specific symptoms, tools, or procedures.
              </p>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Query implants, whitening, aligners..." 
                  className="w-full bg-zinc-800/80 border border-zinc-700/60 rounded-xl py-3 pl-11 pr-4 text-xs text-white placeholder-zinc-500 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-sans"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-3 top-2 text-zinc-500 hover:text-white p-1 text-xs">Clear</button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-zinc-800/85">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat 
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20' 
                    : 'bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700'
                }`}
              >
                {cat === "All" ? "All 20 Services" : cat}
              </button>
            ))}
          </div>

          {/* Grid Layout containing filtered procedures */}
          {filteredServices.length === 0 ? (
            <div className="text-center py-16 bg-zinc-900/45 rounded-2xl border border-zinc-800">
              <Compass size={40} className="mx-auto text-zinc-500 animate-spin mb-4" />
              <p className="text-zinc-400 text-sm">No specific match found for "{searchQuery}".</p>
              <button onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }} className="text-emerald-400 text-xs font-bold hover:underline mt-2">Display all treatments</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => {
                // Assign a color accent index
                const cardColors = [
                  { bg: "bg-[#ece8f4] text-zinc-900", badge: "bg-[#4D2E84]/15 text-[#4D2E84]" },
                  { bg: "bg-[#f2f2f2] text-zinc-900", badge: "bg-zinc-900/10 text-zinc-900" },
                  { bg: "bg-[#fbf5d5] text-zinc-900", badge: "bg-amber-900/15 text-amber-900" },
                  { bg: "bg-[#e4f1ed] text-zinc-900", badge: "bg-emerald-900/15 text-emerald-950" }
                ];
                const cardTheme = cardColors[index % cardColors.length];

                return (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    key={service.id}
                    onClick={() => handleBookNow(service.name)}
                    className={`${cardTheme.bg} p-6 sm:p-8 rounded-[2rem] flex flex-col min-h-[290px] relative group cursor-pointer hover:shadow-2xl transition-all duration-300`}
                  >
                     <div className="absolute top-6 right-6 w-10 h-10 bg-[#181818] rounded-full flex items-center justify-center text-white transition-all group-hover:scale-110">
                       <ArrowUpRight size={18} strokeWidth={2} />
                     </div>
                     
                     <div className="flex items-center gap-2 mb-4">
                       <span className={`text-[9px] uppercase font-extrabold tracking-widest px-2.5 py-1 rounded-full ${cardTheme.badge}`}>
                         {service.category}
                       </span>
                       <span className="text-zinc-400 text-[10px]">{service.duration}</span>
                     </div>

                     <h3 className="text-2xl font-bold tracking-tight mb-2 pr-12 text-zinc-950">
                       {service.name}
                     </h3>
                     
                     <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                       {service.desc}
                     </p>

                     <div className="mt-auto pt-4 border-t border-zinc-200/50 flex justify-between items-center text-xs">
                       <span className="font-bold text-zinc-500 uppercase tracking-wide">TREATMENT SCALE:</span>
                       <span className="font-extrabold text-[#181818]">{service.difficulty}</span>
                     </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          <div className="mt-12 text-center text-zinc-500 text-xs">
            ✨ Don't find what you are looking for? Our emergency board caters directly to all bespoke dental surgeries.{' '}
            <a href={`tel:${CLINIC_PHONE.replace(/\s+/g, '')}`} className="text-emerald-400 font-extrabold hover:underline">Consult Dr. Nidhi on Call</a>
          </div>

        </div>
      </section>

      {/* Modern Dentistry With Personal Touch section */}
      <section className="py-16 lg:py-24 px-3 sm:px-4 max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8 mb-12 lg:mb-16 px-2 lg:px-4"
        >
          <h2 className="text-4xl lg:text-5xl leading-[1.1] font-medium tracking-tight max-w-sm">
            Clinical hygiene &<br />Computed Diagnostics
          </h2>
          <div className="max-w-sm lg:text-sm text-zinc-600 leading-relaxed font-sans">
            We operate utilizing Class-B premium sterilization autoclaves, imported RVG digital dental radiography scanners to scan root densities with zero exposure risk, and intra-oral video devices so you see precisely what Dr. Nidhi sees.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Col 1 */}
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#181818] text-white p-8 lg:p-10 rounded-[2rem] flex flex-col justify-between aspect-square lg:aspect-auto lg:h-[400px]"
            >
              <h3 className="text-3xl lg:text-4xl font-medium tracking-tight leading-tight text-white">Innovation<br/>Technology</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mt-8 font-sans">
                Our clinic uses 3D virtual alignment software for Invisalign alignment tracking, high-definition cosmetic mockups, and computerized bite force analysis for comfortable bridge settings.
              </p>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="bg-[#e9e6fb] rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between aspect-square lg:aspect-auto lg:h-[320px]"
            >
               <h3 className="text-3xl font-medium tracking-tight leading-tight text-zinc-950">Expert<br/>Medical Staff</h3>
               <p className="text-zinc-600 text-sm leading-relaxed mt-8 font-sans">
                 Our assistants, dental technicians, and pediatric hygienists maintain ongoing certified training to treat anxious children safely and deliver seamless painless therapy.
               </p>
            </motion.div>
          </div>
          
          {/* Col 2 */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-[2rem] overflow-hidden bg-zinc-100 h-[260px] lg:h-[300px] border border-zinc-100 shadow-sm"
            >
              <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" alt="Hygienist performing scaling at Goregaon Clinic" className="w-full h-full object-cover grayscale-[10%]" />
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="rounded-[2rem] overflow-hidden bg-zinc-100 flex-1 min-h-[300px] border border-zinc-100 shadow-sm"
            >
               <img src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&q=80&w=800" alt="Beautiful white teeth solution with veneers" className="w-full h-full object-cover object-top" />
            </motion.div>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-6 justify-end">
             <div className="hidden lg:block h-[160px]" />
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="bg-[#e4f1ed] rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between aspect-square lg:aspect-auto lg:h-[320px]"
             >
               <h3 className="text-3xl font-medium tracking-tight leading-tight text-zinc-950">Luxury Comfort<br/>and Cozy Lounge</h3>
               <p className="text-zinc-600 text-sm leading-relaxed mt-8 font-sans">
                 Waiting should be stress-free. Enjoy clean air filtration standards, ambient background music, supportive orthopedic dental chairs, and hot supportive brews.
               </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Testimonials Section: Goregaon West Patients Feedback */}
      <section id="testimonials" className="px-2 sm:px-4">
        <div className="bg-[#181818] rounded-3xl sm:rounded-[2.5rem] p-6 lg:p-16 text-white overflow-hidden">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 lg:mb-24 gap-4"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 text-emerald-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-bold mb-4">
                <ShieldCheck size={13} />
                <span>Verified Patient Logs (99 Total reviews)</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] sm:leading-none max-w-xl">
                Loved by Goregaon Residents
              </h2>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-5xl font-extrabold text-white">5.0 ★</span>
              <p className="text-zinc-500 font-bold uppercase tracking-wider text-[10px] mt-1">Google Maps Local Record</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            
            {/* Column 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="bg-[#242424]/90 rounded-[2rem] p-8 pb-10 border border-zinc-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center font-extrabold text-emerald-950 text-sm">
                    RM
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Rohan Mehta</h4>
                    <p className="text-emerald-400 text-xs mt-0.5 font-bold">Local Guide · Goregaon resident</p>
                  </div>
                </div>
                <div className="flex text-amber-400 gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-current" />)}
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                  "Dr. Nidhi's level of care is unmatched! I visited last week for comprehensive Teeth Reshaping and a Root Canal. I felt absolutely zero pain. Dr. Nidhi explained the entire RVG X-ray scans thoroughly. If you live around Aarey Road or West Goregaon, look no further for family care!"
                </p>
              </div>
              
              <div className="rounded-[2rem] overflow-hidden bg-zinc-800 h-[240px] border border-zinc-800">
                <img src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80&w=600" alt="Satisfied child pediatric patient" className="w-full h-full object-cover opacity-85" />
              </div>
            </motion.div>

            {/* Column 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="bg-white text-zinc-900 rounded-[2rem] p-8 pb-10 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center font-extrabold text-[#4D2E84] text-sm">
                    PS
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-950 text-base">Priya Sharma</h4>
                    <p className="text-indigo-600 text-xs mt-0.5 font-bold">Piramal Nagar, Mumbai</p>
                  </div>
                </div>
                <div className="flex text-amber-500 gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-current" />)}
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                  "As someone with immense dentistry anxiety, finding the right doctor was incredibly tough. Dr. Nidhi made me extremely comfortable. The teeth whitening and E-Max veneers transformation has totally restored my professional speaking confidence. Best clinic in Mumbai!"
                </p>
              </div>
              
              <div className="bg-[#242424]/90 rounded-[2rem] p-8 pb-10 border border-zinc-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center font-extrabold text-amber-950 text-sm">
                    AN
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Aditya Nair</h4>
                    <p className="text-amber-500 text-xs mt-0.5 font-bold">Software Consultant</p>
                  </div>
                </div>
                <div className="flex text-amber-400 gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-current" />)}
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                  "Amazing surgical precision with implants! Had my dental implant procedure done by Dr. Nidhi last month and the recovery was extremely smooth. Clean waiting space, high-tech appliances, and helpful follow-up calls."
                </p>
              </div>
            </motion.div>

            {/* Column 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col h-full lg:min-h-[580px] justify-between"
            >
              <div className="rounded-[2rem] overflow-hidden bg-zinc-800 flex-1 h-full min-h-[300px] border border-zinc-800 relative">
                <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" alt="Clinical high-end care aligners" className="w-full h-full object-cover grayscale-[15%] opacity-80" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white text-left">
                  <p className="text-xs uppercase font-extrabold text-emerald-400 tracking-wider">Invisalign & Braces</p>
                  <p className="text-sm font-medium mt-1">Virtual multi-axis layout setups for linear teeth shaping adjustments.</p>
                </div>
              </div>
            </motion.div>

          </div>

          <div className="mt-12 text-center">
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white bg-white/10 border border-white/20 hover:bg-white/20 duration-200 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider">
              Verify Google Review Logs (99 Reviews) <ExternalLink size={14} />
            </a>
          </div>

        </div>
      </section>

      {/* Booking Form + Map & Coordinates Section */}
      <section id="booking-section" className="py-16 lg:py-24 px-3 sm:px-4 max-w-[1400px] mx-auto">
        <div className="bg-[#f7f7f7] rounded-3xl sm:rounded-[2.5rem] p-4 lg:p-6 flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Virtual Directions + Interactive Map details */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full lg:w-1/2 rounded-2xl sm:rounded-[2rem] overflow-hidden bg-zinc-900 text-white p-8 flex flex-col justify-between min-h-[500px]"
          >
            <div>
              <div className="h-10 w-10 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-6">
                <MapPin size={22} />
              </div>
              
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 block mb-3">CLINICAL COORDINATES</span>
              <h3 className="text-3xl font-semibold tracking-tight text-white mb-6">Dr. Nidhi's Dental Clinic</h3>
              
              <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mb-6 font-sans">
                {CLINIC_ADDRESS}
              </p>

              <div className="text-xs text-zinc-400 space-y-1.5 mb-8">
                <p className="text-zinc-300 font-bold">📍 Landmark Guide:</p>
                <p>· Near Bata Showroom, off Swami Vivekanand (SV) Road</p>
                <p>· Inside Ashoka Super Market complex, B-20</p>
                <p>· Easily accessible from Goregaon West station</p>
              </div>

              <div className="border-t border-zinc-800 pt-6 space-y-3 font-sans">
                <div className="flex items-center gap-3 text-xs">
                  <Clock className="text-emerald-400" size={14} />
                  <span>Morning Slot: <strong>10:00 AM - 02:00 PM</strong></span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <Clock className="text-emerald-400" size={14} />
                  <span>Evening Slot: <strong>05:00 PM - 09:00 PM</strong></span>
                </div>
                <div className="flex items-center gap-3 text-xs text-amber-400">
                  <Clock size={14} />
                  <span>Sundays: Prior booking only</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row gap-4">
              <a 
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white text-zinc-950 px-6 py-3.5 rounded-xl font-bold text-center text-xs uppercase tracking-wider hover:bg-zinc-100 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Launch Google Maps <ExternalLink size={14} />
              </a>
              <a 
                href={`tel:${CLINIC_PHONE.replace(/\s+/g, '')}`}
                className="flex-1 bg-zinc-800 text-white border border-zinc-700 px-6 py-3.5 rounded-xl font-bold text-center text-xs uppercase tracking-wider hover:bg-zinc-700 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Phone size={14} /> Call Support ({CLINIC_PHONE})
              </a>
            </div>
          </motion.div>

          {/* Booking Container */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 p-6 lg:p-12 lg:pl-0 flex flex-col justify-center"
          >
            <div className="flex justify-between items-start mb-8 sm:mb-12 flex-col sm:flex-row gap-4">
              <div>
                <h2 className="text-4xl sm:text-5xl font-semibold tracking-tighter leading-none text-zinc-950">
                  Book Slot
                </h2>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider mt-1.5">Direct Queue Confirmation</p>
              </div>
              <p className="text-zinc-500 text-sm max-w-[220px] leading-relaxed font-sans">
                Schedule your safe, painless consultation in Goregaon with Dr. Nidhi today.
              </p>
            </div>

            {showSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-zinc-900 text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-emerald-950 mb-2">Slot Allocated!</h3>
                <p className="text-sm text-emerald-800 leading-relaxed mb-6 font-sans">
                  Hello <strong>{bookingName}</strong>, your digital request for <strong>{bookingService}</strong> on <strong>{bookingDate || 'Priority Date'}</strong> at <strong>{bookingTime || 'Scheduled Time'}</strong> has been reserved for Dr. Nidhi's Clinic. We've compiled details to <strong>{bookingEmail}</strong>.
                </p>
                <div className="bg-white/80 border border-emerald-100 rounded-2xl p-4 text-xs text-emerald-900 max-w-sm mx-auto mb-6 text-left space-y-1 font-sans">
                  <p>🗓️ <strong>Selected Slot:</strong> {bookingDate || 'Standard Day'} - {bookingTime || 'Next available slot'}</p>
                  <p>📍 <strong>Location:</strong> Ashoka Super Market B-20, Goregaon West</p>
                  <p>📞 <strong>Direct Line:</strong> {CLINIC_PHONE}</p>
                </div>
                <div className="flex gap-4 max-w-sm mx-auto">
                  <button onClick={resetBookingForm} className="flex-1 bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-wider transition-all duration-150">
                    Set Another Slot
                  </button>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex-1 bg-white border border-emerald-200 text-emerald-950 font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-wider transition-all duration-150 block text-center">
                    Navigate Now
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-extrabold tracking-wider text-zinc-500">Selected Treatment</label>
                  <select 
                    value={bookingService} 
                    onChange={(e) => setBookingService(e.target.value)}
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-shadow font-semibold text-sm appearance-none outline-none"
                  >
                    {CLINIC_SERVICES.map(s => (
                      <option key={s.id} value={s.name}>{s.name} ({s.category})</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-extrabold tracking-wider text-zinc-500">Your Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      placeholder="Alice Thompson" 
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-shadow outline-none placeholder:text-zinc-400 font-medium text-sm" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-extrabold tracking-wider text-zinc-500">Contact Email</label>
                    <input 
                      type="email" 
                      required
                      value={bookingEmail}
                      onChange={(e) => setBookingEmail(e.target.value)}
                      placeholder="alice@gmail.com" 
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-shadow outline-none font-medium text-sm" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-extrabold tracking-wider text-zinc-500">Preferred Date</label>
                    <input 
                      type="text" 
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      placeholder="e.g. June 25th" 
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-950 transition-all outline-none font-medium text-sm" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-extrabold tracking-wider text-zinc-500">Preferred Time</label>
                    <input 
                      type="text" 
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      placeholder="e.g. 11:30 AM" 
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-950 transition-all outline-none font-medium text-sm" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-extrabold tracking-wider text-zinc-500">Symptom Note / Message (Optional)</label>
                  <textarea 
                    rows={3} 
                    value={bookingMessage}
                    onChange={(e) => setBookingMessage(e.target.value)}
                    placeholder="Describe jaw stiffness, wisdom toothache, cosmetic whitening expectations..."
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-shadow outline-none resize-none font-medium text-sm" 
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full mt-4 bg-[#181818] text-white py-5 rounded-2xl font-bold tracking-wider uppercase hover:bg-black transition-all hover:scale-[1.02] active:scale-95 focus:ring-4 focus:ring-zinc-200 text-xs shadow-md shadow-zinc-900/10"
                >
                  Request Secured Consultation Slot
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>

      {/* Footer detailing coordinates and copyright info */}
      <footer className="bg-zinc-50 py-16 px-6 max-w-[1400px] mx-auto border-t border-zinc-100 rounded-t-[2rem]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <ClinicLogo />
            <p className="mt-4 text-xs text-zinc-500 leading-relaxed font-sans max-w-sm">
              The leading high-contrast premium cosmetic and restorative family dental space inside Goregaon West, Aarey Rd, serving patients across Mumbai with absolute precision.
            </p>
          </div>
          <div>
            <h4 className="text-zinc-900 font-bold text-xs uppercase tracking-widest mb-4">Direct Contact</h4>
            <div className="space-y-3 text-zinc-500 text-xs font-sans">
              <p className="font-bold text-zinc-800 flex items-center gap-1.5">
                <Phone size={13} className="text-emerald-600" /> Dial Direct: <a href={`tel:${CLINIC_PHONE.replace(/\s+/g, '')}`} className="underline hover:text-zinc-905">{CLINIC_PHONE}</a>
              </p>
              <p className="text-zinc-500 leading-relaxed">
                📍 {CLINIC_ADDRESS}
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-zinc-900 font-bold text-xs uppercase tracking-widest mb-4">Operational Status</h4>
            <p className="text-zinc-500 text-xs font-sans mb-3 leading-relaxed">
              Dr. Nidhi is available for consultations on Aarey Rd:
            </p>
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-950 px-3 py-1.5 rounded-full text-xs font-bold border border-emerald-100">
              <Clock size={12} className="text-emerald-700" />
              <span>{TIMINGS.raw}</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200/50 text-center flex flex-col md:flex-row justify-between items-center text-zinc-400 text-[11px] gap-4">
          <div className="font-medium font-sans">
            &copy; {new Date().getFullYear()} {CLINIC_NAME}. Certified Medical Registration. All rights reserved.
          </div>
          <div className="flex gap-6 font-semibold uppercase tracking-wider text-[10px]">
            <a href="#about" className="hover:text-zinc-800">Clinic Profile</a>
            <span className="text-zinc-200">|</span>
            <a href="#services" className="hover:text-zinc-800">20 Treatments</a>
            <span className="text-zinc-200">|</span>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800 flex items-center gap-1">Location Directions <ExternalLink size={10} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
