import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, Users, Trophy, ChevronRight, Menu, X, ArrowRight, Star, Heart, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-xl text-white">
              <BookOpen className="w-6 h-6" />
            </div>
            <span className="font-display font-bold text-2xl text-primary">Bright Future</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-primary font-medium transition-colors">About Us</Link>
            <Link href="/academics" className="text-gray-600 hover:text-primary font-medium transition-colors">Academics</Link>
            <Link href="/admissions" className="text-gray-600 hover:text-primary font-medium transition-colors">Admissions</Link>
            <Button className="bg-secondary text-primary hover:bg-secondary/90 font-bold rounded-full px-6">
              Enroll Now
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              <Link href="/" className="text-gray-600 font-medium py-2">Home</Link>
              <Link href="/about" className="text-gray-600 font-medium py-2">About Us</Link>
              <Link href="/academics" className="text-gray-600 font-medium py-2">Academics</Link>
              <Link href="/admissions" className="text-gray-600 font-medium py-2">Admissions</Link>
              <Button className="w-full bg-secondary text-primary font-bold rounded-full mt-4">Enroll Now</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary font-semibold text-sm mb-6 border border-blue-100">
              <Star className="w-4 h-4 text-secondary fill-secondary" />
              <span>Excellence in Education Since 1995</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              Igniting Minds, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Inspiring Futures.
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              We provide a nurturing, innovative environment where every student is empowered to discover their potential and achieve their dreams.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-base font-semibold group">
                Discover Our Campus
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-semibold border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50">
                Take a Virtual Tour
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="absolute inset-0 bg-secondary rounded-[3rem] transform rotate-3 scale-105 opacity-20 -z-10"></div>
            <div className="absolute inset-0 bg-primary rounded-[3rem] transform -rotate-2 scale-100 opacity-10 -z-10"></div>
            <img 
              src="/images/hero.jpg" 
              alt="Students in front of modern school" 
              className="rounded-[2.5rem] shadow-2xl object-cover w-full h-[500px] lg:h-[600px] relative z-10"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop";
              }}
            />
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-slate-100"
            >
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Ranked #1</p>
                <p className="font-bold text-slate-900 font-display">State District</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="text-5xl font-display font-bold text-secondary">25+</h3>
            <p className="text-blue-100 font-medium">Years of Excellence</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-5xl font-display font-bold text-secondary">15:1</h3>
            <p className="text-blue-100 font-medium">Student to Teacher Ratio</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-5xl font-display font-bold text-secondary">100%</h3>
            <p className="text-blue-100 font-medium">College Acceptance</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-5xl font-display font-bold text-secondary">50+</h3>
            <p className="text-blue-100 font-medium">Extracurriculars</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Values() {
  const values = [
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Academic Rigor",
      description: "Challenging curriculum designed to foster critical thinking and intellectual curiosity.",
      color: "bg-blue-50"
    },
    {
      icon: <Heart className="w-8 h-8 text-rose-500" />,
      title: "Nurturing Environment",
      description: "A supportive community where every child is known, valued, and encouraged.",
      color: "bg-rose-50"
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-500" />,
      title: "Character Building",
      description: "Instilling integrity, resilience, and empathy to shape tomorrow's leaders.",
      color: "bg-emerald-50"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Inclusive Community",
      description: "Celebrating diversity and fostering a deep sense of belonging for all families.",
      color: "bg-purple-50"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Our Core Values</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900 mb-4">What Sets Us Apart</h3>
          <p className="text-slate-600 text-lg">We believe education is more than just academics. It's about developing the whole child in a setting that feels like home.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${value.color}`}>
                {value.icon}
              </div>
              <h4 className="text-xl font-bold font-display text-slate-900 mb-3">{value.title}</h4>
              <p className="text-slate-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CampusLife() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-blue-100 rounded-[2.5rem] transform -rotate-3 scale-105 opacity-50 -z-10"></div>
            <img 
              src="/images/classroom.jpg" 
              alt="Teacher and students in classroom" 
              className="rounded-[2.5rem] shadow-xl object-cover w-full h-[400px] lg:h-[500px]"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop";
              }}
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6"
          >
            <h2 className="text-sm font-bold tracking-wider text-secondary uppercase">Beyond The Classroom</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900">A vibrant community where students thrive</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              At Bright Future, learning extends far beyond textbooks. Our campus is alive with creative arts, competitive athletics, and innovative STEM programs.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "State-of-the-art science laboratories and makerspaces",
                "Comprehensive visual and performing arts programs",
                "Championship-winning athletic teams",
                "Over 50 student-led clubs and organizations"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6">
              <Button variant="outline" className="rounded-full px-8 h-12 text-base font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                Explore Campus Life
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PortalLogin() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentId || !password) {
      toast({
        title: "Missing Information",
        description: "Please enter both your Student ID and Password.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome back!",
        description: "Successfully securely logged in to the student portal.",
        className: "bg-green-50 border-green-200 text-green-800",
      });
      setStudentId("");
      setPassword("");
    }, 1200);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Student & Parent Portal</h2>
              <p className="text-slate-600">Access grades, attendance, announcements, and securely communicate with teachers.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="studentId" className="text-slate-700 font-semibold">Student ID</Label>
                <Input 
                  id="studentId" 
                  placeholder="e.g. 2409581" 
                  autoComplete="username"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password" className="text-slate-700 font-semibold">Password</Label>
                  <a href="#" className="text-sm text-primary hover:underline font-medium">Forgot password?</a>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:ring-primary"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl mt-4"
                disabled={isLoading}
              >
                {isLoading ? "Authenticating..." : "Sign In"}
              </Button>
            </form>
          </div>
          
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-auto hidden md:block">
            <img 
              src="/images/library.jpg" 
              alt="Students studying" 
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-secondary p-2 rounded-xl text-primary">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl text-white">Bright Future</span>
            </div>
            <p className="text-slate-400 mb-6">
              Empowering the next generation of leaders, thinkers, and creators since 1995.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Academics</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Athletics</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Calendar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold font-display text-lg mb-4">Community</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-secondary transition-colors">Parent Portal</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Alumni</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Support Our School</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold font-display text-lg mb-4">Contact</h4>
            <address className="not-italic space-y-3 text-slate-400">
              <p>123 Education Lane<br/>Innovation City, ST 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: hello@brightfuture.edu</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Bright Future School. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-secondary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Values />
        <CampusLife />
        <PortalLogin />
      </main>
      <Footer />
    </div>
  );
}
