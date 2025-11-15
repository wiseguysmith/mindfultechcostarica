'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Copy, 
  Building2, 
  Globe, 
  Wallet, 
  Mail,
  Send,
  AlertCircle
} from 'lucide-react';

interface Organization {
  id: string;
  name: string;
  country: string;
  verified: boolean;
  wallet_address: string;
}

interface ImpactSectionProps {
  region: 'cr' | 'us';
  title: string;
  description: string;
  wallet: string;
  orgs: Organization[];
}

export default function ImpactSection({
  region,
  title,
  description,
  wallet,
  orgs,
}: ImpactSectionProps) {
  const [formData, setFormData] = useState({
    org_name: '',
    country: '',
    contact_email: '',
    wallet_address: '',
    mission: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedWallet, setCopiedWallet] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          region,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          org_name: '',
          country: '',
          contact_email: '',
          wallet_address: '',
          mission: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyWalletAddress = () => {
    navigator.clipboard.writeText(wallet);
    setCopiedWallet(true);
    setTimeout(() => setCopiedWallet(false), 2000);
  };

  const copyOrgWallet = (address: string) => {
    navigator.clipboard.writeText(address);
    // Could add toast notification here
  };

  const formatWalletAddress = (address: string) => {
    if (address.length <= 12) return address;
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <section className="impact-section py-20 md:py-24 bg-gradient-to-br from-[#F4EDE2] via-white to-[#F4EDE2]/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-[#0F2A3F] mb-4"
          >
            {title}
          </motion.h2>
          <p className="text-lg text-[#2B2B2B] max-w-2xl mx-auto text-center leading-relaxed" style={{ whiteSpace: 'normal', wordBreak: 'normal', display: 'block' }}>
            {description}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Left Column: Organizations List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 w-full"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                <Building2 className="w-6 h-6 text-[#2DB6A3]" />
                <h3 className="text-xl font-medium text-[#0F2A3F]">
                  Partner Organizations
                </h3>
              </div>

              <div className="space-y-4">
                {orgs.length > 0 ? (
                  orgs.map((org, index) => (
                    <motion.div
                      key={org.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#F4EDE2]/30 to-white border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="flex-shrink-0">
                          {org.verified ? (
                            <CheckCircle2 className="w-6 h-6 text-[#2DB6A3]" />
                          ) : (
                            <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-[#0F2A3F]">
                              {org.name}
                            </h4>
                            {org.verified && (
                              <span className="px-2 py-0.5 text-xs font-medium bg-[#2DB6A3]/10 text-[#2DB6A3] rounded-full">
                                Verified
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[#2B2B2B] mt-1">
                            <Globe className="w-4 h-4" />
                            <span>{org.country}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <Wallet className="w-4 h-4 text-[#2B2B2B]/60" />
                            <code className="text-xs text-[#2B2B2B]/70 font-mono bg-gray-100 px-2 py-1 rounded">
                              {formatWalletAddress(org.wallet_address)}
                            </code>
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(org.wallet_address);
                              }}
                              className="text-[#2DB6A3] hover:text-[#2DB6A3]/80 transition-colors"
                              title="Copy wallet address"
                            >
                              <Copy className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-8 text-[#2B2B2B]">
                    <p style={{ whiteSpace: 'normal', wordBreak: 'normal', display: 'block' }}>No organizations listed yet.</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Donation Info & Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full space-y-6"
          >
            {/* Donation Wallet Box */}
            <div className="bg-gradient-to-br from-[#2DB6A3] to-[#2DB6A3]/90 rounded-2xl shadow-lg p-6 md:p-8 text-white hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Wallet className="w-6 h-6" />
                <h3 className="text-xl font-medium">Donation Wallet</h3>
              </div>
              <p className="text-sm text-white/90 mb-4 text-center md:text-left" style={{ whiteSpace: 'normal', wordBreak: 'normal', display: 'block' }}>
                Send donations directly to verified organizations
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <code className="text-sm font-mono break-all block mb-3 text-center md:text-left">
                  {wallet}
                </code>
                <button
                  onClick={copyWalletAddress}
                  className="w-full flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <motion.div
                    animate={copiedWallet ? { scale: [1, 1.2, 1], rotate: [0, 180, 360] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <Copy className="w-4 h-4" />
                  </motion.div>
                  {copiedWallet ? 'Copied!' : 'Copy Address'}
                </button>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-5 h-5 text-[#E4572E]" />
                <h3 className="text-xl font-medium text-[#0F2A3F]">
                  Apply for Partnership
                </h3>
              </div>
              <p className="text-sm text-[#2B2B2B] mb-6 text-center md:text-left" style={{ whiteSpace: 'normal', wordBreak: 'normal', display: 'block' }}>
                NGOs and non-profits can apply to receive donations through our platform.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#0F2A3F] mb-1">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    name="org_name"
                    required
                    value={formData.org_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2DB6A3] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0F2A3F] mb-1">
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2DB6A3] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0F2A3F] mb-1">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    name="contact_email"
                    required
                    value={formData.contact_email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2DB6A3] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0F2A3F] mb-1">
                    Wallet Address *
                  </label>
                  <input
                    type="text"
                    name="wallet_address"
                    required
                    value={formData.wallet_address}
                    onChange={handleInputChange}
                    placeholder="0x..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2DB6A3] focus:border-transparent font-mono text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0F2A3F] mb-1">
                    Mission Statement *
                  </label>
                  <textarea
                    name="mission"
                    required
                    value={formData.mission}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2DB6A3] focus:border-transparent resize-none"
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-3 rounded-lg"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Application submitted successfully! We&apos;ll review and get back to you.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-lg"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>Error submitting application. Please try again.</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#E4572E] hover:bg-[#E4572E]/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Application
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

