import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }: Props) => {
  return <main className=''>{children}</main>;
};
