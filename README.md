# Built With
* [Strapi](https://strapi.io/) - Open-source, NodeJS, Headless CMS
* [Gatsby](https://gatsby.com/) - Frontend framework and JamStack delivery platform
* [Docker](https://docker.com) - A Container Engine

# Clone the repo
Run the following command in your command-line within the directory of your choosing.
```
git clone git@github.com:RejaurRahman/light-shape-gym.git
```

OR

```
git clone https://github.com/RejaurRahman/light-shape-gym.git
```

# Build and Start
Begin by opening the terminal window and navigate to the root of the repository.

* If Node module packages have been added or removed or repo needs to be run first time
```
docker-compose build
```

* If it's not the first time the repo is build and only files have been changed and full re-build is not required
```
docker-compose up
```

* If the containers need to be stopped/removed
```
docker-compose down
```

# URL Links
* [http://localhost:8000/](http://localhost:8000/) - View Gatsby site on local browser
* [http://localhost:8000/___graphql](http://localhost:8000/___graphql) - View Gatsby site's data and schema
