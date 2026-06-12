import { courseCertificates } from '../../data/profile.js';
import { internshipTimeline } from '../../data/internships.js';

const now = () => new Date().toISOString();

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const fileLabel = (value: string) => {
  try {
    return decodeURIComponent(value.split('/').pop() || value);
  } catch {
    return value;
  }
};

export interface CertificateRecord {
  id: string;
  title: string;
  description: string;
  issueDate: string;
  category: string;
  tags: string[];
  pdf: string;
  link: string;
  pdfLabel: string;
  preview: string;
  previewLabel: string;
  createdAt: string;
  updatedAt: string;
}

export interface InternshipRecord {
  id: string;
  company: string;
  title: string;
  date: string;
  type: string;
  sector: string;
  summary: string;
  skills: string[];
  pdf: string;
  pdfLabel: string;
  thumbnail: string;
  thumbnailLabel: string;
  createdAt: string;
  updatedAt: string;
}

const baseCertificateEntries: Omit<CertificateRecord, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: 'Effective Leadership',
    description: 'A certificate that highlights practical leadership thinking and responsible direction.',
    issueDate: '',
    category: 'Professional development',
    tags: ['Leadership', 'Business'],
    pdf: '/certificates/Effective%20Leadership.pdf',
    link: '/certificates/Effective%20Leadership.pdf',
    pdfLabel: 'Effective Leadership.pdf',
    preview: '/images/internships/effective-leadership.jpg',
    previewLabel: 'effective-leadership.jpg',
  },
  {
    title: 'Resume Writing and Job Interviewing',
    description: 'Covers the essentials of presenting experience clearly and approaching interviews well.',
    issueDate: '',
    category: 'Professional development',
    tags: ['Career readiness', 'Communication'],
    pdf: '/certificates/Resume%20Writing%20and%20Job%20Interviewing.pdf',
    link: '/certificates/Resume%20Writing%20and%20Job%20Interviewing.pdf',
    pdfLabel: 'Resume Writing and Job Interviewing.pdf',
    preview: '/images/internships/resume-writing-job-interviewing.jpg',
    previewLabel: 'resume-writing-job-interviewing.jpg',
  },
];

const legacyCertificateEntries = courseCertificates.map((certificate) => ({
  title: certificate.title,
  description: certificate.description,
  issueDate: '',
  category: certificate.category,
  tags: [certificate.category],
  pdf: certificate.link,
  link: certificate.link,
  pdfLabel: fileLabel(certificate.link),
  preview: certificate.preview,
  previewLabel: fileLabel(certificate.preview),
}));

export const seedCertificates: CertificateRecord[] = [...baseCertificateEntries, ...legacyCertificateEntries].map(
  (certificate, index) => ({
    ...certificate,
    id: `${slugify(certificate.title)}-${index + 1}`,
    createdAt: now(),
    updatedAt: now(),
  }),
);

export const seedInternships: InternshipRecord[] = internshipTimeline.map((item, index) => ({
  id: item.id || `${slugify(item.company)}-${index + 1}`,
  company: item.company,
  title: item.title,
  date: item.date,
  type: item.type,
  sector: item.sector,
  summary: item.summary,
  skills: item.skills,
  pdf: item.pdf,
  pdfLabel: fileLabel(item.pdf),
  thumbnail: item.thumbnail,
  thumbnailLabel: fileLabel(item.thumbnail),
  createdAt: now(),
  updatedAt: now(),
}));

