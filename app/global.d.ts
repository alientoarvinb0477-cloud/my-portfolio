import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        ar?: boolean;
        'ar-modes'?: string;
        'auto-rotate'?: boolean;
        'camera-controls'?: boolean;
        'shadow-intensity'?: string;
        'shadow-softness'?: string;
        'environment-image'?: string;
        exposure?: string;
        loading?: 'eager' | 'lazy';
        reveal?: 'auto' | 'manual';
        'touch-action'?: string;
        poster?: string;
        // Allows for any other custom properties if needed
        [propName: string]: any;
      };
    }
  }
}

// This line is required to mark the file as a module
export {};