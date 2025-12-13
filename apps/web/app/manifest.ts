import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HRMS',
    short_name: 'HRMS',
    description: 'HRMS (Human Resource Management System) is a modern, secure, and scalable platform for end-to-end people operations. It streamlines employee onboarding, profile management, attendance and leave tracking, payroll calculations, performance reviews, and role-based access control. With an intuitive dashboard, real-time insights, and mobile-friendly design, HRMS helps HR teams and managers make data-driven decisions, automate routine workflows, and improve organizational efficiency.',
    start_url: '/',
    display: 'standalone',
    categories: ['business', 'productivity', 'utilities'],
    lang: "en",
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}