import {
  INITIAL_WEBSITE_CONTENT,
  WebsiteContentState,
  HomeContent,
  CollectionsContent,
  NewArrivalsContent,
  WholesaleContent,
  AboutContent,
  ContactContent,
} from '@/data/websiteContent';

export const CONTENT_STORAGE_KEY = 'edamone_website_content_v1';
export const CONTENT_UPDATED_EVENT = 'edamone_content_updated';

/**
 * Deep merges stored content with default content to ensure all fields and nested objects
 * remain intact even if partial data was saved or schema was updated.
 */
function deepMergeContent(
  fallback: WebsiteContentState,
  stored: Partial<WebsiteContentState>
): WebsiteContentState {
  if (!stored || typeof stored !== 'object') {
    return fallback;
  }

  return {
    home: {
      ...fallback.home,
      ...(stored.home || {}),
      announcementBar: {
        ...fallback.home.announcementBar,
        ...(stored.home?.announcementBar || {}),
      },
      hero: {
        ...fallback.home.hero,
        ...(stored.home?.hero || {}),
        perks: stored.home?.hero?.perks ?? fallback.home.hero.perks,
      },
      brandIntro: {
        ...fallback.home.brandIntro,
        ...(stored.home?.brandIntro || {}),
      },
      collectionsSection: {
        ...fallback.home.collectionsSection,
        ...(stored.home?.collectionsSection || {}),
      },
      wholesaleCta: {
        ...fallback.home.wholesaleCta,
        ...(stored.home?.wholesaleCta || {}),
      },
    },
    collections: {
      ...fallback.collections,
      ...(stored.collections || {}),
      header: {
        ...fallback.collections.header,
        ...(stored.collections?.header || {}),
      },
      categorySection: {
        ...fallback.collections.categorySection,
        ...(stored.collections?.categorySection || {}),
      },
      productCatalogSection: {
        ...fallback.collections.productCatalogSection,
        ...(stored.collections?.productCatalogSection || {}),
      },
      customVolumeBox: {
        ...fallback.collections.customVolumeBox,
        ...(stored.collections?.customVolumeBox || {}),
      },
    },
    newArrivals: {
      ...fallback.newArrivals,
      ...(stored.newArrivals || {}),
      header: {
        ...fallback.newArrivals.header,
        ...(stored.newArrivals?.header || {}),
      },
      releasesBar: {
        ...fallback.newArrivals.releasesBar,
        ...(stored.newArrivals?.releasesBar || {}),
      },
    },
    wholesale: {
      ...fallback.wholesale,
      ...(stored.wholesale || {}),
      header: {
        ...fallback.wholesale.header,
        ...(stored.wholesale?.header || {}),
      },
      advantageSection: {
        ...fallback.wholesale.advantageSection,
        ...(stored.wholesale?.advantageSection || {}),
        cards:
          stored.wholesale?.advantageSection?.cards ??
          fallback.wholesale.advantageSection.cards,
      },
      enquirySection: {
        ...fallback.wholesale.enquirySection,
        ...(stored.wholesale?.enquirySection || {}),
      },
    },
    about: {
      ...fallback.about,
      ...(stored.about || {}),
      header: {
        ...fallback.about.header,
        ...(stored.about?.header || {}),
      },
      storySection: {
        ...fallback.about.storySection,
        ...(stored.about?.storySection || {}),
      },
      corePrinciplesSection: {
        ...fallback.about.corePrinciplesSection,
        ...(stored.about?.corePrinciplesSection || {}),
        principles:
          stored.about?.corePrinciplesSection?.principles ??
          fallback.about.corePrinciplesSection.principles,
      },
    },
    contact: {
      ...fallback.contact,
      ...(stored.contact || {}),
      header: {
        ...fallback.contact.header,
        ...(stored.contact?.header || {}),
      },
      channels: {
        ...fallback.contact.channels,
        ...(stored.contact?.channels || {}),
        whatsappCard: {
          ...fallback.contact.channels.whatsappCard,
          ...(stored.contact?.channels?.whatsappCard || {}),
        },
        instagramCard: {
          ...fallback.contact.channels.instagramCard,
          ...(stored.contact?.channels?.instagramCard || {}),
        },
        responseTime: {
          ...fallback.contact.channels.responseTime,
          ...(stored.contact?.channels?.responseTime || {}),
        },
      },
      faqs: {
        ...fallback.contact.faqs,
        ...(stored.contact?.faqs || {}),
        items: stored.contact?.faqs?.items ?? fallback.contact.faqs.items,
      },
      enquirySection: {
        ...fallback.contact.enquirySection,
        ...(stored.contact?.enquirySection || {}),
      },
    },
  };
}

/**
 * Load website content from localStorage with safe SSR check and deep merge.
 */
export function getStoredWebsiteContent(): WebsiteContentState {
  if (typeof window === 'undefined') {
    return INITIAL_WEBSITE_CONTENT;
  }

  try {
    const raw = window.localStorage.getItem(CONTENT_STORAGE_KEY);
    if (!raw) {
      return INITIAL_WEBSITE_CONTENT;
    }
    const parsed = JSON.parse(raw);
    return deepMergeContent(INITIAL_WEBSITE_CONTENT, parsed);
  } catch (error) {
    console.error('Failed to load website content from localStorage:', error);
    return INITIAL_WEBSITE_CONTENT;
  }
}

/**
 * Save entire website content to localStorage and dispatch update events.
 */
export function saveStoredWebsiteContent(
  newContent: WebsiteContentState
): WebsiteContentState {
  if (typeof window === 'undefined') {
    return newContent;
  }

  try {
    const merged = deepMergeContent(INITIAL_WEBSITE_CONTENT, newContent);
    window.localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(merged));

    // Dispatch custom event for same-tab instant listeners
    window.dispatchEvent(
      new CustomEvent(CONTENT_UPDATED_EVENT, { detail: merged })
    );

    return merged;
  } catch (error) {
    console.error('Failed to save website content to localStorage:', error);
    return newContent;
  }
}

/**
 * Save a specific page's content (e.g. 'home', 'collections', 'about', etc.)
 */
export function saveStoredPageContent<K extends keyof WebsiteContentState>(
  pageKey: K,
  pageData: WebsiteContentState[K]
): WebsiteContentState {
  const current = getStoredWebsiteContent();
  const updated: WebsiteContentState = {
    ...current,
    [pageKey]: pageData,
  };
  return saveStoredWebsiteContent(updated);
}

/**
 * Reset all website content back to the default initial values.
 */
export function resetStoredWebsiteContent(): WebsiteContentState {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(CONTENT_STORAGE_KEY);
    window.dispatchEvent(
      new CustomEvent(CONTENT_UPDATED_EVENT, { detail: INITIAL_WEBSITE_CONTENT })
    );
  }
  return INITIAL_WEBSITE_CONTENT;
}
