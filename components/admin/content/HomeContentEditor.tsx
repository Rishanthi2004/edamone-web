'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Save,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Layers,
  Image as ImageIcon,
  Plus,
  Trash2,
} from 'lucide-react';
import { HomeContent } from '@/data/websiteContent';
import ImageUploadField from '@/components/admin/ImageUploadField';

interface HomeContentEditorProps {
  initialContent: HomeContent;
  onSave: (updated: HomeContent) => void;
  onBack: () => void;
}

export default function HomeContentEditor({
  initialContent,
  onSave,
  onBack,
}: HomeContentEditorProps) {
  const [content, setContent] = useState<HomeContent>(initialContent);
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

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-4 sm:p-5 shadow-xs">
        <div className="flex items-start sm:items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 bg-[#FAF7F2] hover:bg-[#F3ECE2] border border-[#E8DFC8] rounded-lg text-[#1C1917] transition-colors cursor-pointer shrink-0 mt-0.5 sm:mt-0"
            title="Back to All Pages"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-widest bg-[#F3ECE2] text-[#6B2A35] rounded border border-[#E8DFC8]">
                Page Editor
              </span>
              <span className="text-xs text-[#78716C]">Route: /</span>
            </div>
            <h2 className="font-serif-luxury text-xl sm:text-2xl lg:text-3xl font-bold text-[#1C1917] mt-0.5 truncate">
              Edit Home Page Content
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-2.5 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-[#E8DFC8]/60">
          <Link
            href="/"
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
            className="col-span-2 sm:col-span-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 sm:py-2 bg-[#1C1917] hover:bg-[#6B2A35] text-[#FAF7F2] rounded-md text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
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
            <span>Home page content saved successfully! Changes are now live on the user website.</span>
          </div>
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-md text-[11px] font-semibold transition-colors shrink-0"
          >
            <span>View Live Home Page →</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 text-xs">
        {/* Section 1: Announcement Notification Bar */}
        <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8DFC8]">
            <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917]">
              1. Top Announcement Notification Bar
            </h3>
            <span className="text-[10px] text-[#78716C] uppercase font-mono">Site Header</span>
          </div>

          <div>
            <label className="block font-semibold text-[#1C1917] mb-1">
              Banner Announcement Text
            </label>
            <input
              type="text"
              value={content.announcementBar.text}
              onChange={(e) =>
                setContent({
                  ...content,
                  announcementBar: { text: e.target.value },
                })
              }
              className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
            />
          </div>
        </div>

        {/* Section 2: Hero Section */}
        <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8DFC8]">
            <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917]">
              2. Hero Section & Main Headline
            </h3>
            <span className="text-[10px] text-[#78716C] uppercase font-mono">Above The Fold</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">
                Headline Line 1
              </label>
              <input
                type="text"
                value={content.hero.headlineStart}
                onChange={(e) =>
                  setContent({
                    ...content,
                    hero: { ...content.hero, headlineStart: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">
                Italic Highlight Phrase
              </label>
              <input
                type="text"
                value={content.hero.headlineHighlight}
                onChange={(e) =>
                  setContent({
                    ...content,
                    hero: { ...content.hero, headlineHighlight: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">
                Headline Line 2 End
              </label>
              <input
                type="text"
                value={content.hero.headlineEnd}
                onChange={(e) =>
                  setContent({
                    ...content,
                    hero: { ...content.hero, headlineEnd: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#1C1917] mb-1">Supporting Copy Paragraph</label>
            <textarea
              rows={3}
              value={content.hero.supportingCopy}
              onChange={(e) =>
                setContent({
                  ...content,
                  hero: { ...content.hero, supportingCopy: e.target.value },
                })
              }
              className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-3 bg-[#FAF7F2] border border-[#E8DFC8] rounded-lg space-y-2">
              <span className="font-bold text-[#1C1917] block">Primary Button (Dark)</span>
              <div>
                <label className="block text-[#78716C] mb-0.5">Button Text</label>
                <input
                  type="text"
                  value={content.hero.primaryButtonText}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      hero: { ...content.hero, primaryButtonText: e.target.value },
                    })
                  }
                  className="w-full px-3 py-1.5 bg-[#FFFFFF] border border-[#E8DFC8] rounded text-[#1C1917]"
                />
              </div>
              <div>
                <label className="block text-[#78716C] mb-0.5">Button Destination Link</label>
                <input
                  type="text"
                  value={content.hero.primaryButtonLink}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      hero: { ...content.hero, primaryButtonLink: e.target.value },
                    })
                  }
                  className="w-full px-3 py-1.5 bg-[#FFFFFF] border border-[#E8DFC8] rounded text-[#1C1917]"
                />
              </div>
            </div>

            <div className="p-3 bg-[#FAF7F2] border border-[#E8DFC8] rounded-lg space-y-2">
              <span className="font-bold text-[#1C1917] block">Secondary Button (White Outline)</span>
              <div>
                <label className="block text-[#78716C] mb-0.5">Button Text</label>
                <input
                  type="text"
                  value={content.hero.secondaryButtonText}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      hero: { ...content.hero, secondaryButtonText: e.target.value },
                    })
                  }
                  className="w-full px-3 py-1.5 bg-[#FFFFFF] border border-[#E8DFC8] rounded text-[#1C1917]"
                />
              </div>
              <div>
                <label className="block text-[#78716C] mb-0.5">Button Destination Link</label>
                <input
                  type="text"
                  value={content.hero.secondaryButtonLink}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      hero: { ...content.hero, secondaryButtonLink: e.target.value },
                    })
                  }
                  className="w-full px-3 py-1.5 bg-[#FFFFFF] border border-[#E8DFC8] rounded text-[#1C1917]"
                />
              </div>
            </div>
          </div>

          {/* Hero Image & Floating Cards */}
          <div className="pt-2 border-t border-[#E8DFC8] space-y-4">
            <ImageUploadField
              label="Hero Main Background Image"
              description="Displays prominently on the right of the Hero section (Desktop/Tablet) and mobile intro."
              value={content.hero.heroImage}
              onChange={(newImg) =>
                setContent({
                  ...content,
                  hero: { ...content.hero, heroImage: newImg },
                })
              }
              aspectRatio="aspect-3/4"
              recommendedDimensions="Portrait (3:4) recommended"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-3 p-3.5 bg-[#FAF7F2] border border-[#E8DFC8] rounded-lg">
                <span className="font-bold text-[#1C1917] block">Hero Floating Label Tag</span>
                <div>
                  <label className="block font-semibold text-[#1C1917] mb-1">
                    Floating Tag Label
                  </label>
                  <input
                    type="text"
                    value={content.hero.floatingBadgeTitle}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        hero: { ...content.hero, floatingBadgeTitle: e.target.value },
                      })
                    }
                    className="w-full px-3 py-1.5 bg-[#FFFFFF] border border-[#E8DFC8] rounded-md text-[#1C1917]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#1C1917] mb-1">
                    Floating Tag SKU Code
                  </label>
                  <input
                    type="text"
                    value={content.hero.floatingBadgeSku}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        hero: { ...content.hero, floatingBadgeSku: e.target.value },
                      })
                    }
                    className="w-full px-3 py-1.5 bg-[#FFFFFF] border border-[#E8DFC8] rounded-md text-[#1C1917]"
                  />
                </div>
              </div>

              <div className="p-3.5 bg-[#FAF7F2] border border-[#E8DFC8] rounded-lg space-y-2">
                <span className="font-bold text-[#1C1917] block">Hero Secondary Floating Card</span>
                <ImageUploadField
                  label="Floating Card Thumbnail"
                  value={content.hero.floatingCardImage}
                  onChange={(newImg) =>
                    setContent({
                      ...content,
                      hero: { ...content.hero, floatingCardImage: newImg },
                    })
                  }
                  aspectRatio="aspect-square"
                  recommendedDimensions="Square (1:1)"
                />
              </div>
            </div>
          </div>

          {/* Micro Perks */}
          <div className="pt-2">
            <label className="block font-semibold text-[#1C1917] mb-2">3 Hero Micro Perks</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {content.hero.perks.map((perk, idx) => (
                <div key={idx} className="p-3 bg-[#FAF7F2] border border-[#E8DFC8] rounded space-y-1.5">
                  <span className="text-[10px] font-mono text-[#6B2A35] font-bold">Perk #{idx + 1}</span>
                  <input
                    type="text"
                    placeholder="Title"
                    value={perk.title}
                    onChange={(e) => {
                      const updated = content.hero.perks.map((p, i) =>
                        i === idx ? { ...p, title: e.target.value } : p
                      );
                      setContent({ ...content, hero: { ...content.hero, perks: updated } });
                    }}
                    className="w-full px-2 py-1 bg-[#FFFFFF] border border-[#E8DFC8] rounded text-[#1C1917]"
                  />
                  <input
                    type="text"
                    placeholder="Subtitle"
                    value={perk.subtitle}
                    onChange={(e) => {
                      const updated = content.hero.perks.map((p, i) =>
                        i === idx ? { ...p, subtitle: e.target.value } : p
                      );
                      setContent({ ...content, hero: { ...content.hero, perks: updated } });
                    }}
                    className="w-full px-2 py-1 bg-[#FFFFFF] border border-[#E8DFC8] rounded text-[#78716C]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Brand Philosophy Narrative */}
        <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8DFC8]">
            <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917]">
              3. Brand Philosophy & Intro Section
            </h3>
            <span className="text-[10px] text-[#78716C] uppercase font-mono">Middle Section</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">Small Top Badge</label>
              <input
                type="text"
                value={content.brandIntro.badge}
                onChange={(e) =>
                  setContent({
                    ...content,
                    brandIntro: { ...content.brandIntro, badge: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
              />
            </div>
            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">Section Headline</label>
              <input
                type="text"
                value={content.brandIntro.headline}
                onChange={(e) =>
                  setContent({
                    ...content,
                    brandIntro: { ...content.brandIntro, headline: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
              />
            </div>
            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">Highlighted Subtitle</label>
              <input
                type="text"
                value={content.brandIntro.headlineHighlight}
                onChange={(e) =>
                  setContent({
                    ...content,
                    brandIntro: { ...content.brandIntro, headlineHighlight: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#1C1917] mb-1">Lead Introductory Sentence</label>
            <input
              type="text"
              value={content.brandIntro.leadCopy}
              onChange={(e) =>
                setContent({
                  ...content,
                  brandIntro: { ...content.brandIntro, leadCopy: e.target.value },
                })
              }
              className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#1C1917] mb-1">Full Philosophy Narrative</label>
            <textarea
              rows={4}
              value={content.brandIntro.bodyCopy}
              onChange={(e) =>
                setContent({
                  ...content,
                  brandIntro: { ...content.brandIntro, bodyCopy: e.target.value },
                })
              }
              className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">Button Text</label>
              <input
                type="text"
                value={content.brandIntro.buttonText}
                onChange={(e) =>
                  setContent({
                    ...content,
                    brandIntro: { ...content.brandIntro, buttonText: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
              />
            </div>
            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">Button Link</label>
              <input
                type="text"
                value={content.brandIntro.buttonLink}
                onChange={(e) =>
                  setContent({
                    ...content,
                    brandIntro: { ...content.brandIntro, buttonLink: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
              />
            </div>
          </div>

          <div className="pt-2 border-t border-[#E8DFC8]">
            <ImageUploadField
              label="Brand Philosophy Story Image"
              description="Displays alongside the brand introduction narrative on the homepage."
              value={content.brandIntro.image}
              onChange={(newImg) =>
                setContent({
                  ...content,
                  brandIntro: { ...content.brandIntro, image: newImg },
                })
              }
              aspectRatio="aspect-4/5"
              recommendedDimensions="Portrait (4:5) recommended"
            />
          </div>
        </div>

        {/* Section 4: Bottom Wholesale CTA Banner */}
        <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8DFC8]">
            <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917]">
              4. Bottom Wholesale Partnership CTA
            </h3>
            <span className="text-[10px] text-[#78716C] uppercase font-mono">Footer CTA</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">Headline</label>
              <input
                type="text"
                value={content.wholesaleCta.headline}
                onChange={(e) =>
                  setContent({
                    ...content,
                    wholesaleCta: { ...content.wholesaleCta, headline: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
              />
            </div>
            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">Subheadline</label>
              <input
                type="text"
                value={content.wholesaleCta.subheadline}
                onChange={(e) =>
                  setContent({
                    ...content,
                    wholesaleCta: { ...content.wholesaleCta, subheadline: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#1C1917] mb-1">Body Text</label>
            <textarea
              rows={2}
              value={content.wholesaleCta.body}
              onChange={(e) =>
                setContent({
                  ...content,
                  wholesaleCta: { ...content.wholesaleCta, body: e.target.value },
                })
              }
              className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">
                Wholesale Enquiry Button Text
              </label>
              <input
                type="text"
                value={content.wholesaleCta.primaryButtonText}
                onChange={(e) =>
                  setContent({
                    ...content,
                    wholesaleCta: {
                      ...content.wholesaleCta,
                      primaryButtonText: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">
                WhatsApp Button Text
              </label>
              <input
                type="text"
                value={content.wholesaleCta.whatsappButtonText}
                onChange={(e) =>
                  setContent({
                    ...content,
                    wholesaleCta: {
                      ...content.wholesaleCta,
                      whatsappButtonText: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
              />
            </div>
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
