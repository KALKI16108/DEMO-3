import React from 'react';
import { ArrowUpRight, ArrowDown, Menu, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const DentoPointLogo = () => (
  <div className="flex flex-col leading-none text-[15px] tracking-[0.15em] uppercase text-zinc-900">
    <span className="font-bold">Dento</span>
    <span className="font-normal">Point</span>
  </div>
);

const IconButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <button className={`flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 transition-colors hover:bg-gray-100 ${className}`}>
    {children}
  </button>
);

const PillButton = ({ children, dark = false, className = "" }: { children: React.ReactNode, dark?: boolean, className?: string }) => (
  <button className={`px-6 py-2.5 rounded-full text-sm font-medium transition-transform hover:scale-105 active:scale-95 ${dark ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900 border border-gray-200'} ${className}`}>
    {children}
  </button>
);

function Hero() {
  return (
    <div className="p-2 sm:p-4 pb-0">
      <div className="bg-[#e4ece9] rounded-[2.5rem] p-5 sm:p-6 lg:p-12 h-[calc(100vh-[1rem])] sm:h-[calc(100vh-2rem)] min-h-[550px] sm:min-h-[600px] flex flex-col relative overflow-hidden">
        {/* Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center relative z-10 w-full"
        >
          <DentoPointLogo />
          <div className="flex items-center gap-4">
            <PillButton className="hidden sm:block shadow-sm">Dental emergency</PillButton>
            <IconButton className="bg-white shadow-sm border-none shadow-[0_2px_10px_rgba(0,0,0,0.05)] w-12 h-12">
              <Menu size={20} className="text-zinc-900" />
            </IconButton>
          </div>
        </motion.nav>

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:flex-row mt-12 lg:mt-24 relative z-10 h-full">
          <div className="flex-1 flex flex-col justify-center max-w-2xl relative z-10 pb-32 sm:pb-20 md:pb-0 pt-16 sm:pt-0">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-semibold text-zinc-600 mb-4 sm:mb-6 flex items-center gap-3 text-xs sm:text-sm tracking-wide"
            >
              Expert dentis in New York city
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 block" />
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[4.5rem] leading-[0.85] sm:text-[7rem] lg:text-[8.5rem] sm:leading-[0.9] font-medium tracking-tighter mb-8 md:mb-12 text-zinc-900 md:-ml-1 mt-auto md:mt-0"
            >
              Dental<br />Care
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 sm:gap-6"
            >
              <button className="bg-[#181818] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium hover:bg-black transition-colors inline-block text-sm tracking-wide">
                Book appointment
              </button>
              <div className="w-8 h-8 opacity-60">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-900 rotate-[-15deg]">
                  <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" fill="currentColor"></path>
                </svg>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 right-[-10%] sm:right-0 w-[120%] sm:w-full lg:w-[55%] h-[55%] md:h-[60%] lg:h-[85%] z-0 flex items-end justify-end opacity-90 lg:opacity-100"
          >
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1200" 
              alt="Smiling patient" 
              className="object-cover w-full h-full object-top lg:rounded-tl-[3rem] lg:rounded-none rounded-t-[2rem]"
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
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 whitespace-nowrap origin-center -rotate-90">
            Scroll to explore
          </span>
          <IconButton className="border-none bg-white/50 backdrop-blur w-10 h-10 mt-16">
            <ArrowDown size={18} className="text-zinc-900 animate-bounce" />
          </IconButton>
        </motion.div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="px-4 sm:px-6 py-16 lg:py-32 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex-1 max-w-xl"
      >
        <div className="flex -space-x-4 mb-8">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" alt="Avatar" className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-sm bg-gray-100" />
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" alt="Avatar" className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-sm bg-gray-200" />
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-[4rem] leading-[1.05] tracking-tight font-medium mb-6 sm:mb-8 text-zinc-900">
          Crafting Healthy<br className="hidden sm:block" />Smiles One Service<br className="hidden sm:block" />at a Time
        </h2>
        <p className="text-zinc-500 text-lg leading-relaxed mb-10 max-w-[420px]">
          Our clients are our priority. We offer quality dental services with a team of specialists. More details about our services below. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
        </p>
        <PillButton className="border-gray-300 px-8 py-3 w-fit">About Clinic</PillButton>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, x: 40 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 w-full relative"
      >
         <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-100">
           <img 
             src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200" 
             alt="Modern dental clinic" 
             className="w-full h-full object-cover"
           />
         </div>
         {/* Decorative element could go here if needed */}
      </motion.div>
    </div>
  );
}

