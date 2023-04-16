import Link from 'next/link';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const GlobalMenu = ({ children }: Props) => {
  return (
    <div>
      <nav className="flex flex-rows p-2 bg-red-500 text-white font-bold">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      {children}
    </div>
  );
};

export default GlobalMenu;
