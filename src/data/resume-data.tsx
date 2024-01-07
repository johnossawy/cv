import {
  CMEGroupLogo,
  FujitsuLogo,
  Howdy,
  Minimal,
  SignifydLogo,
  TPICAPLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "John Ossawy",
  initials: "JO",
  location: "Belfast, Northern Ireland - UK",
  locationLink: "https://www.google.com/maps/place/Belfast",
  about:
    "Experienced Cyber Security Engineer with 18 years in the Fintech industry",
  summary:
        "Proven track record of establishing and " +
        "leading highly functional teams responsible for research, development, implementation, testing and review of cyber security " +
        "in order to protect information and prevent unauthorised access. " +
        "Highly organised, versatile and results-oriented team player with an energetic and articulate attitude.",
  avatarUrl: "https://media.licdn.com/dms/image/D4E03AQHOQk3Ex-QUMQ/profile-displayphoto-shrink_800_800/0/1669049052034?e=1709769600&v=beta&t=jsrvvcw-sKUvbR1v6V2AflyDv6zRX8nSRNVRYEXXU60",
  personalWebsiteUrl: "https://johnossawy.me",
  contact: {
    email: "john.ossawy@gmail.com",
    tel: "+447729273768",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/johnossawy",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/johnossawy/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/johnossawy",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Queen's University Belfast",
      degree: "Bachelor's Degree in Business Information Technology",
      start: "2003",
      end: "2006",
    },
    {
      school: "Belfsat Met",
      degree: "Higher National Diploma Business Information Technology - Distinction",
      start: "2001",
      end: "2003",
  },
  ],
  work: [
    {
      company: "Signifyd",
      link: "https://signifyd.com",
      badges: ["Senior Security Engineer II"],
      title: "Senior Security Engineer → Lead Security Engineer",
      logo: SignifydLogo,
      start: "2021",
      end: "Present",
      description:
        "Lead Senior Security Engineer focused on improving security outcomes across the company. Operating at the front line of risk to identify vulnerabilities and threats and collaborate cross-functionally across the organisation to implement defences.",
      skills: ["Secure coding", "Security Frameworks", "DevSecOps integration", "Container Security", "API Security", "Cloud Security"]
    },
    {
      company: "TPICAP",
      link: "https://tpicap.com/tpicap/",
      badges: ["Lead Security Engineer"],
      title: "Cyber Security Team Lead",
      logo: TPICAPLogo,
      start: "2019",
      end: "2021",
      description:
        "Team Lead for IT Security, managing Security Engineers in EMEA & APAC for the world's largest inter-dealer broker. During my tenure, I was instrumental in elevating TPICAP's security posture, leading significant projects, and nurturing a competent and responsive security team. My efforts were crucial in enhancing the company's cybersecurity resilience and operational efficiency.",
      skills: ["Application Security", "Threat & Vulnerability Management", "DevSecOps", "Monitoring & SIEM Alerting", "Incident Management", "Cloud Security"]
    },
    {
      company: "CME Group",
      link: "https://www.cmegroup.com/",
      badges: ["Cyber Security Engineer"],
      title: "Lead Security Engineer for CDEO",
      logo: CMEGroupLogo,
      start: "2017",
      end: "2019",
      description:
        "Belfast Lead for Cyber Defense Engineering & Operations Team reporting to Global Information Security Department operating across AMER, EMEA & APAC.",
      skills: ["Application Security", "Data Integrity", "Incident Managment", "Monitoring & Alerting", "Threat & Vulnerability Management"]
    },
    {
      company: "Fujitsu",
      link: "https://www.fujitsu.com/uk/",
      badges: ["Senior Security Engineer"],
      title: "Graduate Engineer → Security Engineer II → Senior Security Engineer",
      logo: FujitsuLogo,
      start: "2006",
      end: "2017",
      description:
        "Joined Fujitsu as part of their Graduate programme and offered a permanent position as a Security Engineer II, through a strong working ethic and attention to detail, continued to progress during my time with the company to Senior Security Engineer",
      skills: ["Network Security", "Endpoint Security", "Threat & Vulnerability Management", "Monitoring & SIEM Alerting"]
    },
],
projects: [
  {
      title: "Sand, Blood, Water",
      techStack: [
          "Rust",
          "Bevy",
          "Tokio",
          "Wasm",
      ],
      description: "Desert based RPG written entirely in Rust. Most current, active project.",
      link: {
          href: "https://github.com/toandeaf/sandbloodwater",
      },
  },
  {
      title: "Breadalbane UI",
      techStack: [
          "Typescript",
          "React",
          "Node.js",
          "Firebase"
      ],
      description: "PWA for small Scottish finance brokerage. Actively used by clients.",
      link: {
          href: "https://breadalbane-ui.web.app/",
      },
  },
  {
      title: "crawler",
      techStack: [
          "Rust",
      ],
      description: "Highly performant, low overhead, multi-threaded toy webcrawler.",
      link: {
          href: "https://github.com/toandeaf/crawler",
      },
  },
  {
      title: "sounds_good",
      techStack: [
          "Rust",
          "gRPC"
      ],
      description: "Bi-directional audio streaming over gRPC",
      link: {
          href: "https://github.com/toandeaf/sounds_good",
      },
  },
  {
      title: "igniter",
      techStack: [
          "Java",
          "Apache Ignite",
          "Spring Boot",
          "Hibernate",
      ],
      description: "Distributed caching with Ignite and Spring Boot",
      link: {
          href: "https://github.com/toandeaf/igniter",
      },
  },
  {
      title: "torenz",
      techStack: [
          "Rust",
          "Tauri",
          "Typescript",
          "React",
      ],
      description: "Just started. Desktop torrent client impl.",
      link: {
          href: "https://github.com/toandeaf/torenz",
      },
  },
  ],
} as const;
