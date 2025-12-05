import Logo1 from "@workspace/assets/images/company-logo-1.svg";
import Logo2 from "@workspace/assets/images/company-logo-2.svg";
import Logo3 from "@workspace/assets/images/company-logo-3.svg";
import Logo4 from "@workspace/assets/images/company-logo-4.svg";
import Logo5 from "@workspace/assets/images/company-logo-5.svg";
import KeyFeature1 from "@workspace/assets/images/key-feature-1.png";
import KeyFeature2 from "@workspace/assets/images/key-feature-2.png";
import KeyFeature3 from "@workspace/assets/images/key-feature-3.png";
import KeyFeature4 from "@workspace/assets/images/key-feature-4.png";
import Collaboration1 from "@workspace/assets/icons/collaboration-1.svg";
import Collaboration2 from "@workspace/assets/icons/collaboration-2.svg";
import Collaboration3 from "@workspace/assets/icons/collaboration-3.svg";
import CompanyIcon1 from "@workspace/assets/icons/company-1.svg";
import CompanyIcon2 from "@workspace/assets/icons/company-2.svg";
import CompanyIcon3 from "@workspace/assets/icons/company-3.svg";
import TestAvatar1 from "@workspace/assets/images/testimonial-avatar-1.png";
import TestAvatar2 from "@workspace/assets/images/testimonial-avatar-2.png";
import TestAvatar3 from "@workspace/assets/images/testimonial-avatar-3.png";
import TestAvatar4 from "@workspace/assets/images/testimonial-avatar-4.png";
import TestAvatar5 from "@workspace/assets/images/testimonial-avatar-5.png";
import TestAvatar6 from "@workspace/assets/images/testimonial-avatar.png";
import Team1 from "@workspace/assets/images/team-1.jpg";
import Team2 from "@workspace/assets/images/team-2.jpg";
import Team3 from "@workspace/assets/images/team-3.jpg";
import Team4 from "@workspace/assets/images/team-4.jpg";
import Team5 from "@workspace/assets/images/team-5.jpg";
import Team6 from "@workspace/assets/images/team-6.jpg";
import BlogImage1 from "@workspace/assets/images/blog-1.jpg";
import BlogImage2 from "@workspace/assets/images/blog-2.jpg";
import BlogImage3 from "@workspace/assets/images/blog-3.jpg";
import BlogImage4 from "@workspace/assets/images/blog-4.jpg";
import BlogImage5 from "@workspace/assets/images/blog-5.jpg";
import BlogImage6 from "@workspace/assets/images/blog-6.jpg";
import BlogImage7 from "@workspace/assets/images/blog-7.jpg";
import BlogImage8 from "@workspace/assets/images/blog-8.jpg";
import BlogAvatar1 from "@workspace/assets/images/blog-avatar-1.png";
import BlogAvatar2 from "@workspace/assets/images/blog-avatar-2.png";
import BlogAvatar3 from "@workspace/assets/images/blog-avatar-3.png";
import BlogAvatar4 from "@workspace/assets/images/blog-avatar-4.png";
import BlogAvatar5 from "@workspace/assets/images/blog-avatar-5.png";
import BlogAvatar6 from "@workspace/assets/images/blog-avatar-6.png";
import BlogAvatar7 from "@workspace/assets/images/blog-avatar-7.png";
import BlogAvatar8 from "@workspace/assets/images/blog-avatar-8.png";

export const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

export const collaborationCards: CollaborationCard[] = [
  {
    title: "Real Time Data, Blazingly Fast",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    icon: Collaboration1,
    link: "",
  },
  {
    title: "Easy to Customize As Per Requirement",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    icon: Collaboration2,
    link: "",
  },
  {
    title: "Easy to Maintain Your Attendance Daily",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    icon: Collaboration3,
    link: "",
  },
];

export const companyLogos: CompanyLogo[] = [
  {
    id: 1,
    logo: Logo1,
    link: "https://slack.com/",
  },
  {
    id: 4,
    logo: Logo4,
    link: "https://www.zendesk.com/",
  },
  {
    id: 2,
    logo: Logo2,
    link: "https://docs.mufex.finance/mufex",
  },
  {
    id: 5,
    logo: Logo5,
    link: "https://www.udemy.com/",
  },
  {
    id: 3,
    logo: Logo3,
    link: "https://www.oracle.com/",
  },
];

export const keyFeatureCards: KeyFeatureCard[] = [
  {
    title: "Revolutionises the Way You Manage Your HR Tasks",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    image: KeyFeature1,
    link: "",
  },
  {
    title: "Seamless Attendance and Leave Tracking",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    image: KeyFeature2,
    link: "",
  },
  {
    title: "Efficient Recruitment and Onboarding Process",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    image: KeyFeature3,
    link: "",
  },
  {
    title: "Manage Your Holidays Very Easy",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    image: KeyFeature4,
    link: "",
  },
];

