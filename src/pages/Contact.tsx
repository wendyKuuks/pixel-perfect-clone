import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import forestCanopy from "@/assets/forest-canopy.jpg";

const Contact = () => {
  const workingHours = [
    { day: "Sunday", hours: "8:00 AM - 12:00 PM" },
    { day: "Monday", hours: "8:00 AM - 12:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 12:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 12:00 PM" },
    { day: "Today", hours: "8:00 AM - 10:00 PM", highlight: true },
    { day: "Friday", hours: "8:00 AM - 12:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 12:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[300px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${forestCanopy})` }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">Find Support</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Feel free to reach out for help, queries, or to embark on your wellness journey.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm 
        title="Reach Out Now"
        subtitle="Harness the power of personalized care. I'm here to help you navigate your mental health journey. Submit a message, and let's start working together."
      />

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-muted rounded-lg overflow-hidden" style={{ height: "400px" }}>
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

      {/* Working Hours */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-8">Working Hours</h2>
          <div className="space-y-0 border border-border rounded-lg overflow-hidden">
            {workingHours.map((schedule, index) => (
              <div
                key={index}
                className={`flex justify-between items-center px-6 py-4 ${
                  schedule.highlight ? "bg-primary text-primary-foreground" : "bg-background"
                } ${index !== workingHours.length - 1 ? "border-b border-border" : ""}`}
              >
                <span className="font-semibold">{schedule.day}</span>
                <span>{schedule.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;