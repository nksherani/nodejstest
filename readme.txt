Customer portal consists of three fundamental components:
1. Front-end: Written on ReactJS
2. Back-end REST API: Implemented on Node.js
3. Database server: Mongo Database


Deployment Procedure:
1. Open nodejsserver folder and open startapi.js file to change db server url if required.

2. Open nodejsserver folder in terminal and run the following commands:
npm install
node startapi.js
server will start listening for API calls at localhost:3001

3. Open reactdemoapp folder in terminal and run the following commands:
npm install
npm start

Browser window will be open showing home page at localhost:3000.

4. Click Add and enter details of customers. On successful data submission, it will redirect to the list of customers.

5. Click Edit at the end of each row to edit any individual user.