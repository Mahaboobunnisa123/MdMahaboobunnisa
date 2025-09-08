// Personal Information
export const personalInfo = {
  name: "Md Mahaboobunnisa",
  tagline: "Data Science | AI | ML | Analytics Enthusias",
  email: "mdshabbi885@gmail.com",
  resume: "/resume.pdf", // Place your resume in the public folder
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/Mahaboobunnisa123",
  bio: "Passionate data scientist and AI/ML engineer with expertise in developing innovative solutions using cutting-edge technologies. I specialize in machine learning, deep learning, and data analytics to solve complex real-world problems. With a strong foundation in Python, TensorFlow, and cloud technologies, I transform raw data into actionable insights that drive business decisions."
};

// Navigation Links
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// Services/About Cards
export const services = [
  {
    title: "Data Science",
    icon: "🔬",
  },
  {
    title: "Machine Learning",
    icon: "🤖",
  },
  {
    title: "Deep Learning",
    icon: "🧠",
  },
  {
    title: "AI Solutions",
    icon: "⚡",
  },
];

// Technologies/Skills
export const technologies = [
  {
    name: "Python",
    icon: "🐍",
    category: "Programming"
  },
  {
    name: "Pandas",
    icon: "🐼",
    category: "Data Analysis"
  },
  {
    name: "NumPy",
    icon: "🔢",
    category: "Scientific Computing"
  },
  {
    name: "Scikit-learn",
    icon: "📊",
    category: "Machine Learning"
  },
  {
    name: "TensorFlow",
    icon: "🔥",
    category: "Deep Learning"
  },
  {
    name: "Keras",
    icon: "⚡",
    category: "Deep Learning"
  },
  {
    name: "PyTorch",
    icon: "🔦",
    category: "Deep Learning"
  },
  {
    name: "Seaborn",
    icon: "📈",
    category: "Visualization"
  },
  {
    name: "Matplotlib",
    icon: "📊",
    category: "Visualization"
  },
  {
    name: "SQL",
    icon: "🗄️",
    category: "Database"
  },
  {
    name: "PowerBI",
    icon: "📊",
    category: "Business Intelligence"
  },
  {
    name: "Tableau",
    icon: "📈",
    category: "Business Intelligence"
  },
  {
    name: "Java",
    icon: "☕",
    category: "Programming"
  },
  {
    name: "Git",
    icon: "🌿",
    category: "Version Control"
  },
  {
    name: "Excel",
    icon: "📊",
    category: "Data Analysis"
  }
];

// Experience Data
export const experiences = [
  {
    title: "Data Science Intern",
    company_name: "Company Name",
    icon: "🏢",
    iconBg: "#383E56",
    date: "Month Year - Month Year",
    points: [
      "Developed and implemented machine learning models to solve business problems.",
      "Analyzed large datasets using Python, Pandas, and SQL to extract meaningful insights.",
      "Created interactive dashboards and visualizations using PowerBI and Tableau.",
      "Collaborated with cross-functional teams to deliver data-driven solutions.",
    ],
  },
  // Add more experiences as needed
];

// Education Data
export const education = [
  {
    title: "Master of Computer Applications (MCA)",
    institution: "University College of Engineering Kakinada [JNTUK]",
    duration: "2023 - 2025",
    cgpa: "8.07/10 (Average of 3 semesters)",
    courses: [
      "Data Structures and Algorithms with C",
      "Operating Systems",
      "Database Management Systems",
      "Object Oriented Programming with Java",
      "Computer Networks",
      "Analysis and Design of Algorithm",
      "Software Engineering",
      "Machine Learning with Python",
      "Internet of Things",
      "Cyber Security"
    ],
    icon: "🎓",
    iconBg: "#E6DEDD"
  },
  {
    title: "Bachelor of Science (B.Sc.) in Computer Science",
    institution: "Acharya Nagarjuna University Nagarjuna Nagar Guntur",
    duration: "2019 - 2022",
    cgpa: "9.06/10",
    courses: [
      "Languages",
      "Mathematics",
      "Physics",
      "Computer Science"
    ],
    icon: "📚",
    iconBg: "#E6DEDD"
  },
  {
    title: "Diploma in Elementary Education [D.Ed]",
    institution: "Dwarampudi Chandravathi College of Education Gollala Mamidada",
    duration: "2018 - 2020",
    cgpa: "85%",
    courses: [
      "Child Psychology",
      "Physiology",
      "Methodologies of Science, Maths, Social",
      "Pedagogy of English and Telugu"
    ],
    icon: "📖",
    iconBg: "#E6DEDD"
  },
  {
    title: "Higher Secondary",
    institution: "Narayana Junior College Girls Kakinada",
    duration: "2016 - 2018",
    cgpa: "94%",
    courses: [
      "Languages",
      "Mathematics",
      "Physics",
      "Chemistry"
    ],
    icon: "🏫",
    iconBg: "#E6DEDD"
  },
  {
    title: "Senior Secondary",
    institution: "SMT P S MPL Girls High School Kakinada",
    duration: "Till 2016",
    cgpa: "9.5/10",
    courses: [
      "Mathematics",
      "Science",
      "Social Studies",
      "Languages"
    ],
    icon: "🏫",
    iconBg: "#E6DEDD"
  }
];

// Projects Data
export const projects = [
  {
    name: "AI-Powered Predictive Analytics",
    description: "Developed a comprehensive machine learning solution for predicting customer behavior using advanced algorithms and data preprocessing techniques.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "pandas",
        color: "pink-text-gradient",
      },
    ],
    image: "/project1.jpg", // Add your project images to public folder
    source_code_link: "https://github.com/yourusername/project1",
    live_demo_link: "https://your-demo-link.com"
  },
  {
    name: "Deep Learning Image Classification",
    description: "Built a convolutional neural network for image classification with 95% accuracy using TensorFlow and Keras.",
    tags: [
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "keras",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: "/project2.jpg",
    source_code_link: "https://github.com/yourusername/project2",
    live_demo_link: "https://your-demo-link.com"
  },
  {
    name: "Data Visualization Dashboard",
    description: "Created an interactive dashboard for business intelligence using Python, Plotly, and Streamlit for real-time data analysis.",
    tags: [
      {
        name: "streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "plotly",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: "/project3.jpg",
    source_code_link: "https://github.com/yourusername/project3",
    live_demo_link: "https://your-demo-link.com"
  },
];

export const testimonials = [
  {
    testimonial: "Outstanding work on our data analytics project. Delivered insights that transformed our business strategy.",
    name: "Client Name",
    designation: "CEO",
    company: "Tech Company",
    image: "/testimonial1.jpg",
  },
  // Add more testimonials as needed
];
