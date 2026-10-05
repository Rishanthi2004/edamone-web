'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Save,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Plus,
  Trash2,
  Mail,
} from 'lucide-react';
import { ContactContent } from '@/data/websiteContent';

interface ContactContentEditorProps {
  initialContent: ContactContent;
  onSave: (updated: ContactContent) => void;
  onBack: () => void;
}

export default function ContactContentEditor({
  initialContent,
  onSave,
  onBack,
}: ContactContentEditorProps) {
  const [content, setContent] = useState<ContactContent>(initialContent);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(content);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleCancel = () => {
    setContent(initialContent);
    onBack();
  };

  const handleAddFaq = () => {
    setContent({
      ...content,
      faqs: {
        ...content.faqs,
        items: [
          ...content.faqs.items,
          { question: 'New Question Title', answer: 'Answer explanation here.' },
        ],
      },
    });
  };

  const handleDeleteFaq = (index: number) => {
    const updated = content.faqs.items.filter((_, i) => i !== index);
    setContent({
      ...content,
      faqs: { ...content.faqs, items: updated },
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-4 sm:p-5 shadow-xs">
        <div className="flex items-start sm:items-center gap-3 min-w-0">
          <button
            onClick={onBack}
            className="p-2 bg-[#FAF7F2] hover:bg-[#F3ECE2] border border-[#E8DFC8] rounded-lg text-[#1C1917] transition-colors cursor-pointer shrink-0 mt-0.5 sm:mt-0"
            title="Back to All Pages"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-widest bg-[#F3ECE2] text-[#6B2A35] rounded border border-[#E8DFC8] shrink-0">
                Page Editor
              </span>
              <span className="text-xs text-[#78716C] truncate">Route: /contact</span>
            </div>
            <h2 className="font-serif-luxury text-xl sm:text-2xl lg:text-3xl font-bold text-[#1C1917] mt-0.5 break-words">
              Edit Contact & Enquiry Page Content
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-2.5 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-[#E8DFC8]/60">
          <Link
            href="/contact"
            target="_blank"
            className="col-span-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#FAF7F2] hover:bg-[#F3ECE2] border border-[#E8DFC8] rounded-md text-xs font-semibold text-[#1C1917] transition-colors text-center"
          >
            <span>Preview Live</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#78716C]" />
          </Link>
          <button
            type="button"
            onClick={handleCancel}
            className="col-span-1 px-4 py-2 bg-[#FAF7F2] hover:bg-[#F3ECE2] text-[#44403C] border border-[#E8DFC8] rounded-md text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer text-center"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="col-span-2 sm:col-span-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 sm:py-2 bg-[#1C1917] hover:bg-[#6B2A35] text-[#FAF7F2] rounded-md text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs cursor-pointer text-center"
          >
            <Save className="w-4 h-4 text-[#C5A880]" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>

      {savedSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-xl text-xs font-semibold flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Contact page content and FAQs saved successfully! Changes are live on the user website.</span>
          </div>
          <Link
            href="/contact"
            target="_blank"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-md text-[11px] font-semibold transition-colors shrink-0"
          >
            <span>View Live Contact Page →</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 text-xs">
        {/* Section 1: Page Header */}
        <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8DFC8]">
            <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917]">
              1. Contact Editorial Header
            </h3>
            <span className="text-[10px] text-[#78716C] uppercase font-mono">Page Intro</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">Header Badge</label>
              <input
                type="text"
                value={content.header.badge}
                onChange={(e) =>
                  setContent({
                    ...content,
                    header: { ...content.header, badge: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
              />
            </div>
            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">Page Title</label>
              <input
                type="text"
                value={content.header.title}
                onChange={(e) =>
                  setContent({
                    ...content,
                    header: { ...content.header, title: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#1C1917] mb-1">Subtitle Description</label>
            <textarea
              rows={2}
              value={content.header.subtitle}
              onChange={(e) =>
                setContent({
                  ...content,
                  header: { ...content.header, subtitle: e.target.value },
                })
              }
              className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
            />
          </div>
        </div>

        {/* Section 2: Wholesale Channels */}
        <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8DFC8]">
            <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917]">
              2. Wholesale Direct Channels
            </h3>
            <span className="text-[10px] text-[#78716C] uppercase font-mono">Channels</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* WhatsApp Card */}
            <div className="p-4 bg-[#FAF7F2] border border-[#E8DFC8] rounded-lg space-y-2">
              <span className="font-bold text-[#1C1917] block">WhatsApp Channel Card</span>
              <div>
                <label className="block text-[#78716C] mb-0.5">Card Title</label>
                <input
                  type="text"
                  value={content.channels.whatsappCard.title}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      channels: {
                        ...content.channels,
                        whatsappCard: {
                          ...content.channels.whatsappCard,
                          title: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full px-2 py-1 bg-[#FFFFFF] border border-[#E8DFC8] rounded text-[#1C1917]"
                />
              </div>
              <div>
                <label className="block text-[#78716C] mb-0.5">Description</label>
                <textarea
                  rows={2}
                  value={content.channels.whatsappCard.description}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      channels: {
                        ...content.channels,
                        whatsappCard: {
                          ...content.channels.whatsappCard,
                          description: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full px-2 py-1 bg-[#FFFFFF] border border-[#E8DFC8] rounded text-[#1C1917]"
                />
              </div>
              <div>
                <label className="block text-[#78716C] mb-0.5">Button Text</label>
                <input
                  type="text"
                  value={content.channels.whatsappCard.buttonText}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      channels: {
                        ...content.channels,
                        whatsappCard: {
                          ...content.channels.whatsappCard,
                          buttonText: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full px-2 py-1 bg-[#FFFFFF] border border-[#E8DFC8] rounded text-[#1C1917]"
                />
              </div>
            </div>

            {/* Instagram Card */}
            <div className="p-4 bg-[#FAF7F2] border border-[#E8DFC8] rounded-lg space-y-2">
              <span className="font-bold text-[#1C1917] block">Instagram Channel Card</span>
              <div>
                <label className="block text-[#78716C] mb-0.5">Card Title</label>
                <input
                  type="text"
                  value={content.channels.instagramCard.title}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      channels: {
                        ...content.channels,
                        instagramCard: {
                          ...content.channels.instagramCard,
                          title: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full px-2 py-1 bg-[#FFFFFF] border border-[#E8DFC8] rounded text-[#1C1917]"
                />
              </div>
              <div>
                <label className="block text-[#78716C] mb-0.5">Description</label>
                <textarea
                  rows={2}
                  value={content.channels.instagramCard.description}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      channels: {
                        ...content.channels,
                        instagramCard: {
                          ...content.channels.instagramCard,
                          description: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full px-2 py-1 bg-[#FFFFFF] border border-[#E8DFC8] rounded text-[#1C1917]"
                />
              </div>
              <div>
                <label className="block text-[#78716C] mb-0.5">Button Text</label>
                <input
                  type="text"
                  value={content.channels.instagramCard.buttonText}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      channels: {
                        ...content.channels,
                        instagramCard: {
                          ...content.channels.instagramCard,
                          buttonText: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full px-2 py-1 bg-[#FFFFFF] border border-[#E8DFC8] rounded text-[#1C1917]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Frequently Asked Questions */}
        <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8DFC8]">
            <div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917]">
                3. Wholesale FAQs
              </h3>
              <p className="text-xs text-[#78716C]">Questions & answers shown on contact page</p>
            </div>
            <button
              type="button"
              onClick={handleAddFaq}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF7F2] hover:bg-[#F3ECE2] border border-[#E8DFC8] rounded text-xs font-semibold text-[#6B2A35] transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add FAQ Item</span>
            </button>
          </div>

          <div className="space-y-3">
            {content.faqs.items.map((faq, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-[#FAF7F2] border border-[#E8DFC8] rounded-lg space-y-2 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#6B2A35]">
                    FAQ #{idx + 1}
                  </span>
                  {content.faqs.items.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleDeleteFaq(idx)}
                      className="p-1 text-[#9E5A63] hover:text-[#6B2A35] hover:bg-[#F7ECE9] rounded transition-colors"
                      title="Delete Question"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div>
                  <label className="block text-[#78716C] mb-0.5">Question</label>
                  <input
                    type="text"
                    value={faq.question}
                    onChange={(e) => {
                      const updated = content.faqs.items.map((item, i) =>
                        i === idx ? { ...item, question: e.target.value } : item
                      );
                      setContent({
                        ...content,
                        faqs: { ...content.faqs, items: updated },
                      });
                    }}
                    className="w-full px-2 py-1 bg-[#FFFFFF] border border-[#E8DFC8] rounded text-[#1C1917]"
                  />
                </div>

                <div>
                  <label className="block text-[#78716C] mb-0.5">Answer</label>
                  <textarea
                    rows={2}
                    value={faq.answer}
                    onChange={(e) => {
                      const updated = content.faqs.items.map((item, i) =>
                        i === idx ? { ...item, answer: e.target.value } : item
                      );
                      setContent({
                        ...content,
                        faqs: { ...content.faqs, items: updated },
                      });
                    }}
                    className="w-full px-2 py-1 bg-[#FFFFFF] border border-[#E8DFC8] rounded text-[#1C1917]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Enquiry Form Intro */}
        <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8DFC8]">
            <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917]">
              4. Enquiry Form Column Header
            </h3>
            <span className="text-[10px] text-[#78716C] uppercase font-mono">Right Form Column</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">Badge</label>
              <input
                type="text"
                value={content.enquirySection.badge}
                onChange={(e) =>
                  setContent({
                    ...content,
                    enquirySection: {
                      ...content.enquirySection,
                      badge: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
              />
            </div>
            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">Title</label>
              <input
                type="text"
                value={content.enquirySection.title}
                onChange={(e) =>
                  setContent({
                    ...content,
                    enquirySection: {
                      ...content.enquirySection,
                      title: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#1C1917] mb-1">Subtitle</label>
            <input
              type="text"
              value={content.enquirySection.subtitle}
              onChange={(e) =>
                setContent({
                  ...content,
                  enquirySection: {
                    ...content.enquirySection,
                    subtitle: e.target.value,
                  },
                })
              }
              className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3 pt-4 border-t border-[#E8DFC8]">
          <button
            type="button"
            onClick={handleCancel}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#FAF7F2] hover:bg-[#F3ECE2] text-[#44403C] border border-[#E8DFC8] rounded-md text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer text-center"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#1C1917] hover:bg-[#6B2A35] text-[#FAF7F2] rounded-md text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs cursor-pointer text-center"
          >
            <Save className="w-4 h-4 text-[#C5A880]" />
            <span>Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  );
}
