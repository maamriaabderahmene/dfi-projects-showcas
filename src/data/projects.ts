
export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  logo?: string;
  tags: string[];
  route: string;
  teamMembers: {
    name: string;
    role: string;
  }[];
};

export const projects: Project[] = [
  {
    id: "avrid",
    title: "AVRID TOGETHER",
    description: "Avrid Together is a smart and social carpooling app that helps you find and share rides in just a few seconds. Whether you're commuting, traveling, or just exploring, Avrid Together connects you with people heading your way—making your journeys cheaper, greener, and more fun.",
    image: "/lovable-uploads/9f9fe7d6-b751-47dd-bf44-c5a772ddf9f3.png",
    logo: "/lovable-uploads/0da83071-82aa-4a04-961a-f205d7fb1ab7.png",
    tags: ["Mobile", "Transportation", "Social"],
    route: "/avrid",
    teamMembers: [
      { name: "MAACHA YACINE", role: "Team Member" },
      { name: "MESSAOUDI ABDELKRIM", role: "Team Member" },
      { name: "JBAGHOUCHENE JUBA", role: "Team Member" },
      { name: "HOCINE SARA", role: "Team Member" },
      { name: "TAYEB CHERIF YASMINE", role: "Team Member" }
    ],
  },
  {
    id: "medapp",
    title: "MedApp",
    description: "MedApp is a healthcare-focused mobile application designed to enhance patient access to medical services and information. It offers features like hospital locator, medicine search, queue management, prescription scanning, and a ChatGPT-powered assistant.",
    image: "/lovable-uploads/941303de-839a-4dde-b07d-1afcac02889c.png",
    logo: "/lovable-uploads/8391d3d1-2102-4076-9369-614d818ffcda.png",
    tags: ["Mobile", "Healthcare", "AI"],
    route: "/medapp",
    teamMembers: [
      { name: "HIDOUCHI Dhiaeddine", role: "Project Manager" },
      { name: "BOUCENNA Achraf", role: "Team Member" },
      { name: "BOUKAHEL Zahr Eddine", role: "Team Member" },
      { name: "BELHERAOUI Abderrahmane", role: "Team Member" },
      { name: "AISSAOUA Djassem", role: "Team Member" }
    ],
  },
  {
    id: "bayti",
    title: "BAYTI",
    description: "Bayti is a mobile and web platform that connects home chefs with local customers, offering a marketplace for authentic, homemade meals. Whether you're a chef looking to grow your food business or a customer craving traditional cuisine, Bayti makes it easy to discover, order, and enjoy meals made with care.",
    image: "/lovable-uploads/286ca1a9-a8b3-448d-a349-89a795cf1e46.png",
    logo: "/lovable-uploads/0e35cc8a-fd0b-46a4-85da-3b6c648c6a53.png",
    tags: ["Mobile", "Web", "Food Service"],
    route: "/bayti",
    teamMembers: [
      { name: "BENRAHMOUNE Anes", role: "Project Manager" },
      { name: "KHOUALDI Mohamed Achraf", role: "Team Member" },
      { name: "ZIANE Zineb", role: "Team Member" },
      { name: "BENKHEROUF Maria", role: "Team Member" },
      { name: "KHODJA Fadi Mohanned", role: "Team Member" }
    ],
  },
  {
    id: "unihub",
    title: "UniHub",
    description:
      "UniHub is a web platform designed to centralize all university-related resources and information for students. It aims to provide a seamless experience for students to access academic materials, connect with peers, and stay updated with university events.",
    image: "/lovable-uploads/unihub logo (1).png",
    logo: "/lovable-uploads/f725991b-944c-494f-904b-93a09a395c9c.png",
    tags: ["Web", "Education", "Community"],
    route: "/unihub",
    teamMembers: [
      { name: "John Doe", role: "Project Manager" },
      { name: "Jane Smith", role: "Developer" },
      { name: "Peter Jones", role: "Designer" },
    ],
  },
  {
    id: "courspace",
    title: "CourSpace",
    description:
      "CourSpace is an innovative e-learning platform that offers a wide range of courses and learning resources. It aims to provide an engaging and interactive learning experience for students of all ages and backgrounds.",
    image: "/lovable-uploads/459a531f-3f41-4019-b90d-105589a9dca1.png",
    logo: "/lovable-uploads/99329997-82a5-4568-b245-8c89b8892a19.png",
    tags: ["Web", "Education", "E-learning"],
    route: "/courspace",
    teamMembers: [
      { name: "Alice Johnson", role: "Project Manager" },
      { name: "Bob Williams", role: "Developer" },
      { name: "Charlie Brown", role: "Designer" },
    ],
  },
  {
    id: "smartstock",
    title: "SmartStock",
    description:
      "SmartStock is a stock management application designed to help businesses efficiently manage their inventory. It provides real-time tracking, automated alerts, and comprehensive reporting to optimize stock levels and reduce costs.",
    image: "/lovable-uploads/5498199f-94a7-40e9-80a5-7ef57942900a.png",
    logo: "/lovable-uploads/4915884b-3381-495d-b799-88579494993d.png",
    tags: ["Mobile", "Business", "Inventory"],
    route: "/smartstock",
    teamMembers: [
      { name: "David Miller", role: "Project Manager" },
      { name: "Eve Davis", role: "Developer" },
      { name: "Frank White", role: "Designer" },
    ],
  },
  {
    id: "reservili",
    title: "Reservili",
    description:
      "Reservili is a reservation management system that simplifies the process of booking and managing reservations for various services. It offers a user-friendly interface, automated reminders, and detailed analytics to enhance customer satisfaction and streamline operations.",
    image: "/lovable-uploads/49f19457-9191-499f-995f-999c49f7b52d.png",
    logo: "/lovable-uploads/6839495a-4951-4918-a495-98949494b495.png",
    tags: ["Web", "Business", "Reservation"],
    route: "/reservili",
    teamMembers: [
      { name: "Grace Taylor", role: "Project Manager" },
      { name: "Henry Moore", role: "Developer" },
      { name: "Ivy Green", role: "Designer" },
    ],
  },
  {
    id: "amanah",
    title: "Amanah",
    description:
      "Amanah is a comprehensive financial management application designed to help individuals and businesses track their expenses, manage their budgets, and achieve their financial goals. It offers a range of features including transaction tracking, budgeting tools, and financial reporting.",
    image: "/lovable-uploads/49f19457-9191-499f-995f-999c49f7b52d.png",
    logo: "/lovable-uploads/6839495a-4951-4918-a495-98949494b495.png",
    tags: ["Mobile", "Finance", "Management"],
    route: "/amanah",
    teamMembers: [
      { name: "Grace Taylor", role: "Project Manager" },
      { name: "Henry Moore", role: "Developer" },
      { name: "Ivy Green", role: "Designer" },
    ],
  },
];

export default projects;
