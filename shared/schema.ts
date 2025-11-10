import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export interface Service {
  icon: string;
  title: string;
  description: string;
  subtitle: string;
  stats: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  tags: string[];
  initial: string;
  image?: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'cloud';
}

export interface ContactInfo {
  type: 'email' | 'phone' | 'location' | 'link';
  label: string;
  value: string;
  href?: string;
  icon: string;
}
