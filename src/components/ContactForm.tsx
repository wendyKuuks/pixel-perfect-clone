import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

const ContactForm = ({ title = "Reach Out Now", subtitle = "An email will be sent to the owner" }: ContactFormProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Textarea
            placeholder="Tell me about your request"
            className="md:col-span-1 md:row-span-4 min-h-[200px] bg-muted/50"
          />
          
          <Input placeholder="Your name" className="bg-muted/50" />
          <Input type="email" placeholder="Your email" className="bg-muted/50" />
          <Input type="tel" placeholder="Your phone number" className="bg-muted/50" />
          
          <div className="md:col-span-2 flex items-start gap-2">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="text-xs text-muted-foreground leading-tight">
              I agree to the{" "}
              <a href="#" className="underline hover:text-primary">
                Terms & Conditions
              </a>{" "}
              provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </label>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <Button type="submit" className="bg-primary hover:bg-primary/90 px-8">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;