'use client';

import { sendGAEvent } from '@next/third-parties/google';

/**
 * Track a custom event in Google Analytics
 * @param eventName The name of the event
 * @param eventParams Additional parameters for the event
 */
export const trackEvent = (
  eventName: string, 
  eventParams?: Record<string, string | number | boolean>
) => {
  try {
    sendGAEvent({ 
      event: eventName, 
      ...eventParams 
    });
    
    // For debugging in development
    if (process.env.NODE_ENV === 'development') {
      console.log('GA Event:', eventName, eventParams);
    }
  } catch (error) {
    // Silent fail in production, log in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error tracking event:', error);
    }
  }
}; 