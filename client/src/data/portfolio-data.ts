import type { Service, Testimonial, Stat, Skill, ContactInfo, Project } from "@shared/schema";
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
    tags: ["Python", "Problem Solving", "Collaboration"],
  },
  {
    id: "2",
    name: "Scott Forsyth",
    role: "CTO & Co-founder",
    company: "Kitchen Copilot Inc.",
    initial: "S",
    image: scottImage,
    quote: "I interacted with Gideon in two contexts. I was a mentor for Gideon for a year, and I recently brought him on as an IT and developer intern at Kitchen Copilot Inc. Gideon has a lot of talent and potential. He's going somewhere in life, and it is a privilege to be a part of that journey. During the mentorship, Gideon consistently delivered homework assignments above expectations.",
    tags: ["AI Development", "Problem Solving", "Innovation"],
  },
];

export const stats: Stat[] = [
  { value: "3", label: "Projects Completed", suffix: "+" },
  { value: "4", label: "GPA", suffix: ".31" },
  { value: "2", label: "Certificates", suffix: "" },
  { value: "1", label: "Internship", suffix: "" },
];

export const skills: Skill[] = [
  // Languages
  { name: "Python", category: "language", level: 90 },
  { name: "SQL", category: "language", level: 75 },
  { name: "Java", category: "language", level: 58 },
  // Frameworks
  { name: "PyTorch", category: "framework", level: 80 },
  { name: "Scikit-Learn", category: "framework", level: 85 },
  { name: "Pandas", category: "framework", level: 88 },
  { name: "NumPy", category: "framework", level: 85 },
  // Tools
  { name: "Flask", category: "tool", level: 78 },
  { name: "Streamlit", category: "tool", level: 82 },
  { name: "Docker", category: "tool", level: 68 },
  { name: "Git & GitHub", category: "tool", level: 85 },
  { name: "PostgreSQL", category: "tool", level: 68 },
  { name: "n8n", category: "tool", level: 72 },
  { name: "Jupyter Notebook", category: "tool", level: 88 },
  // Cloud
  { name: "Azure", category: "cloud", level: 65 },
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

export const projects: Project[] = [
  {
    id: "1",
    title: "Interview Practice Chatbot",
    description: "Interactive AI interview chatbot using OpenAI GPT-4o to simulate realistic interviews across multiple tech and business roles. Features a personalized questioning system that adapts to the user's skills, experience level, and target company (Amazon, Meta, LinkedIn, Spotify, etc.). Includes an AI-driven feedback engine with performance scoring (1–10) and detailed improvement suggestions after each session.",
    tags: ["Python", "Streamlit", "OpenAI", "GPT-4o"],
    github: "https://github.com/makugideon",
    category: "nlp",
    featured: true,
  },
  {
    id: "2",
    title: "Flask Food Analyzer API",
    description: "Production-ready Flask API that analyzes food images using Passio.ai's computer vision models, delivering detailed nutrition insights including calories, macros, and ingredient breakdowns. Features robust OAuth token refresh, automatic retry logic, dual image-upload pipelines (binary + base64), and supports JPEG, PNG, WEBP, BMP, and TIFF formats up to 16MB. Improved API reliability and uptime by 40%.",
    tags: ["Python", "Flask", "Passio.ai", "PostgreSQL", "Docker"],
    github: "https://github.com/makugideon",
    category: "cv",
    featured: true,
  },
  {
    id: "3",
    title: "Kitchen Copilot — Internship",
    description: "At Kitchen Copilot Inc., led food-logging research and built a production-ready RESTful food-analysis endpoint using Passio.ai. Engineered n8n automation workflows that reduced manual processing time by 20%. Integrated REST APIs to connect app features with external services and architected recipe photo embedding directly into email bodies.",
    tags: ["Python", "n8n", "REST APIs", "Passio.ai", "Azure"],
    github: "https://github.com/makugideon",
    live: "https://kitchencopilot.com",
    category: "automation",
    featured: true,
  },
];
