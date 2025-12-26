import React, { ReactNode } from 'react';
import Container from '../Header/Container';

interface SectionProps {
  title?: string;
  children: ReactNode;
  id?: string;
  className?: string;
}
const Section: React.FC<SectionProps> = ({ 
  title, 
  children, 
  id, 
  className = "" 
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <Container>
        {title && (
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            {title}
          </h2>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;