/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ExpertisePillar {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string; // Lucide icon identifier
}

export interface DesignProject {
  id: string;
  title: string;
  client: string;
  tag: string;
  description: string;
  longDescription: string;
  category: string;
  thumbnailPlaceholderColor: string; // Tailwind color class for elegant representation
  iconName: string;
}

export interface VideoItem {
  id: string;
  title: string;
  campaign: string;
  description: string;
  embedUrl: string; // Since it's a placeholder, we can use a beautiful custom SVG/video player preview or YouTube link
  thumbnail: string;
}

export interface SocialTile {
  id: string;
  title: string;
  type: 'motion' | 'social' | 'campaign';
  colorClass: string;
  aspectClass: string; // For masonry effect
}

export type SectionId = 'home' | 'about' | 'expertise' | 'design' | 'contents' | 'photography' | 'contact';

export interface WorkExperience {
  role: string;
  organization: string;
  period: string;
  bulletPoints: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  bullets?: string[];
}

export interface ProfessionalQualification {
  title: string;
  institute: string;
  year: string;
}

export interface CivilEngagement {
  role: string;
  organization: string;
  period: string;
}

export interface AchievementItem {
  title: string;
  details: string;
}
