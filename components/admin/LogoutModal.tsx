'use client';

import { LogOut, X, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmLogout: () => void;
}

export default function LogoutModal({ isOpen, onClose, onConfirmLogout }: LogoutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
      <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl max-w-sm w-full p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF7F2] rounded-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-full bg-[#F7ECE9] border border-[#E8DFC8] flex items-center justify-center text-[#9E5A63] mb-4">
          <LogOut className="w-6 h-6" />
        </div>

        <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917]">
          Sign Out of Admin?
        </h3>
        <p className="text-xs text-[#78716C] mt-1.5 leading-relaxed">
          Are you sure you want to end your current session? You will be redirected back to the EDAMONEGLINT customer storefront.
        </p>

        <div className="mt-6 flex items-center justify-end gap-2.5">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#FAF7F2] text-[#44403C] border border-[#E8DFC8] rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#F3ECE2] transition-colors cursor-pointer"
          >
            Stay Logged In
          </button>
          <button
            onClick={onConfirmLogout}
            className="px-4 py-2 bg-[#6B2A35] text-[#FAF7F2] rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#1C1917] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Log Out</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
