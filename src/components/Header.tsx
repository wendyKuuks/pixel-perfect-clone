import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center mb-1">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m9-9H3" />
              </svg>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold tracking-wide">HARA</div>
              <div className="text-sm font-bold tracking-wide">LUMINA</div>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/expertise" className="text-foreground hover:text-primary transition-colors">
              Expertise
            </Link>
            <Link to="/specialist" className="text-foreground hover:text-primary transition-colors">
              Specialist
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <Button className="bg-primary hover:bg-primary/90">
            <Calendar className="w-4 h-4 mr-2" />
            Book an Appointment
          </Button>
        </div>
        
        <div className="text-center py-2 border-t border-border">
          <h2 className="text-sm font-semibold">Personalized Psychiatric Wellness</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;