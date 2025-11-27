import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Calendar, Phone, Heart, Activity, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import heroImage from "@/assets/hero-therapy.jpg";
import therapySession from "@/assets/therapy-session.jpg";
import groupTherapy from "@/assets/group-therapy.jpg";
import counseling from "@/assets/counseling.jpg";
import consultation from "@/assets/consultation.jpg";
import natureLandscape from "@/assets/nature-landscape.jpg";
import link911 from "@/assets/911link.png";
import suicideLink from "@/assets/suicidelink.png";

const Home = () => {
  const services = [
    { icon: Heart, title: "Therapy Treatment", color: "text-primary" },
    { icon: Activity, title: "Medication Support", color: "text-red-600" },
    { icon: MessageCircle, title: "Mental Health Counseling", color: "text-primary" },
    { icon: Heart, title: "Addiction Support", color: "text-red-600" },
    { icon: Activity, title: "Crisis Intervention", color: "text-primary" },
    { icon: MessageCircle, title: "Wellness Programs", color: "text-red-600" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center">
          <div className="flex gap-4 justify-center">
            <Button variant="outline" className="bg-background/90 backdrop-blur">
              <Mail className="w-4 h-4 mr-2" />
              Send Message
            </Button>
            <Button variant="outline" className="bg-background/90 backdrop-blur">
              <Calendar className="w-4 h-4 mr-2" />
              Book
            </Button>
            <Button variant="outline" className="bg-background/90 backdrop-blur">
              <Phone className="w-4 h-4 mr-2" />
              Call Me
            </Button>
          </div>
        </div>
      </section>

      {/* Infinite Scroll Icons Section */}
      <section className="py-8 overflow-hidden bg-muted/30">
        <div className="flex animate-scroll-right">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-12 px-6 flex-shrink-0">
              <img src={link911} alt="911 Crisis Support" className="h-16 w-auto object-contain" />
              <img src={suicideLink} alt="Suicide Prevention" className="h-16 w-auto object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* Icons Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-3`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/contact">
              <Button variant="outline">Request Appointment</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <img src={therapySession} alt="Therapy session" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">Responsive & Personalized Care</h3>
                <p className="text-sm text-muted-foreground">
                  As a provider of Psychiatric Mental Health Care, I offer integrated therapy and medication management to address your mental health needs with a personalized approach. At Hara Lumina, your wellbeing is my focus. Connect with me at{" "}
                  <a href="tel:+13129120221" className="text-primary">+1 (312) 912-0221</a> to begin your journey.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <img src={groupTherapy} alt="Group therapy" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">Empathetic & Accessible Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  My approach embraces over 12 years of specialized expertise, combining the empathy you need to feel heard with the accessibility to reach care when you need it. I foster a compassionate environment with efficient processes like quick tele-accommodation letters. Whether you connect with me online or in-person, accessing affordable care is central to your journey.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <img src={consultation} alt="Consultation" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">Trusted Expertise in Mental Health Care</h3>
                <p className="text-sm text-muted-foreground">
                  I bring proven clinical experience and advanced training to every session. My specialized training in various mental health conditions, including ADHD, anxiety, depression, trauma, and life transitions, allows me to provide evidence-based care that truly meets you where you are.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comprehensive Care Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Mental Health Care</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore evidence-based therapies and support for anxiety, ADHD, depression, trauma, and addiction recovery.
          </p>
          <Link to="/expertise">
            <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
          </Link>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Years of Trusted Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  I offer 12 years of expert mental health care, ensuring personalized, evidence-based therapy and medication management for individuals seeking comprehensive support across Illinois.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                <Activity className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Affordable Care for All</h3>
                <p className="text-sm text-muted-foreground">
                  I make mental health care accessible with flexible payment options, insurance acceptance, and sliding scales, ensuring that high-quality support is available to a diverse range of clients.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Efficient Care Tailored Fast</h3>
                <p className="text-sm text-muted-foreground">
                  Establish care effectively with my efficient process, offering job accommodation letters after just three visits, ensuring swift support for your mental health and administrative needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Logos */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-primary font-bold text-xl">United Healthcare</div>
            <div className="text-primary font-bold text-xl">SELFPAY</div>
            <div className="text-primary font-bold text-xl">OSCAR</div>
            <div className="text-primary font-bold text-xl">OPTUM</div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="relative h-[500px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${natureLandscape})` }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl font-bold mb-4">Connect With Me</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            I am here to address your specific needs with compassion and professionalism. Whether you are navigating challenges or seeking support, reaching out is the first step toward personalized mental health solutions for lasting change.
          </p>
          <Button className="bg-primary hover:bg-primary/90">Get In Touch</Button>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Services Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Services</h2>
          </div>

          <div className="mb-8 text-center">
            <Button variant="outline">All services ∨</Button>
          </div>

          <h3 className="text-2xl font-bold text-center mb-8">Mental Health Services</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 flex gap-6">
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2">Therapy Treatment</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    My therapy services are designed to empower you to navigate life's challenges...
                    <Link to="/expertise" className="text-primary underline ml-1">Learn more</Link>
                  </p>
                  <Link to="/expertise">
                    <Button variant="outline">View options</Button>
                  </Link>
                </div>
                <img src={therapySession} alt="Therapy" className="w-40 h-32 object-cover rounded-lg" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex gap-6">
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2">Medication Support</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    In my Medication Management service, I provide a comprehensive approach to...
                    <Link to="/expertise" className="text-primary underline ml-1">Learn more</Link>
                  </p>
                  <Link to="/expertise">
                    <Button variant="outline">Book Now</Button>
                  </Link>
                </div>
                <img src={groupTherapy} alt="Medication" className="w-40 h-32 object-cover rounded-lg" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex gap-6">
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2">Addiction Treatment</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    My Addiction Treatment services offer robust support through a substance misuse...
                    <Link to="/expertise" className="text-primary underline ml-1">Learn more</Link>
                  </p>
                  <Link to="/expertise">
                    <Button variant="outline">Book Now</Button>
                  </Link>
                </div>
                <img src={counseling} alt="Addiction" className="w-40 h-32 object-cover rounded-lg" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex gap-6">
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2">General Mental Health Support</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    With General Mental Health Support, I provide guidance to enhance your emot...
                    <Link to="/expertise" className="text-primary underline ml-1">Learn more</Link>
                  </p>
                  <Link to="/expertise">
                    <Button variant="outline">View options</Button>
                  </Link>
                </div>
                <img src={consultation} alt="Support" className="w-40 h-32 object-cover rounded-lg" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;