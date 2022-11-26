# How to run and start development

## Installation
### Window
Install docker-desktop


### Linux
1. Install docker and do post-installation step: https://docs.docker.com/engine/install/linux-postinstall/ 
2. Install docker-compose
3. Install Portainer (after installed docker): 
    ```
    docker volume create portainer_data
    ```
    ```
    docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest
    ```
    Portainer is for managing docker's container, after run the command above, access via: http://localhost:9443

    Later, if the Portainer is not started yet, run the command to start:
    ```
    docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest
    ```

## Setup
1. Clone this repo from branch develop.
2. Open terminal, change directory to this repo.


## Run
Type in terminal (inside the repo directory) these line:

### Window
    docker compose up -d --build

### Linux
    docker-compose up -d --build


## Development
After run commands above, you should be able to do some coding now, the docker will automatically sync your code with the container. In case it is not sync, run this command everytime you change your code:
``` 
docker-compose up -d --build 
```
To view the web:
- For UI, access via: http://localhost:8888/
- For API, access via: http://localhost:6868/
- For database, access via: http://localhost:3307/