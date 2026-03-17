// components/Contact.tsx
'use client';

import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { contactSchema, ContactFormData } from '@/lib/validations';
import { contactInfo } from '../data';

const Contact = () => {
  const { register, handleSubmit, control, formState: { errors, isSubmitting }, reset, setFocus } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const watchMessage = useWatch({ control, name: 'message' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.status === 429) {
        setStatus('error');
        setMessage('Too many attempts. Please try again in an hour.');
      } else if (!response.ok) {
        setStatus('error');
        setMessage(result.error || 'Failed to send message.');
      } else {
        setStatus('success');
        setMessage("Message sent! I'll reply within 24 hours.");
        reset();
      }
    } catch (error) {
      setStatus('error');
      setMessage('An error occurred. Please try again.');
    }
  };

  const onError = () => {
    const firstError = Object.keys(errors)[0] as keyof ContactFormData;
    if (firstError) setFocus(firstError);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-900 mb-4">{contactInfo.title}</h2>
          <p className="dark:text-gray-400 text-gray-600 max-w-2xl mx-auto mb-4">{contactInfo.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold dark:text-white text-gray-900 mb-8">Get in Touch</h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="dark:text-gray-400 text-gray-600 text-sm">Email</p>
                  <p className="dark:text-white text-gray-900">{contactInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="dark:text-gray-400 text-gray-600 text-sm">Phone</p>
                  <p className="dark:text-white text-gray-900">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="dark:text-gray-400 text-gray-600 text-sm">Location</p>
                  <p className="dark:text-white text-gray-900">{contactInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="dark:text-gray-400 text-gray-600 mb-4">Follow me on social media</p>
              <div className="flex space-x-4">
                {/* Social links would go here */}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="dark:bg-gray-800/50 bg-gray-100/50 rounded-2xl p-8 dark:border-gray-700/50 border border-gray-300/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  autoComplete="name"
                  maxLength={50}
                  className="w-full px-4 py-3 dark:bg-gray-700/50 bg-gray-100/50 dark:border-gray-600 border border-gray-400 rounded-lg dark:text-white text-gray-900 dark:placeholder-gray-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your name"
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <p id="name-error" className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  autoComplete="email"
                  maxLength={100}
                  className="w-full px-4 py-3 dark:bg-gray-700/50 bg-gray-100/50 dark:border-gray-600 border border-gray-400 rounded-lg dark:text-white text-gray-900 dark:placeholder-gray-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="your@email.com"
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <p id="email-error" className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  maxLength={1000}
                  className="w-full px-4 py-3 dark:bg-gray-700/50 bg-gray-100/50 dark:border-gray-600 border border-gray-400 rounded-lg dark:text-white text-gray-900 dark:placeholder-gray-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  placeholder="Your message..."
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                <div className="flex justify-between mt-1">
                  {errors.message && <p id="message-error" className="text-sm text-red-400">{errors.message.message}</p>}
                  <span className="text-sm dark:text-gray-400 text-gray-600">{watchMessage?.length || 0} / 1000</span>
                </div>
              </div>

              {/* Honeypot */}
              <div className="absolute left-[-9999px] top-[-9999px] opacity-0 pointer-events-none">
                <input {...register('website')} type="text" tabIndex={-1} />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 focus:ring-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {status !== 'idle' && (
                <div aria-live="polite" className={`text-center ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;