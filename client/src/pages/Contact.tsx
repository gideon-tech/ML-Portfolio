import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, Loader2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactMeta = [
  { icon: Mail, label: "Email", value: "contact@makugideon.dev", href: "mailto:contact@makugideon.dev" },
  { icon: Phone, label: "Phone", value: "+256 760 325 115", href: "tel:+256760325115" },
  { icon: MapPin, label: "Location", value: "Kampala, Uganda" },
  { icon: Github, label: "GitHub", value: "github.com/makugideon", href: "https://github.com/makugideon" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/makugideon", href: "https://linkedin.com/in/makugideon" },
];

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      form.reset();
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* Page header */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-40" />
          <div className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-primary/[0.08] rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <Link href="/">
                <a className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </a>
              </Link>

              <div className="space-y-4">
                <p className="text-xs font-mono font-medium tracking-widest uppercase text-primary">
                  Let's Talk
                </p>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tighter">
                  Get in Touch
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Have a project in mind, a question, or just want to say hello? I'd love to hear from you.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact split layout */}
        <section className="py-8 lg:py-16 pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Left: contact info */}
              <motion.div
                className="lg:col-span-2 space-y-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="space-y-2">
                  <h2 className="text-xl font-display font-bold">Contact Info</h2>
                  <p className="text-sm text-muted-foreground">
                    Reach out through any of these channels. I typically respond within 24 hours.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactMeta.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-muted-foreground">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-foreground">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Availability badge */}
                <div className="p-[1px] rounded-2xl bg-gradient-to-br from-green-500/20 via-border/40 to-transparent">
                  <div className="rounded-2xl bg-card/80 p-5 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-sm font-medium text-foreground">Currently Available</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Open to freelance projects, collaborations, and full-time AI/ML opportunities.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right: form */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="p-[1px] rounded-2xl bg-gradient-to-br from-primary/20 via-border/40 to-transparent">
                  <div className="rounded-2xl bg-card/90 backdrop-blur-sm p-8">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit((d) => mutation.mutate(d))} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your name" data-testid="input-name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Email *</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="your@email.com" data-testid="input-email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Subject *</FormLabel>
                              <FormControl>
                                <Input placeholder="How can I help you?" data-testid="input-subject" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Message *</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Tell me about your project..." rows={6} data-testid="input-message" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full min-h-12 btn-glow"
                          disabled={mutation.isPending}
                          data-testid="button-submit"
                        >
                          {mutation.isPending ? (
                            <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending...</>
                          ) : (
                            "Send Message"
                          )}
                        </Button>
                      </form>
                    </Form>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
