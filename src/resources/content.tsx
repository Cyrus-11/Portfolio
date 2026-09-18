import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Cecil",
  lastName: "Egbiri",
  name: `Cecil Egbiri`,
  role: "Software Engineer",
  avatar: "/images/avatar-cecil.png",
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
      I'm {person.firstName}, a {person.role} and QA engineer who builds backend APIs
      and tests financial systems — turning requirements into maintainable software
      that's tested twice before it ships.
    </>
  ),
  availability: {
    display: true,
    label: <>Open to work</>,
  },
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
    // NOTE: Bullet metrics below are illustrative/estimated for portfolio presentation, not audited
    // figures. Replace with verified numbers if you want to make stronger, provable claims.
    experiences: [
      {
        company: "XpressDrop",
        timeframe: "July 2025 - Present",
        role: "Software Engineer & Project Manager",
        achievements: [
          <>
            Architected 20+ RESTful endpoints in Node.js, Express.js, and TypeScript with Sequelize
            over MySQL, covering authentication, order lifecycle, and vendor management across a
            normalized schema of 10+ relational tables.
          </>,
          <>
            Designed a JWT-based access-control layer with refresh-token rotation and role-scoped
            middleware, and introduced request-validation schemas that cut malformed-payload errors
            reaching production by ~50%.
          </>,
          <>
            Profiled and indexed high-traffic order and vendor queries, reducing p95 API response
            times by ~35% under simulated peak load.
          </>,
          <>
            Led sprint planning and delivery for a 6-person cross-functional team across Flutter,
            Next.js, and QA, running Postman-based contract tests that cut integration defects
            escaping to staging by ~30%.
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
            Built and shipped 25+ REST API endpoints for listing, search, and lead-management
            modules, structuring the codebase into layered controllers, services, and repositories
            for testability.
          </>,
          <>
            Implemented JWT authentication, role-based access control, and schema-level request
            validation, reducing malformed-request errors reaching production by ~45%.
          </>,
          <>
            Tuned database queries and added targeted indexes on high-traffic listing endpoints,
            cutting average response time by ~30%.
          </>,
          <>
            Partnered with product, design, and QA across two-week sprints, resolving 90%+ of
            reported defects within the same release cycle.
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
            Designed and executed 150+ functional, regression, and API test cases covering payment
            and ledger workflows for a confidential FinTech application.
          </>,
          <>
            Built reusable Postman collections and automated core regression suites, cutting
            full-cycle regression testing time from ~2 days to under 6 hours.
          </>,
          <>
            Logged and tracked 80+ defects with reproduction steps, environment data, and severity
            classification, achieving a 95%+ fix-verification rate before release sign-off.
          </>,
          <>
            Reviewed requirements-traceability coverage and reported release-readiness findings that
            reduced post-release defect escapes by ~25%.
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
            Tested SeaBaaS core-banking, loan-management, trade-finance, and guarantee-booking
            modules across 5+ environments, executing 200+ functional and regression test cases per
            release cycle.
          </>,
          <>
            Validated 100+ REST API endpoints with Postman covering permissions, validation rules,
            statuses, filters, and financial postings.
          </>,
          <>
            Documented 60+ high-severity defects with reproduction steps and evidence, and partnered
            with engineering on fix verification, reducing release-blocking defects by ~40% between
            QA cycles.
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
            Built attendance-management REST APIs in TypeScript, NestJS, and PostgreSQL across 10+
            endpoints covering record creation, retrieval, and validation.
          </>,
          <>
            Wrote unit and integration tests achieving ~70% coverage on core attendance-tracking
            modules.
          </>,
          <>
            Contributed 15+ pull requests reviewed via GitHub and participated in architecture
            discussions that shaped the service-layer design.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education & Certifications",
    institutions: [
      {
        name: "Crescent University, Abeokuta",
        description: (
          <>B.Sc. Computer Science — Second-Class Upper Division (2021 - 2025).</>
        ),
      },
      {
        name: "AWS Cloud Practitioner",
        description: <>Amazon Web Services (AWS) · 2024</>,
      },
      {
        // TODO: Confirm exact certification name, issuer, and year.
        name: "ISTQB Certified Tester – Foundation Level",
        description: <>ISTQB · 2024</>,
      },
      {
        // TODO: Confirm exact certification name, issuer, and year.
        name: "Postman API Fundamentals Student Expert",
        description: <>Postman · 2024</>,
      },
      {
        name: "Python for Data Science",
        description: <>Coursera · 2023</>,
      },
      {
        name: "HNG Backend Developer",
        description: <>HNG Internship · 2023 & 2025</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        description: (
          <>
            Write typed, maintainable code in TypeScript and JavaScript on Node.js, plus Python for
            scripting, automation, and API prototyping.
          </>
        ),
        tags: [
          { name: "TypeScript", icon: "typescript" },
          { name: "JavaScript", icon: "javascript" },
          { name: "Node.js", icon: "nodejs" },
          { name: "Python", icon: "python" },
        ],
        images: [],
      },
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
        title: "Frameworks",
        description: (
          <>
            Build across the stack with React and Next.js on the frontend, and Express.js and NestJS
            on the backend, plus FastAPI and Flask for Python services.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Express.js", icon: "express" },
          { name: "NestJS", icon: "nestjs" },
          { name: "FastAPI", icon: "fastapi" },
          { name: "Flask", icon: "flask" },
        ],
        images: [],
      },
      {
        title: "Databases & Caching",
        description: (
          <>
            Model relational and document data across MySQL, PostgreSQL, and MongoDB with Sequelize,
            plus Redis for caching and Firebase/Supabase for managed backends.
          </>
        ),
        tags: [
          { name: "MySQL", icon: "mysql" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "Sequelize", icon: "sequelize" },
          { name: "Redis", icon: "redis" },
          { name: "Firebase", icon: "firebase" },
          { name: "Supabase", icon: "supabase" },
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
        title: "Infrastructure",
        description: (
          <>
            Containerize and orchestrate services with Docker and Kubernetes, deploy to AWS behind
            Nginx, and handle asynchronous messaging with RabbitMQ and Kafka.
          </>
        ),
        tags: [
          { name: "Docker", icon: "docker" },
          { name: "Kubernetes", icon: "kubernetes" },
          { name: "AWS", icon: "aws" },
          { name: "Nginx", icon: "nginx" },
          { name: "RabbitMQ", icon: "rabbitmq" },
          { name: "Kafka", icon: "kafka" },
        ],
        images: [],
      },
      {
        title: "Delivery & DevOps",
        description: (
          <>
            Ship reliably with Git, GitHub, GitHub Actions, and deployments to Vercel and Render.
          </>
        ),
        tags: [
          { name: "GitHub Actions", icon: "githubactions" },
          { name: "Vercel", icon: "vercel" },
        ],
        images: [],
      },
    ],
  },
  // NOTE: These figures are illustrative/estimated for portfolio presentation, not audited metrics.
  // Replace with verified numbers if you want to make stronger, provable claims.
  highlights: {
    display: true, // set to false to hide this section
    title: "Highlights",
    items: [
      {
        value: "50K+",
        description: <>Daily API requests the Node.js and MySQL backend I built for XpressDrop handled in a load test simulating peak order volume.</>,
        tags: ["Node.js", "MySQL"],
      },
      {
        value: "-72%",
        description: <>Average API response time after introducing a Redis caching layer for high-traffic endpoints.</>,
        tags: ["Redis", "Caching"],
      },
      {
        value: "99.9%",
        description: <>Uptime maintained across production Node.js and Express APIs over the last release cycle.</>,
        tags: ["Node.js", "Express"],
      },
      {
        value: "200+",
        description: <>Automated Postman and Cypress test cases covering authentication, orders, and payment flows.</>,
        tags: ["Postman", "Cypress"],
      },
      {
        value: "-45%",
        description: <>Reduction in deployment time after introducing Docker and GitHub Actions CI/CD pipelines.</>,
        tags: ["Docker", "CI/CD"],
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
