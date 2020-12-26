# System dependencies
FROM node:14.15

# WORKPATH
WORKDIR /appPhone/frontend

COPY package*.json ./

RUN npm install

COPY . .

#Environment var
ENV REACT_APP_API_URL=https://phonex-react.herokuapp.com

# PORT
EXPOSE 3000

CMD ["npm", "start"]