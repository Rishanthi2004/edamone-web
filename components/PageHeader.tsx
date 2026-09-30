import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHeader({
  badge,
  title,
  subtitle,
  breadcrumbs = [],
}: PageHeaderProps) {
  return (
    <div className="bg-[#F3ECE2]/60 border-b border-[#EAE2D5] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumbs" className="flex items-center justify-center space-x-2 text-xs text-[#78716C] mb-4">
            <Link href="/" className="hover:text-[#1C1917] transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <ChevronRight className="w-3.5 h-3.5 text-[#A8A29E]" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#1C1917] transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-[#1C1917] font-medium">{crumb.name}</span>
                )}
              </div>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <span className="inline-block text-[11px] uppercase font-semibold tracking-[0.25em] text-[#6B2A35] bg-[#F7ECE9] px-3 py-1 mb-3">
            {badge}
          </span>
        )}

        {/* Title */}
        <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1917] tracking-tight max-w-3xl mx-auto">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-sm sm:text-base text-[#66615E] mt-3 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
