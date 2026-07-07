export const USER = {
  name: "Rznish",
  headline: "Builder , Designer , Developer",
  bio: " I am a passinate Designer , Creator snd Architecture . I love to create and design things that are useful and beautiful. I am a self-taught designer and developer. I have a passion for learning new things and sharing my knowledge with others.",
  location: "Dehradun, India",
  email: "hello@rznish.com",
}

export const SOCIAL_LINKS = [
  { title: "GitHub", href: "https://github.com/Rznish-singh" },
  { title: "X (Twitter)", href: "https://x.com/rznishsingh" },
  { title: "LinkedIn", href: "https://linkedin.com/in/rznish" },
  { title: "Behance", href: "https://behance.com/in/rznish" },
]

export const TECH_STACK = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
]

export const EXPERIENCES = [
  {
    role: "Graphic Designer",
    company: "Freelance / Independent",
    period: "2023 — Present",
    description:
      "I have been working as a freelance graphic designer, creating visual content for various clients and projects. My work includes designing logos, posters, social media graphics, and other marketing materials.",
  },
  {
    role: "Video Editor",
    company: "Freelance / Independent",
    period: "2023 — Present",
    description:
      "As a freelance video editor, I have produced engaging promotional videos, social media content, and marketing visuals for businesses and individuals." },
]

export const EDUCATION = [
  {
    school: "Graphic Era hill University",
    degree: "B.Tech, Computer Science",
    period: "2022 — 2026",
  },
]

export const PROJECTS = [
  {
    title: "rznish.com",
    description: "My personal portfolio website, built with Next.js and Tailwind CSS.",
    href: "https://rznish.com",
  },
]

export const AWARDS: { title: string; year: string }[] = []

export const CERTIFICATIONS: { title: string; issuer: string }[] = []

export const BOOKMARKS: { title: string; href: string }[] = [
  { title: "Next.js Documentation", href: "https://nextjs.org/docs" },
  { title: "Tailwind CSS Documentation", href: "https://tailwindcss.com/docs" },
]


export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  image?: string
  isNew?: boolean
  sections: {
    id: string
    title: string
    depth: number
    content: string
    image?: string
    imageAlt?: string
    video?: string
    links?: {
      label: string
      href: string
    }[]
  }[]
}