function Services() {
  return (
    <div className="px-2 sm:px-4">
      <div className="bg-[#181818] rounded-3xl sm:rounded-[2.5rem] p-6 lg:p-16 text-white min-h-[80vh] flex flex-col justify-between">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12 lg:mb-32"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.15] font-medium tracking-tight max-w-xl">
            Elevating Oral Health<br className="hidden sm:block" />with Personalized<br className="hidden sm:block" />Services
          </h2>
          <div className="max-w-xs flex flex-col items-start lg:items-end text-left lg:text-right">
             <p className="text-zinc-400 text-sm leading-relaxed mb-6 lg:text-right">
               We believe in the power of a healthy, beautiful smile to enhance your overall well-being. Beyond addressing your immediate dental concerns, we strive to educate and empower you to make informed decisions about your oral health.
             </p>
             <PillButton className="bg-transparent text-white border-zinc-700 hover:bg-zinc-800 w-fit">All services <ChevronRight size={16} className="inline ml-1" /></PillButton>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="bg-[#ece8f4] text-zinc-900 p-8 rounded-[2rem] flex flex-col min-h-[320px] relative group cursor-pointer transition-transform hover:-translate-y-2 relative overflow-hidden"
          >
             <div className="absolute top-6 right-6 w-12 h-12 bg-[#181818] rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110">
               <ArrowUpRight size={24} strokeWidth={1.5} />
             </div>
             <h3 className="text-3xl font-medium tracking-tight mb-4 pr-16 leading-none">General<br/>dentistry</h3>
             <p className="text-zinc-600 text-sm mb-8 leading-relaxed">Your comfort is our priority. From the moment you step into our office, our friendly staff is here to ensure a positive experience.</p>
             <div className="mt-auto">
               <ul className="space-y-3 text-sm font-medium">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-zinc-900 rounded-full" /> Routine check-ups and cleanings</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-zinc-900 rounded-full" /> Tooth-colored fillings</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-zinc-900 rounded-full" /> Preventive care for all ages</li>
               </ul>
             </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="bg-[#f2f2f2] text-zinc-900 p-8 rounded-[2rem] flex flex-col min-h-[320px] relative group cursor-pointer transition-transform hover:-translate-y-2"
          >
             <div className="absolute top-6 right-6 w-12 h-12 bg-[#181818] rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110">
               <ArrowUpRight size={24} strokeWidth={1.5} />
             </div>
             <h3 className="text-3xl font-medium tracking-tight mb-4 pr-16 leading-none">Cosmetic<br/>dentistry</h3>
             <p className="text-zinc-600 text-sm mb-8 leading-relaxed">Your comfort is our priority. From the moment you step into our office, our friendly staff is here to ensure a positive experience.</p>
             <div className="mt-auto">
               <ul className="space-y-3 text-sm font-medium">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-zinc-900 rounded-full" /> Veneers and smile makeovers</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-zinc-900 rounded-full" /> Teeth whitening</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-zinc-900 rounded-full" /> Invisalign clear aligners</li>
               </ul>
             </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="bg-[#fbf5d5] text-zinc-900 p-8 rounded-[2rem] flex flex-col min-h-[320px] relative group cursor-pointer transition-transform hover:-translate-y-2"
          >
             <div className="absolute top-6 right-6 w-12 h-12 bg-[#181818] rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110">
               <ArrowUpRight size={24} strokeWidth={1.5} />
             </div>
             <h3 className="text-3xl font-medium tracking-tight mb-4 pr-16 leading-none">Restorative<br/>dentistry</h3>
             <p className="text-zinc-600 text-sm mb-8 leading-relaxed">Your comfort is our priority. From the moment you step into our office, our friendly staff is here to ensure a positive experience.</p>
             <div className="mt-auto">
               <ul className="space-y-3 text-sm font-medium">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-zinc-900 rounded-full" /> Dentures and partials</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-zinc-900 rounded-full" /> Crowns and bridges</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-zinc-900 rounded-full" /> Dental implants</li>
               </ul>
             </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="py-16 lg:py-24 px-3 sm:px-4 max-w-[1400px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8 mb-12 lg:mb-16 px-2 lg:px-4"
      >
        <h2 className="text-4xl lg:text-5xl leading-[1.1] font-medium tracking-tight max-w-sm">
          Modern Dentistry<br className="hidden sm:block" />With a Personal<br className="hidden sm:block" />Touch
        </h2>
        <div className="max-w-sm lg:text-sm text-zinc-600 leading-relaxed">
          We're not just dental professionals; we're smile architects. Our team of dedicated specialists is committed to providing personalized, top-quality care. From routine check-ups to complex procedures, we blend expertise with a human touch.
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
            <h3 className="text-3xl lg:text-4xl font-medium tracking-tight leading-tight">Innovation<br/>technology</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mt-8">
              Our skilled and experienced dentists use the latest technology and techniques to provide dental procedures that are both effective and comfortable.
            </p>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="bg-[#e9e6fb] rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between aspect-square lg:aspect-auto lg:h-[320px]"
          >
             <h3 className="text-3xl font-medium tracking-tight leading-tight">Qualified<br/>staff</h3>
             <p className="text-zinc-600 text-sm leading-relaxed mt-8">
               Our team of qualified and caring professionals is dedicated to providing the highest quality care and making every patient's visit stress-free as possible.
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
            className="rounded-[2rem] overflow-hidden bg-gray-200 h-[260px] lg:h-[300px]"
          >
            <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" alt="Dentist treating patient" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="rounded-[2rem] overflow-hidden bg-gray-200 flex-1 min-h-[300px]"
          >
             <img src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&q=80&w=800" alt="Happy patient" className="w-full h-full object-cover object-top" />
          </motion.div>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col gap-6 justify-end">
           <div className="hidden lg:block h-[160px]" /> {/* Spacer to mimic the masonry layout shown in video */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="bg-[#e4f1ed] rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between aspect-square lg:aspect-auto lg:h-[320px]"
           >
             <h3 className="text-3xl font-medium tracking-tight leading-tight">Comfortable<br/>and coziness</h3>
             <p className="text-zinc-600 text-sm leading-relaxed mt-8">
               Our skilled and experienced dentists use the latest technology and techniques to provide dental procedures that are both effective and comfortable.
             </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="px-2 sm:px-4">
      <div className="bg-[#181818] rounded-3xl sm:rounded-[2.5rem] p-6 lg:p-16 text-white overflow-hidden">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-16 lg:mb-24"
        >
          <div>
            <p className="text-zinc-400 font-medium tracking-widest uppercase text-xs mb-4">Happy Smiles</p>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] sm:leading-none max-w-xl">
              Patients Gave<br className="hidden sm:block" />Lots of Love
            </h2>
          </div>
          <p className="text-zinc-500 font-medium">2024</p>
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
            <div className="bg-[#242424] rounded-[2rem] p-8 pb-10">
              <div className="flex items-center gap-4 mb-8">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" alt="Alice" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-medium">Alice Thompson</h4>
                  <p className="text-zinc-500 text-xs mt-0.5">Marketing Manager</p>
                </div>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                It was the best decision I made for my oral health.<br/>
                The team is not only professional but also caring. They take the time to explain procedures and make sure you're comfortable every step of the way.<br/>
                Highly recommended!
              </p>
            </div>
            <div className="rounded-[2rem] overflow-hidden bg-zinc-800 h-[240px]">
              <img src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80&w=600" alt="Child patient" className="w-full h-full object-cover" />
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
            <div className="bg-white text-zinc-900 rounded-[2rem] p-8 pb-10">
              <div className="flex items-center gap-4 mb-8">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" alt="Emily" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-medium">Emily Davis</h4>
                  <p className="text-zinc-500 text-xs mt-0.5">Teacher</p>
                </div>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                As someone with dental anxiety, finding a clinic where I feel at ease was crucial. The team at Dento Point is understanding and patient. They address my concerns, and I appreciate the personalized care I receive. Thank you for making each visit a positive experience.
              </p>
            </div>
            
            <div className="bg-[#242424] rounded-[2rem] p-8 pb-10">
              <div className="flex items-center gap-4 mb-8">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" alt="Michael" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-medium">Michael Chen</h4>
                  <p className="text-zinc-500 text-xs mt-0.5">Software Engineer</p>
                </div>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                I've been a patient at Dento Dental for years, and the consistent high-quality service keeps me coming back. From routine cleanings to a more complex procedure, the professionalism and expertise of the team are evident. I trust them with my dental care.
              </p>
            </div>
          </motion.div>

          {/* Column 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col h-full lg:min-h-[600px]"
          >
            <div className="rounded-[2rem] overflow-hidden bg-zinc-800 flex-1 h-full min-h-[400px]">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" alt="Dental Aligners and care" className="w-full h-full object-cover grayscale-[30%] opacity-90" />
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}

function Booking() {
  return (
    <div className="py-16 lg:py-24 px-3 sm:px-4 max-w-[1400px] mx-auto">
      <div className="bg-[#f7f7f7] rounded-3xl sm:rounded-[2.5rem] p-4 lg:p-6 flex flex-col lg:flex-row gap-8 lg:gap-16">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full lg:w-1/2 aspect-square lg:aspect-auto lg:min-h-[700px] rounded-2xl sm:rounded-[2rem] overflow-hidden bg-gray-200"
        >
           <img 
             src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200" 
             alt="Dentist with child" 
             className="w-full h-full object-cover pointer-events-none"
             style={{ objectPosition: '30% center' }}
           />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 p-6 lg:p-12 lg:pl-0 flex flex-col justify-center"
        >
          <div className="flex justify-between items-start mb-12 flex-col lg:flex-row gap-6">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tighter leading-none">
              Book<br />Online
            </h2>
            <p className="text-zinc-500 text-sm max-w-[200px] leading-relaxed lg:text-right font-medium">
              We're not just dental professionals; we're smile architects.
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-900">Name</label>
              <input type="text" placeholder="Alice Thompson" className="w-full px-6 py-4 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-shadow outline-none placeholder:text-zinc-400 font-medium" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-900">Email</label>
              <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-shadow outline-none font-medium" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-900">Date</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-shadow outline-none font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-900">Time</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-shadow outline-none font-medium" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-900">Message</label>
              <textarea rows={3} className="w-full px-6 py-4 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-shadow outline-none resize-none font-medium" />
            </div>

            <button type="button" className="w-full mt-4 bg-[#181818] text-white py-5 rounded-2xl font-semibold tracking-wide hover:bg-black transition-colors focus:ring-4 focus:ring-zinc-200">
              Book Appointment
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-white py-12 px-6 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm max-w-[1400px] mx-auto border-t border-gray-100">
      <DentoPointLogo />
      <div className="mt-6 md:mt-0 opacity-70">
        &copy; 2024 Dento Point. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-zinc-200 selection:text-zinc-900">
      <Hero />
      <About />
      <Services />
      <Features />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  );
}

