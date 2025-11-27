import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m9-9H3" />
              </svg>
            </div>
            <div className="mb-2">
              <div className="font-bold text-lg">HARA</div>
              <div className="font-bold text-lg">LUMINA</div>
            </div>
            <p className="text-xs text-muted-foreground">PSYCHIATRIC MENTAL HEALTH<br />NURSE PRACTITIONER</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Reach Out</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>312-912-0221</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Expertise</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/expertise" className="hover:text-primary transition-colors">
                  Therapy Treatment
                </Link>
              </li>
              <li>
                <Link to="/expertise" className="hover:text-primary transition-colors">
                  Medication Management
                </Link>
              </li>
              <li>
                <Link to="/expertise" className="hover:text-primary transition-colors">
                  Other Options
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/specialist" className="hover:text-primary transition-colors">
                  Specialist
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-wrap justify-between items-center text-sm text-muted-foreground">
          <div className="flex gap-4">
            <Link to="#" className="hover:text-primary transition-colors">
              Merchant Policies
            </Link>
            <Link to="#" className="hover:text-primary transition-colors">
              Legal Notice
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <span className="font-bold">U</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;