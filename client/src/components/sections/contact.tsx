import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: "fab fa-discord",
      title: "Discord",
      value: "Zixx#1234",
      testId: "contact-discord"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "contact@zixx.dev",
      testId: "contact-email"
    },
    {
      icon: "fab fa-roblox",
      title: "Roblox",
      value: "@ZixxDev",
      testId: "contact-roblox"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Discord webhook URL - should be provided in environment variables
      const webhookUrl = process.env.DISCORD_WEBHOOK_URL || 'https://discord.com/api/webhooks/1416871258234159267/L3XbLP5qDAkoRU_XyLiae9-SQai_fKPbytKBXl54vgoqtmIrlmZsmlCfQcDSmNHco-yL';

      const discordMessage = {
        embeds: [{
          title: "🎮 New Portfolio Contact",
          color: 0x4FC3F7,
          fields: [
            {
              name: "👤 Name",
              value: formData.name,
              inline: true
            },
            {
              name: "📧 Email",
              value: formData.email,
              inline: true
            },
            {
              name: "📝 Message",
              value: formData.message,
              inline: false
            }
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Portfolio Contact Form"
          }
        }]
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordMessage)
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Thank you for your message! I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Sorry, there was an error sending your message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-3xl lg:text-4xl text-center mb-16 animate-glow-pulse">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <div className="glass-strong rounded-2xl p-8">
              <h3 className="font-heading font-semibold text-2xl mb-6 text-foreground">
                Let's Collaborate
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have a project in mind, need development assistance, or just want to connect, I'd love to hear from you. Let's create something amazing together!
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4" data-testid={contact.testId}>
                    <div className="w-12 h-12 glass rounded-lg flex items-center justify-center text-primary">
                      <i className={`${contact.icon} text-xl`}></i>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{contact.title}</div>
                      <div className="text-sm text-muted-foreground">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-8 space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-2 glass border-0 bg-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2 glass border-0 bg-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
                  placeholder="your.email@example.com"
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-2 glass border-0 bg-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Tell me about your project or idea..."
                  data-testid="textarea-message"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground font-semibold hover-lift hover-scale focus:ring-2 focus:ring-ring transition-all duration-300"
                data-testid="button-send-message"
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
