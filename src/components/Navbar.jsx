import React from "react";

function Navbar() {
  return (
    <header id="header">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand text-edit" href="#">
          Emeka Akashili
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="mailto:chukwuemeka.akashili@gmail.com">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