export const allJobs: Job[] = [
  {
    title: "Senior Software Developer",
    department: "Development",
    experience: "4 Years",
    type: "Full-Time",
    location: "California",
    jobDescription: `<h2>About the Role</h2>
      <p>We are seeking a highly skilled Senior Software Developer to join our dynamic and innovative engineering team. As a technical leader, you will play a crucial role in architecting, developing, and maintaining our enterprise-level applications that serve thousands of users globally. This position offers the opportunity to work on cutting-edge technologies while mentoring junior developers and influencing our technical direction.</p>
      
      <h3>Key Responsibilities Overview</h3>
      <p>In this role, you will lead the design and implementation of scalable, high-performance software solutions. You'll collaborate with product managers, designers, and other developers to translate business requirements into technical specifications and executable plans. We value developers who take ownership of their work, champion best practices, and continuously seek to improve our development processes.</p>
      
      <h3>Technical Environment</h3>
      <ul>
        <li><strong>Primary Stack:</strong> Node.js, React, TypeScript, AWS, Docker, Kubernetes</li>
        <li><strong>Databases:</strong> PostgreSQL, MongoDB, Redis</li>
        <li><strong>Methodologies:</strong> Agile/Scrum, CI/CD, Test-Driven Development</li>
        <li><strong>Tools:</strong> Git, JIRA, Jenkins, GraphQL, RESTful APIs</li>
      </ul>
      
      <h3>Project Examples</h3>
      <p>You will contribute to projects such as our customer-facing portal, internal administration systems, real-time analytics dashboards, and API integrations with third-party services. Our current focus includes migrating monolithic applications to microservices architecture and implementing advanced security protocols across all platforms.</p>
      
      <h3>What Success Looks Like</h3>
      <p>In your first 90 days, you'll be expected to lead at least one major feature development, participate in architectural decisions, and establish mentorship relationships with junior team members. Within six months, you should be driving process improvements and contributing to our technical roadmap.</p>
      
      <p><strong>Note:</strong> This position offers competitive compensation, comprehensive benefits, flexible work arrangements, and opportunities for professional growth and advancement within our rapidly expanding organization.</p>`,
    responsibilities: [
      "Design, develop, and maintain scalable software solutions using modern technologies and best practices",
      "Mentor and guide junior developers through code reviews, pair programming, and technical guidance sessions",
      "Participate in architectural discussions and decisions, ensuring solutions are scalable, maintainable, and secure",
      "Troubleshoot and debug complex applications, implementing effective solutions for production issues",
      "Stay updated with emerging technologies and industry trends, proposing innovative solutions to business challenges",
      "Collaborate with cross-functional teams including product, design, and QA to deliver high-quality features",
      "Write comprehensive technical documentation for systems, processes, and APIs",
      "Implement and advocate for automated testing, continuous integration, and deployment best practices",
    ],
  },
  {
    title: "Lead UI/UX Designer",
    department: "Design",
    experience: "2-3 Years",
    type: "Full-Time",
    location: "California",
    jobDescription: `<h2>About the Role</h2>
      <p>We are seeking a creative and strategic Lead UI/UX Designer to join our product design team. In this role, you will be responsible for shaping the user experience across our entire product ecosystem, from web applications to mobile interfaces. You will lead design projects from initial concept through final implementation, ensuring our products are not only visually stunning but also intuitive and user-friendly.</p>
      
      <h3>Design Leadership</h3>
      <p>As our Lead UI/UX Designer, you will establish and maintain our design system, create consistency across platforms, and set the standard for visual excellence. You'll work closely with product managers, developers, and stakeholders to translate complex requirements into elegant, user-centered solutions. This role requires both exceptional design skills and the ability to communicate design decisions effectively.</p>
      
      <h3>Design Process & Methodology</h3>
      <ul>
        <li><strong>Research:</strong> Conduct user interviews, surveys, and usability testing to inform design decisions</li>
        <li><strong>Strategy:</strong> Develop user personas, journey maps, and information architecture</li>
        <li><strong>Design:</strong> Create wireframes, prototypes, and high-fidelity mockups using industry-standard tools</li>
        <li><strong>Implementation:</strong> Collaborate with developers to ensure pixel-perfect implementation of designs</li>
        <li><strong>Validation:</strong> Measure design success through analytics and user feedback loops</li>
      </ul>
      
      <h3>Tools & Technologies</h3>
      <p>Our team primarily uses Figma for design and prototyping, complemented by Adobe Creative Suite for additional visual assets. Familiarity with design systems, component libraries, and accessibility standards (WCAG) is essential. Experience with user testing platforms like UserTesting or Maze is a plus.</p>
      
      <h3>Portfolio Expectations</h3>
      <p>Successful candidates will present a portfolio demonstrating a strong understanding of user-centered design principles, showcasing projects that highlight problem-solving skills, and explaining the rationale behind design decisions. We're particularly interested in seeing case studies that show the impact of design on business metrics.</p>
      
      <p><strong>Note:</strong> This position offers the opportunity to build a design team as we grow, with potential for advancement to Design Director within 18-24 months.</p>`,
    responsibilities: [
      "Create and maintain comprehensive design systems and component libraries for consistency across all platforms",
      "Collaborate with product and engineering teams to ensure designs are feasible and implemented correctly",
      "Conduct user research, including interviews, surveys, and usability testing to gather insights and validate designs",
      "Present design solutions and rationale to stakeholders, incorporating feedback into iterative design improvements",
      "Ensure consistency across all platforms while optimizing designs for specific device capabilities and constraints",
      "Mentor junior designers and establish design best practices within the organization",
      "Stay current with design trends, tools, and technologies, bringing innovative ideas to the team",
      "Advocate for accessibility and inclusive design principles throughout the product development process",
    ],
  },
  {
    title: "Business Development Manager",
    department: "Sales",
    experience: "6-7 Years",
    type: "Full-Time",
    location: "California",
    jobDescription: `<h2>About the Role</h2>
      <p>We are seeking an experienced and results-driven Business Development Manager to spearhead our expansion efforts in new markets and verticals. This senior role requires a strategic thinker with a proven track record of identifying and capitalizing on business opportunities. You will be responsible for developing and executing comprehensive business strategies to drive revenue growth and establish our company as a leader in the HR technology space.</p>
      
      <h3>Strategic Focus Areas</h3>
      <p>In this position, you will focus on three primary areas: expanding our enterprise client base, developing strategic partnerships with complementary technology providers, and identifying new market opportunities. You'll work closely with the executive team to align business development efforts with company objectives and contribute to our long-term growth strategy.</p>
      
      <h3>Market Analysis & Opportunity Identification</h3>
      <ul>
        <li><strong>Market Research:</strong> Conduct thorough analysis of target industries, competitors, and market trends</li>
        <li><strong>Lead Generation:</strong> Develop and implement strategies to identify and qualify high-value prospects</li>
        <li><strong>Partnership Development:</strong> Identify and cultivate relationships with potential partners and channel allies</li>
        <li><strong>Pricing Strategy:</strong> Contribute to pricing decisions based on market intelligence and competitive analysis</li>
        <li><strong>Growth Forecasting:</strong> Develop accurate forecasts and contribute to revenue planning processes</li>
      </ul>
      
      <h3>Target Industries</h3>
      <p>Our primary focus includes enterprise clients in technology, healthcare, financial services, and manufacturing sectors. Experience selling to HR departments, IT leadership, or C-suite executives in these industries is highly valued. Knowledge of HR technology landscapes, compliance requirements, and digital transformation initiatives will be crucial for success.</p>
      
      <h3>Compensation & Growth</h3>
      <p>This position offers a competitive base salary with uncapped commission potential, performance bonuses, and equity participation. Successful performance in this role can lead to advancement opportunities including Director of Business Development, VP of Sales, or other leadership positions within our growing organization.</p>
      
      <p><strong>Note:</strong> This role requires approximately 30% travel for client meetings, industry conferences, and partner engagements. We provide comprehensive support including a dedicated sales development representative, marketing resources, and state-of-the-art sales enablement tools.</p>`,
    responsibilities: [
      "Identify and pursue new business opportunities through targeted outreach, networking, and strategic initiatives",
      "Develop and manage strategic partnerships that expand our market reach and enhance our product offerings",
      "Manage complex sales pipelines and provide accurate forecasting to support business planning and resource allocation",
      "Lead negotiations and contract discussions, ensuring favorable terms while maintaining strong client relationships",
      "Represent the company at industry events, conferences, and networking functions to build brand awareness",
      "Collaborate with marketing to develop targeted campaigns and sales collateral for different market segments",
      "Provide market feedback to product teams to inform roadmap decisions and competitive positioning",
      "Mentor junior business development staff and contribute to the development of sales processes and methodologies",
    ],
  },
  {
    title: "Business Analyst",
    department: "Sales",
    experience: "4 Years",
    type: "Full-Time",
    location: "California",
    jobDescription: `<h2>About the Role</h2>
      <p>We are seeking a detail-oriented and analytical Business Analyst to join our growing organization. In this role, you will serve as a critical bridge between business stakeholders and technical teams, translating business needs into actionable requirements and specifications. You will be responsible for analyzing processes, identifying improvement opportunities, and supporting the implementation of solutions that drive efficiency and effectiveness across the organization.</p>
      
      <h3>Analytical Framework</h3>
      <p>As a Business Analyst, you will employ various analytical techniques including process mapping, data analysis, requirements gathering, and impact assessment. You'll work on diverse projects ranging from system implementations to process optimizations, providing insights that inform strategic decisions and operational improvements.</p>
      
      <h3>Core Analytical Activities</h3>
      <ul>
        <li><strong>Requirements Elicitation:</strong> Conduct interviews, workshops, and surveys to gather comprehensive business requirements</li>
        <li><strong>Process Analysis:</strong> Document current state processes and design optimized future state workflows</li>
        <li><strong>Data Analysis:</strong> Analyze datasets to identify trends, patterns, and opportunities for improvement</li>
        <li><strong>Solution Assessment:</strong> Evaluate potential solutions against business requirements and constraints</li>
        <li><strong>Impact Analysis:</strong> Assess the potential impact of changes on processes, systems, and stakeholders</li>
      </ul>
      
      <h3>Tools & Methodologies</h3>
      <p>You will utilize a variety of tools including JIRA for requirements management, SQL for data analysis, Visio or Lucidchart for process mapping, and Excel for data manipulation and reporting. Familiarity with Agile methodologies, business intelligence tools, and project management frameworks will be valuable in this role.</p>
      
      <h3>Project Involvement</h3>
      <p>You will support projects across multiple domains including sales operations, customer success, marketing automation, and internal systems. Recent projects include CRM optimization, sales forecasting improvements, customer segmentation analysis, and automation of manual reporting processes.</p>
      
      <p><strong>Note:</strong> This position offers opportunities for certification support (CBAP, PMI-PBA) and professional development. Successful analysts may progress to senior analyst roles, product ownership positions, or project management tracks within the organization.</p>`,
    responsibilities: [
      "Analyze complex business processes and workflows, identifying inefficiencies and recommending improvements",
      "Prepare detailed reports, presentations, and documentation to communicate findings and recommendations to stakeholders",
      "Collaborate with stakeholders across departments to gather, document, and prioritize business requirements",
      "Support the implementation of new systems and processes, including testing, training, and change management activities",
      "Monitor project progress and outcomes, measuring success against defined metrics and KPIs",
      "Develop and maintain business process documentation, including workflows, procedures, and user guides",
      "Facilitate meetings and workshops to align stakeholders, resolve conflicts, and drive decisions",
      "Create and maintain data dictionaries, metadata repositories, and other information management artifacts",
    ],
  },
  {
    title: "React JS Developer",
    department: "Development",
    experience: "3 Years",
    type: "Full-Time",
    location: "California",
    jobDescription: `<h2>About the Role</h2>
      <p>We are hiring a skilled React JS Developer to join our frontend development team. In this role, you will be responsible for building responsive, interactive, and high-performance web applications using modern React ecosystems. You will work closely with designers, backend developers, and product managers to create exceptional user experiences that meet business objectives and technical requirements.</p>
      
      <h3>Technical Focus</h3>
      <p>As a React JS Developer, you will focus on creating reusable components, optimizing application performance, and ensuring code quality through testing and code reviews. You'll work with the latest versions of React and related libraries, contributing to architectural decisions and staying current with evolving best practices in frontend development.</p>
      
      <h3>Technology Stack</h3>
      <ul>
        <li><strong>Core Framework:</strong> React 18+, TypeScript, Next.js</li>
        <li><strong>State Management:</strong> Redux Toolkit, Context API, React Query</li>
        <li><strong>Styling:</strong> Styled Components, Tailwind CSS, CSS Modules</li>
        <li><strong>Testing:</strong> Jest, React Testing Library, Cypress</li>
        <li><strong>Build Tools:</strong> Webpack, Vite, ESLint, Prettier</li>
        <li><strong>APIs:</strong> REST, GraphQL, WebSocket for real-time features</li>
      </ul>
      
      <h3>Project Examples</h3>
      <p>You will contribute to projects including our customer dashboard, administration panel, real-time collaboration features, and mobile-responsive web applications. Current initiatives include migrating class components to functional components with hooks, implementing server-side rendering for improved SEO, and optimizing bundle sizes for faster load times.</p>
      
      <h3>Development Practices</h3>
      <p>Our team follows Agile methodologies with two-week sprints, daily standups, and regular retrospectives. We emphasize code quality through peer reviews, automated testing, and continuous integration. You'll have opportunities to contribute to our component library, participate in technical spike activities, and mentor junior developers as you grow in the role.</p>
      
      <p><strong>Note:</strong> This position offers competitive compensation, remote-friendly work arrangements, professional development budget for conferences and courses, and a collaborative team environment focused on technical excellence.</p>`,
    responsibilities: [
      "Build and maintain responsive React applications following best practices for performance, accessibility, and maintainability",
      "Write clean, efficient, and well-documented code with appropriate test coverage using testing frameworks",
      "Integrate RESTful APIs and third-party services, handling authentication, error management, and data validation",
      "Participate in sprint planning, daily standups, code reviews, and retrospectives as part of our Agile development process",
      "Troubleshoot and resolve technical issues, performing root cause analysis and implementing preventative measures",
      "Collaborate with UX/UI designers to implement pixel-perfect interfaces that work across different devices and browsers",
      "Optimize applications for maximum speed and scalability, implementing performance monitoring and improvement strategies",
      "Stay current with React ecosystem developments, evaluating new libraries and tools for potential adoption",
    ],
  },
  {
    title: "Social Media Marketing Specialist",
    department: "Marketing",
    experience: "0-1 Years",
    type: "Full-Time",
    location: "California",
    jobDescription: `<h2>About the Role</h2>
      <p>We are seeking a creative and data-driven Social Media Marketing Specialist to join our growing marketing team. This entry-level position is perfect for someone passionate about digital marketing, storytelling, and building online communities. You will be responsible for developing and executing social media strategies that increase brand awareness, engage our audience, and support our business objectives across multiple platforms.</p>
      
      <h3>Social Media Strategy</h3>
      <p>As our Social Media Marketing Specialist, you will manage our presence across key platforms including LinkedIn, Twitter, Instagram, and Facebook. You'll develop content calendars, create engaging posts, monitor conversations, and analyze performance to continuously improve our social media efforts. This role combines creative content creation with analytical thinking to maximize impact.</p>
      
      <h3>Platform Responsibilities</h3>
      <ul>
        <li><strong>LinkedIn:</strong> Establish thought leadership through industry insights, company updates, and professional content</li>
        <li><strong>Twitter:</strong> Engage in industry conversations, share quick updates, and provide customer support</li>
        <li><strong>Instagram:</strong> Showcase company culture, employee stories, and visual content that humanizes our brand</li>
        <li><strong>Facebook:</strong> Share broader company news, events, and community-focused content</li>
        <li><strong>YouTube/TikTok:</strong> Develop video content strategies as we expand into emerging platforms</li>
      </ul>
      
      <h3>Content Creation & Management</h3>
      <p>You will create various content types including graphics (using Canva or Adobe Creative tools), short-form videos, blog post snippets, infographics, and interactive content. You'll work with our content team to repurpose long-form content for social media and collaborate with designers on visual assets. Familiarity with social media management tools like Hootsuite, Buffer, or Sprout Social is expected.</p>
      
      <h3>Analytics & Reporting</h3>
      <p>This role requires both creative and analytical skills. You will track key metrics including engagement rates, follower growth, click-through rates, and conversion metrics. Monthly reporting will include insights, recommendations, and ROI analysis for social media activities. Experience with Google Analytics and social media analytics platforms is a plus.</p>
      
      <p><strong>Note:</strong> This is an excellent opportunity for someone starting their career in digital marketing. We provide comprehensive training, mentorship from senior marketers, and opportunities for growth into broader marketing roles. Successful performance could lead to advancement to Social Media Manager or broader digital marketing positions within 18-24 months.</p>`,
    responsibilities: [
      "Manage daily operations of social media accounts including content posting, community engagement, and monitoring",
      "Develop and implement comprehensive social media marketing campaigns aligned with business objectives and brand voice",
      "Analyze engagement metrics, audience insights, and campaign performance to optimize strategies and content",
      "Collaborate with design and content teams to create compelling visual and written content for social platforms",
      "Stay updated with social media trends, platform updates, and best practices to maintain competitive advantage",
      "Monitor brand mentions and industry conversations, engaging appropriately and escalating issues when necessary",
      "Assist in managing social media advertising campaigns, including budget tracking and performance analysis",
      "Create and maintain social media calendars, ensuring consistent posting schedules and thematic alignment",
    ],
  },
];

