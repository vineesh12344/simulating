# Implementing Juraj Majerik's rides

I aim to walk through Juraj Majerik's implementation of a ride sharing app. I don't aim to add something new but to learn more about simulations and how they are implmented.

Since i aim to learn more about the simulation engine behind the app and not about the various microservices implemented I will implement this locally to avoid the costs and complexity of deploying to the web.

Reference : https://jurajmajerik.com/

# Instructions to run

1) Clone the repository into your local computer
2) Make sure you have docker desktop installed
3) Run docker create volume app-db
4) Run docker-compose build
5) Run docker-compose up -d
6) Run the queries in db folder inside the db container that has been created
7) Rerun simulation container
8) Go to http://localhost:8080/

# Upon making any changes to frontend

1) Delete build folder in frontend
2) Run npm run build in frontend directory
3) Change back to original directory
4) Run docker-compose build
5) Run docker-compose up -d
6) Go to http://localhost:8080/
7) If changes aren't reflected immediately refresh a few times
      
