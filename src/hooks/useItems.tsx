import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Item {
  id: string;
  type: 'lost' | 'found';
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  location: [number, number]; // [lat, lng]
  date: string;
  status: 'active' | 'resolved';
  userId: string;
}

interface ItemContextType {
  items: Item[];
  addItem: (item: Omit<Item, 'id' | 'status'>) => void;
  resolveItem: (id: string) => void;
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const ItemProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (newItem: Omit<Item, 'id' | 'status'>) => {
    const item: Item = {
      ...newItem,
      id: Math.random().toString(36).substr(2, 9),
      status: 'active',
    };
    setItems((prev) => [item, ...prev]);
  };

  const resolveItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: 'resolved' } : item))
    );
  };

  return (
    <ItemContext.Provider value={{ items, addItem, resolveItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItems = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error('useItems must be used within an ItemProvider');
  }
  return context;
};