export const aboutCompanyCards: AboutCompanyCard[] = [
  {
    title: "Our Vision",
    description:
      "We aim to build a human-centered HR platform that makes everyday workflows simpler and teams more effective. By combining intuitive design with scalable features and strong data protections, we help organizations focus on people and measurable outcomes over time.",
    icon: CompanyIcon1,
  },
  {
    title: "Our Mission",
    description:
      "Deliver fast, reliable HR tools that adapt to teams of all sizes while remaining easy for everyday users to adopt. We focus on performance, practical automation, and integrations that reduce friction so organizations can operate more efficiently and scale with confidence.",
    icon: CompanyIcon2,
  },
  {
    title: "Our Value",
    description:
      "We are committed to transparency, strong data security, and continual improvement in everything we build. Our focus on accessibility, privacy, and long-term customer partnerships ensures that features deliver clear value and reliable results for organizations.",
    icon: CompanyIcon3,
  },
];

export const companyStatistics: CompanyStatistic[] = [
  {
    metric: "95%",
    title: "Accurate Data Analytics",
    description:
      "We provide highly accurate analytics that help teams make informed decisions. Our reporting is built to surface actionable insights and reduce ambiguity in people-related metrics.",
  },
  {
    metric: "2022",
    title: "Company Founded",
    description:
      "Founded with a mission to simplify HR workflows, we focus on building reliable tools that scale with teams. Since inception we have prioritized performance, security, and customer feedback.",
  },
  {
    metric: "250+",
    title: "Satisfied Companies",
    description:
      "Hundreds of companies trust our platform to manage HR operations and improve team productivity. We continue to grow our customer base through strong support and product improvements.",
  },
];

