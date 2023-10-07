import React from 'react';
import ReactDOM from 'react-dom/client';

function Nav() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <div class= "d-flex justify-content-end">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Profile</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Upload</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Past Questions</a>
                      </li>
                    </ul>
                  </div>
                  <form class="d-flex justify-content-end" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </nav>
        </div>
    );
}

export default Nav;
