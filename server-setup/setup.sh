#!/bin/sh

EC2_INSTANCE=ec2-3-66-104-187.eu-central-1.compute.amazonaws.com

#Updates software on instance, install nginx, docker, and certbot, make a directory for enviroment variables.
ssh -o "StrictHostKeyChecking no" ubuntu@$EC2_INSTANCE "sudo apt update; sudo apt -y full-upgrade; sudo apt -y install nginx; sudo snap install docker; sudo snap install certbot --classic; mkdir fotone; mkdir -p fotone/flickr-backend/project"

#Copies nginx configuration, hosts file and enviroment variables to instance.
scp default.conf hosts ubuntu@$EC2_INSTANCE:
scp .env ubuntu@$EC2_INSTANCE:fotone/flickr-backend/project

#Moves files to right directories, gets SSL certificate, restarts nginx service.
ssh -o "StrictHostKeyChecking no" ubuntu@$EC2_INSTANCE "sudo mv default.conf /etc/nginx/conf.d; sudo mv hosts /etc/hosts; sudo certbot --nginx -m ziyad.ss@hotmail.com --agree-tos --domains fotone.me --domains www.fotone.me --non-interactive; sudo rm /etc/nginx/sites-enabled/default; sudo service nginx restart"
