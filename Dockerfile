
FROM node:18-alpine


WORKDIR /app


COPY package.json package-lock.json ./
RUN npm install


COPY . .


RUN npm run build


RUN npm install -g serve


EXPOSE 5000

# Start the server to serve the build folder
CMD ["serve", "-s", "build", "-l", "5000"]
