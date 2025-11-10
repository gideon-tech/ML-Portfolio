import type { Service, Testimonial, Stat, Skill, ContactInfo } from "@shared/schema";
import { Brain, Cpu, Eye, MessageSquare, TrendingUp, Zap } from "lucide-react";
import scottImage from "@assets/AT1A5059-Edit_1762770501233.jpg";
import jonnyImage from "@assets/jonny_1762770509505.jpeg";

export const services: Service[] = [
  {
    icon: "Zap",
    title: "AI Automation",
    subtitle: "Automation Specialist",
    description: "Streamline business processes with intelligent automation solutions powered by AI. Reduce manual work and increase efficiency.",
    stats: "20+ Workflows",
  },
  {
    icon: "Brain",
    title: "Machine Learning Models",
    subtitle: "ML Engineer",
    description: "Develop custom ML models for prediction, classification, and pattern recognition. Turn your data into actionable insights.",
    stats: "30+ Models Deployed",
  },
  {
    icon: "Eye",
    title: "Computer Vision",
    subtitle: "Vision Specialist",
    description: "Implement image recognition, object detection, and visual analysis systems. See what matters in your visual data.",
    stats: "15+ CV Solutions",
  },
  {
    icon: "MessageSquare",
    title: "Natural Language Processing",
    subtitle: "NLP Expert",
    description: "Extract insights from text with sentiment analysis, text classification, and language models. Understand human language at scale.",
    stats: "25+ NLP Projects",
  },
  {
    icon: "Cpu",
    title: "AI Agents",
    subtitle: "Agent Developer",
    description: "Build intelligent conversational agents and chatbots for enhanced customer engagement. Automate conversations naturally.",
    stats: "12+ Agents Built",
  },
  {
    icon: "TrendingUp",
    title: "Predictive Analytics",
    subtitle: "Data Scientist",
    description: "Leverage data-driven insights to forecast trends and make informed business decisions. See the future in your data.",
    stats: "18+ Analytics Systems",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jonathan Niwagaba",
    role: "Software Engineer",
    company: "Tech Solutions Ltd",
    initial: "J",
    image: jonnyImage,
    quote: "I had the pleasure of working with Maku Gideon on several software development projects and I was consistently impressed by his technical skills, attention to detail and commitment to delivering high-quality results. They're proactive in finding solutions, great at collaborating with the team, and always bring creative ideas to the table.",
    tags: ["Python", "TensorFlow", "ML Models"],
  },
  {
    id: "2",
    name: "Scott Forsyth",
    role: "CEO & Co-founder",
    company: "Kitchen Copilot Inc.",
    initial: "S",
    image: scottImage,
    quote: "I interacted with Gideon in two contexts. I was a mentor for Gideon for a year, and I recently brought him on as an IT and developer intern at Kitchen Copilot Inc. Gideon has a lot of talent and potential. He's going somewhere in life, and it is a privilege to be a part of that journey. During the mentorship, Gideon consistently delivered homework assignments above expectations.",
    tags: ["AI Development", "Problem Solving", "Innovation"],
  },
  {
    id: "3",
    name: "Sarah Mukasa",
    role: "Product Manager",
    company: "FinTech Innovations",
    initial: "S",
    quote: "Maku developed an AI-powered fraud detection system that reduced our false positives by 75%. His deep understanding of machine learning and ability to translate business requirements into technical solutions is exceptional.",
    tags: ["ML Models", "Fraud Detection", "FinTech"],
  },
  {
    id: "4",
    name: "David Okello",
    role: "CTO",
    company: "AgriTech Solutions",
    initial: "D",
    quote: "The computer vision system Maku built for crop disease detection has transformed our operations. His expertise in deep learning and practical approach to problem-solving made the project a huge success.",
    tags: ["Computer Vision", "Deep Learning", "AgriTech"],
  },
  {
    id: "5",
    name: "Amina Hassan",
    role: "Director of Operations",
    company: "Customer Success Hub",
    initial: "A",
    quote: "Maku created an NLP-powered customer support chatbot that handles 60% of our inquiries automatically. The quality of responses and understanding of context is remarkable. Implementation was smooth and professional.",
    tags: ["NLP", "Chatbots", "Customer Support"],
  },
];

export const stats: Stat[] = [
  { value: "9", label: "Projects Completed", suffix: "+" },
  { value: "8", label: "Happy Clients", suffix: "+" },
  { value: "100", label: "Models Trained", suffix: "+" },
  { value: "3", label: "Years Experience", suffix: "+" },
];

export const skills: Skill[] = [
  { name: "Python", category: "language" },
  { name: "TensorFlow", category: "framework" },
  { name: "PyTorch", category: "framework" },
  { name: "Scikit-learn", category: "framework" },
  { name: "Keras", category: "framework" },
  { name: "Pandas", category: "tool" },
  { name: "NumPy", category: "tool" },
  { name: "OpenCV", category: "framework" },
  { name: "NLTK", category: "framework" },
  { name: "Hugging Face", category: "framework" },
  { name: "FastAPI", category: "framework" },
  { name: "Docker", category: "tool" },
  { name: "AWS", category: "cloud" },
  { name: "Git", category: "tool" },
  { name: "Jupyter", category: "tool" },
  { name: "SQL", category: "language" },
];

export const contactInfo: ContactInfo[] = [
  {
    type: "email",
    label: "Email",
    value: "contact@makugideon.dev",
    href: "mailto:contact@makugideon.dev",
    icon: "Mail",
  },
  {
    type: "phone",
    label: "Phone",
    value: "+256 760 325 115",
    href: "tel:+256760325115",
    icon: "Phone",
  },
  {
    type: "location",
    label: "Location",
    value: "Kampala, Uganda",
    icon: "MapPin",
  },
  {
    type: "link",
    label: "Blog",
    value: "blog.makugideon.dev",
    href: "https://blog.makugideon.dev",
    icon: "BookOpen",
  },
];
