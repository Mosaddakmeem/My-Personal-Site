/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExpertisePillar, DesignProject, VideoItem, SocialTile, WorkExperience, EducationItem, ProfessionalQualification, CivilEngagement, AchievementItem } from './types';

export const PERSONAL_INFO = {
  name: 'Mosaddak Bin Shorif',
  title: 'Communications Specialist & Visual Storyteller',
  tagline: 'Bridging complex research and public engagement through visual storytelling.',
  email: 'mosaddakbinshorif@gmail.com',
  phone: '+880 -1883918947',
  location: 'Shekhertek 12, Mohammadpur, Dhaka',
  cvUrl: '#', // Linked to CV placeholder or /assets/Mosaddak_Bin_Shorif_CV.pdf as specified
  currentRole: {
    organization: 'Center for Peace and Justice, BRAC University',
    role: 'Communication Officer',
    milestones: [
      'Developing and managing internal and external communications for the Centre for Peace and Justice (CPJ), BRAC University, reporting directly to the Executive Director.',
      'Producing written and multimedia content to document CPJ\'s research, policy work, and advocacy outputs across digital and print platforms.',
      'Contributing to the translation and public communication of CPJ\'s research findings for policy audiences, media, and civil society partners.'
    ]
  },
  wateraidRole: {
    organization: 'Center for Peace and Justice, BRAC University',
    role: 'Communication Officer',
    milestones: [
      'Developing and managing internal and external communications for the Centre for Peace and Justice (CPJ), BRAC University, reporting directly to the Executive Director.',
      'Producing written and multimedia content to document CPJ\'s research, policy work, and advocacy outputs across digital and print platforms.',
      'Contributing to the translation and public communication of CPJ\'s research findings for policy audiences, media, and civil society partners.'
    ]
  },
  bio: {
    summary: 'Communications Specialist with 3+ years in international development, translating complex academic research and technical data into human-centric narratives that drive engagement and social change.',
    philosophy: 'I believe in strict institutional branding consistency across every single format, from a brief social media post to a detailed 100-page research report. Cohesive layout, clear visual hierarchy, and absolute brand integrity are essential to building institutional trust and amplifying public advocacy.',
    differentiator: {
      count: 12,
      title: 'National competitive debate championships won',
      description: 'Years of competitive debate instil a rigorous analytical edge. I excel at synthesizing intricate scientific evidence, structuring persuasive arguments, and bridging the divide between technical researchers and the general public.'
    }
  },
  toolkit: [
    { name: 'Adobe Premiere Pro', category: 'Cinematography & Video editing' },
    { name: 'Adobe After Effects', category: 'Motion Design & Typography' },
    { name: 'Adobe Illustrator', category: 'Vector Illustration & Layout' },
    { name: 'Adobe InDesign', category: 'Publications & Multi-page Reports' },
    { name: 'Lightroom & Photoshop', category: 'Dignified Photographic Curation' }
  ]
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    role: 'Communication Officer',
    organization: 'Center for Peace and Justice, BRAC University',
    period: 'April, 2026 – Present',
    bulletPoints: [
      'Developing and managing internal and external communications for the Centre for Peace and Justice (CPJ), BRAC University, reporting directly to the Executive Director.',
      'Producing written and multimedia content to document CPJ\'s research, policy work, and advocacy outputs across digital and print platforms.',
      'Contributing to the translation and public communication of CPJ\'s research findings for policy audiences, media, and civil society partners.'
    ]
  },
  {
    role: 'Communication Associate, Communications Team, Technical Services Department',
    organization: 'WaterAid Bangladesh',
    period: 'June, 2025 – Jan, 2026',
    bulletPoints: [
      'Collected field data, conceptualised stories of change, and documented audiovisual and written narratives of municipal and union parishad youth volunteers to prepare the Spark of Change booklet for the FCDO-funded WASH Systems for Health project.',
      'During WaterAid’s Bhinno Bhabna campaign, initiated a post-campaign reflection activity to capture youth audience perceptions and learning, encouraging deeper engagement with WASH issues.',
      'Collected field stories and developed written narratives for the booklet Stories of Ananya, documenting menstrual hygiene management experiences.'
    ]
  },
  {
    role: 'Communication Assistant, Communications Team, Technical Services Department',
    organization: 'WaterAid Bangladesh',
    period: 'March, 2025 – May, 2025',
    bulletPoints: [
      'Developed content creation strategies for the Pothe Holo Dekha campaign on youth-led storytelling for gender justice, maintaining consistent social media visibility through static and dynamic posts.',
      'Secured extensive media coverage across television, print, and online platforms for campaigns such as Pother Dabi and Pothe Holo Dekha, enhancing outreach and stakeholder engagement.'
    ]
  },
  {
    role: 'Project Assistant, Anirban Rise and Lead: Women Returnship Programme',
    organization: 'WaterAid Bangladesh',
    period: 'Nov, 2024 – Feb, 2025',
    bulletPoints: [
      'Assisted the Project Coordinator in managing the day-to-day administrative tasks of the Women Returnship Programme.',
      'Organised and maintained project documentation, ensuring all records were up to date and easily accessible.',
      'Facilitated internal coordination between the programme, communications, finance, and administrative teams to ensure smooth workflow and alignment of project activities.'
    ]
  },
  {
    role: 'Head of Creative (Media and Communications)',
    organization: 'Pranon Global Limited',
    period: 'May, 2023 – Sept, 2024',
    bulletPoints: [
      'Worked with the Head of PR, Marketing and Communications to lead the development of an organisational communications strategy and to develop and deliver operational plans relevant to the area of responsibility.',
      'Led creative copywriting that empowered internal and external audiences both online and offline.'
    ]
  },
  {
    role: 'Founder and CEO',
    organization: 'Classbus – An online learning platform',
    period: 'Dec, 2021 – Dec, 2022',
    bulletPoints: [
      'Understood market trends, identified competitors, and developed new markets as part of business development activities for business development.',
      'Managed intellectual property rights, contracts, and agreements under legal affairs.',
      'Developed marketing strategies and implemented advertising tactics, including public relations campaigns.',
      'Formulated product development strategies and managed sales channels for company products and services.',
      'Supervised nine team members out of a total of twenty-seven workers at ClassBus.'
    ]
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: 'Bachelor of Social Science in Public Administration',
    institution: 'Shahjalal University of Science & Technology, Sylhet, Bangladesh',
    period: '2018 – 2022',
    gpa: 'CGPA 3.08',
  },
  {
    degree: 'Higher Secondary Certificate',
    institution: 'Dhaka Residential Model College, Dhaka, Bangladesh',
    period: '2015 – 2017',
    gpa: 'CGPA 4.67',
    bullets: ['Awarded national general scholarship.']
  }
];

