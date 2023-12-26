#Dockerfile

# Use this image as the platform to build the app
FROM node:latest

# A small line inside the image to show who made it
LABEL Developers="Fritz Schubert"

# The WORKDIR instruction sets the working directory for everything that will happen next
WORKDIR /app

# Copy all local files into the image
COPY . .

# Clean install all node modules
RUN npm install

# Build SvelteKit app
RUN npm run build

# Delete source code files that were used to build the app that are no longer needed
RUN rm -rf src/ static/ docker-compose.yml

# This is the command that will be run inside the image when you tell Docker to start the container
CMD ["node","server.js"]