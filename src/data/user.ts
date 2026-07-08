import { title } from "process"

export const USER = {
  name: "Rznish",
  headline: "Builder , Designer , Developer",
  bio: " I am a passinate Designer , Creator snd Architecture . I love to create and design things that are useful and beautiful. I am a self-taught designer and developer. I have a passion for learning new things and sharing my knowledge with others.",
  location: "Dehradun, India",
  email: "hello@rznish.com",
}

export const SOCIAL_LINKS = [
  { title: "Dev-Portfolio", href: "https://rznish.vercel.app/" },
  { title: "GitHub", href: "https://github.com/Rznish-singh" },
  { title: "X (Twitter)", href: "https://x.com/rznishsingh" },
  { title: "LinkedIn", href: "https://linkedin.com/in/rznish" },
  { title: "Behance", href: "https://www.behance.net/rznish" },
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
    description: "The portfolio 2026.",
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
    image: "/p1/11.png",
    imageAlt: "portfolio preview",
  },
  // {
  //   id: "portfolio",
  //   title: "Related Portfolio",
  //   depth: 2,
  //   content:
  //     "Explore the complete design process, wireframes, and high-fidelity mockups on Behance.",
  //   image: "/p1/11.png",
  //   imageAlt: "Behance project preview",
  //   // links: [
  //   //   {
  //   //     label: "View on Behance",
  //   //     href: "https://www.behance.net/rznish",
  //   //   },
  //   // ],
  // },
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
    slug: "ganesh-chaturthi-animated-Poster",
    title: "Ganesh Chaturthi Animated Poster",
    description: "Animated poster for Ganesh Chaturthi celebration", 
    date: "2026-06-05",
    image: "/p20/1.gif",
    sections: [
      {
    id: "social media ",
    title: "Sample video",
    depth: 2,
    content:
      "ganesh chaturthi animated poster design .",
    image: "/p20/1.gif",
    imageAlt: "ganesh chaturthi animated poster",
  },
   
    
     
    ],
  },

{
    slug: "instagram-username-video-announcement",
    title: "Instagram Username video Announcement (sample)",
    description: "instagram username announcement and social media campaign for Graphic Era Hill University", 
    date: "2026-01-02",
    image: "/p12/2.gif",
    sections: [
      {
    id: "social media ",
    title: "Sample video",
    depth: 2,
    content:
      "insta username video annocement design 1.",
    image: "/p12/1.gif",
    imageAlt: "nssgehulogo",
  },
   
    
     
    ],
  },

{
    slug: "Rakshabandhan-Poster-Design",
    title: "Rakshabandhan Poster Design",
    description: "Rakshabandhan poster design for Graphic Era Hill University", 
    date: "2026-07-02",
    image: "/p17/1.png",
    sections: [
      {
    id: "social media ",
    title: "Rakshabandhan Poster Design",
    depth: 2,
    content:
      "Rakshabandhna social media post .",
    image: "/p17/1.png",
    imageAlt: "rakshabandhanposterdesign",
  },
   
    
     
    ],
  },

