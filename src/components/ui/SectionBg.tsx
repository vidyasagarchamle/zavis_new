import React from 'react';

export default function SectionBg() {
  return (
    <>
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-10 z-0"></div>
      
      {/* Full-page accent gradient for consistent background */}
      <div className="fixed inset-0 bg-gradient-to-b from-accent/3 via-accent/15 to-accent/3 opacity-50 z-[-1]"></div>
      
      {/* Section-specific gradient for local accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-accent/15 to-accent/5 z-0"></div>
      
      {/* Additional subtle background effects - enlarged and more pronounced */}
      <div className="absolute -bottom-40 -right-40 w-[1000px] h-[1000px] rounded-full bg-accent-gradient opacity-5 blur-[200px] z-0"></div>
      <div className="absolute -top-40 -left-40 w-[1000px] h-[1000px] rounded-full bg-accent-gradient opacity-5 blur-[200px] z-0"></div>
      
      {/* Remove the edge gradients as they might be causing visible separation */}
    </>
  );
} 