import { toast } from "@/hooks/use-toast";
import { CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react";

export interface ToastOptions {
  title?: string;
  description?: string;
  duration?: number;
}

// Success toast
export const showSuccessToast = ({ title = "Success", description, duration = 5000 }: ToastOptions) => {
  return toast({
    title,
    description,
    duration,
    variant: "default",
    className: "border-green-200 bg-green-50 text-green-900",
  });
};

// Error toast
export const showErrorToast = ({ title = "Error", description, duration = 7000 }: ToastOptions) => {
  return toast({
    title,
    description,
    duration,
    variant: "destructive",
  });
};

// Warning toast
export const showWarningToast = ({ title = "Warning", description, duration = 6000 }: ToastOptions) => {
  return toast({
    title,
    description,
    duration,
    variant: "default",
    className: "border-yellow-200 bg-yellow-50 text-yellow-900",
  });
};

// Info toast
export const showInfoToast = ({ title = "Info", description, duration = 5000 }: ToastOptions) => {
  return toast({
    title,
    description,
    duration,
    variant: "default",
    className: "border-blue-200 bg-blue-50 text-blue-900",
  });
};

// Loading toast
export const showLoadingToast = ({ title = "Loading...", description, duration = 0 }: ToastOptions) => {
  return toast({
    title,
    description,
    duration, // 0 means it won't auto-dismiss
    variant: "default",
    className: "border-gray-200 bg-gray-50 text-gray-900",
  });
};

// Form submission success
export const showFormSuccessToast = (formType: string = "form") => {
  return showSuccessToast({
    title: "Message sent successfully!",
    description: `Thank you for your ${formType} submission. We'll get back to you soon.`,
  });
};

// Form submission error
export const showFormErrorToast = (error?: string) => {
  return showErrorToast({
    title: "Failed to send message",
    description: error || "There was an error submitting your form. Please try again.",
  });
};

// Network error
export const showNetworkErrorToast = () => {
  return showErrorToast({
    title: "Network Error",
    description: "Please check your internet connection and try again.",
  });
};

// Validation error
export const showValidationErrorToast = (field?: string) => {
  return showErrorToast({
    title: "Validation Error",
    description: field 
      ? `Please check the ${field} field and try again.`
      : "Please check your input and try again.",
  });
};

// Generic API error handler
export const handleApiError = (error: unknown, customMessage?: string) => {
  console.error('API Error:', error);
  
  let message = customMessage || "An unexpected error occurred.";
  
  // Type guard for error objects
  if (error && typeof error === 'object') {
    // Check for Axios-style error response
    if ('response' in error && error.response && typeof error.response === 'object' && 
        'data' in error.response && error.response.data && typeof error.response.data === 'object' &&
        'message' in error.response.data && typeof error.response.data.message === 'string') {
      message = error.response.data.message;
    }
    // Check for standard Error object
    else if ('message' in error && typeof error.message === 'string') {
      message = error.message;
    }
  }
  
  return showErrorToast({
    title: "Error",
    description: message,
  });
}; 