import React from "react";
import programming from "../images/programming.png";
import chatapp from "../images/chatapp.png";
import blogsite from "../images/blogsite.png";
import nodetodo from "../images/nodetodo.png";
import weather from "../images/weather.png";
import calculator from "../images/calculator.png";
import todolist from "../images/todolist.png";
import keeper from "../images/keeper.png";
import portfolio from "../images/portfolio.png";

function Projects() {
  return (
    <section id="projects">
      <div className="projects-text text-edit">
        <img src={programming} alt="" className="heading-img" />
        <h1>Projects</h1>
        <p>Here are some of my projects:</p>
      </div>

      <div className="row projectrow">
        <div className="container col-lg-6 col-md-12 col-sm-12">
          <img src={weather} alt="" className="image" />
          <div className="overlay">
            <div className="textedit">
              <h4>Weather App</h4>
              <h5>NodeJS</h5>
              <p>
                A web app that displays weather information of any city, built
                with NodeJS using the open weather API.
              </p>
              <a href="https://akashili-weather-app.herokuapp.com/">
                View Live
              </a>
              <a href="https://github.com/Dev-Akashili/Weather-App">
                View in GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="container col-lg-6 col-md-12 col-sm-12">
          <img className="container" src={chatapp} alt="" className="image" />
          <div className="overlay">
            <div className="textedit">
              <h4>Live Chat App</h4>
              <h5>NodeJS</h5>
              <p>
                A chat application with rooms labelled as programming languages,
                built with NodeJS, Express and Socket.io
              </p>
              <a href="https://akashili-chatapp.herokuapp.com/">View Live</a>
              <a href="https://github.com/Dev-Akashili/Live-Chat-App">
                View in GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row projectrow">
        <div className="container col-lg-6 col-md-12 col-sm-12">
          <img src={blogsite} alt="" className="image" />
          <div className="overlay">
            <div className="textedit">
              <h4>Blog Web App</h4>
              <h5>NodeJS</h5>
              <p>
                A blog website where you can publish your thoughts and ideas,
                created with NodeJS and Express
              </p>
              <a href="https://akashili-blog-website.herokuapp.com/">
                View Live
              </a>
              <a href="https://github.com/Dev-Akashili/Blog-Website">
                View in GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="container col-lg-6 col-md-12 col-sm-12">
          <img className="container" src={nodetodo} alt="" className="image" />
          <div className="overlay">
            <div className="textedit">
              <h4>NodeJS Todo List App</h4>
              <h5>NodeJS</h5>
              <p>A simple todo list web app built with NodeJS</p>
              <a href="https://akashili-todolist-app.herokuapp.com/">
                View Live
              </a>
              <a href="https://github.com/Dev-Akashili/NodeJS-Todolist-App">
                View in GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row projectrow">
        <div className="container col-lg-6 col-md-12 col-sm-12">
          <img src={keeper} alt="" className="image" />
          <div className="overlay">
            <div className="textedit">
              <h4>Keeper App</h4>
              <h5>React</h5>
              <p>
                A web application inspired by the Google Keep note taking
                service. Built with React.
              </p>
              <a href="https://akashili-react-keeperapp.netlify.app/">
                View Live
              </a>
              <a href="https://github.com/Dev-Akashili/react-keeperApp">
                View in GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="container col-lg-6 col-md-12 col-sm-12">
          <img
            className="container"
            src={calculator}
            alt=""
            className="image"
          />
          <div className="overlay">
            <div className="textedit">
              <h4>Calculator App</h4>
              <h5>React</h5>
              <p>
                A simple functional calculator web application created with
                React.
              </p>
              <a href="https://akashili-react-calculator.netlify.app/">
                View Live
              </a>
              <a href="https://github.com/Dev-Akashili/react-calculator">
                View in GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row projectrow">
        <div className="container col-lg-6 col-md-12 col-sm-12">
          <img className="container" src={todolist} alt="" className="image" />
          <div className="overlay">
            <div className="textedit">
              <h4>To-do List App</h4>
              <h5>React</h5>
              <p>
                A responsive To-do List web application that adds items and
                deletes when added item is clicked, created with React.
              </p>
              <a href="https://akashili-react-todolist.netlify.app/">
                View Live
              </a>
              <a href="https://github.com/Dev-Akashili/react-todolist">
                View in GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="container col-lg-6 col-md-12 col-sm-12">
          <img className="container" src={portfolio} alt="" className="image" />
          <div className="overlay">
            <div className="textedit">
              <h4>Portfolio Site</h4>
              <h5>React</h5>
              <p>
                A simple portfolio website displaying my current skills and
                personal projects created with React.
              </p>
              <a href="#header">View Live</a>
              <a href="https://github.com/Dev-Akashili/react-portfolio">
                View in GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
