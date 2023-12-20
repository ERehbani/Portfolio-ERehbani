export const projects = [
  {
    title: "Ooink.me",
    icons: [
      {
        src: "/nextjs-dark.png",
        alt: "Next",
        classname: "svg-icon",
        span: {
          span: "ReactJS",
          classname: "tooltip3 left-9",
        },
      },
      {
        src: "/tailwind-dark.png",
        alt: "Tailwind",
        classname: "svg-icon",
        span: {
          span: "TailwindCSS",
          classname: "tooltip3 left-24",
        },
      },
      {
        src: "/nextui-dark.png",
        alt: "NextUI",
        classname: "svg-icon",
        span: {
          span: "NextUI",
          classname: "tooltip3 left-[12rem]",
        },
      },
      {
        src: "/vercel-dark.png",
        alt: "Vercel",
        classname: "svg-icon",
        span: {
          span: "Vercel",
          classname: "tooltip3 left-64",
        },
      },
      {
        src: "/prisma-dark.png",
        alt: "Prisma",
        classname: "svg-icon",
        span: {
          span: "Prisma",
          classname: "tooltip3 left-[21rem]",
        },
      },
      {
        src: "/git-dark.png",
        alt: "Git",
        classname: "svg-icon",
        span: {
          span: "Git",
          classname: "tooltip3",
        },
      },
      {
        src: "/nodejs-dark.png",
        alt: "NodeJS",
        classname: "svg-icon",
        span: {
          span: "NodeJS",
          classname: "tooltip3",
        },
      },
    ],
    description: {
      description:
        " I developed the Ooink.me web application based on the coding of internet links through a random code to facilitate their sharing on networks. Made with NextJS, TailwindCSS with backend in NodeJS and database in Postgres with the Prisma ORM and deployed in Vercel",
      classname: "description-show",
    },
    divLink: "webGithub max-lg:justify-center max-lg:-ml-5 flex",
    links: [
      {
        href: "http://ooink.me/",
        id: "web-link",
        button: {
          classname: "button-visit",
          image: {
            src: "/web-light.svg",
            alt: "Web",
            width: 36,
            classname:
              "links-projects w-9 justify-center mr-2 max-sm:mr-1 max-sm:-mt-1",
          },
        },
        text: {
          classname: "mt-1 text-link",
          text: "Visit",
        },
      },
      {
        href: "https://github.com/ERehbani/ooink.me",
        id: "web-link",
        classname: "",
        button: {
          classname: "button-visit",
          image: {
            src: "/Github.svg",
            alt: "Github",
            width: 36,
            classname: "links-projects w-9 justify-center mr-2",
          },
        },
        text: {
          classname: "text-link flex flex-col justify-center",
          text: "View code",
        },
      },
    ],
    images: [
        {
            src: "/Projects/Web Projects/OG2.webp",
            alt: "Ooink.me",
            width: 600,
            classname: "image-show"
        }
    ]
  },
];
