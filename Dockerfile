# Use lightweight Node.js image
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy app code
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
