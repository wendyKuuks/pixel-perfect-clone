import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowBigRight, ArrowDownRight, ArrowRight, Icon, PersonStandingIcon, User, User2, MessageCircle, FileText } from "lucide-react";
import { Arrow } from "@radix-ui/react-tooltip";
import logo from "../assets/bloomlylogo.svg";

const Footer = () => {
  return (
    <footer className="bg-red-50 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="">
            <img src={logo} alt="Bloomly" className="h-26 w-24" />
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
                <Link
                  to="/expertise"
                  className="hover:text-primary transition-colors flex gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  Therapy Treatment
                </Link>
              </li>
              <li>
                <Link
                  to="/expertise"
                  className="hover:text-primary transition-colors flex gap-2"
                >
                  <ArrowRight className="w-4 h-4" /> Medication Management
                </Link>
              </li>
              <li>
                <Link
                  to="/expertise"
                  className="hover:text-primary transition-colors flex gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  Other Options
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/specialist"
                  className="hover:text-primary transition-colors flex gap-2"
                >
                  <User className="w-4 h-4" /> Specialist
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-primary transition-colors flex gap-2"
                >
                  <FileText className="w-4 h-4" /> Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors flex gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-wrap justify-between items-center text-sm text-muted-foreground">
          <div className="flex gap-4">
            <Link to="#" className="hover:text-primary transition-colors">
              Legal Notice
            </Link>

            <Link to="#" className="hover:text-primary transition-colors">
              Privacy Policy
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