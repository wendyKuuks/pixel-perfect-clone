import { Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import forestCanopy from "@/assets/forest-canopy.jpg";
import specialistPortrait from "@/assets/specialist-portrait.jpg";

const Specialist = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[300px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${forestCanopy})` }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">Your Dedicated Wellness Guide</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Explore my blend of personalized therapy techniques and compassionate mental health care experience.
          </p>
        </div>
      </section>

      {/* Specialist Profile */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <img src={specialistPortrait} alt="Owolabi Habibat" className="w-full rounded-lg shadow-lg" />
            </div>

            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-2">Owolabi Habibat | MSN & APRN</h2>
              <h3 className="text-xl text-primary font-semibold mb-6">Psychiatric Nurse Practitioner</h3>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-lg">Contact Information</span>
                </div>
              </div>

              <div className="prose prose-sm max-w-none space-y-4 text-muted-foreground">
                <p>
                  As a Board-Certified Psychiatric Mental Health Nurse Practitioner, my goal is to offer compassionate, tailored care to improve everybody's life. I am dedicated to fostering mental wellness and resilience through evidence-based therapy, with 12 years of experience in this field, I blend Cognitive Behavioral Therapy, mindfulness, and supportive care to provide balanced and effective solutions for ADHD, anxiety, depression, and more.
                </p>

                <div className="mt-8">
                  <h4 className="font-bold text-foreground mb-3">Qualifications & Credentials</h4>
                  <ul className="space-y-2">
                    <li>• Psychiatric Nurse Practitioner – Habitat Owolabi</li>
                    <li>• Verified by Psychology Today</li>
                    <li>• License: Illinois - 209-012808</li>
                    <li>• Years in Practice: 12 years</li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold text-foreground mb-3">Education</h4>
                  <ul className="space-y-2">
                    <li>• <span className="font-semibold">MSN</span> - Northern Kentucky University, 2023</li>
                    <li>• <span className="font-semibold">BSN</span> - Grand Canyon University, 2020</li>
                  </ul>
                </div>

                <p className="mt-8">
                  I am committed to providing care that is not only evidence-based and effective but also attuned to each individual's unique needs, guiding clients toward sustainable mental wellness and meaningful life changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Specialist;