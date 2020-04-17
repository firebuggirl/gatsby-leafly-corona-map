https://medium.com/swlh/dockerizing-a-react-application-with-docker-and-nginx-19e88ef8e99a

`docker-compose up --build`

`docker-compose down -v --rmi local`//stops and removes stopped containers and delete any associated network. The — rmi flag removes the images => careful now to delete other volumes...like FireBug Wordpress

## Docker for production

`touch Dockerfile-prod`

- For those using `react router` create an `nginx folder` with an `nginx file` inside at the root of the project like so

`cd /project-root`

`mkdir nginx`

`cd nginx`

`touch nginx.conf`

## Prod

`touch docker-compose-prod.yaml`

- `-f` flag let’s you pick a specific docker-compose file to run

 `docker-compose -f docker-compose-prod.yaml up --build -d`

 <!-- `docker-compose -f docker-compose-prod.yml down -v --rmi local` -->

  `docker-compose -f docker-compose-prod.yaml down`