{
    slug: "independence-day-Poster-Design",
    title: "Independence Day Poster Design",
    description: "Independence Day poster design for Graphic Era Hill University", 
    date: "2026-07-5",
    image: "/p18/1.png",
    sections: [
      {
    id: "social media ",
    title: "Independence Day Poster Design",
    depth: 2,
    content:
      "Independence Day social media post .",
    image: "/p18/1.png",
    imageAlt: "independencedayposterdesign",
  },
   
    
     
    ],
  },

  {
    slug: "uttarakhand-day-Poster-Design",
    title: "Uttarakhand Day Poster Design",
    description: "Uttarakhand Day poster design for Graphic Era Hill University", 
    date: "2026-07-5",
    image: "/p19/2.png",
    sections: [
      {
    id: "social media ",
    title: "Uttarakhand Day Poster Design",
    depth: 2,
    content:
      "Uttarakhand Day social media post .",
    image: "/p19/1.png",
    imageAlt: "uttarakhanddayposterdesign",
  },
   {
    id: "social media ",
    title: "Uttarakhand festival Poster Design",
    depth: 2,
    content:
      "Uttarakhand festival social media post .",
    image: "/p19/2.png",
    imageAlt: "uttarakhandfestivalposterdesign",
  },
   
    
     
    ],
  },

  {
    slug: "graphic-era-presidentbirthday-poster-design",
    title: "Graphic Era President Birthday Poster Design",
    description: "This project focuses on creating a poster design for the Graphic Era President's birthday celebration.", 
    date: "2026-02-14",
    image: "/p10/3.png",
    sections: [
      {
    id: "instagram post design",
    title: "Instagram post design",
    depth: 2,
    content:
      "Instagram post design for Graphic Era President Birthday.",
    image: "/p10/3.png",
    imageAlt: "instagrampostdesign",
  },
  {
    id: "Instagram story design",
    title: "Instagram story design",
    depth: 2,
    content:
      "Instagram story design for Graphic Era President Birthday.",
    image: "/p10/2.png",
    imageAlt: "instagramstorydesign",
  },
   
    ],
  },

  {
    slug: "website-banners",
    title: "Ai✨website banners",
    description: "website banners and promotional graphics for landing pages", 
    date: "2026-04-04",
    image: "/p11/1.png",
    sections: [
      {
    id: "sample banner design",
    title: "Sample Banner Design",
    depth: 2,
    content:
      "sample banner design 1.",
    image: "/p11/1.png",
    imageAlt: "websitebanners",
  },
   {
    id: "sample banner design",
    title: "Sample Banner Design 1",
    depth: 2,
    content:
      "sample banner design 2.",
    image: "/p11/2.png",
    imageAlt: "websitebanners",
  },
     {
    id: "sample banner design",
    title: "Sample Banner Design 2",
    depth: 2,
    content:
      "sample banner design 3.",
    image: "/p11/3.png",
    imageAlt: "websitebanners",
  },
     {
    id: "sample banner design",
    title: "Sample Banner Design 4",
    depth: 2,
    content:
      "sample banner design 4.",
    image: "/p11/4.png",
    imageAlt: "websitebanners",
  }, 
    ],
  },
{
    slug: "The-Loop-Title-Annocement",
    title: "The Loop TitleAnnocement",
    description: "A Short video annocement for The Loop Title.", 
    date: "2026-02-14",
    image: "/p13/1.png",
    sections: [
      {
    id: "Title Annocement.",
    title: "The loop Title Annocement.",
    depth: 2,
    content:
      "A Short video annocement for The Loop Title.",
    image: "/p13/1.png",
    imageAlt: "websitebanners",
  },
   
    ],
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
    date: "2024-08-20",
    image: "/p3/4.png",
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
    slug: "2october-Social-Media-Post",
    title: "2 October Social Media Post",
    description: "This project focuses on creating a poster design for the 2 October social media campaign.",
    date: "2024-09-24",
    image: "/p16/1.png",
    sections: [
      {
    id: "2 October Social Media Post",
    title: "2 October Social Media Post",
    depth: 2,
    content:
      "2 October Social Media Post.",
    image: "/p16/1.png",
    imageAlt: "2octoberpost",
  },
   
     
    ],
  },
    
  
  {
    slug: "Waste-Warrior",
    title: "Waste Warrior x NSS GEHU",
    description: "This project focuses on creating a social media campaign for the Waste Warrior initiative in collaboration with NSS GEHU.",
    date: "2024-09-15",
    image: "/p15/3.png",
    sections: [
      {
        id: "Social Media Campaign",
        title: "Social Media Campaign",
        depth: 2,
        image: "/p15/1.png",
        imageAlt: "Social Media Campaign",
        content:
          "This project focuses on creating a social media campaign for the Waste Warrior initiative, highlighting their initiatives and community impact.",
      },
      {
        id: "insta story design",
        title: "Insta story Design",
        depth: 2,
        image: "/p15/2.png",
        imageAlt: "Insta story Design",
        content:
          "Explore our Insta post design for the Waste Warrior campaign, showcasing their activities and events.",
      },
      {
        id: "insta story design",
        title: "Insta Story Design",
        depth: 2,
        image: "/p15/4.png",
        imageAlt: "Insta Story Design",
        content:
          "",
      },
      
        {
        id: "insta Post design",
        title: "Insta Post Design",
        depth: 2,
        image: "/p15/3.png",
        imageAlt: "Insta Post Design",
        content:
          "Explore our Insta post design for the Waste Warrior campaign, showcasing their activities and events.",
      },
      
    ],
  },
  
   {
    slug: "Waste-Warrior-2",
    title: "Waste Warrior x NSS GEHU",
    description: "This project focuses on creating a social media campaign for the Waste Warrior initiative in collaboration with NSS GEHU.",
    date: "2024-09-15",
    image: "/p14/1111.png",
    sections: [
      {
        id: "Social Media Campaign",
        title: "Social Media Campaign",
        depth: 2,
        image: "/p14/1.png",
        imageAlt: "Social Media Campaign",
        content:
          "This project focuses on creating a social media campaign for the Waste Warrior initiative, highlighting their initiatives and community impact.",
      },
      {
        id: "insta post design",
        title: "Insta Post Design",
        depth: 2,
        image: "/p14/2.png",
        imageAlt: "Insta Post Design",
        content:
          "Explore our Insta post design for the Waste Warrior campaign, showcasing their activities and events.",
      },
      {
        id: "insta story design",
        title: "Insta Story Design",
        depth: 2,
        image: "/p14/3.png",
        imageAlt: "Insta Story Design",
        content:
          "",
      },
      
        {
        id: "insta Post design",
        title: "Insta Post Design",
        depth: 2,
        image: "/p14/4.png",
        imageAlt: "Insta Post Design",
        content:
          "Explore our Insta post design for the Waste Warrior campaign, showcasing their activities and events.",
      },
      {
        id: "insta Post design",
        title: "Insta Post Design",
        depth: 2,
        image: "/p14/5.png",
        imageAlt: "Insta Post Design",
        content:
          "Explore our Insta post design for the Waste Warrior campaign, showcasing their activities and events.",
      },
      {
        id: "insta Post design",
        title: "Insta Post Design",
        depth: 2,
        image: "/p14/6.png",
        imageAlt: "Insta Post Design",
        content:
          "Explore our Insta post design for the Waste Warrior campaign, showcasing their activities and events.",
      },
      {
        id: "insta Post design",
        title: "Insta Post Design",
        depth: 2,
        image: "/p14/7.png",
        imageAlt: "Insta Post Design",
        content:
          "Explore our Insta post design for the Waste Warrior campaign, showcasing their activities and events.",
      },
      {
        id: "insta Post design",
        title: "Insta Post Design",
        depth: 2,
        image: "/p14/8.png",
        imageAlt: "Insta Post Design",
        content:
          "Explore our Insta post design for the Waste Warrior campaign, showcasing their activities and events.",
      },
      {
        id: "insta Post design",
        title: "Insta Post Design",
        depth: 2,
        image: "/p14/9.png",
        imageAlt: "Insta Post Design",
        content:
          "Explore our Insta post design for the Waste Warrior campaign, showcasing their activities and events.",
      },
      {
        id: "insta Post design",
        title: "Insta Post Design",
        depth: 2,
        image: "/p14/10.png",
        imageAlt: "Insta Post Design",
        content:
          "Explore our Insta post design for the Waste Warrior campaign, showcasing their activities and events.",
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