export const PROF_QUALIFICATIONS: ProfessionalQualification[] = [
  {
    title: 'Motion Graphics',
    institute: 'Pathshala South Asian Media Institute',
    year: 'Ongoing'
  },
  {
    title: 'AI for Smarter Training: Transforming Trainers into AI-Powered Facilitator',
    institute: 'Bangladesh Organisation for Learning and Development',
    year: 'Jul-25'
  },
  {
    title: 'Workshop on Facebook Ads',
    institute: 'Learning Bangladesh, Bangladesh',
    year: 'Apr-25'
  },
  {
    title: 'Social Media Marketing',
    institute: 'Udemy, Online',
    year: 'Sep-20'
  }
];

export const CIVIL_ENGAGEMENT: CivilEngagement[] = [
  {
    role: 'President',
    organization: 'Student Association of Thakurgaon, SUST',
    period: 'Jan 2022 – Dec 2022'
  },
  {
    role: 'Debate Director',
    organization: 'SUST School of Debate',
    period: 'Mar 2018 – Dec 2019'
  },
  {
    role: 'General Secretary',
    organization: 'Remians Debating Society, Dhaka Residential Model College',
    period: 'Jan 2016 – Jan 2017'
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: 'Research Paper Presentation',
    details: 'International Conference on Social Work and Sustainable Social Development 2023: Presented the paper “The Future Implications of Online Education in Public Universities in Bangladesh.”'
  },
  {
    title: 'Winner, Grameenphone Accelerator 3.0',
    details: 'Selected for a mentor-led programme supporting tech startups with equity-free grants, expert mentorship, and investor access (Jun 2022).'
  },
  {
    title: 'Intern',
    details: 'Riseup Labs (www.riseuplabs.com), Mar 2021 – May 2021.'
  }
];


export const EXPERTISE_PILLARS: ExpertisePillar[] = [
  {
    id: 'branding',
    title: 'Branding & Design',
    description: 'Cohesive visual identities and publication layouts adhering to rigorous global brand guidelines.',
    longDescription: 'Ensuring absolute structural integrity of complex materials (magazines, technical policy briefs, impact reports) with custom typography, clean grids, and strict adherence to organizational design languages.',
    iconName: 'Layers'
  },
  {
    id: 'photography',
    title: 'Photography',
    description: 'Dignified, impactful field documentation capturing grassroots transformation and human resilience.',
    longDescription: 'Capturing ethical, story-driven field photography that honors community subjects, supports advocacy narratives, and meets international NGO editorial standards.',
    iconName: 'Camera'
  },
  {
    id: 'cinematography',
    title: 'Cinematography',
    description: 'Professional video, documentary production, and dynamic motion graphic engineering.',
    longDescription: 'Directing, shooting, and editing video narratives that compress weeks of technical research into high-impact, emotional stories optimized for policy makers and digital campaigns.',
    iconName: 'TvPlay'
  },
  {
    id: 'content',
    title: 'Content Creation',
    description: 'End-to-end digital campaigns, social media launches, and persuasive web content frameworks.',
    longDescription: 'Strategizing and executing multi-channel digital campaigns that translate development milestones into digestible, scroll-stopping graphic assets, social clips, and copy.',
    iconName: 'Sparkles'
  }
];

