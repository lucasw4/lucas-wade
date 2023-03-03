import Card from "@/components/Card";
import HeaderText from "@/components/HeaderText";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Random Decision Maker",
    summary: "Uses a roulette wheel to animate the choosing of a random idea.",
    image: "/images/decision-maker.png",
    link: "https://github.com/lucasw4/random-decision-maker",
    stack: "React, Tailwind",
  },
  {
    id: 2,
    title: "Interview Scheduler",
    summary:
      "A Scheduling app, where the user can create, edit and delete appointments for different days.",
    image: "/images/booking-appointment-2.png",
    link: "https://github.com/lucasw4/scheduler",
    stack: "React, NodeJS, Express, SQL, Jest",
  },
  {
    id: 3,
    title: "ListEasy",
    summary: "Automatically categorizes to-do items using AI.",
    image: "/images/add-task-page-2.png",
    link: "https://github.com/lucasw4/smart-todo-list",
    stack: "JQuery, Bootstrap, Node, Express, SQL",
  },
  {
    id: 4,
    title: "Tweeter",
    summary:
      "A Twitter clone that uses JQuery to dynamically render tweets on the page.",
    image: "/images/desktop-tweeter-page-2.png",
    link: "https://github.com/lucasw4/tweeter",
    stack: "Ajax, JQuery, NodeJS, Express",
  },
];

const Portfolio = () => {
  return (
    <div className='bg-gray-900 py-8 md:mt-40' id='portfolio--section'>
      <HeaderText message='Projects' />
      <div className='container mx-auto mt-32'>
        <div className='h-24'></div>
        <div className='flex flex-wrap -mx-4'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='w-96 mx-auto flex-col items-center sm:w-1/2 md:flex-row mb-14'
            >
              <Card
                title={project.title}
                summary={project.summary}
                image={project.image}
                link={project.link}
                stack={project.stack}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center'>
        <a
          href='https://github.com/lucasw4'
          className='text-4xl font-bold transition-all hover:scale-110 hover:text-purple-500 text-center'
          target='_blank'
        >
          View More on my{" "}
          <strong className='underline hover:no-underline transition ease-in-out duration-500'>
            GitHub
          </strong>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
