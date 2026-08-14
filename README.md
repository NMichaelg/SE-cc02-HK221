# UWC 2.0

A full-stack web application developed as part of a Software Engineering group project.

The system provides a web-based interface for managing and viewing operational information such as **calendar tasks, vehicles, areas, and teams**. It consists of a React frontend, a Node.js/Express backend API, and a MySQL database, with Docker Compose used to simplify local development and deployment.

## Overview

The application is structured as three main components:

* **Frontend (`view/`)** — React-based web interface for interacting with the system.
* **Backend (`api/`)** — Node.js and Express REST API that handles application logic and communicates with the database.
* **Database** — MySQL database used to persist application data.

The application is containerized using Docker Compose, allowing the frontend, backend, and database to be run together in a consistent development environment.

## Features

The current application includes functionality for:

* 📅 **Calendar / Task Management**

  * View calendar information
  * Retrieve tasks for a specific day
  * Display multiple tasks associated with a day

* 🚗 **Vehicle Information**

  * View vehicle-related information through the application

* 📍 **Area Information**

  * View information associated with different operational areas

* 👥 **Team Information**

  * View team-related information

The backend exposes API endpoints for these areas of functionality, while the React frontend provides the user interface.

## Technology Stack

### Frontend

* React
* React Router
* Material UI
* FullCalendar
* JavaScript / JSX
* SCSS

The frontend is located in the `view/` directory. It uses React and includes FullCalendar components for calendar-based functionality.

### Backend

* Node.js
* Express.js
* Sequelize
* MySQL2
* CORS
* dotenv

The backend is located in the `api/` directory and provides the application's API endpoints.

### Database

* MySQL 5.7
* Sequelize ORM

The database is managed as part of the Docker Compose environment and is persisted using a Docker volume.

### Development Environment

* Docker
* Docker Compose

---

## Project Structure

```text
.
├── api/
│   ├── app/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── ...
│   ├── scripts/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── view/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── firebase/
│   │   ├── pages/
│   │   └── App.js
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml
├── .env
├── .gitignore
└── README.md
```

The frontend currently organizes its pages into **Areas, Calendar, Teams, and Vehicles**, while the backend organizes its application logic into controllers and models.

## Prerequisites

Before running the project, install:

* [Docker Desktop](https://www.docker.com/products/docker-desktop/) on Windows or macOS
* Docker Engine and Docker Compose on Linux
* Git

Docker Desktop includes Docker Compose and is the recommended setup for Windows and macOS.

## Getting Started

### 1. Clone the repository

Clone the repository and switch to the `develop` branch:

```bash
git clone https://github.com/NMichaelg/SE-cc02-HK221.git
cd SE-cc02-HK221
git checkout develop
```

### 2. Configure environment variables

The project uses environment variables for database and application configuration.

Create a local `.env` file based on the project's environment-variable template(s).

**Do not commit real passwords, API keys, or other secrets to Git.**

The Docker Compose configuration reads database credentials and port configuration from `.env`.

### 3. Start the application

From the project root, run:

```bash
docker compose up -d --build
```

This starts the application's services, including:

* MySQL database
* Backend API
* React frontend

The Docker Compose configuration defines separate `mysqldb`, `api`, and `view` services.

### 4. Access the application

Once the containers have started, the default development endpoints are:

| Service     | URL                   |
| ----------- | --------------------- |
| Frontend    | http://localhost:8888 |
| Backend API | http://localhost:6868 |
| Database    | localhost:3307        |

These ports are configured through the project's Docker Compose environment variables.

## Development

The Docker Compose configuration mounts the frontend and backend source directories into their respective containers, allowing changes made locally to be reflected during development.

If the containers need to be rebuilt after a configuration or dependency change:

```bash
docker compose up -d --build
```

To view the running containers:

```bash
docker compose ps
```

To view application logs:

```bash
docker compose logs
```

To stop the application:

```bash
docker compose down
```

## Backend API

The backend is implemented using Express and listens on the configured application port.

Some of the currently available endpoints include:

| Endpoint                  | Purpose                           |
| ------------------------- | --------------------------------- |
| `GET /`                   | Calendar page                     |
| `GET /home`               | Calendar page                     |
| `GET /calender`           | Calendar page                     |
| `GET /vehicle-info`       | Retrieve vehicle information      |
| `GET /one-day-multi-task` | Retrieve multiple tasks for a day |
| `GET /task-info`          | Retrieve task information         |
| `GET /area-info`          | Retrieve area information         |
| `GET /team-info`          | Retrieve team information         |

The endpoints are implemented through separate controllers for tasks, vehicles, areas, and teams.

## Frontend Development

The frontend is a React application located in `view/`.

For development inside the frontend container, the standard React commands include:

```bash
npm start
```

Run tests with:

```bash
npm test
```

Create a production build with:

```bash
npm run build
```

The frontend uses libraries including React Router, Material UI, and FullCalendar.

## Database

The project uses MySQL as its database and Sequelize as the ORM layer.

The database runs as the `mysqldb` Docker Compose service and uses a persistent Docker volume so that database data can survive container restarts.

Database configuration is supplied through environment variables rather than being hard-coded into the application.

## Team Project

This repository contains the source code developed by the project team as part of a Software Engineering course assignment.

Contributors:

* Add team member 1
* Add team member 2
* Add team member 3
* Add team member 4

> Replace the placeholders above with the actual team members and, if required by the course, their respective responsibilities.

## Branching

The primary development work for this repository is currently maintained on the `develop` branch.

For development:

```bash
git checkout develop
git pull origin develop
```

Create a feature branch before making changes:

```bash
git checkout -b feature/<feature-name>
```

After completing the work, push the branch and open a pull request for review.

## Notes

This project is intended primarily as an academic Software Engineering project.

The repository is currently public, but **no open-source license has been specified**. Do not assume that the absence of a license means that the project can be freely reused or redistributed.

Any licensing decision should be agreed upon by the project team and, where applicable, follow the requirements of the course or institution.

## Acknowledgements

This project uses several open-source libraries and frameworks, including React, Express, Sequelize, MySQL, Material UI, and FullCalendar.

Each third-party dependency remains subject to its respective license and terms.
