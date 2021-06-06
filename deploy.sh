#This shell script takes inputs $DOCKER_ACCESS_KEY, $DOCKER_ID, and $EC2_INSTANCE.
#These are DockerHub credentials, and an address to ssh into for deployment.

#Log in to DockerHub, then push the images built for production.
echo "$DOCKER_ACCESS_KEY" | docker login -u "$DOCKER_ID" --password-stdin
docker push ziyadss/flickr-frontend
docker push ziyadss/flickr-backend

#Removes empty .env file
rm flickr-backend/project/.env

#Removes old migration files from server
ssh -o StrictHostKeyChecking=no ubuntu@$EC2_INSTANCE "sudo rm -r  fotone/flickr-backend/*/migrations"

#Sending of project files to be used as volumes,
#allowing static files to be changed without reloading containers (for backend, as it's running a development server instead of a production build.)
scp -o StrictHostKeyChecking=no -r flickr-backend docker-compose.yml ubuntu@$EC2_INSTANCE:fotone

#From instance, pulls updated images and reloads the containers if they were changed.
ssh -o StrictHostKeyChecking=no ubuntu@$EC2_INSTANCE "cd fotone; sudo docker-compose pull; sudo docker-compose up --build -d"
