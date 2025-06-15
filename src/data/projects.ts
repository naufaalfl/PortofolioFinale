export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'fullstack' | 'backend';
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Perpustakaan App",
    description: "Membuat Aplikasi Perpustakaan Digital yang kompleks",
    longDescription: "Aplikasi ini dibuat dengan React, Node.js, Dan mengkonsum API",
    technologies: ["React", "Node.js", "JWT", "Javascript",],
    category: "web",
    image: "/images/Screenshot 2025-06-13 145547.png",
    githubUrl: "https://github.com/naufaalfl/PerpustakaanReact",
    liveUrl: "",
    featured: true
  },
  {
    id: 2,
    title: "Ticket Flutter",
    description: "Membuat Aplikasi Ticket yang Memudahkan Pengguna",
    longDescription: "Aplikasi ini berbasis dart dan flutter, dan compatible di ios, android, dan web",
    technologies: ["Flutter", "Dart", "Socket.io"],
    category: "mobile",
    image: "/images/Screenshot 2025-06-13 145427.png",
    githubUrl: "https://github.com/naufaalfl/TicketFlutter",
    liveUrl: "",
    featured: true
  },
  {
    id: 3,
    title: "Pengaduan Masyarakat",
    description: "Sebuah Web yang isinya tentang Keluhan Masyarakat dan bisa di akses oleh siapapun",
    longDescription: "web ini juga memakai database mysql untuk menaruh keluhan keluhan dan menyimpan data yang akan diambil nantinya.",
    technologies: ["Laravel", "PHP", "MySQL",],
    category: "fullstack",
    image: "/images/Screenshot 2025-06-13 150658.png",
    githubUrl: "https://github.com/naufaalfl/Pengaduan-Masyarakat-Lumen",
    liveUrl: "",
    featured: false
  },
  {
    id: 4,
    title: "Cuaca Live",
    description: "Web Cuaca yang menampilkan cuaca di berbagai kota dan LIVE ",
    longDescription: "Web ini memakai API dari openweathermap.org dan menampilkan cuaca di berbagai kota dan LIVE",
    technologies: ["React", "Javascript"],
    category: "web",
    image: "/images/Screenshot 2025-06-15 234130.png",
    githubUrl: "https://github.com/naufaalfl/Cuacahttps://github.com/naufaalfl/Cuaca",
    liveUrl: "",
    featured: true
  },
  {
    id: 5,
    title: "Profile Interkatif",
    description: "Aplikasi yang Mencakup Penggunaan Profile yang Kompleks",
    longDescription: "Aplikasi ini dikembangkan hanya memakai Dart dan Flutter",
    technologies: ["Flutter", "Dart"],
    category: "mobile",
    image: "/images/Screenshot 2025-03-06 131313.png",
    githubUrl: "https://github.com/naufaalfl/Profile",
    liveUrl: "",
    featured: false
  },
];

export const skills = [
  // Programming Languages
  { name: "PHP", level: 85, category: "language", icon: "" },
  { name: "Python", level: 80, category: "language", icon: "🐍" },
  { name: "JavaScript", level: 90, category: "language", icon: "📜" },
  { name: "Dart", level: 85, category: "language", icon: "🎯" },
  { name: "TypeScript", level: 85, category: "language", icon: "📘" },
  { name: "HTML5", level: 95, category: "language", icon: "📄" },
  { name: "CSS3", level: 90, category: "language", icon: "🎨" },

  // Frameworks
  { name: "Laravel", level: 85, category: "framework", icon: "✨" },
  { name: "React", level: 90, category: "framework", icon: "⚛️" },
  { name: "Flutter", level: 85, category: "framework", icon: "🦋" },
  { name: "Tailwind", level: 90, category: "framework", icon: "🌬️" },
  { name: "Bootstrap", level: 85, category: "framework", icon: "👢" },

  // UI/UX
  { name: "Figma", level: 80, category: "design", icon: "🖼️" },
  { name: "Canva", level: 85, category: "design", icon: "🎨" },

  // Version Control
  { name: "Git", level: 85, category: "tools", icon: "🔧" },
  { name: "GitHub", level: 85, category: "tools", icon: "🐙" },

  // Databases
  { name: "Firebase", level: 80, category: "database", icon: "🔥" },
  { name: "MySQL", level: 85, category: "database", icon: "🐬" },
  { name: "MongoDB", level: 80, category: "database", icon: "🍃" },
  { name: "PostgreSQL", level: 75, category: "database", icon: "🐘" },

  // IDEs & Tools
  { name: "PyCharm", level: 85, category: "tools", icon: "✨" },
  { name: "Android Studio", level: 80, category: "tools", icon: "🤖" },
  { name: "VSCode", level: 90, category: "tools", icon: "💻" },
  { name: "Cursor", level: 85, category: "tools", icon: "🖱️" },
  { name: "Problem Solving", level: 90, category: "soft_skills", icon: "🧠" },
  { name: "Collaboration", level: 90, category: "soft_skills", icon: "🤝" },
  { name: "Leadership", level: 85, category: "soft_skills", icon: "👑" },
  { name: "AWS", level: 70, category: "cloud", icon: "☁️" }
];