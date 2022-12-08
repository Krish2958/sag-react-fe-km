# Ref: https://www.knowledgehut.com/blog/web-development/how-to-dockerize-react-app
FROM node:16-alpine3.16 as builder
WORKDIR /app

# Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm i

# Copy code
COPY . .

# Build the app
RUN npm run build

# Serve the app, using nginx
FROM nginx:1.19.0

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
