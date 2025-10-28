import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["Thamel, Kathmandu", "Nepal"],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+977 1234 567890", "+977 9876 543210"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@info.com", "support@support.com"],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Sun - Fri: 9AM - 7PM", "Saturday: Closed"],
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.", {
        duration: 4000,
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 bg-primary text-white">Get in Touch</Badge>
            <h1 className="font-hakio text-5xl sm:text-6xl mb-6 text-foreground text-brush">
              Let's Connect
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about our products or services? We'd love to hear
              from you. Reach out and let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center hover-lift border-border shadow-ink brush-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-hakio text-xl mb-3 text-foreground">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-border shadow-ink-strong brush-reveal">
              <CardHeader>
                <CardTitle className="font-hakio text-3xl text-foreground">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+977 1234 567890"
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                      className="border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full btn-brush bg-primary hover:bg-primary-dark text-white tracking-wide"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map/Image Placeholder */}
            <div className="space-y-6">
              <Card
                className="border-border shadow-ink-strong overflow-hidden brush-reveal"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="aspect-[4/3] bg-muted relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11634.205256980451!2d85.29825653438859!3d27.703246703390956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1860ae22d385%3A0x7c2444e8284cef52!2sKalimati%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1761640068008"
                    class="w-full h-[450px] border-0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="font-hakio text-2xl mb-2 ">
                      Visit Our Store
                    </h3>
                    {/* <p className="text-white/90">Experience our products in person</p> */}
                  </div>
                </div>
              </Card>

              <Card
                className="border-border shadow-ink brush-reveal"
                style={{ animationDelay: "0.3s" }}
              >
                <CardContent className="p-6">
                  <h3 className="font-hakio text-2xl mb-4 text-foreground">
                    Why Choose Japenese Seafoods Shop?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">
                        Direct imports from Japan ensuring authenticity
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">
                        Quality guaranteed on all products
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">
                        Expert advice on seafood selection and preparation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">
                        Fast and reliable delivery across Nepal
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/landing-bg.png)`,
            }}
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-hakio text-4xl sm:text-5xl mb-6 text-white">
            Ready to Order?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Browse our selection of premium Japanese seafood and ingredients.
            Fresh delivery guaranteed.
          </p>
          <Button
            size="lg"
            className="btn-brush bg-primary hover:bg-primary-dark text-white tracking-wide"
          >
            Shop Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
