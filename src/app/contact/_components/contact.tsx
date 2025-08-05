"use client"
import Container from "@/components/ui/container";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  Users,
  Award,
  Shield
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6 text-green-600" />,
    title: "Phone Support",
    details: [
      { label: "Sales", value: "+91 98765 43210" },
      { label: "Technical Support", value: "+91 98765 43211" },
      { label: "Emergency", value: "+91 98765 43212" }
    ],
    description: "Available 24/7 for urgent support"
  },
  {
    icon: <Mail className="w-6 h-6 text-green-600" />,
    title: "Email Support",
    details: [
      { label: "General Inquiries", value: "info@agrivitals.com" },
      { label: "Sales", value: "sales@agrivitals.com" },
      { label: "Support", value: "support@agrivitals.com" }
    ],
    description: "Response within 2-4 hours"
  },
  {
    icon: <MapPin className="w-6 h-6 text-green-600" />,
    title: "Office Locations",
    details: [
      { label: "Head Office", value: "Mumbai, Maharashtra" },
      { label: "Branch Office", value: "Delhi, NCR" },
      { label: "Service Center", value: "Bangalore, Karnataka" }
    ],
    description: "Visit us for demonstrations"
  }
];

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed (Emergency Support Available)" }
];

const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com/agrivitals",
    icon: <Facebook className="w-5 h-5" />,
    color: "hover:bg-blue-600"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/agrivitals",
    icon: <Twitter className="w-5 h-5" />,
    color: "hover:bg-blue-400"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/agrivitals",
    icon: <Instagram className="w-5 h-5" />,
    color: "hover:bg-pink-600"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/agrivitals",
    icon: <Linkedin className="w-5 h-5" />,
    color: "hover:bg-blue-700"
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@agrivitals",
    icon: <Youtube className="w-5 h-5" />,
    color: "hover:bg-red-600"
  }
];

const serviceAreas = [
  "Maharashtra", "Delhi NCR", "Karnataka", "Tamil Nadu", 
  "Gujarat", "Punjab", "Haryana", "Rajasthan",
  "Uttar Pradesh", "Madhya Pradesh", "Andhra Pradesh", "Telangana"
];

const responseTimes = [
  {
    type: "Sales Inquiries",
    time: "2-4 hours",
    icon: <Users className="w-5 h-5 text-green-600" />
  },
  {
    type: "Technical Support",
    time: "1-2 hours",
    icon: <Shield className="w-5 h-5 text-blue-600" />
  },
  {
    type: "Emergency Issues",
    time: "30 minutes",
    icon: <Award className="w-5 h-5 text-red-600" />
  },
  {
    type: "Installation Requests",
    time: "24 hours",
    icon: <CheckCircle className="w-5 h-5 text-purple-600" />
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <Container>
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get in <span className="text-green-600 dark:text-green-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to revolutionize your farming? Our team is here to help you get started 
            with solar drying technology. Contact us today!
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                {info.icon}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {info.title}
                </h3>
              </div>
              <div className="space-y-3">
                {info.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {detail.label}:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-green-600 dark:text-green-400 mt-4 font-medium">
                {info.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h2>
            
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800 dark:text-green-200 font-medium">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company/Farm Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Enter company/farm name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select a subject</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="installation">Installation Request</option>
                  <option value="maintenance">Maintenance Service</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Details & Map */}
          <div className="space-y-8">
            {/* Office Hours */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Office Hours
                </h3>
              </div>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">
                      {schedule.day}
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time Commitments */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Response Time Commitments
              </h3>
              <div className="space-y-4">
                {responseTimes.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {item.icon}
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {item.type}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Response within {item.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Follow Us
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-600 transition-all duration-200 ${social.color} hover:text-white`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Service Areas
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Our Service Coverage
          </h2>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Interactive Map Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              We're working on an interactive map to show our service areas and office locations. 
              For now, please contact us to confirm availability in your area.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait to transform your farming operations. Contact us today for a free consultation 
            and demonstration of our solar drying technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now
            </button>
            <button className="px-8 py-3 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Schedule Demo
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
} 