export const DESIGN_PROJECTS: DesignProject[] = [
  {
    id: 'spark-of-change',
    title: 'Spark of Change',
    client: 'WASH Systems for Health (WS4H) Project',
    tag: 'Youth Volunteer Booklet',
    description: 'Youth volunteer stories booklet documenting leadership that bridged last-mile governance gaps during the 2024 political transition in Bangladesh.',
    longDescription: 'A premium-bound multi-page booklet compiled during the 2024 transition. It profiles courageous youth leaders taking ownership of local water and sanitation services, designed with a youth-centric, high-advocacy layout and crisp photographic integrations.',
    category: 'Publications',
    thumbnailPlaceholderColor: 'bg-teal-950 border-teal-500/20 text-teal-400',
    iconName: 'BookOpen'
  },
  {
    id: 'ananya',
    title: 'ANANYA',
    client: 'WaterAid Bangladesh',
    tag: 'MHM App Publication',
    description: 'Menstrual Health Management (MHM) documentation showcasing adolescent-led water and hygiene transformations.',
    longDescription: 'Coordinated design production and grid formatting for ANANYA, detailing Menstrual Health Management (MHM) app adoption. Designed under strict WaterAid global brand standards, blending high-readability metrics, data tables, and user testimonial callouts.',
    category: 'Branding & Layout',
    thumbnailPlaceholderColor: 'bg-emerald-950 border-emerald-500/20 text-emerald-400',
    iconName: 'BookMarked'
  },
  {
    id: 'stories-of-change',
    title: 'Stories of Change',
    client: 'WS4H Project & Municipal Partners',
    tag: 'Local Governance Publication',
    description: 'Documenting institutional ward-level planning and grassroots advocacy translated into formal municipal budget outcomes.',
    longDescription: 'A technical publication detailing ward-level inclusive planning. Designed to communicate complex administrative reforms to municipal authorities, using readable typographic hierarchies, map indicators, and clean infographic summaries.',
    category: 'Publications',
    thumbnailPlaceholderColor: 'bg-sky-950 border-sky-500/20 text-sky-400',
    iconName: 'FileText'
  },
  {
    id: 'vinnova-brief',
    title: 'Vinnova Comparative Study Brief',
    client: 'Academic Research Partners',
    tag: 'One-Pager Research Summary',
    description: 'Sleek single-page research brief layout compressing empirical comparisons into highly scannable briefs.',
    longDescription: 'A high-density comparative study summary. Restructured text-heavy research papers into a single page with precise spacing, clear tables, and an intuitive visual path for researchers and development executives.',
    category: 'Research Summaries',
    thumbnailPlaceholderColor: 'bg-indigo-950 border-indigo-500/20 text-indigo-400',
    iconName: 'Compass'
  },
  {
    id: 'youth-voice',
    title: 'Youth Voice',
    client: 'WaterAid Campaign',
    tag: 'One-Page Design Series',
    description: 'A responsive poster and flyer sequence to mobilize climate advocacy across secondary school districts.',
    longDescription: 'Designed as a vibrant, high-contrast series targeting young climate and WASH champions. Employs asymmetric typography, empowering messaging, and solid grids suitable for digital sharing and physical flyering.',
    category: 'Campaign collateral',
    thumbnailPlaceholderColor: 'bg-amber-950 border-amber-500/20 text-amber-400',
    iconName: 'Megaphone'
  },
  {
    id: 'safeguarding-posters',
    title: 'Safeguarding Campaign Posters',
    client: 'WaterAid Bangladesh & PAHELA Project',
    tag: 'Institutional Awareness Design',
    description: 'Policy-aligned posters promoting safe work environments and ethical community engagement practices.',
    longDescription: 'A critical set of in-office and field office posters translating complex human resources safeguarding policies into friendly, direct icons and bold, legible behavioral codes in English and Bangla.',
    category: 'Branding & Layout',
    thumbnailPlaceholderColor: 'bg-purple-950 border-purple-500/20 text-purple-400',
    iconName: 'ShieldAlert'
  },
  {
    id: 'cpj-impact-brochure',
    title: 'Impact Story Brochure',
    client: 'Refugee Studies Unit, CPJ',
    tag: 'Advocacy Foldout Brochure',
    description: 'Dignified narrative-driven brochure summarizing humanitarian research and policy insights.',
    longDescription: 'Published with the Centre for Peace and Justice (CPJ) to highlight stories of refugee education initiatives. Created a highly compassionate visual presentation incorporating quote grids and structured research footnotes.',
    category: 'Publications',
    thumbnailPlaceholderColor: 'bg-rose-950 border-rose-500/20 text-rose-400',
    iconName: 'Award'
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: 'cinematography-reel',
    title: 'Cinematography Portfolio Reel',
    campaign: 'Director of Photography & Editor Showcase',
    description: 'A curated compilation of field documentaries, narrative shorts, and digital campaign promos shot and cut by Mosaddak. Showcases dynamic framing, natural lighting, and sound synchronization.',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder embed link
    thumbnail: '🎬'
  },
  {
    id: 'team-water',
    title: 'TeamWater Digital Campaign Film',
    campaign: 'WaterAid Bangladesh Digital Launch',
    description: 'An emotional, fast-paced digital video campaign following youth climate activists demanding sanitation security in high-risk coastal zones.',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: '💧'
  },
  {
    id: 'blue-typography',
    title: 'The Blue Campaign Motion Piece',
    campaign: 'Typography & Motion Graphics Focus',
    description: 'A beautiful typography motion graphic exploring ocean policy facts and water conservation targets, using energetic kinetics and synchronized voiceover.',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: '🌊'
  }
];