// extend the existing BLOG_POSTS objects with a `sections` field, e.g.:

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "Portfolio2026",
    title: "Portfolio 2026",
    description: "The first post on this blog.",
    image: "/p1/12.png",
    date: "2026-01-01",
    isNew: true,
    sections: [
  {
    id: "introduction",
    title: "Introduction",
    depth: 2,
    content:
      "This project focuses on creating a modern dashboard with a clean user experience.",
    image: "/p1/12.png",
    imageAlt: "Dashboard overview",
  },
  {
    id: "portfolio",
    title: "Related Portfolio",
    depth: 2,
    content:
      "Explore the complete design process, wireframes, and high-fidelity mockups on Behance.",
    image: "/p1/11.png",
    imageAlt: "Behance project preview",
    // links: [
    //   {
    //     label: "View on Behance",
    //     href: "https://www.behance.net/rznish",
    //   },
    // ],
  },
  // {
  //   id: "walkthrough",
  //   title: "Project Walkthrough",
  //   depth: 2,
  //   content:
  //     "Watch a complete walkthrough of the design process and implementation.",
  //   // video: "https://www.youtube.com/embed/_2ODM0EkFQg?si=QCUo8JgoKPYVrnfm",
  // },
]
  },
   {
    slug: "WomensDay-Poster-Design",
    title: "Women's Day Poster Design",
    description: "This project focuses on creating a poster design for the Women's Day celebration.",
    date: "2026-03-04",
    image: "/p7/1.png",
    sections: [
      {
    id: "WomensDay-Poster-Design",
    title: "Women's Day Poster Design",
    depth: 2,
    content:
      "Women's Day Celebration.",
    image: "/p7/1.png",
    imageAlt: "womensdayposterdesign",
  },
    {
    id: "WomensDay-InstaStory-Design",
    title: "Women's Day Insta Story Design",
    depth: 2,
    content:
      "Women's Day Celebration.",
    image: "/p7/2.png",
    imageAlt: "womensdayinstastorydesign",
  },
     
    ],
  },
  {
    slug: "MusicVideo-Poster-Design",
    title: "Music Video Poster Design",
    description: "This project focuses on creating a poster design for the Music Video celebration.",
    date: "2026-03-04",
    image: "/p9/1.png",
    sections: [
      {
    id: "MusicVideo-Poster-Design",
    title: "Music Video Poster Design",
    depth: 2,
    content:
      "Sample poster 1.",
    image: "/p9/1.png",
    imageAlt: "musicvideoposterdesign",
  },
  {
    id: "MusicVideo-Poster-Design",
    title: " Poster Design",
    depth: 2,
    content:
      "Sample Poster 2.",
    image: "/p9/2.png",
    imageAlt: "musicvideoposterdesign",
  },
    
     
    ],
  },
    {
    slug: "Makar-Sankranti-Campaign",
    title: "Makar Sankranti Campaign",
    description: "This project is related to the Makar Sankranti festival theme.",
    date: "2025-01-04",
    image: "/p4/1.png",
    sections: [
      {
        id: "Social Media Campaign",
        title: "Social Media Campaign",
        depth: 2,
        image: "/p4/1.png",
        imageAlt: "Social Media Campaign",
        content:
          "This project focuses on creating a social media campaign for the Graphic Era Hill University.",
      },    
      
    ],
  },

   
   {
    slug: "Rapsong-Poster-Design",
    title: "Rapsong Poster Design",
    description: "This project is related to the Rapsong theme.",
    date: "2024-07-14",
    image: "/p8/3.png",
    sections: [
      {
        id: "Social Media Thumbnail",
        title: "Social Media Thumbnail",
        depth: 2,
        image: "/p8/3.png",
        imageAlt: "Social Media Thumbnail",
        content:
          "",
      },
      {
        id: "Social Media Campaign",
        title: "Social Media Campaign",
        depth: 2,
        image: "/p8/2.png",
        imageAlt: "Social Media Campaign",
        content:
          "",
      },
      {
        id: "insta story design",
        title: "Insta Story Design",
        depth: 2,
        image: "/p8/1.png",
        imageAlt: "Insta Story Design",
        content:
          "Explore our Insta story design for the Rapsong.",
      },
     
      
       
      
    ],
  },
   {
    slug: "National-Service-Scheme",
    title: "National Service Scheme",
    description: "This project is related to the women's theme.",
    date: "2026-02-14",
    image: "/p3/1.png",
    sections: [
      {
        id: "Social Media Campaign",
        title: "Social Media Campaign",
        depth: 2,
        image: "/p3/1.png",
        imageAlt: "Social Media Campaign",
        content:
          "This project focuses on creating a social media campaign for the National Service Scheme, highlighting their initiatives and community impact.",
      },
      {
        id: "insta story design",
        title: "Insta Story Design",
        depth: 2,
        image: "/p3/3.png",
        imageAlt: "Insta Story Design",
        content:
          "Explore our Insta story design for the National Service Scheme campaign, showcasing their activities and events.",
      },
      {
        id: "insta story design",
        title: "Insta Story Design",
        depth: 2,
        image: "/p3/4.png",
        imageAlt: "Insta Story Design",
        content:
          "",
      },
      
        {
        id: "insta Post design",
        title: "Insta Post Design",
        depth: 2,
        image: "/p3/2.png",
        imageAlt: "Insta Post Design",
        content:
          "Explore our Insta post design for the National Service Scheme campaign, showcasing their activities and events.",
      },
      
    ],
  },
   {
    slug: "Registration-NssGehu",
    title: "Registration NssGehu",
    description: " poster design  for new  enrollment in  NssGehu",
    date: "2025-02-14",
    image: "/p2/1.jpg",
    sections: [
      {
    id: "introduction",
    title: "Introduction",
    depth: 2,
    content:
      "This project focuses on get more attention for enrollmennt for nss gehu.",
    image: "/p2/logo.png",
    imageAlt: "nssgehulogo",
  },
      {
        id: "our Team",
        title: "Our Team",
        depth: 2,
        content:
          "Meet the talented individuals behind this Organisation.",
        image: "/p2/1.jpg",
        imageAlt: "Team photo",
      },
      {
        id: "Some Banner  design for nssgehu Registration",
        title: "Banner Design",
        depth: 2,
        content:
          "Check out our banner designs for the NssGehu registration campaign.",
        image: "/p2/2.jpg",
        
        imageAlt: "Banner designs",
      },
      {     
        id: "poster design for insta story",
        title: " Social Media Design",
        depth: 2,
        content:
          "Explore our poster design for the NssGehu registration campaign.",
        imageAlt: "Social Media Design",
                image: "/p2/3.jpg",
      },
    ],
  },
  {
    slug: "Eco-Olympics-Winner-Poster-Design",
    title: "Eco-Olympics Winner Poster Design",
    description: "This project focuses on creating a poster design for the Eco-Olympics winner announcement.",
    date: "2024-01-04",
    image: "/p6/1.png",
    sections: [
      {
    id: "Eco-Olympics winner poster design",
    title: "Eco-Olympics winner poster design",
    depth: 2,
    content:
      "Eco-Olympics Winner.",
    image: "/p6/1.png",
    imageAlt: "nssgehulogo",
  },
   
     
    ],
  },
   {
    slug: "Social-Media-Campaign2",
    title: "Social Media Campaign",
    description: "This project focuses on creating a social media campaign for the Graphic Era Hill University.",
    date: "2024-01-04",
    image: "/p5/1.png",
    sections: [
      {
    id: "cloth Donation Campaign",
    title: "Cloth Donation Campaign",
    depth: 2,
    content:
      "This project focuses on get more attention for enrollmennt for nss gehu.",
    image: "/p5/1.png",
    imageAlt: "nssgehulogo",
  },
      
      {
        id: " nssgehu Registration",
        title: "Banner Design",
        depth: 2,
        content:
          "Check out our banner designs for the NssGehu registration campaign.",
        image: "/p5/2.png",
        
        imageAlt: "Banner designs",
      },
     
    ],
  },

]

// add near BLOG_POSTS: give each post sections for the TOC + an author for the glow card
export const BLOG_AUTHORS = [
  { name: "Rznish", handle: "@rznish", avatar: "/1.png" },
]

