'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Save,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Info,
} from 'lucide-react';
import { AboutContent } from '@/data/websiteContent';
import ImageUploadField from '@/components/admin/ImageUploadField';

interface AboutContentEditorProps {
  initialContent: AboutContent;
  onSave: (updated: AboutContent) => void;
  onBack: () => void;
}

export default function AboutContentEditor({
  initialContent,
  onSave,
  onBack,
}: AboutContentEditorProps) {
  const [content, setContent] = useState<AboutContent>(initialContent);
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
              <span className="text-xs text-[#78716C] truncate">Route: /about</span>
            </div>
            <h2 className="font-serif-luxury text-xl sm:text-2xl lg:text-3xl font-bold text-[#1C1917] mt-0.5 break-words">
              Edit About Us Page Content
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-2.5 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-[#E8DFC8]/60">
          <Link
            href="/about"
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
            <span>About Us page content saved successfully! Changes are live on the user website.</span>
          </div>
          <Link
            href="/about"
            target="_blank"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-md text-[11px] font-semibold transition-colors shrink-0"
          >
            <span>View Live About Page →</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 text-xs">
        {/* Section 1: Page Header */}
        <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8DFC8]">
            <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917]">
              1. About Editorial Header
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

        {/* Section 2: The Edamoneglint Story */}
        <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8DFC8]">
            <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917]">
              2. The Edamoneglint Story Narrative
            </h3>
            <span className="text-[10px] text-[#78716C] uppercase font-mono">Brand Heritage</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">Badge</label>
              <input
                type="text"
                value={content.storySection.badge}
                onChange={(e) =>
                  setContent({
                    ...content,
                    storySection: { ...content.storySection, badge: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
              />
            </div>
            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">Headline Part 1</label>
              <input
                type="text"
                value={content.storySection.headline}
                onChange={(e) =>
                  setContent({
                    ...content,
                    storySection: { ...content.storySection, headline: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
              />
            </div>
            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">Italic Highlight Phrase</label>
              <input
                type="text"
                value={content.storySection.headlineHighlight}
                onChange={(e) =>
                  setContent({
                    ...content,
                    storySection: {
                      ...content.storySection,
                      headlineHighlight: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#1C1917] mb-1">Lead Highlight Sentence</label>
            <input
              type="text"
              value={content.storySection.leadParagraph}
              onChange={(e) =>
                setContent({
                  ...content,
                  storySection: {
                    ...content.storySection,
                    leadParagraph: e.target.value,
                  },
                })
              }
              className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#1C1917] mb-1">Body Narrative</label>
            <textarea
              rows={4}
              value={content.storySection.bodyParagraph}
              onChange={(e) =>
                setContent({
                  ...content,
                  storySection: {
                    ...content.storySection,
                    bodyParagraph: e.target.value,
                  },
                })
              }
              className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
            />
          </div>

          {/* 2 Feature Callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-3.5 bg-[#FAF7F2] border border-[#E8DFC8] rounded-lg space-y-2">
              <span className="font-bold text-[#1C1917] block">Feature Card 1</span>
              <div>
                <label className="block text-[#78716C] mb-0.5">Title</label>
                <input
                  type="text"
                  value={content.storySection.koreanDesignTitle}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      storySection: {
                        ...content.storySection,
                        koreanDesignTitle: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 bg-[#FFFFFF] border border-[#E8DFC8] rounded text-[#1C1917]"
                />
              </div>
              <div>
                <label className="block text-[#78716C] mb-0.5">Description</label>
                <input
                  type="text"
                  value={content.storySection.koreanDesignText}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      storySection: {
                        ...content.storySection,
                        koreanDesignText: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 bg-[#FFFFFF] border border-[#E8DFC8] rounded text-[#1C1917]"
                />
              </div>
            </div>

            <div className="p-3.5 bg-[#FAF7F2] border border-[#E8DFC8] rounded-lg space-y-2">
              <span className="font-bold text-[#1C1917] block">Feature Card 2</span>
              <div>
                <label className="block text-[#78716C] mb-0.5">Title</label>
                <input
                  type="text"
                  value={content.storySection.wholesaleFirstTitle}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      storySection: {
                        ...content.storySection,
                        wholesaleFirstTitle: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 bg-[#FFFFFF] border border-[#E8DFC8] rounded text-[#1C1917]"
                />
              </div>
              <div>
                <label className="block text-[#78716C] mb-0.5">Description</label>
                <input
                  type="text"
                  value={content.storySection.wholesaleFirstText}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      storySection: {
                        ...content.storySection,
                        wholesaleFirstText: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 bg-[#FFFFFF] border border-[#E8DFC8] rounded text-[#1C1917]"
                />
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-[#E8DFC8]">
            <ImageUploadField
              label="Brand Narrative Lifestyle Image"
              description="Displays prominently on the right side of the About story section."
              value={content.storySection.image}
              onChange={(newImg) =>
                setContent({
                  ...content,
                  storySection: { ...content.storySection, image: newImg },
                })
              }
              aspectRatio="aspect-4/5"
              recommendedDimensions="Portrait (4:5) recommended"
            />
          </div>
        </div>

        {/* Section 3: Core Principles Section */}
        <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8DFC8]">
            <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917]">
              3. Core Quality Principles (3 Cards)
            </h3>
            <span className="text-[10px] text-[#78716C] uppercase font-mono">Pillars</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">Badge</label>
              <input
                type="text"
                value={content.corePrinciplesSection.badge}
                onChange={(e) =>
                  setContent({
                    ...content,
                    corePrinciplesSection: {
                      ...content.corePrinciplesSection,
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
                value={content.corePrinciplesSection.title}
                onChange={(e) =>
                  setContent({
                    ...content,
                    corePrinciplesSection: {
                      ...content.corePrinciplesSection,
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
              value={content.corePrinciplesSection.subtitle}
              onChange={(e) =>
                setContent({
                  ...content,
                  corePrinciplesSection: {
                    ...content.corePrinciplesSection,
                    subtitle: e.target.value,
                  },
                })
              }
              className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917]"
            />
          </div>

          {/* 3 Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {content.corePrinciplesSection.principles.map((p, idx) => (
              <div key={idx} className="p-3.5 bg-[#FAF7F2] border border-[#E8DFC8] rounded-lg space-y-2">
                <span className="text-[10px] font-mono text-[#6B2A35] font-bold block">
                  Principle #{idx + 1}
                </span>
                <div>
                  <label className="block text-[#78716C] mb-0.5">Title</label>
                  <input
                    type="text"
                    value={p.title}
                    onChange={(e) => {
                      const updated = content.corePrinciplesSection.principles.map((item, i) =>
                        i === idx ? { ...item, title: e.target.value } : item
                      );
                      setContent({
                        ...content,
                        corePrinciplesSection: {
                          ...content.corePrinciplesSection,
                          principles: updated,
                        },
                      });
                    }}
                    className="w-full px-2 py-1 bg-[#FFFFFF] border border-[#E8DFC8] rounded text-[#1C1917]"
                  />
                </div>
                <div>
                  <label className="block text-[#78716C] mb-0.5">Description</label>
                  <textarea
                    rows={3}
                    value={p.description}
                    onChange={(e) => {
                      const updated = content.corePrinciplesSection.principles.map((item, i) =>
                        i === idx ? { ...item, description: e.target.value } : item
                      );
                      setContent({
                        ...content,
                        corePrinciplesSection: {
                          ...content.corePrinciplesSection,
                          principles: updated,
                        },
                      });
                    }}
                    className="w-full px-2 py-1 bg-[#FFFFFF] border border-[#E8DFC8] rounded text-[#1C1917]"
                  />
                </div>
              </div>
            ))}
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
