"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Title } from "../atoms/Title";
import { BodyText } from "../atoms/BodyText";
import { Button } from "../atoms/Button";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import validator from "validator";

export type EnquiryType =
  | "initial-consultation"
  | "therapy-sessions"
  | "phobia-package"
  | "stop-smoking"
  | "general";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  enquiryType: EnquiryType;
  message: string;
}

export const ContactForm = () => {
  const searchParams = useSearchParams();
  const urlEnquiryType = searchParams.get("type") as EnquiryType | null;
  const initialEnquiryType =
    urlEnquiryType &&
    [
      "initial-consultation",
      "therapy-sessions",
      "phobia-package",
      "stop-smoking",
      "general",
    ].includes(urlEnquiryType)
      ? urlEnquiryType
      : "general";

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    enquiryType: initialEnquiryType,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [captchaToken, setCaptchaToken] = useState<string>("");
  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});

  const validateField = (field: keyof FormData, value: string) => {
    const errors: Partial<Record<keyof FormData, string>> = {};

    switch (field) {
      case "firstName":
        if (value.length < 2) {
          errors[field] = "First name must be at least 2 characters";
        }
        break;
      case "lastName":
        if (value.length < 2) {
          errors[field] = "Last name must be at least 2 characters";
        }
        break;
      case "email":
        if (!validator.isEmail(value)) {
          errors[field] = "Please enter a valid email address";
        }
        break;
      case "phone":
        if (value && !validator.isMobilePhone(value, "any")) {
          errors[field] = "Please enter a valid international phone number";
        }
        break;
      case "message":
        if (value.length < 10) {
          errors[field] = "Message must be at least 10 characters";
        } else if (value.length > 1000) {
          errors[field] = "Message must not exceed 1000 characters";
        } else if (validator.isEmpty(value.trim())) {
          errors[field] = "Message cannot be empty or only whitespace";
        }
        break;
    }

    setFormErrors((prev) => ({ ...prev, [field]: errors[field] }));
    return !errors[field];
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string,
    immediate = false
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (immediate || formErrors[field]) {
      validateField(field, value);
    }
  };

  const validateForm = (): boolean => {
    const allErrors: Partial<Record<keyof FormData, string>> = {};
    let isValid = true;

    Object.entries(formData).forEach(([field, value]) => {
      if (field === "phone" && !value) return; // Skip optional phone validation if empty
      if (!validateField(field as keyof FormData, value)) {
        isValid = false;
      }
    });

    if (!captchaToken) {
      allErrors.message = "Please complete the captcha verification";
      isValid = false;
    }

    setFormErrors(allErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });
    // Clear any existing form errors before submission
    setFormErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle validation errors from backend
        if (response.status === 400 && data.error) {
          // Map backend error messages to form fields
          if (data.error.includes("email")) {
            setFormErrors((prev) => ({ ...prev, email: data.error }));
          } else if (data.error.includes("phone")) {
            setFormErrors((prev) => ({ ...prev, phone: data.error }));
          } else if (data.error.includes("message")) {
            setFormErrors((prev) => ({ ...prev, message: data.error }));
          } else if (data.error.includes("captcha")) {
            setFormErrors((prev) => ({ ...prev, message: data.error }));
            setCaptchaToken("");
          } else {
            // If we can't map the error to a specific field, show it in the submit status
            throw new Error(data.error);
          }
          return;
        }
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you for your message. I will get back to you soon.",
      });

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        enquiryType: initialEnquiryType,
        message: "",
      });
      setCaptchaToken("");
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Sorry, there was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles =
    "block w-full rounded-md border-mint-200 shadow-sm focus:border-mint-300 focus:ring-mint-300 text-cream-50 bg-forest-600/30 font-main placeholder-sage-200 text-lg px-4";
  const labelStyles = "block font-secondary text-cream-50 text-lg";
  const helperTextStyles = "ml-2 text-mint-300";
  const errorStyles = "mt-1 text-red-300 text-sm font-main";

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-sage-900/80 backdrop-blur-sm rounded-2xl shadow-xl my-8">
      <div className="text-center mb-2">
        <Title size="3xl" colour="cream" weight="bold">
          Get in Touch
        </Title>
        <BodyText size="lg" colour="cream">
          Please fill in the form below and I will get back to you as soon as
          possible.
        </BodyText>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 mt-3">
        {submitStatus.type && (
          <div
            className={`p-4 rounded-md ${
              submitStatus.type === "success"
                ? "bg-green-100/90 text-green-800"
                : "bg-red-100/90 text-red-800"
            }`}
          >
            {submitStatus.message}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className={labelStyles}>
              First Name <span className={helperTextStyles}>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              required
              placeholder="Your first name"
              className={`${inputStyles} mt-2 py-3 ${
                formErrors.firstName ? "border-red-400" : ""
              }`}
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              onBlur={(e) => validateField("firstName", e.target.value)}
            />
            {formErrors.firstName && (
              <p className={errorStyles}>{formErrors.firstName}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className={labelStyles}>
              Last Name <span className={helperTextStyles}>*</span>
            </label>
            <input
              type="text"
              id="lastName"
              required
              placeholder="Your last name"
              className={`${inputStyles} mt-2 py-3 ${
                formErrors.lastName ? "border-red-400" : ""
              }`}
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              onBlur={(e) => validateField("lastName", e.target.value)}
            />
            {formErrors.lastName && (
              <p className={errorStyles}>{formErrors.lastName}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className={labelStyles}>
              Email <span className={helperTextStyles}>*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="your.email@example.com"
              className={`${inputStyles} mt-2 py-3 ${
                formErrors.email ? "border-red-400" : ""
              }`}
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              onBlur={(e) => validateField("email", e.target.value)}
            />
            {formErrors.email && (
              <p className={errorStyles}>{formErrors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className={labelStyles}>
              Phone <span className="ml-2 text-mint-100">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Your phone number"
              className={`${inputStyles} mt-2 py-3 ${
                formErrors.phone ? "border-red-400" : ""
              }`}
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              onBlur={(e) => validateField("phone", e.target.value)}
            />
            {formErrors.phone && (
              <p className={errorStyles}>{formErrors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="enquiryType" className={labelStyles}>
            Type of Enquiry <span className={helperTextStyles}>*</span>
          </label>
          <select
            id="enquiryType"
            required
            className={`${inputStyles} mt-2 py-3`}
            value={formData.enquiryType}
            onChange={(e) =>
              setFormData({
                ...formData,
                enquiryType: e.target.value as EnquiryType,
              })
            }
          >
            <option
              className="bg-forest-700 text-cream-50"
              value="initial-consultation"
            >
              Initial Consultation
            </option>
            <option
              className="bg-forest-700 text-cream-50"
              value="therapy-sessions"
            >
              Therapy Sessions
            </option>
            <option
              className="bg-forest-700 text-cream-50"
              value="phobia-package"
            >
              Phobia Package
            </option>
            <option
              className="bg-forest-700 text-cream-50"
              value="stop-smoking"
            >
              Stop Smoking Session
            </option>
            <option className="bg-forest-700 text-cream-50" value="general">
              General Enquiry
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelStyles}>
            Message <span className={helperTextStyles}>*</span>
          </label>
          <textarea
            id="message"
            required
            rows={4}
            maxLength={1000}
            placeholder="Please tell me a bit about what you'd like help with..."
            className={`${inputStyles} mt-2 ${
              formErrors.message ? "border-red-400" : ""
            }`}
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            onBlur={(e) => validateField("message", e.target.value)}
          ></textarea>
          {formErrors.message && (
            <p className={errorStyles}>{formErrors.message}</p>
          )}
        </div>

        <div className="flex flex-col items-center gap-2">
          <HCaptcha
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || ""}
            onVerify={(token) => {
              // Only log in development
              if (process.env.NODE_ENV === "development") {
                console.log("hCaptcha verification successful");
              }
              setCaptchaToken(token);
              setFormErrors((prev) => ({ ...prev, message: undefined }));
            }}
            onError={() => {
              // Log error without sensitive details
              if (process.env.NODE_ENV === "development") {
                console.error("hCaptcha verification failed");
              }
              setFormErrors((prev) => ({
                ...prev,
                message: "Captcha verification failed. Please try again.",
              }));
              setCaptchaToken("");
            }}
            onExpire={() => {
              if (process.env.NODE_ENV === "development") {
                console.log("hCaptcha token expired");
              }
              setCaptchaToken("");
              setFormErrors((prev) => ({
                ...prev,
                message: "Captcha expired. Please verify again.",
              }));
            }}
            onOpen={() => {
              if (process.env.NODE_ENV === "development") {
                console.log("hCaptcha challenge opened");
              }
            }}
            onClose={() => {
              if (process.env.NODE_ENV === "development") {
                console.log("hCaptcha challenge closed");
              }
            }}
            theme="light"
            size="normal"
            reCaptchaCompat={false}
          />
          {!captchaToken && formErrors.message?.includes("captcha") && (
            <p className={errorStyles}>
              Please complete the captcha verification
            </p>
          )}
        </div>

        <div className="flex justify-center pt-4">
          <Button
            type="submit"
            variant="primary"
            size="medium"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  );
};
