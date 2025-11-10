import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      console.log("📧 Contact Form Submission:");
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log(`Name: ${validatedData.name}`);
      console.log(`Email: ${validatedData.email}`);
      console.log(`Subject: ${validatedData.subject}`);
      console.log(`Message: ${validatedData.message}`);
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
      
      try {
        const { data, error } = await resend.emails.send({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: ['paintingislife592@gmail.com'],
          replyTo: validatedData.email,
          subject: `Portfolio Contact: ${validatedData.subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>From:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
            <h3>Message:</h3>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
          `,
        });

        if (error) {
          console.error('❌ Email sending failed:', error);
          return res.status(500).json({ 
            success: false, 
            message: "Failed to send email" 
          });
        }

        console.log('✅ Email sent successfully:', data);
      } catch (emailError) {
        console.error('❌ Email sending error:', emailError);
        return res.status(500).json({ 
          success: false, 
          message: "Failed to send email" 
        });
      }
      
      res.json({ 
        success: true, 
        message: "Message sent successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