export const pricingCards: PricingCard[] = [
  {
    plan: "Freemium Plan",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    price: "FREE",
    slug: "freemium",
    benefits: [
      "1 Account Collaboration",
      "1 Meeting Per Week",
      "24/7 Customer Support",
      "No Updates Available",
      "Admin Not Provided",
      "1 Account Collaboration",
    ],
  },
  {
    plan: "Premium Plan",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    price: "$25/Month",
    slug: "premium",
    benefits: [
      "5 Account Collaboration",
      "5 Meeting Per Week",
      "24/7 Customer Support",
      "3 Updates Available",
      "Admin Provided",
      "1 Account Collaboration",
    ],
  },
  {
    plan: "Organization Plan",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    price: "$50/Month",
    slug: "organization",
    benefits: [
      "Unlimited Account Collaboration",
      "Unlimited Meeting Per Week",
      "24/7 Customer Support",
      "Unlimited Updates Available",
      "Admin & Super Admin Provided",
      "1 Account Collaboration",
    ],
  },
];

export const faqItems: FAQItem[] = [
  {
    title: "Can We Use This Platform Without Subscriptions?",
    description:
      "Yes — you can use the platform with the Freemium plan which includes core features at no cost. Subscriptions (Premium/Organization) unlock higher limits, additional admin capabilities, and priority support for teams that need them.",
  },
  {
    title: "Can We Have Create Multiple Collaboration On This Platform?",
    description:
      "Yes. The platform supports creating multiple collaborations (teams or workspaces). You can invite members to each collaboration, set roles and permissions, and manage projects independently across collaborations.",
  },
  {
    title: "How This HRMS Is Different Then Other Platforms?",
    description:
      "This HRMS focuses on fast real-time data, easy customization, and a clean, intuitive interface. It provides modular features (attendance, recruitment, holidays) that integrate smoothly with your workflows and scalable permissions for organizations of any size.",
  },
  {
    title: "What Are The Requirement System For This?",
    description:
      "The platform runs in modern browsers (Chrome, Edge, Firefox, Safari) and requires a stable internet connection. For self-hosted deployments check server requirements in the README (Node.js, database, and environment variables). Recommended: up-to-date OS and browser for best experience.",
  },
];

