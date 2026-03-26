export const NAV_LINKS = [
  { name: 'Home', target: 'home' },
  { name: 'About', target: 'about' },
  { name: 'Projects', target: 'projects' },
  { name: 'Skills', target: 'skills' },
  { name: 'Contact', target: 'contact' },
];

export const PROJECTS = [
  {
    title: 'NeonThreads',
    tech: ['MERN Stack', 'React Native', 'Expo SDK 54', 'MongoDB', 'UPI Integration'],
    description: 'Full-stack custom t-shirt e-commerce platform with React Native mobile app (Expo SDK 54) and React web admin panel. Features dark neon aesthetic with cyan/magenta theme, UPI payment integration, and order management system.',
    url: 'https://dressappclient.onrender.com/',
    highlight: true,
  },
  {
    title: 'Smart School Management System',
    tech: ['MERN Stack', 'JWT Auth', 'Tailwind CSS', 'Role-Based Access'],
    description: 'Full stack school management system with role-based access for Admin, Teacher, Parent, and Student. Implemented secure mark verification, attendance tracking, fee status, and certificate request workflows.',
    url: 'https://smartschool-4jll.onrender.com',
  },
  {
    title: 'E-Learning Web App',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    description: 'Interactive e-learning platform with user authentication and progress tracking. Features quiz-based module unlocking and a live code playground for HTML, CSS, and JavaScript.',
    url: 'https://e-learning-bqtt.onrender.com',
  },
  {
    title: 'Social Learning Platform',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    description: 'Social-media–style platform focused on educational content sharing. Implemented post creation, update, delete, likes, follow system, and user interactions using RESTful APIs.',
    url: 'https://smartscroll.onrender.com',
  },
];

export const SKILLS = [
  { 
    category: 'Frontend', 
    prominent: true,
    items: [
      { name: 'HTML', level: 90, tooltip: '3+ years of semantic HTML experience' },
      { name: 'CSS', level: 85, tooltip: 'Responsive design & Animations expert' },
      { name: 'JavaScript', level: 80, tooltip: 'Modern ES6+ and asynchronous programming' },
      { name: 'React', level: 85, tooltip: 'Component-driven dev & Context API' },
      { name: 'Tailwind CSS', level: 90, tooltip: 'Highly proficient in utility-first CSS' },
    ]
  },
  { 
    category: 'Backend', 
    items: [
      { name: 'Node.js', level: 75, tooltip: 'Server-side logic & file systems' },
      { name: 'Express.js', level: 80, tooltip: 'RESTful API developer' },
      { name: 'REST APIs', level: 85, tooltip: 'CRUD & authentication architecture' },
    ]
  },
  { 
    category: 'Database', 
    items: [
      { name: 'MongoDB', level: 80, tooltip: 'NoSQL database design & aggregation' },
    ]
  },
  { 
    category: 'Tools', 
    items: [
      { name: 'Git', level: 85, tooltip: 'Version control & collaboration' },
      { name: 'GitHub', level: 90, tooltip: 'Repositories & project workflows' },
      { name: 'Figma', level: 60, tooltip: 'Basic UI/UX design & prototyping' },
    ]
  },
];

export const EDUCATION = [
  {
    institution: 'AVC College (Autonomous)',
    location: 'Mannampandal, Mayiladuthurai',
    qualification: 'Bachelor of Computer Applications (BCA)',
    duration: '2024 – 2027',
    status: 'Currently Pursuing',
    details: 'Current focus: DSA, Web Development, Database Design',
    highlight: true,
  },
  {
    institution: 'Kalaimahal Matriculation Higher Secondary School',
    location: 'Sembanarkoil',
    qualification: 'Higher Secondary Certificate (HSC)',
    duration: '2022',
    percentage: '69.3%',
    status: 'Completed',
  },
  {
    institution: 'Kalaimahal Matriculation Higher Secondary School',
    location: 'Sembanarkoil',
    qualification: 'Secondary School Leaving Certificate (SSLC)',
    duration: '2020',
    percentage: '62.4%',
    status: 'Completed',
  },
];

export const CONTACT_INFO = {
  email: 'sibirajr0709@gmail.com',
  phone: '7598382584',
  github: 'https://github.com/Sibi-2006',
  linkedin: 'https://linkedin.com/in/sibiraj-r-147936336',
  location: 'Mayiladuthurai, Tamil Nadu',
  education: {
    institution: 'AVC College, Mannampandal',
    period: '2024-2027',
    degree: 'BCA',
  }
};
