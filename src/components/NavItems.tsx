'use client';

import { PRODUCT_CATEGORIES } from '@/config';
import { useRef, useState } from 'react';
import NavItem from './NavItem';

export default function NavItems() {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className=' flex gap-4 h-full'>
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
