import UnoWalletProject from "@/app/(projects)/UnoWallet";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import Image from "next/image";

export const DATA = {
  name: "Adnan Shaikh",
  initials: "AS",
  url: "https://dillion.io",
  location: "Ahmedabad, Gujarat",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full-stack developer crafting tailored solutions that drive client success and user satisfaction.",
  summary:
    // "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
    "Full Stack Developer with over 2.5 years of experience in delivering robust web applications and dynamic solutions for diverse clients. Skilled in both front-end and back-end development, I’m passionate about crafting seamless user experiences and optimizing performance. I bring a blend of technical expertise and problem-solving skills to every project, with a commitment to quality and innovation.",
  avatarUrl: "/avatoon.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Vue",
    "Node.js",
    "NestJS",
    "AWS",
    "MongoDB",
    "Postgres",
    "Docker",
    "Shell",
    "Python",
    "Go",
    "PHP",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/shaikhadnan562",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:shaikhadnan562@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Shine infosoft",
      href: "https://atomic.finance",
      badges: [],
      location: "Hybrid",
      title: "Full stack developer",
      logoUrl: "/shine-logo.jfif",
      start: "June 2022",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Trusttags",
      badges: [],
      href: "https://shopify.com",
      location: "WFO",
      title: "Software Engineer",
      logoUrl: "/trusttags-logo.jfif",
      start: "January 2022",
      end: "May 2022",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
    {
      school: "Government engineering college, Gandhinagar",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree Engineering - First class with Distinction",
      logoUrl: "/gecg-logo.png",
      start: "2018",
      end: "2022",
    }
  ],
  projects: [
    {
      title: "Shootsta",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "I decided to build a SaaS which allows users to collect email addresses from their GPT users.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/shootsta-compose.gif",
      content: () => {
        return (
          <div className="p-r md:p-10">
            <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
              {/* <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-5">✅ Integrated AI into the platform using <span className="font-bold text-neutral-700"> OpenAI’s (gpt-turbo-3.5)</span>{" "}. Optimized response times with Streams and facilitated real-time updates by utilizing Socket.io to broadcast GPT-generated chunks to the frontend for continuous processing and display.</p> */}
              <p className="text-gray-600 dark:text-gray-300 text-lg md:text-2xl leading-relaxed font-light pb-5">
                Integrated AI into the platform using{' '}
                <span className="font-semibold text-gray-800 dark:text-white">
                  OpenAI's (GPT-3.5 Turbo)
                </span>
                . Optimized response times with Streams and facilitated real-time updates by utilizing{' '}
                <span className="font-semibold text-gray-800 dark:text-white">Socket.io</span>{' '}
                to broadcast GPT-generated chunks to the frontend for continuous processing and display.
              </p>
              <Image className="h-full w-full mx-auto object-contain rounded-3xl" alt="shootsta" width={500} height={500} src={'/shootsta-compose.gif'}/>
            </div>
            <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-5">Developed and maintained a custom React component library, published on npm, enabling consistent and reusable UI elements across the platform.</p>
              <Image className="h-full w-full mx-auto object-contain rounded-3xl" alt="shootsta" width={500} height={500} src={'/shootsta-compose.gif'}/>
            </div>
            <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-5">Participated in the transition from micro frontends to a monorepo architecture, which enhanced application performance and maintainability.</p>
              <Image className="h-full w-full mx-auto object-contain rounded-3xl" alt="shootsta" width={500} height={500} src={'/shootsta-compose.gif'}/>
            </div>
            <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-5">Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor </p>
              <Image className="h-full w-full mx-auto object-contain rounded-3xl" alt="shootsta" width={500} height={500} src={'/shootsta-compose.gif'}/>
            </div>
            <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-5">Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor </p>
              <Image className="h-full w-full mx-auto object-contain rounded-3xl" alt="shootsta" width={500} height={500} src={'/shootsta-compose.gif'}/>
            </div>
          </div>
        );
      },
    },
    {
      title: "AdamSea",
      href: "https://www.adamsea.com/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.adamsea.com/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/adamsea/adamsea-home.gif",
      content: () => {
        return (
          <div className="p-r md:p-10">
            <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-5">Enhanced SEO for a React application by implementing server-side rendering (SSR) and optimizing metadata management, resulting in improved search engine visibility and performance.</p>
              <Image className="h-full w-full mx-auto object-contain rounded-3xl" alt="shootsta" width={500} height={500} src={'/adamsea/adamsea-home-pic.png'}/>
               </div>
            <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-5"> Contributed a GraphQL-based backend which reduced the number of round trips to our database by 75%.</p>
              <Image className="h-full w-full mx-auto object-contain rounded-3xl" alt="shootsta" width={500} height={500} src={'/adamsea/adamsea-home-pic.png'}/>
            </div>
            <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-5">Worked within a cross-functional team to refine performance and user interactions, leveraging GraphQL for efficient data fetching and reduced client-side overhead.</p>
              <Image className="h-full w-full mx-auto object-contain rounded-3xl" alt="shootsta" width={500} height={500} src={'/adamsea/adamsea-media.png'}/>
            </div>
            <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
              <Image className="h-full w-full mx-auto object-contain rounded-3xl" alt="shootsta" width={500} height={500} src={'/adamsea/adamsea-home-pic.png'}/>
            </div>
          </div>
        );
      },
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "My150",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      // image: "",
      image: "/my150/dash-152843.png",
      content: () => {
        return (
          <div className="p-r md:p-10">
            <div className="bg-[#327cf330] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-5">Developed and maintained a Next.js 13 application for one of the largest labor unions, focusing on performance, scalability, and user experience.</p>
              <Image className="h-full w-full mx-auto object-contain rounded-3xl" alt="shootsta" width={500} height={500} src={'/my150/claims-153248.png'}/>
            </div>
            <div className="bg-[#327cf330] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-5">Utilized styled-components to create responsive, maintainable, and reusable UI components, ensuring consistent branding across the application.</p>
              <Image className="h-full w-full mx-auto object-contain rounded-3xl" alt="shootsta" width={500} height={500} src={'/my150/dash-152843.png'}/>
            </div>
            <div className="bg-[#327cf330] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-5">Collaborated closely with stakeholders to align the product features with the unique needs of the labor union, delivering a tailored digital solution. </p>
              <Image className="h-full w-full mx-auto object-contain rounded-3xl" alt="shootsta" width={500} height={500} src={'/my150/family-153345.png'}/>
            </div>
            <div className="bg-[#327cf330] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-5">Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor </p>
              <Image className="h-full w-full mx-auto object-contain rounded-3xl" alt="shootsta" width={500} height={500} src={'/my150/hours-153005.png'}/>
            </div>
            <div className="bg-[#327cf330] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-5">Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor </p>
              <Image className="h-full w-full mx-auto object-contain rounded-3xl" alt="shootsta" width={500} height={500} src={'/my150/xyz-153116.png'}/>
            </div>
          </div>
        );
      },
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "UNO wallet",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      // image: "",
      image: "/uno/dash-232927.png",
      content: () => {
        return (
          <div className="p-r md:p-10">
            <div className="bg-[#1ec3ac36] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-5">Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor </p>
              <Image className="h-full w-full mx-auto object-contain rounded-3xl" alt="shootsta" width={500} height={500} src={'/uno/card-233556.png'}/>
            </div>
            <div className="bg-[#1ec3ac36] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-5">Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor </p>
              <Image className="h-full w-full mx-auto object-contain rounded-3xl" alt="shootsta" width={500} height={500} src={'/uno/dash-232927.png'}/>
            </div>
            <div className="bg-[#1ec3ac36] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-5">Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor </p>
              <Image className="h-full w-full mx-auto object-contain rounded-3xl" alt="shootsta" width={500} height={500} src={'/uno/setting-233735.png'}/>
            </div>
            <div className="bg-[#1ec3ac36] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-5">Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor </p>
              <Image className="h-full w-full mx-auto object-contain rounded-3xl" alt="shootsta" width={500} height={500} src={'/uno/transaction-233301.png'}/>
            </div>
            <div className="bg-[#1ec3ac36] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-5">Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor Lorem ipsdum dolor and Lorem ipsum dolor </p>
              <Image className="h-full w-full mx-auto object-contain rounded-3xl" alt="shootsta" width={500} height={500} src={'/uno/transx-233849.png'}/>
            </div>
          </div>
        );
      },
      // video:
        // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        }
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
