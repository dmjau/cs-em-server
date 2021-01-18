Setup Server.

01- Create files /cs-client and /cs-server.
02- Open terminal and change directory to /cs-server.
03- Type in terminal -> git clone https://github.com/dmjau/cs-em-server.git (clone repository).
04- Create database.
05- Edit config.json on the directory /config/config.json and fill with database credentials.
06- Type in terminal -> npx sequelize-cli db:migrate (to migrate database).
07- Type in terminal -> npx sequelize-cli db:seed:all (to migrate seeders).
08- Type in terminal -> npm start (to start local server on http://localhost:4000).






