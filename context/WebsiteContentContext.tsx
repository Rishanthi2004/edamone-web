'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
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
import {
  CONTENT_STORAGE_KEY,
  CONTENT_UPDATED_EVENT,
  getStoredWebsiteContent,
  saveStoredWebsiteContent,
  saveStoredPageContent,
  resetStoredWebsiteContent,
} from '@/lib/websiteContentStore';

interface WebsiteContentContextValue {
  content: WebsiteContentState;
  isLoaded: boolean;
  updateContent: <K extends keyof WebsiteContentState>(
    pageKey: K,
    pageData: WebsiteContentState[K]
  ) => void;
  updateHomeContent: (data: HomeContent) => void;
  updateCollectionsContent: (data: CollectionsContent) => void;
  updateNewArrivalsContent: (data: NewArrivalsContent) => void;
  updateWholesaleContent: (data: WholesaleContent) => void;
  updateAboutContent: (data: AboutContent) => void;
  updateContactContent: (data: ContactContent) => void;
  resetContent: () => void;
}

const WebsiteContentContext = createContext<WebsiteContentContextValue>({
  content: INITIAL_WEBSITE_CONTENT,
  isLoaded: false,
  updateContent: () => {},
  updateHomeContent: () => {},
  updateCollectionsContent: () => {},
  updateNewArrivalsContent: () => {},
  updateWholesaleContent: () => {},
  updateAboutContent: () => {},
  updateContactContent: () => {},
  resetContent: () => {},
});

export function WebsiteContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<WebsiteContentState>(INITIAL_WEBSITE_CONTENT);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize from storage on mount
  useEffect(() => {
    const stored = getStoredWebsiteContent();
    setContent(stored);
    setIsLoaded(true);

    // Handler for local custom event (same tab)
    const handleContentUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<WebsiteContentState>;
      if (customEvent.detail) {
        setContent(customEvent.detail);
      } else {
        setContent(getStoredWebsiteContent());
      }
    };

    // Handler for cross-tab storage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === CONTENT_STORAGE_KEY) {
        setContent(getStoredWebsiteContent());
      }
    };

    window.addEventListener(CONTENT_UPDATED_EVENT, handleContentUpdate);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener(CONTENT_UPDATED_EVENT, handleContentUpdate);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const updateContent = useCallback(
    <K extends keyof WebsiteContentState>(
      pageKey: K,
      pageData: WebsiteContentState[K]
    ) => {
      const updated = saveStoredPageContent(pageKey, pageData);
      setContent(updated);
    },
    []
  );

  const updateHomeContent = useCallback(
    (data: HomeContent) => updateContent('home', data),
    [updateContent]
  );

  const updateCollectionsContent = useCallback(
    (data: CollectionsContent) => updateContent('collections', data),
    [updateContent]
  );

  const updateNewArrivalsContent = useCallback(
    (data: NewArrivalsContent) => updateContent('newArrivals', data),
    [updateContent]
  );

  const updateWholesaleContent = useCallback(
    (data: WholesaleContent) => updateContent('wholesale', data),
    [updateContent]
  );

  const updateAboutContent = useCallback(
    (data: AboutContent) => updateContent('about', data),
    [updateContent]
  );

  const updateContactContent = useCallback(
    (data: ContactContent) => updateContent('contact', data),
    [updateContent]
  );

  const resetContent = useCallback(() => {
    const defaultData = resetStoredWebsiteContent();
    setContent(defaultData);
  }, []);

  return (
    <WebsiteContentContext.Provider
      value={{
        content,
        isLoaded,
        updateContent,
        updateHomeContent,
        updateCollectionsContent,
        updateNewArrivalsContent,
        updateWholesaleContent,
        updateAboutContent,
        updateContactContent,
        resetContent,
      }}
    >
      {children}
    </WebsiteContentContext.Provider>
  );
}

export function useWebsiteContent() {
  const context = useContext(WebsiteContentContext);
  if (!context) {
    throw new Error('useWebsiteContent must be used within a WebsiteContentProvider');
  }
  return context;
}
