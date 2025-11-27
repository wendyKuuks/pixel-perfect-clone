import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, CreditCard, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import forestCanopy from "@/assets/forest-canopy.jpg";
import therapySession from "@/assets/therapy-session.jpg";
import groupTherapy from "@/assets/group-therapy.jpg";
import counseling from "@/assets/counseling.jpg";
import consultation from "@/assets/consultation.jpg";

const Expertise = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[300px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${forestCanopy})` }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">Mental Health Support</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Explore my expert therapy and medication management services supporting mental health journeys across lifetimes.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Services</h2>
            <Button variant="outline">All services ∨</Button>
          </div>

          <h3 className="text-2xl font-bold text-center mb-8">Mental Health Services</h3>

          <div className="space-y-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2">Therapy Treatment</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    My therapy services are designed to empower you to navigate life's challenges...
                    <Link to="#" className="text-primary underline ml-1">Learn more</Link>
                  </p>
                  <Button variant="outline">View options</Button>
                </div>
                <img src={therapySession} alt="Therapy" className="w-full md:w-48 h-40 object-cover rounded-lg" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2">Medication Support</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    In my Medication Management service, I provide a comprehensive approach to...
                    <Link to="#" className="text-primary underline ml-1">Learn more</Link>
                  </p>
                  <Button variant="outline">Book Now</Button>
                </div>
                <img src={groupTherapy} alt="Medication" className="w-full md:w-48 h-40 object-cover rounded-lg" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2">Addiction Treatment</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    My Addiction Treatment services offer robust support through a substance misuse...
                    <Link to="#" className="text-primary underline ml-1">Learn more</Link>
                  </p>
                  <Button variant="outline">Book Now</Button>
                </div>
                <img src={counseling} alt="Addiction" className="w-full md:w-48 h-40 object-cover rounded-lg" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2">General Mental Health Support</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    With General Mental Health Support, I provide guidance to enhance your emot...
                    <Link to="#" className="text-primary underline ml-1">Learn more</Link>
                  </p>
                  <Button variant="outline">View options</Button>
                </div>
                <img src={consultation} alt="Support" className="w-full md:w-48 h-40 object-cover rounded-lg" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6 flex gap-6">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fees</h3>
                  <p className="text-sm text-muted-foreground">
                    My standard initial session fee is $225, while follow-up sessions are $200. I also offer a sliding scale for clients who may be eligible, helping make mental health care accessible for a wider range of needs. Please reach out to discuss whether you qualify for adjusted rates, as I strive to ensure therapy is affordable without compromising quality.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex gap-6">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Payment Methods</h3>
                  <p className="text-sm text-muted-foreground">
                    I accept a variety of convenient payment options to make the process as seamless as possible. You can pay using American Express, Discover, Mastercard, Visa, Apple Cash, Paypal, Venmo, or Zelle, giving you flexibility in managing your appointments.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex gap-6">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Insurance</h3>
                  <p className="text-sm text-muted-foreground">
                    I accept a broad network of insurance providers, both in-network and out-of-network, to support access to care. Accepted insurers include Aetna, Anthem, Blue Cross, Blue Shield, BlueCross and BlueShield, Cigna and Evernorth, Health Alliance, Medicare, Meridian, Molina Healthcare, MultiPlan Private Healthcare Systems (PHCS), Optum, Oscar Health, Oxford, and UnitedHealthcare UHC | UBH.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Expertise;