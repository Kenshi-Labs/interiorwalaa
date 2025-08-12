'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';

const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

interface NewsletterSectionProps {
  // Content props (dynamic)
  title: string;
  subtitle?: string;
  placeholder?: string;
  submitText?: string;
  loadingText?: string;
  loadingTextMobile?: string;
  successMessage?: string;
  errorMessage?: string;
  invalidEmailMessage?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  // Content defaults
  title,
  subtitle,
  placeholder = "Email ID",
  submitText = "Submit",
  loadingText = "Submitting...",
  loadingTextMobile = "...",
  successMessage = "Thanks for subscribing! Check your inbox for confirmation.",
  errorMessage = "Something went wrong. Please try again.",
  invalidEmailMessage = "Please enter a valid email address",
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(STATUS.IDLE);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus(STATUS.ERROR);
      setMessage(invalidEmailMessage);
      return;
    }
    setStatus(STATUS.LOADING);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus(STATUS.SUCCESS);
      setMessage(successMessage);
      setEmail('');
    } catch {
      setStatus(STATUS.ERROR);
      setMessage(errorMessage);
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-10 overflow-hidden bg-[var(--secondary-brown)]">
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/60 rounded-full blur-lg" />
      </div>
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-12 xl:gap-16 items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-tight font-['WorkSans']">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg sm:text-xl text-white/90 mb-6 font-manrope">
                {subtitle}
              </p>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl">
              <form onSubmit={handleSubmit} className="mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 md:gap-3">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 sm:py-3.5 md:py-4 bg-white/40 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent placeholder-white text-white shadow-sm transition-all duration-200 text-sm sm:text-base md:text-base font-manrope min-h-[48px]"
                      style={{ backdropFilter: 'blur(15px)' }}
                      disabled={status === STATUS.LOADING}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    disabled={status === STATUS.LOADING}
                    className="px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base md:text-base min-w-[120px] sm:min-w-[140px] md:min-w-[150px] min-h-[48px] cursor-pointer"
                  >
                    {status === STATUS.LOADING ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span className="hidden sm:inline">{loadingText}</span>
                        <span className="sm:hidden">{loadingTextMobile}</span>
                      </>
                    ) : (
                      <span>{submitText}</span>
                    )}
                  </motion.button>
                </div>
              </form>
              {status !== STATUS.IDLE && (
                <div
                  className={`mt-2 flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm md:text-base ${status === STATUS.SUCCESS ? 'text-green-200' : 'text-red-200'}`}
                >
                  {status === STATUS.SUCCESS ? (
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  )}
                  <span className="text-center sm:text-left">{message}</span>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;