import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Idea, User, ToastMessage, CategoryId } from '../types';
import { translations, Translations } from '../i18n/translations';
import { initialIdeas } from '../data/initialIdeas';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  ideas: Idea[];
  user: User;
  activeCategory: CategoryId;
  setActiveCategory: (cat: CategoryId) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  toasts: ToastMessage[];
  addToast: (title: string, type?: 'success' | 'error' | 'info', message?: string) => void;
  removeToast: (id: string) => void;
  createIdea: (idea: Omit<Idea, 'id' | 'createdAt' | 'likes' | 'views' | 'bookmarks'>) => void;
  updateIdea: (id: string, updated: Partial<Idea>) => void;
  deleteIdea: (id: string) => void;
  toggleLike: (ideaId: string) => void;
  toggleBookmark: (ideaId: string) => void;
  signInWithGoogle: (customEmail?: string) => void;
  signOut: () => void;
  selectedIdeaForModal: Idea | null;
  setSelectedIdeaForModal: (idea: Idea | null) => void;
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: (open: boolean) => void;
  editingIdea: Idea | null;
  setEditingIdea: (idea: Idea | null) => void;
  isProfileDrawerOpen: boolean;
  setIsProfileDrawerOpen: (open: boolean) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  shareIdeaData: Idea | null;
  setShareIdeaData: (idea: Idea | null) => void;
}

