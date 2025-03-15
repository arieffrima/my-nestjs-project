# Use an official Node.js runtime as a parent image
FROM node:20-slim AS base

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the app
RUN npm run build

# Stage 2: Create a smaller production image
FROM node:20-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy only the built app and node_modules from the previous image
COPY --from=base /usr/src/app/dist /usr/src/app/dist
COPY --from=base /usr/src/app/node_modules /usr/src/app/node_modules

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["node", "dist/main"]
