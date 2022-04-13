import React from "react";
import "./portfolio.css";
import IMAGE1 from "../../assets/portfolio1.png";
import IMAGE2 from "../../assets/portfolio2.png";
import IMAGE3 from "../../assets/portfolio3.png";
import IMAGE4 from "../../assets/portfolio4.png";
import IMAGE5 from "../../assets/portfolio5.png";
import IMAGE6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMAGE1,
    title: "Mohanad Blog",
    github: "https://github.com/mohanadefm/MERN-BLOG-2020",
    demo: "https://mohanad-blog.herokuapp.com",
  },
  {
    id: 2,
    image: IMAGE2,
    title: "Evana Store",
    github: "https://github.com/mohanadefm/evana-store",
    demo: "https://evana-store.herokuapp.com",
  },
  {
    id: 3,
    image: IMAGE3,
    title: "Todo List App",
    github: "https://github.com/mohanadefm/todo-list",
    demo: "https://methtodo.netlify.app",
  },
  {
    id: 4,
    image: IMAGE4,
    title: "Robofriends App",
    github: "https://github.com/mohanadefm/robofriends",
    demo: "https://mohanadefm.github.io/robofriends",
  },
  // {
  //   id: 5,
  //   image: IMAGE5,
  //   title: "project title",
  //   github: "www.google.com",
  //   demo: "www.google.com",
  // },
  // {
  //   id: 6,
  //   image: IMAGE6,
  //   title: "project title",
  //   github: "www.google.com",
  //   demo: "www.google.com",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
