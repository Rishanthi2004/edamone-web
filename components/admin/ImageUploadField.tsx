'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import {
  UploadCloud,
  Image as ImageIcon,
  Trash2,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  FileCode,
} from 'lucide-react';

interface ImageUploadFieldProps {
  label: string;
  description?: string;
  value: string;
  onChange: (value: string) => void;
  aspectRatio?: 'aspect-square' | 'aspect-3/4' | 'aspect-4/5' | 'aspect-video' | 'aspect-16/9' | 'h-48' | 'h-40';
  recommendedDimensions?: string;
}

export default function ImageUploadField({
  label,
  description,
  value,
  onChange,
  aspectRatio = 'aspect-4/5',
  recommendedDimensions = 'PNG, JPG, WebP up to 5MB',
}: ImageUploadFieldProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileSize, setFileSize] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileProcess = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (PNG, JPG, WebP, etc.).');
      return;
    }

    setFileName(file.name);
    const sizeInKb = (file.size / 1024).toFixed(1);
    setFileSize(`${sizeInKb} KB`);

    // Create immediate local data URL preview for instantaneous frontend reflection
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        onChange(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
  };

  const handleRemove = () => {
    onChange('');
    setFileName(null);
    setFileSize(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const hasImage = Boolean(value && value.trim().length > 0);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div>
          <label className="block font-semibold text-[#1C1917] text-xs">{label}</label>
          {description && <p className="text-[11px] text-[#78716C]">{description}</p>}
        </div>
        <span className="text-[10px] font-mono text-[#78716C] bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#E8DFC8]">
          {recommendedDimensions}
        </span>
      </div>

      {/* Hidden Native File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
        {/* Left: Image Preview Box */}
        <div className="sm:col-span-5">
          <div
            className={`relative w-full ${aspectRatio} max-h-56 bg-[#FAF7F2] border-2 ${
              hasImage ? 'border-[#E8DFC8]' : 'border-dashed border-[#D8CCB8]'
            } rounded-lg overflow-hidden flex flex-col items-center justify-center text-center group`}
          >
            {hasImage ? (
              <>
                <Image
                  src={value}
                  alt={label}
                  fill
                  unoptimized={value.startsWith('data:')}
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2 bg-[#FAF7F2] text-[#1C1917] rounded-full hover:bg-[#FFFFFF] shadow-lg transition-transform hover:scale-110 cursor-pointer"
                    title="Replace Image"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleRemove}
                    className="p-2 bg-[#FAF7F2] text-[#9E5A63] rounded-full hover:bg-[#F7ECE9] shadow-lg transition-transform hover:scale-110 cursor-pointer"
                    title="Remove Image"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute bottom-2 left-2 bg-[#1C1917]/85 backdrop-blur-xs text-[#FAF7F2] px-2 py-0.5 rounded text-[9px] font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Image Active</span>
                </div>
              </>
            ) : (
              <div className="p-4 space-y-1 text-[#78716C]">
                <ImageIcon className="w-8 h-8 mx-auto text-[#C5A880] opacity-60 mb-1" />
                <p className="text-xs font-semibold text-[#1C1917]">No image selected</p>
                <p className="text-[10px]">Upload from your device</p>
              </div>
            )}
          </div>
        </div>

        {/* Right: Drag & Drop Upload Zone & Controls */}
        <div className="sm:col-span-7 space-y-2.5">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`p-4 border-2 border-dashed rounded-lg flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
              isDragging
                ? 'border-[#6B2A35] bg-[#F7ECE9]/50 scale-[0.99]'
                : 'border-[#E8DFC8] bg-[#FAF7F2]/50 hover:bg-[#F3ECE2] hover:border-[#6B2A35]'
            }`}
          >
            <UploadCloud className="w-6 h-6 text-[#6B2A35] mb-1.5" />
            <p className="text-xs font-semibold text-[#1C1917]">
              Click to browse <span className="font-normal text-[#78716C]">or drag & drop</span>
            </p>
            <p className="text-[10px] text-[#78716C] mt-0.5">
              Supports JPEG, PNG, WebP, SVG
            </p>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
              className="mt-2.5 px-3.5 py-1.5 bg-[#1C1917] hover:bg-[#6B2A35] text-[#FAF7F2] text-[11px] font-semibold uppercase tracking-wider rounded transition-colors shadow-2xs cursor-pointer"
            >
              {hasImage ? 'Change Image' : 'Select from Computer'}
            </button>
          </div>

          {/* Uploaded File Metadata & Actions */}
          {fileName && (
            <div className="p-2.5 bg-[#FFFFFF] border border-[#E8DFC8] rounded-md flex items-center justify-between text-xs animate-fade-in">
              <div className="flex items-center gap-2 truncate pr-2">
                <FileCode className="w-4 h-4 text-[#6B2A35] shrink-0" />
                <span className="truncate font-medium text-[#1C1917]">{fileName}</span>
                {fileSize && (
                  <span className="text-[10px] text-[#78716C] font-mono shrink-0">({fileSize})</span>
                )}
              </div>
              <button
                type="button"
                onClick={handleRemove}
                className="text-[11px] text-[#9E5A63] hover:text-[#6B2A35] font-semibold cursor-pointer shrink-0"
              >
                Clear
              </button>
            </div>
          )}

          {/* Fallback Image URL Input */}
          <div className="pt-1">
            <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#78716C] mb-1">
              Or specify image path / URL:
            </label>
            <input
              type="text"
              value={value.startsWith('data:') ? '[Uploaded File from Computer]' : value}
              onChange={(e) => onChange(e.target.value)}
              placeholder="e.g. /images/hero-claw-clip.jpg or https://..."
              className="w-full px-3 py-1.5 text-xs bg-[#FFFFFF] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
