'use client';

import { PRODUCT_CATEGORIES } from '@/config';
import { useOnClickOutside } from '@/hooks/use-on-click-outside';
import { useEffect, useRef, useState } from 'react';
import NavItem from './NavItem';

export default function NavItems() {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null);
    };
    document.addEventListener('keydown', handler);

    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, []);

  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null));
  return (
    <div className=' flex gap-4 h-full' ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () => {
          if (activeIndex === index) {
            setActiveIndex(null);
          } else {
            setActiveIndex(index);
          }
        };

        const isOpen = index === activeIndex;
        const close = () => setActiveIndex(null);

        return (
          <NavItem
            key={category.value}
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
            close={close}
          />
        );
      })}
    </div>
  );
}
