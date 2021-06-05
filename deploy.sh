#This shell script takes an input $EC2_INSTANCE
#This is the address to ssh into for deployment.

#Removes empty .env file
rm flickr-backend/project/.env

#Removes old migration files from server
ssh -o StrictHostKeyChecking=no ubuntu@$EC2_INSTANCE "sudo rm -r  fotone/flickr-backend/*/migrations"

#Sending of project files to be used as volumes,
#allowing static files to be changed without reloading containers (for backend, as it's running a development server instead of a production build.)
scp -o StrictHostKeyChecking=no -r flickr-backend docker-compose.yml ubuntu@$EC2_INSTANCE:fotone

#From instance, pulls updated images and reloads the containers if they were changed.
ssh ubuntu@$EC2_INSTANCE "cd fotone; sudo docker-compose pull"
#; sudo docker-compose up --build -d"