export const testimonialCards: TestimonialCard[] = [
  {
    name: "Stephen Hardly",
    role: "Founder",
    avatar: TestAvatar1,
    description:
      "This platform transformed how our team collaborates — fast, reliable and easy to use. The onboarding process was smooth and support was very responsive.",
    date: "12:30 AM, Oct 23, 2023",
  },
  {
    name: "Cody Fisher",
    role: "Owner",
    avatar: TestAvatar2,
    description:
      "We saw immediate improvements in team coordination after switching. The tools for attendance and leave tracking are particularly helpful.",
    date: "12:30 AM, Oct 23, 2023",
  },
  {
    name: "Leslie Alexander",
    role: "CTO",
    avatar: TestAvatar3,
    description:
      "Highly customisable and easy to integrate with our existing workflows. Performance is solid and the UI is intuitive.",
    date: "12:30 AM, Oct 23, 2023",
  },
  {
    name: "Jane Cooper",
    role: "Co-Founder",
    avatar: TestAvatar4,
    description:
      "We appreciate the thoughtful feature set — recruitment, attendance and holidays are all simpler to manage now.",
    date: "12:30 AM, Oct 23, 2023",
  },
  {
    name: "Robert Fox",
    role: "Founder",
    avatar: TestAvatar5,
    description:
      "Reliable, well-designed and packed with useful features. The team loves the improved visibility into HR workflows.",
    date: "12:30 AM, Oct 23, 2023",
  },
  {
    name: "Guy Hawkins",
    role: "Founder",
    avatar: TestAvatar6,
    description:
      "An excellent platform that streamlined our HR processes. The UI is clean and the features meet our team's needs.",
    date: "12:30 AM, Oct 23, 2023",
  },
];