const defaultUser: User = {
  id: 'usr-guest',
  name: 'Mavlonbek Karimov',
  email: 'mittuyaayuttim@gmail.com',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
  role: 'Innovator',
  isLoggedIn: true,
  savedIdeaIds: ['nex-001', 'nex-003'],
  likedIdeaIds: ['nex-001'],
  createdIdeaIds: ['nex-001'],
  joinedDate: '2026-04-12'
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Language State (UZ default as strictly requested)
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('nexora_lang') as Language;
    return saved && ['uz', 'en', 'ru', 'tr', 'es'].includes(saved) ? saved : 'uz';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('nexora_lang', lang);
    document.documentElement.lang = lang;
  };

  const t = translations[language] || translations.uz;

  // 2. Ideas State (LocalStorage Persistent)
  const [ideas, setIdeas] = useState<Idea[]>(() => {
    const saved = localStorage.getItem('nexora_ideas');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialIdeas;
      }
    }
    return initialIdeas;
  });

  useEffect(() => {
    localStorage.setItem('nexora_ideas', JSON.stringify(ideas));
  }, [ideas]);

  // 3. User State (LocalStorage Persistent)
  const [user, setUser] = useState<User>(() => {
    const saved = localStorage.getItem('nexora_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultUser;
      }
    }
    return defaultUser;
  });

  useEffect(() => {
    localStorage.setItem('nexora_user', JSON.stringify(user));
  }, [user]);

  // 4. Filtering & Navigation State
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTab, setSelectedTab] = useState<string>('all');

  // 5. Modals State
  const [selectedIdeaForModal, setSelectedIdeaForModal] = useState<Idea | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingIdea, setEditingIdea] = useState<Idea | null>(null);
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [shareIdeaData, setShareIdeaData] = useState<Idea | null>(null);

  // 6. Toasts State
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, type: 'success' | 'error' | 'info' = 'info', message?: string) => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    setToasts(prev => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // 7. Idea Operations
  const createIdea = (ideaData: Omit<Idea, 'id' | 'createdAt' | 'likes' | 'views' | 'bookmarks'>) => {
    const newId = `nex-${Date.now().toString().slice(-4)}`;
    const today = new Date().toISOString().split('T')[0];
    const newIdea: Idea = {
      ...ideaData,
      id: newId,
      createdAt: today,
      likes: 1,
      views: 12,
      bookmarks: 0,
      author: {
        id: user.id,
        name: ideaData.author.name || user.name,
        role: user.role,
        avatar: user.avatar,
        email: user.email
      }
    };

    setIdeas(prev => [newIdea, ...prev]);
    setUser(prev => ({
      ...prev,
      createdIdeaIds: [newId, ...prev.createdIdeaIds],
      likedIdeaIds: [newId, ...prev.likedIdeaIds]
    }));
    addToast(t.toast.ideaCreated, 'success');
  };

  const updateIdea = (id: string, updated: Partial<Idea>) => {
    setIdeas(prev => prev.map(item => item.id === id ? { ...item, ...updated } : item));
    addToast(t.toast.ideaUpdated, 'success');
  };

  const deleteIdea = (id: string) => {
    setIdeas(prev => prev.filter(item => item.id !== id));
    setUser(prev => ({
      ...prev,
      createdIdeaIds: prev.createdIdeaIds.filter(i => i !== id),
      savedIdeaIds: prev.savedIdeaIds.filter(i => i !== id),
      likedIdeaIds: prev.likedIdeaIds.filter(i => i !== id)
    }));
    if (selectedIdeaForModal?.id === id) {
      setSelectedIdeaForModal(null);
    }
    addToast(t.toast.ideaDeleted, 'info');
  };

  const toggleLike = (ideaId: string) => {
    const isLiked = user.likedIdeaIds.includes(ideaId);
    setUser(prev => ({
      ...prev,
      likedIdeaIds: isLiked 
        ? prev.likedIdeaIds.filter(id => id !== ideaId)
        : [...prev.likedIdeaIds, ideaId]
    }));

    setIdeas(prev => prev.map(idea => {
      if (idea.id === ideaId) {
        return {
          ...idea,
          likes: isLiked ? Math.max(0, idea.likes - 1) : idea.likes + 1
        };
      }
      return idea;
    }));

    addToast(isLiked ? t.toast.unliked : t.toast.liked, 'info');
  };

  const toggleBookmark = (ideaId: string) => {
    const isSaved = user.savedIdeaIds.includes(ideaId);
    setUser(prev => ({
      ...prev,
      savedIdeaIds: isSaved
        ? prev.savedIdeaIds.filter(id => id !== ideaId)
        : [...prev.savedIdeaIds, ideaId]
    }));

    setIdeas(prev => prev.map(idea => {
      if (idea.id === ideaId) {
        return {
          ...idea,
          bookmarks: isSaved ? Math.max(0, idea.bookmarks - 1) : idea.bookmarks + 1
        };
      }
      return idea;
    }));

    addToast(isSaved ? t.toast.unbookmarked : t.toast.bookmarked, 'success');
  };

  // 8. Auth Operations
  const signInWithGoogle = (customEmail?: string) => {
    const emailToUse = customEmail || 'mittuyaayuttim@gmail.com';
    const nameToUse = emailToUse.split('@')[0];
    const newUser: User = {
      ...user,
      email: emailToUse,
      name: nameToUse.charAt(0).toUpperCase() + nameToUse.slice(1),
      isLoggedIn: true
    };
    setUser(newUser);
    setIsAuthModalOpen(false);
    addToast(t.toast.signedIn, 'success');
  };

  const signOut = () => {
    setUser(prev => ({
      ...prev,
      isLoggedIn: false
    }));
    setIsProfileDrawerOpen(false);
    addToast(t.toast.signedOut, 'info');
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        t,
        ideas,
        user,
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
        selectedTab,
        setSelectedTab,
        toasts,
        addToast,
        removeToast,
        createIdea,
        updateIdea,
        deleteIdea,
        toggleLike,
        toggleBookmark,
        signInWithGoogle,
        signOut,
        selectedIdeaForModal,
        setSelectedIdeaForModal,
        isCreateModalOpen,
        setIsCreateModalOpen,
        editingIdea,
        setEditingIdea,
        isProfileDrawerOpen,
        setIsProfileDrawerOpen,
        isAuthModalOpen,
        setIsAuthModalOpen,
        shareIdeaData,
        setShareIdeaData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
