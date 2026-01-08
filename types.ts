
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
export type AspectRatio = '16:9' | '9:16' | '1:1';

export type ComplexityLevel = 'Elementary' | 'High School' | 'College' | 'Expert';

export type VisualStyle = 'Default' | 'Minimalist' | 'Realistic' | 'Cartoon' | 'Vintage' | 'Futuristic' | '3D Render' | 'Sketch';

export type ColorScheme = 'Default' | 'Black & White' | 'Vibrant (Red/Blue/Green/Yellow)' | 'Pastel Soft' | 'Professional Earth Tones' | 'Dark UI (Neon & Gradients)';

export type BackgroundColor = 'Default' | 'Pure White' | 'Solid Black' | 'Deep Navy' | 'Neutral Gray' | 'Parchment/Cream' | 'Translucent Glass';

export type Language = 'English' | 'Spanish' | 'French' | 'German' | 'Mandarin' | 'Japanese' | 'Hindi' | 'Arabic' | 'Portuguese' | 'Russian';

export interface GeneratedImage {
  id: string;
  data: string; // Base64 data URL
  prompt: string;
  timestamp: number;
  level?: ComplexityLevel;
  style?: VisualStyle;
  colorScheme?: ColorScheme;
  backgroundColor?: BackgroundColor;
  language?: Language;
}

export interface SearchResultItem {
  title: string;
  url: string;
}

export interface ResearchResult {
  imagePrompt: string;
  facts: string[];
  searchResults: SearchResultItem[];
}

export interface GitHubConfig {
  token: string;
  owner: string;
  repo: string;
  path: string;
  branch: string;
  autoSync: boolean;
}

export interface BatchItem {
  id: string;
  description: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  error?: string;
}

declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }
}
