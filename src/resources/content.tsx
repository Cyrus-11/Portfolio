import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Cecil",
  lastName: "Egbiri",
  name: `Cecil Egbiri`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "ayomideoluwayoyinsola@gmail.com",
  location: "Africa/Lagos", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My newsletter about backend engineering, quality, and shipping software</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Cyrus-11",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/cecil01",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building reliable software from API to release</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">XpressDrop</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Current work
        </Text>
      </Row>
    ),
    href: "/work/xpressdrop",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role.toLowerCase()} and QA engineer who builds
      backend APIs and tests <br /> financial systems — turning requirements into
      maintainable, well-tested software.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a Software Engineer and Quality Assurance Engineer
        experienced in system design, financial systems testing, and end-to-end
        project delivery. He builds backend APIs with any language that gets the job done, and applies
        AI-assisted workflows to planning, implementation, and code review combining engineering
        and quality assurance to turn requirements into maintainable, well-tested software.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "XpressDrop",
        timeframe: "July 2025 - Present",
        role: "Software Engineer & Project Manager",
        achievements: [
          <>
            Develop laundry logistics APIs with Node.js, Express.js, TypeScript, Sequelize, and
            MySQL for authentication, orders, and vendor management.
          </>,
          <>
            Implement JWT access control, request validation, and relational data models for users,
            vendors, and orders.
          </>,
          <>
            Coordinate priorities and delivery across engineering, design, and QA, collaborating
            with Flutter and Next.js developers on API integration and Postman testing.
          </>,
        ],
        images: [],
      },
      {
        company: "Confidential Client (NDA)",
        timeframe: "Freelance",
        role: "Software Engineer — PropTech Platform",
        achievements: [
          <>
            Developed features and REST APIs for a confidential PropTech platform, translating
            requirements into maintainable components.
          </>,
          <>
            Implemented authentication, request validation, and database operations for controlled
            access and data consistency.
          </>,
          <>
            Partnered with product, design, and QA teams to resolve defects, integrate features, and
            prepare releases.
          </>,
        ],
        images: [],
      },
      {
        company: "Confidential Client (NDA)",
        timeframe: "Freelance",
        role: "Quality Assurance Engineer — FinTech",
        achievements: [
          <>
            Designed and executed functional, regression, and API tests for a confidential FinTech
            application.
          </>,
          <>
            Documented reproducible defects with expected and actual results and worked with
            engineers to validate fixes.
          </>,
          <>
            Reviewed requirements and test results to identify coverage gaps and report
            release-readiness findings.
          </>,
        ],
        images: [],
      },
      {
        company: "Bazara Tech Inc.",
        timeframe: "July 2024 - October 2024",
        role: "Quality Assurance Engineer",
        achievements: [
          <>
            Tested SeaBaaS loan management, core banking, trade finance, and guarantee-booking
            modules across development and QA environments.
          </>,
          <>
            Executed functional and regression tests for permissions, validation, statuses, filters,
            and financial postings.
          </>,
          <>
            Validated APIs with Postman, recorded defects with reproduction steps and evidence, and
            reported release blockers.
          </>,
        ],
        images: [],
      },
      {
        company: "Prunedge",
        timeframe: "October 2023 - November 2023",
        role: "Software Engineer Intern",
        achievements: [
          <>
            Contributed to an attendance-management application using TypeScript, NestJS, and
            PostgreSQL.
          </>,
          <>
            Developed and tested attendance APIs for record creation, retrieval, and validation.
          </>,
          <>
            Used Git and GitHub for version control and participated in code reviews and
            software-design discussions.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Crescent University, Abeokuta",
        description: (
          <>B.Sc. Computer Science, Second-Class Upper Division (2021 - 2025).</>
        ),
      },
      {
        name: "Nigeria Computer Society Software Development Contest",
        description: (
          <>Third Place (2025) — fintech innovation for cooperative societies, Ogun State Chapter.</>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Backend & APIs",
        description: (
          <>
            Design and build REST APIs with Node.js, Express, and NestJS, using JWT and role-based
            access control, request validation, and Swagger/OpenAPI documentation.
          </>
        ),
        tags: [
          { name: "TypeScript", icon: "typescript" },
          { name: "Node.js", icon: "nodejs" },
          { name: "Express", icon: "express" },
          { name: "NestJS", icon: "nestjs" },
          { name: "Swagger", icon: "swagger" },
        ],
        images: [],
      },
      {
        title: "Databases & Caching",
        description: (
          <>
            Model relational data and optimize queries across MySQL, PostgreSQL, and SQL Server with
            Sequelize, plus Redis for caching.
          </>
        ),
        tags: [
          { name: "MySQL", icon: "mysql" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Sequelize", icon: "sequelize" },
          { name: "Redis", icon: "redis" },
        ],
        images: [],
      },
      {
        title: "Quality Assurance & Testing",
        description: (
          <>
            Design and execute functional, regression, and API tests with Postman, Cypress, and
            Jest, with clear defect reporting and validation.
          </>
        ),
        tags: [
          { name: "Postman", icon: "postman" },
          { name: "Cypress", icon: "cypress" },
          { name: "Jest", icon: "jest" },
        ],
        images: [],
      },
      {
        title: "Frontend & AI Integration",
        description: (
          <>
            Build Next.js and React interfaces and integrate the OpenAI API with structured output
            validation using Zod and reusable AI agent skills.
          </>
        ),
        tags: [
          { name: "Next.js", icon: "nextjs" },
          { name: "React", icon: "react" },
          { name: "OpenAI", icon: "openai" },
        ],
        images: [],
      },
      {
        title: "Delivery & DevOps",
        description: (
          <>
            Ship reliably with Git, GitHub, Docker, GitHub Actions, and deployments to Vercel and
            Render.
          </>
        ),
        tags: [
          { name: "Docker", icon: "docker" },
          { name: "GitHub Actions", icon: "githubactions" },
          { name: "Vercel", icon: "vercel" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Notes on engineering and quality",
  description: `Thoughts on backend development, testing, and reliable software by ${person.name}`,
  // Create new blog posts by adding a new .mdx file to src/app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Selected software and AI projects by ${person.name}, from backend APIs to developer workflows`,
  // Create new project pages by adding a new .mdx file to src/app/work/projects
  // All projects will be listed on the / and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
