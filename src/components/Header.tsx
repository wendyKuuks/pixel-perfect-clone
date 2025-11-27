import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import logoSvg from "../assets/bloomlylogo.svg";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 pt-14 z-50 gap-8">
      <div className="container mb-10 mx-auto px-4  flex flex-col items-center">
        <section className="flex items-center justify-between h-20 mb-6">
          <Link to="/" className="flex flex-col items-center">
            <img src={logoSvg} alt="Bloomly" className="h-auto w-40" />

            <h2 className="text-sm font-semibold">
              Growth • Renewal • Emotional Wellness
            </h2>
          </Link>
        </section>
      </div>

      <div className="flex items-center justify-around h-12 bg-red-50">
        <div className="flex gap-40">
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/expertise"
              className="text-foreground hover:text-primary transition-colors"
            >
              Expertise
            </Link>
            <Link
              to="/specialist"
              className="text-foreground hover:text-primary transition-colors"
            >
              Specialist
            </Link>
            <Link
              to="/blog"
              className="text-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <Button className="bg-primary hover:bg-primary/90 h-8 ">
            <Calendar className="w-6 h-6 mr-1" />
            Book an Appointment
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
