'use client';

import { trackEvent } from '@/utils/analytics';
import { Button } from '@headlessui/react';

export const AnalyticsExample = () => {
  const handleButtonClick = () => {
    // Track a custom event when button is clicked
    trackEvent('button_clicked', {
      button_name: 'example_button',
      page: 'demo_page'
    });
    
    // Your actual button action would go here
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Analytics Example</h2>
      <p className="mb-4">Click the button below to trigger a sample analytics event</p>
      <Button 
        onClick={handleButtonClick}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Track Event
      </Button>
    </div>
  );
}; 