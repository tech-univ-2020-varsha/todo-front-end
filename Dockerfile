FROM node
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5000
RUN npm run build 
RUN REACT_APP_URL=http://todo/notes npm install -g serve
CMD ["serve", "-s", "build"]

# CMD ["npm","start"]

