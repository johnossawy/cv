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
      description: `
        Lead Senior Security Engineer focused on improving security outcomes across the company. Operating at the front line of risk to identify vulnerabilities and threats and collaborate cross-functionally across the organisation to implement defences.

        I've led critical security initiatives, conducting 246 Application Security Design Reviews using frameworks like CIS, NIST, and OWASP. My focus on enhancing security and managing third-party penetration tests has significantly bolstered our security posture. I've played a pivotal role in vulnerability management and cloud controls, contributing to the successful attainment of SOC2/PCI compliance in 2021/2022/2023.
      `,
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
      description: `
        Team Lead for IT Security, managing 15 Security Engineers in EMEA & APAC for the world's largest inter-dealer broker. During my tenure, I was instrumental in elevating TPICAP's security posture, leading significant projects and directly contributing to our robust cybersecurity operations and reporting to the CISO as part of the Senior Security Leadership Team.

        
        I reprioritised Incident Response protocols, implementing sophisticated DLP controls with Azure Information Protection and Clearswift DLP. My leadership in deploying advanced SaaS security solutions like Trend ApexOne, Qualys, Symantec MSS, and Thycotic Secret Server Cloud significantly enhanced endpoint protection, vulnerability management, SIEM, and IAM/PAM systems.
        `,
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
      description: `
        Belfast Lead for Cyber Defense Engineering & Operations Team reporting to Global Information Security Department operating across AMER, EMEA & APAC.
        My leadership in the Belfast CDEO team's formation and growth was pivotal, including recruiting key talent and enhancing team visibility company-wide.
        

        I played a central role in crafting and implementing comprehensive IT security policies and procedures, while ensuring the security and monitoring of 18 critical applications. As a subject matter expert in Data Access Management, I oversaw the security of over 900 databases.
        

        My initiatives in disaster recovery and automation significantly improved operational efficiency, with a 40% reduction in post-DR check times. I also led incident response coordination and a seamless year-long technology refresh program, ensuring continuous business operations without disruptions.
        `,
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
      description: `
        Started my career at Fujitsu through their Graduate programme and progressed to a permanent position as a Security Engineer II. My commitment to excellence and meticulous attention to detail further propelled my progression to a Senior Security Engineer position.

        
        Functioned as the SME for endpoint security, adeptly managing over 250,000 endpoints across various contracts. A highlight of my tenure includes successfully mitigating a critical WannaCry ransomware attack within the Northern Ireland Libraries network, showcasing my proficiency in crisis management and cybersecurity resilience.
        `,
      skills: ["Network Security", "Endpoint Security", "Threat & Vulnerability Management", "Monitoring & SIEM Alerting"]
    },
],
projects: [
  {
      title: "Fake Domain Finder",
      techStack: [
          "Python",
          "Threat Hunting"
      ],
      description: "Identifies potentially fake or suspicious domains related to specific search queries.",
      link: {
          href: "https://github.com/johnossawy/FakeDomainFinder",
      },
  },
  {
      title: "Github Public Repo Tracker",
      techStack: [
          "Python",
          "DLP"
      ],
      description: "Fetches and analyzes repository data for a list of users.",
      link: {
          href: "https://github.com/johnossawy/GitHubPubRepoTracker",
      },
  },
  {
      title: "POC for TeamCity exploit",
      techStack: [
          "Python",
          "Docker",
          "DevSecOps"
      ],
      description: "TeamCity Critical Authentication Bypass in CI/CD POC CVE-2023-42793",
      link: {
          href: "https://github.com/johnossawy/CVE-2023-42793_POC",
      },
  },
  ],
} as const;
