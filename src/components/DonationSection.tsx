/**
 * DonationSection Component
 * 
 * As your CTO mentor: This component demonstrates how to handle long text (wallet addresses)
 * that need to be scrollable. The key pattern:
 * 1. Use overflow-x-auto for horizontal scrolling on mobile
 * 2. text-ellipsis as a fallback
 * 3. Copy functionality for better UX
 * 4. Consistent styling with rounded-xl shadow-md bg-white p-6
 */

'use client';

import React, { useState } from 'react';
import { Copy, Wallet } from 'lucide-react';
import ImpactSectionWithData from './ImpactSectionWithData';

interface DonationSectionProps {
  region: 'cr' | 'us';
  title: string;
  description: string;
  wallet: string;
  className?: string;
}

export default function DonationSection({
  region,
  title,
  description,
  wallet,
  className = '',
}: DonationSectionProps) {
  const [copied, setCopied] = useState(false);

  const copyWalletAddress = () => {
    navigator.clipboard.writeText(wallet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ImpactSectionWithData
      region={region}
      title={title}
      description={description}
      wallet={wallet}
    />
  );
}

// Also export a simpler wallet display component if needed
export function WalletDisplay({ wallet }: { wallet: string }) {
  const [copied, setCopied] = useState(false);

  const copyWalletAddress = () => {
    navigator.clipboard.writeText(wallet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <Wallet className="w-5 h-5 text-[#2DB6A3]" />
        <h4 className="text-lg font-medium text-[#0F2A3F]">Donation Wallet</h4>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <div className="flex items-center gap-2">
          <code className="flex-1 text-sm font-mono break-all overflow-x-auto text-ellipsis">
            {wallet}
          </code>
          <button
            onClick={copyWalletAddress}
            className="flex-shrink-0 px-3 py-2 bg-[#2DB6A3] hover:bg-[#2DB6A3]/90 text-white rounded-lg transition-all duration-200 flex items-center gap-2"
            aria-label="Copy wallet address"
          >
            <Copy className="w-4 h-4" />
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
}

