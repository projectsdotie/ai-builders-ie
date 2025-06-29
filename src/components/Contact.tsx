import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { showFormSuccessToast, showFormErrorToast, showLoadingToast } from "@/lib/toast-utils";

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").max(50, "First name must be less than 50 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters").max(50, "Last name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().max(100, "Company name must be less than 100 characters").optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Show loading toast
    const loadingToast = showLoadingToast({
      title: "Sending message...",
      description: "Please wait while we process your request.",
    });

    try {
      // Simulate API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Form submitted:", data);
      
      // Dismiss loading toast
      loadingToast.dismiss();
      
      // Show success toast
      showFormSuccessToast("contact");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      
      // Dismiss loading toast
      loadingToast.dismiss();
      
      // Show error toast
      showFormErrorToast();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-purple-200 text-purple-700 bg-purple-50">
            Get In Touch
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how AI can drive your business forward. Contact our team of experts for a free consultation.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="mb-12 lg:mb-0">
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Send us a message
                </h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name <span className="text-red-500" aria-label="required">*</span>
                      </label>
                      <Input 
                        id="firstName" 
                        type="text" 
                        {...register("firstName")}
                        className={`w-full ${errors.firstName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                        aria-invalid={errors.firstName ? 'true' : 'false'}
                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                      />
                      {errors.firstName && (
                        <p id="firstName-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name <span className="text-red-500" aria-label="required">*</span>
                      </label>
                      <Input 
                        id="lastName" 
                        type="text" 
                        {...register("lastName")}
                        className={`w-full ${errors.lastName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                        aria-invalid={errors.lastName ? 'true' : 'false'}
                        aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                      />
                      {errors.lastName && (
                        <p id="lastName-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      {...register("email")}
                      className={`w-full ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <Input 
                      id="company" 
                      type="text" 
                      {...register("company")}
                      className={`w-full ${errors.company ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                      aria-invalid={errors.company ? 'true' : 'false'}
                      aria-describedby={errors.company ? 'company-error' : undefined}
                    />
                    {errors.company && (
                      <p id="company-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.company.message}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <Textarea 
                      id="message" 
                      rows={4} 
                      {...register("message")}
                      className={`w-full ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                      placeholder="Tell us about your project and how we can help..."
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : 'message-help'}
                    />
                    {errors.message ? (
                      <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.message.message}
                      </p>
                    ) : (
                      <p id="message-help" className="mt-1 text-sm text-gray-500">
                        Please provide details about your AI transformation needs.
                      </p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    aria-describedby="submit-help"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  <p id="submit-help" className="text-xs text-gray-500 text-center">
                    We'll respond within 24 hours. Your information is secure and will not be shared.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Phone</h4>
                    <a 
                      href="tel:+353892020801" 
                      className="text-gray-600 hover:text-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded"
                      aria-label="Call us at +353 89 202 0801"
                    >
                      +353 89 202 0801
                    </a>
                    <p className="text-sm text-gray-500">Available Monday - Friday, 9 AM - 6 PM</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Mail className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Email</h4>
                    <a 
                      href="mailto:hello@aibuilders.ie" 
                      className="text-gray-600 hover:text-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded"
                      aria-label="Email us at hello@aibuilders.ie"
                    >
                      hello@aibuilders.ie
                    </a>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">Ireland</p>
                    <p className="text-sm text-gray-500">Serving Ireland & UK markets</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Business Hours</h4>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                    </div>
                    <p className="text-sm text-gray-500">Emergency support available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-gradient-to-br from-purple-600 to-pink-600 text-white border-0">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-semibold mb-4">Ready to Get Started?</h4>
                <p className="mb-6 text-purple-100">
                  Book a free 30-minute consultation to discuss your AI transformation goals.
                </p>
                <Button 
                  variant="secondary" 
                  className="bg-white text-purple-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      const form = element.querySelector('form');
                      if (form) {
                        form.scrollIntoView({ behavior: 'smooth' });
                        // Focus on first form field after scroll
                        setTimeout(() => {
                          const firstInput = form.querySelector('input');
                          if (firstInput) {
                            (firstInput as HTMLInputElement).focus();
                          }
                        }, 500);
                      }
                    }
                  }}
                  aria-label="Schedule a free 30-minute consultation"
                >
                  Schedule Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