export const footerLinks: FooterLinkSection[] = [
  {
    title: "Product",
    links: [
      { label: "Updates", href: "/updates" },
      { label: "Security", href: "/security" },
      { label: "Mobile App", href: "/mobile" },
      { label: "Chrome Extension", href: "/chrome-extension" },
      { label: "iOS Patch", href: "/ios" },
    ],
  },
  {
    title: "Company Service",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Careers", href: "/careers" },
      { label: "Delivery Information", href: "/delivery" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Talk To Support", href: "/support" },
      { label: "API Settings", href: "/api-settings" },
      { label: "System Status", href: "/status" },
    ],
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Guy Hawkins",
    role: "Founder",
    avatar: Team1,
    socials: [
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "twitter", url: "https://twitter.com" },
    ],
  },
  {
    name: "Arlene McCoy",
    role: "Founder",
    avatar: Team2,
    socials: [
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "twitter", url: "https://twitter.com" },
    ],
  },
  {
    name: "Theresa Webb",
    role: "Founder",
    avatar: Team3,
    socials: [
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "twitter", url: "https://twitter.com" },
    ],
  },
  {
    name: "Esther Howard",
    role: "Founder",
    avatar: Team4,
    socials: [
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "twitter", url: "https://twitter.com" },
    ],
  },
  {
    name: "Kristin Watson",
    role: "Founder",
    avatar: Team5,
    socials: [
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "twitter", url: "https://twitter.com" },
    ],
  },
  {
    name: "Savannah Nguyen",
    role: "Founder",
    avatar: Team6,
    socials: [
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "twitter", url: "https://twitter.com" },
    ],
  },
];

