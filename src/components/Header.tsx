import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Menu, X } from "lucide-react";
import logoSvg from "../assets/bloomlylogo.svg";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <>
      <Link
        to="/"
        className="text-foreground hover:text-primary transition-colors"
        onClick={() => setOpen(false)}
      >
        Home
      </Link>
      <Link
        to="/expertise"
        className="text-foreground hover:text-primary transition-colors"
        onClick={() => setOpen(false)}
      >
        Expertise
      </Link>
      <Link
        to="/specialist"
        className="text-foreground hover:text-primary transition-colors"
        onClick={() => setOpen(false)}
      >
        Specialist
      </Link>
      <Link
        to="/blog"
        className="text-foreground hover:text-primary transition-colors"
        onClick={() => setOpen(false)}
      >
        Blog
      </Link>
      <Link
        to="/contact"
        className="text-foreground hover:text-primary transition-colors"
        onClick={() => setOpen(false)}
      >
        Contact
      </Link>
    </>
  );

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      {/* Logo Section */}
      <div
        className={`container mx-auto px-4 transition-all duration-300 overflow-hidden ${
          isScrolled ? "max-h-0 opacity-0 py-0" : "max-h-80 opacity-100 pt-4 pb-4"
        }`}
      >
        <section className="flex items-center justify-center">
          <Link to="/" className="flex flex-col items-center">
            <img src={logoSvg} alt="Bloomly" className="h-auto w-40" />
            <h2 className="text-sm font-semibold">
              Growth • Renewal • Emotional Wellness
            </h2>
          </Link>
        </section>
      </div>

      {/* Nav Section */}
      <div className="flex items-center justify-between md:justify-around h-12 bg-red-50 px-4">
        {/* Mobile Menu Toggle - Left Side */}
        {isMobile && (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-10 h-10" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks}
              </nav>
            </SheetContent>
          </Sheet>
        )}

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks}
        </nav>

        {/* Book Appointment Button */}
        {isMobile ? (
          <Button className="bg-primary hover:bg-primary/90" size="icon">
            <Calendar className="w-5 h-5" />
          </Button>
        ) : (
          <Button className="bg-primary hover:bg-primary/90 h-8">
            <Calendar className="w-6 h-6 mr-1" />
            Book an Appointment
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
