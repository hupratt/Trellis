FROM node:22-alpine3.19 AS release-stage
# COPY package.json package-lock.json /app
WORKDIR /backend
# COPY package.json .
# COPY *.lock .
# RUN npm --verbose install
# RUN npm install pm2
# COPY src .
# COPY node_modules .
# COPY public .
# COPY .env .
COPY . .
# RUN npm install pm2 -g
CMD ["npm", "start"]
# CMD ["pm2-runtime", "start", "src/server.js"]
EXPOSE 5003

# COPY --from=build-stage /app/build /backend/build