export const allBlogs: BlogPost[] = [
  {
    title: "Introducing The Self-Service Customer Portal",
    description:
      "Discover how our new self-service portal transforms the way employees interact with HR, reducing administrative overhead while improving overall satisfaction and engagement.",
    author: {
      name: "Stephen Hardly",
      role: "Founder",
      avatar: BlogAvatar1,
    },
    image: BlogImage1,
    blog: {
      content: `
<h2>Transforming HR Operations with Self-Service Capabilities</h2>
<p>
The modern workplace demands efficiency and accessibility. Our self-service customer portal is designed to empower employees by giving them direct access to HR information and processes, 24/7. This eliminates bottlenecks and reduces the need for HR staff to handle routine inquiries.
</p>

<h3>Key Benefits</h3>
<ul>
<li><strong>Enhanced employee self-service capabilities</strong> - Employees can manage their own leave requests, view pay stubs, and update personal information without HR intervention.</li>
<li><strong>Reduced HR administrative burden</strong> - HR teams can focus on strategic initiatives instead of fielding repetitive questions.</li>
<li><strong>Real-time access to HR information</strong> - Employees get instant access to policies, benefits details, and company announcements.</li>
<li><strong>Improved employee satisfaction and engagement</strong> - When employees feel empowered and informed, engagement naturally increases.</li>
<li><strong>Streamlined leave and attendance management</strong> - Automated workflows make leave approvals faster and more transparent.</li>
</ul>

<h3>Implementation & Results</h3>
<p>
Organizations using our portal have reported a 40% reduction in HR support tickets within the first three months. The intuitive interface requires minimal training, ensuring fast adoption across all departments.
</p>
      `,
    },
    likes: 25,
    comments: 9,
  },
  {
    title: "Building a Seamless Employee Experience",
    description:
      "Learn how intelligent HR systems create a frictionless experience for employees, from onboarding to day-to-day workflows, improving both productivity and satisfaction.",
    author: {
      name: "Esther Howard",
      role: "Founder",
      avatar: BlogAvatar2,
    },
    image: BlogImage2,
    blog: {
      content: `
<h2>Creating a World-Class Employee Experience</h2>
<p>
In today's competitive talent market, employee experience is a strategic differentiator. A seamless experience starts with accessible information, transparent processes, and responsive support systems that anticipate employee needs.
</p>

<h3>Core Experience Drivers</h3>
<ul>
<li><strong>Seamless employee experience</strong> - Integrated workflows across all HR touchpoints create a cohesive journey.</li>
<li><strong>Quick access to important documents</strong> - Employee handbooks, contracts, and certifications are just a click away.</li>
<li><strong>Transparent policy information</strong> - Clear communication about company policies reduces confusion and improves compliance.</li>
<li><strong>Faster approval workflows</strong> - Automated routing and notification systems accelerate decision-making.</li>
<li><strong>Better employee data management</strong> - Centralized records ensure data consistency and easy retrieval.</li>
</ul>

<h3>Impact on Retention</h3>
<p>
Research shows that companies with superior employee experiences see 40% higher retention rates. By investing in accessible HR systems, organizations send a clear message: employee success matters.
</p>
      `,
    },
    likes: 25,
    comments: 9,
  },
  {
    title: "24/7 HR Support: The Future of People Operations",
    description:
      "Explore how round-the-clock HR accessibility enables global teams to operate at peak efficiency without geographic or time-zone constraints.",
    author: {
      name: "Kristin Watson",
      role: "Founder",
      avatar: BlogAvatar3,
    },
    image: BlogImage3,
    blog: {
      content: `
<h2>Never-Offline HR Support</h2>
<p>
Global organizations face unique challenges managing distributed workforces across time zones. Traditional HR support models fail when employees in different regions have questions outside office hours. Our platform provides always-on support.
</p>

<h3>Advantages of 24/7 Accessibility</h3>
<ul>
<li><strong>24/7 access to HR services</strong> - Employees in any time zone can submit requests and access information whenever needed.</li>
<li><strong>Reduced support ticket volume</strong> - Self-service resources answer 70% of common questions automatically.</li>
<li><strong>Empowered employees with instant solutions</strong> - No more waiting for HR office hours to resolve simple issues.</li>
<li><strong>Consistent policy enforcement</strong> - Automated systems apply policies uniformly regardless of when requests are submitted.</li>
<li><strong>Data-driven insights into employee needs</strong> - Analytics reveal patterns in employee inquiries, informing HR strategy.</li>
</ul>

<h3>Global Support Architecture</h3>
<p>
Our cloud-based infrastructure ensures that all employees, whether in New York, London, Singapore, or Sydney, have equal access to HR services with consistent response times.
</p>
      `,
    },
    likes: 25,
    comments: 9,
  },
  {
    title: "Automating HR Workflows for Maximum Efficiency",
    description:
      "Discover how workflow automation eliminates manual processes, reduces errors, and allows HR teams to focus on high-impact strategic activities.",
    author: {
      name: "Annette Black",
      role: "Founder",
      avatar: BlogAvatar4,
    },
    image: BlogImage4,
    blog: {
      content: `
<h2>The Power of Intelligent Automation</h2>
<p>
Manual HR processes are not only time-consuming but also prone to error. By automating routine workflows, organizations can dramatically improve accuracy while freeing HR teams to focus on employee development and strategic initiatives.
</p>

<h3>Automation Benefits</h3>
<ul>
<li><strong>Automated HR workflows</strong> - Leave requests, approvals, and notifications flow seamlessly without manual intervention.</li>
<li><strong>Reduced manual data entry</strong> - Automated data capture from multiple sources eliminates redundant typing and transcription errors.</li>
<li><strong>Lower operational costs</strong> - Fewer manual touchpoints mean lower labor costs and improved resource allocation.</li>
<li><strong>Improved accuracy of HR records</strong> - Automation enforces data validation rules, ensuring records are always clean and accurate.</li>
<li><strong>Faster onboarding and offboarding processes</strong> - New hires and departing employees move through their journeys in days, not weeks.</li>
</ul>

<h3>Measurable ROI</h3>
<p>
Companies automating 50% of HR tasks see a 25% reduction in administrative costs within the first year, with improvements in speed and accuracy adding another 15% in indirect savings.
</p>
      `,
    },
    likes: 25,
    comments: 9,
  },
  {
    title: "Security and Compliance in Modern HR Systems",
    description:
      "Understand how advanced security protocols and compliance features protect sensitive employee data while meeting regulatory requirements across industries.",
    author: {
      name: "Cody Fisher",
      role: "Founder",
      avatar: BlogAvatar5,
    },
    image: BlogImage5,
    blog: {
      content: `
<h2>Building Trust Through Security</h2>
<p>
HR systems handle the most sensitive employee data: personal identities, compensation, medical information, and more. Security isn't a feature—it's a fundamental requirement. Our platform is built with security-first architecture.
</p>

<h3>Security & Compliance Features</h3>
<ul>
<li><strong>Advanced security and compliance features</strong> - Encryption, secure data centers, and regular security audits protect data against threats.</li>
<li><strong>Role-based access controls</strong> - Employees see only information relevant to their role; managers have appropriate oversight.</li>
<li><strong>Audit trails for all HR transactions</strong> - Every action is logged, providing complete visibility for compliance and investigation purposes.</li>
<li><strong>Data privacy protection</strong> - GDPR, CCPA, and other privacy regulations are built into our core architecture.</li>
<li><strong>Regulatory compliance automation</strong> - Regulatory updates are automatically incorporated, keeping your organization current.</li>
</ul>

<h3>Peace of Mind</h3>
<p>
With our compliance framework, HR leaders can confidently manage sensitive data knowing that both organizational and employee privacy are protected by industry-leading security practices.
</p>
      `,
    },
    likes: 25,
    comments: 9,
  },
  {
    title: "Customization and Integration for Your Unique Needs",
    description:
      "Learn how flexible, configurable HR systems adapt to your organization's unique processes and integrate seamlessly with existing technology ecosystems.",
    author: {
      name: "Guy Hawkins",
      role: "Founder",
      avatar: BlogAvatar6,
    },
    image: BlogImage6,
    blog: {
      content: `
<h2>One Size Does NOT Fit All</h2>
<p>
Every organization is unique. Your HR processes, terminology, and workflows reflect your company culture and operational requirements. A one-size-fits-all HR system can't adapt to this diversity. Our platform is built for customization.
</p>

<h3>Customization and Integration Capabilities</h3>
<ul>
<li><strong>Customizable portal layouts</strong> - Design the employee portal to match your brand and highlight what matters most to your workforce.</li>
<li><strong>Flexible permission settings</strong> - Define who can see and do what within granular detail, respecting your organizational structure.</li>
<li><strong>Integration with existing HR systems</strong> - Connect to payroll, benefits, ATS, and accounting systems you already rely on.</li>
<li><strong>Multi-language support</strong> - Global organizations can deliver the platform in employees' native languages.</li>
<li><strong>Mobile-responsive design</strong> - Whether employees use desktop, tablet, or phone, the experience is optimized.</li>
</ul>

<h3>Future-Proof Architecture</h3>
<p>
Our API-first design enables endless integration possibilities, so your HR system grows alongside your technology stack without requiring expensive rip-and-replace migrations.
</p>
      `,
    },
    likes: 25,
    comments: 9,
  },
  {
    title: "Improving Organizational Culture Through Better HR Practices",
    description:
      "Discover how thoughtful HR systems contribute to stronger company culture, improved employee retention, and a more engaged workforce.",
    author: {
      name: "Ronald Richards",
      role: "Founder",
      avatar: BlogAvatar7,
    },
    image: BlogImage7,
    blog: {
      content: `
<h2>HR as a Cultural Enabler</h2>
<p>
Culture doesn't just happen—it's built intentionally through consistent, fair, and transparent HR practices. When employees see that HR processes are efficient, equitable, and responsive, they feel valued and develop stronger organizational commitment.
</p>

<h3>Culture-Building Benefits</h3>
<ul>
<li><strong>Reduced time-to-resolution</strong> - When HR issues are resolved quickly, frustration doesn't fester and damage culture.</li>
<li><strong>Self-service knowledge base</strong> - Employees can find answers independently, building confidence and self-sufficiency.</li>
<li><strong>Improved employee retention</strong> - Organizations with strong HR practices see 20-30% lower turnover.</li>
<li><strong>Better recruitment experience</strong> - Impressed candidates talk about their great onboarding experience, improving your employer brand.</li>
<li><strong>Enhanced company culture</strong> - When HR feels responsive and fair, the entire organization feels more professional and trustworthy.</li>
</ul>

<h3>The Culture Multiplier Effect</h3>
<p>
Strong HR practices aren't just about efficiency—they're about signaling to employees that the organization cares about their experience. This has a multiplier effect throughout the company culture.
</p>
      `,
    },
    likes: 25,
    comments: 9,
  },
  {
    title: "Scaling HR for Hypergrowth: Infrastructure for the Future",
    description:
      "Explore how modern cloud-based HR platforms scale effortlessly to support rapid organizational growth without compromising performance or security.",
    author: {
      name: "Darlene Robertson",
      role: "Founder",
      avatar: BlogAvatar8,
    },
    image: BlogImage8,
    blog: {
      content: `
<h2>Built for Scale From Day One</h2>
<p>
Growing companies need HR systems that grow with them. Whether you're hiring your first 50 employees or scaling from 500 to 5,000, your HR platform must remain responsive, secure, and reliable. Our cloud architecture is built for this.
</p>

<h3>Scalability Features</h3>
<ul>
<li><strong>Scalable platform for growing companies</strong> - Add employees without worrying about performance degradation.</li>
<li><strong>Cloud-based infrastructure</strong> - No on-premise servers to manage; automatic updates and patches.</li>
<li><strong>Continuous feature updates</strong> - New capabilities are released regularly without disrupting operations.</li>
<li><strong>Dedicated customer support</strong> - As you grow, our support scales with you, providing guidance for new challenges.</li>
<li><strong>Regular security audits and updates</strong> - Your platform is continuously hardened against emerging threats.</li>
</ul>

<h3>Growth Without Pain</h3>
<p>
Many companies outgrow their HR systems during hypergrowth, forcing expensive migrations. Our platform is designed so that growth feels natural—you simply add more employees and the system expands to meet demand.
</p>
      `,
    },
    likes: 25,
    comments: 9,
  },
];
