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
import care from "@/assets/care.jpg";
import empathy from "@/assets/empathy.jpg";
import trust from "@/assets/trust.jpg";
import fast from "@/assets/fast.jpg";
import aetna from "@/assets/aetna.png";
import blueCross from "@/assets/bluecross.png";
import medicare from "@/assets/medicare.png";
import optum from "@/assets/optum.png";
import oscar from "@/assets/oscar.png";
import selfpay from "@/assets/selfpay.png";
import umr from "@/assets/umr.png";
import unitedHealthcare from "@/assets/united.png";

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
      <section
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </section>

      <div className="relative z-10 text-center text-yellow-600 bg-slate-400 w-fit mx-auto md:ml-80 px-2 py-2 rounded-lg -mt-10 shadow-lg backdrop-blur bg-white/30">
        <div className="flex gap-4 justify-center">
          <Button
            variant="outline"
            className="bg-background/90 backdrop-blur p-2"
          >
            <Mail className="w-4 h-4 " />
            Send Message
          </Button>
          <Button
            variant="outline"
            className="bg-background/90 backdrop-blur p-2"
          >
            <Calendar className="w-4 h-4" />
            Book
          </Button>
          <Button
            variant="outline"
            className="bg-background/90 backdrop-blur p-2"
          >
            <Phone className="w-4 h-4" />
            Call Me
          </Button>
        </div>
      </div>

      {/* Infinite Scroll Icons Section */}
      <section className="container py-8 overflow-hidden">
        <div className="flex animate-scroll-right">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-2 px-6 flex-shrink-0">
              <img
                src={link911}
                alt="911 Crisis Support"
                className="h-40 w-auto object-contain"
              />
              <img
                src={suicideLink}
                alt="Suicide Prevention"
                className="h-40 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Icons Section */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="text-center text-green-900">
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
                <img
                  src={therapySession}
                  alt="Therapy session"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">
                  Responsive & Personalized Care
                </h3>
                <p className="text-sm text-muted-foreground">
                  As a provider of Psychiatric Mental Health Care, I offer
                  integrated therapy and medication management to address your
                  mental health needs with a personalized approach. At Hara
                  Lumina, your wellbeing is my focus. Connect with me at{" "}
                  <a href="tel:+13129120221" className="text-primary">
                    +1 (312) 912-0221
                  </a>{" "}
                  to begin your journey.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <img
                  src={groupTherapy}
                  alt="Group therapy"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">
                  Empathetic & Accessible Expertise
                </h3>
                <p className="text-sm text-muted-foreground">
                  My approach embraces over 12 years of specialized expertise,
                  combining the empathy you need to feel heard with the
                  accessibility to reach care when you need it. I foster a
                  compassionate environment with efficient processes like quick
                  tele-accommodation letters. Whether you connect with me online
                  or in-person, accessing affordable care is central to your
                  journey.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <img
                  src={consultation}
                  alt="Consultation"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">
                  Trusted Expertise in Mental Health Care
                </h3>
                <p className="text-sm text-muted-foreground">
                  I bring proven clinical experience and advanced training to
                  every session. My specialized training in various mental
                  health conditions, including ADHD, anxiety, depression,
                  trauma, and life transitions, allows me to provide
                  evidence-based care that truly meets you where you are.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comprehensive Care Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Comprehensive Mental Health Care
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore evidence-based therapies and support for anxiety, ADHD,
            depression, trauma, and addiction recovery.
          </p>
          <Link to="/expertise">
            <Button className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 place-items-center">
            <div className="flex flex-col md:flex-row text-center pt-6 md:text-left gap-4 shadow-xl p-4 rounded-lg w-fit">
              <div>
                <img
                  src={empathy}
                  alt=""
                  className="w-38 h-30 md:w-30 md:h-28 mx-auto"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Compassion & Integrity
                </h3>
                <p className="text-sm text-muted-foreground max-w-2xl">
                  We treat every patient with genuine empathy, patience, and
                  respect. Our care is rooted in honesty, transparency, and
                  ethical practice — ensuring individuals feel heard, supported,
                  and valued throughout their healing journey.
                </p>
              </div>
            </div>

            <div className="flex flex-col pt-6 md:flex-row text-center md:text-left gap-4 shadow-xl p-4 rounded-lg w-fit">
              <div>
                <img
                  src={trust}
                  alt=""
                  className="w-38 h-30 md:w-30 md:h-28 mx-auto"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Excellence & Evidence-Based Care
                </h3>
                <p className="text-sm text-muted-foreground max-w-2xl">
                  We deliver high-quality psychiatric support grounded in
                  research, best practices, and clinical expertise. Every
                  treatment plan is personalized, outcome-driven, and
                  intentionally crafted to meet each patient’s unique needs with
                  precision and professionalism.
                </p>
              </div>
            </div>

            <div className="flex flex-col pt-6 md:flex-row text-center md:text-left gap-4 shadow-xl p-4 rounded-lg w-fit">
              <div>
                <img
                  src={care}
                  alt=""
                  className="w-38 h-30 md:w-30 md:h-28 mx-auto"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Holistic & Faith-Informed Wellness
                </h3>
                <p className="text-sm text-muted-foreground max-w-2xl">
                  We recognize that true healing connects the mind, body,
                  spirit, and emotions. While inspired by Christian principles
                  of compassion and service, our approach remains inclusive and
                  welcoming to people of all backgrounds. We honor dignity,
                  humanity, and each patient’s individual beliefs.
                </p>
              </div>
            </div>

            <div className="flex pt-6 flex-col md:flex-row text-center md:text-left gap-4 shadow-xl p-4 rounded-lg w-fit">
              <div>
                <img
                  src={fast}
                  alt=""
                  className="w-38 h-30 md:w-30 md:h-28 mx-auto"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Growth & Renewal</h3>
                <p className="text-sm text-muted-foreground max-w-2xl">
                  We view healing as an ongoing, transformative process. We help
                  patients make meaningful progress at their own pace, offering
                  guidance, clarity, and room for emotional reset. Every step
                  forward, big or small, is acknowledged and celebrated as part
                  of a renewed path toward wellness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Scroll Insurance Icons Section */}
      <section className="container py-8 overflow-hidden">
        <div className="flex animate-scroll-right">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-2 px-6 flex-shrink-0">
              <img
                src={aetna}
                alt="911 Crisis Support"
                className="h-40 w-auto object-contain"
              />
              <img
                src={blueCross}
                alt="Suicide Prevention"
                className="h-40 w-auto object-contain"
              />
              <img
                src={medicare}
                alt="Suicide Prevention"
                className="h-40 w-auto object-contain"
              />
              <img
                src={optum}
                alt="Suicide Prevention"
                className="h-40 w-auto object-contain"
              />
              <img
                src={oscar}
                alt="Suicide Prevention"
                className="h-40 w-auto object-contain"
              />
              <img
                src={selfpay}
                alt="Suicide Prevention"
                className="h-40 w-auto object-contain"
              />
              <img
                src={umr}
                alt="Suicide Prevention"
                className="h-40 w-auto object-contain"
              />
              <img
                src={unitedHealthcare}
                alt="Suicide Prevention"
                className="h-40 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Connect Section */}
      <section
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${natureLandscape})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl font-bold mb-4">Connect With Me</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            I am here to address your specific needs with compassion and
            professionalism. Whether you are navigating challenges or seeking
            support, reaching out is the first step toward personalized mental
            health solutions for lasting change.
          </p>
          <Button className="bg-primary hover:bg-primary/90">
            Get In Touch
          </Button>
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

          <h3 className="text-2xl font-bold text-center mb-8">
            Mental Health Services
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-3xl place-self-center">
            <Card>
              <CardContent className="place-items-center p-6 flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2">Therapy Treatment</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    My therapy services are designed to empower you to navigate
                    life's challenges...
                    <Link
                      to="/expertise"
                      className="text-primary underline ml-1"
                    >
                      Learn more
                    </Link>
                  </p>
                  <Link to="/expertise">
                    <Button variant="outline">View options</Button>
                  </Link>
                </div>
                <img
                  src={therapySession}
                  alt="Therapy"
                  className="w-60 h-auto object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="place-items-center p-6 flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2">Medication Support</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    In my Medication Management service, I provide a
                    comprehensive approach to...
                    <Link
                      to="/expertise"
                      className="text-primary underline ml-1"
                    >
                      Learn more
                    </Link>
                  </p>
                  <Link to="/expertise">
                    <Button variant="outline">Book Now</Button>
                  </Link>
                </div>
                <img
                  src={groupTherapy}
                  alt="Medication"
                  className="w-60 h-auto object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="place-items-center p-6 flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2">
                    Addiction Treatment
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    My Addiction Treatment services offer robust support through
                    a substance misuse...
                    <Link
                      to="/expertise"
                      className="text-primary underline ml-1"
                    >
                      Learn more
                    </Link>
                  </p>
                  <Link to="/expertise">
                    <Button variant="outline">Book Now</Button>
                  </Link>
                </div>
                <img
                  src={counseling}
                  alt="Addiction"
                  className="w-60 h-auto object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            <Card>
              <CardContent className=" place-items-center p-6 flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2">
                    General Mental Health Support
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    With General Mental Health Support, I provide guidance to
                    enhance your emot...
                    <Link
                      to="/expertise"
                      className="text-primary underline ml-1"
                    >
                      Learn more
                    </Link>
                  </p>
                  <Link to="/expertise">
                    <Button variant="outline">View options</Button>
                  </Link>
                </div>
                <img
                  src={consultation}
                  alt="Support"
                  className="w-60 h-auto object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pt-16">
        <div className="container mx-auto px-4">
          <div
            className="bg-muted rounded-lg overflow-hidden"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95869.67835850926!2d-87.74414354335938!3d41.83390899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;