// Realistic representations of social and motion design assets with distinct layouts
export const SOCIAL_TILES: SocialTile[] = [
  { id: 't1', title: 'Hygiene Day Social Campaign Post', type: 'social', colorClass: 'bg-teal-900 text-teal-200', aspectClass: 'col-span-1 row-span-1' },
  { id: 't2', title: 'Youth Climate Actions Instagram Reel', type: 'motion', colorClass: 'bg-slate-900 text-slate-200', aspectClass: 'col-span-1 row-span-2' },
  { id: 't3', title: 'MHM Awareness Visual Slide', type: 'campaign', colorClass: 'bg-rose-950 text-rose-200', aspectClass: 'col-span-2 row-span-1' },
  { id: 't4', title: 'World Water Forum Story Flyer', type: 'social', colorClass: 'bg-sky-900 text-sky-200', aspectClass: 'col-span-1 row-span-1' },
  { id: 't5', title: 'Safe Water Brief Banner', type: 'campaign', colorClass: 'bg-emerald-950 text-emerald-200', aspectClass: 'col-span-1 row-span-1' },
  { id: 't6', title: 'Transition Leadership Post', type: 'social', colorClass: 'bg-amber-900 text-amber-200', aspectClass: 'col-span-1 row-span-1' },
  { id: 't7', title: 'CPJ Human Rights Infographic', type: 'campaign', colorClass: 'bg-indigo-900 text-indigo-200', aspectClass: 'col-span-2 row-span-2' },
  { id: 't8', title: 'Sanitation for All Kinetic Post', type: 'motion', colorClass: 'bg-blue-950 text-blue-200', aspectClass: 'col-span-1 row-span-1' },
  { id: 't9', title: 'WaterAid Safeguarding Guideline Card', type: 'social', colorClass: 'bg-purple-900 text-purple-200', aspectClass: 'col-span-1 row-span-1' },
  { id: 't10', title: 'WS4H Progress Summary Banner', type: 'campaign', colorClass: 'bg-emerald-900 text-emerald-100', aspectClass: 'col-span-1 row-span-1' },
  { id: 't11', title: 'Menstrual Equity Short Film Cover', type: 'motion', colorClass: 'bg-pink-950 text-pink-200', aspectClass: 'col-span-1 row-span-2' },
  { id: 't12', title: 'Local Governance Dialogue Post', type: 'social', colorClass: 'bg-teal-950 text-teal-100', aspectClass: 'col-span-1 row-span-1' },
  { id: 't13', title: 'Community Handwashing Graphic Set', type: 'campaign', colorClass: 'bg-sky-950 text-sky-100', aspectClass: 'col-span-2 row-span-1' },
  { id: 't14', title: 'Climate Adaptation Debate Series Promo', type: 'social', colorClass: 'bg-amber-950 text-amber-100', aspectClass: 'col-span-1 row-span-1' },
  { id: 't15', title: 'Annual Report Release Instagram Teaser', type: 'motion', colorClass: 'bg-slate-800 text-slate-100', aspectClass: 'col-span-1 row-span-1' },
  { id: 't16', title: 'Volunteer Recruitment Cover', type: 'campaign', colorClass: 'bg-red-950 text-red-200', aspectClass: 'col-span-1 row-span-1' }
];
