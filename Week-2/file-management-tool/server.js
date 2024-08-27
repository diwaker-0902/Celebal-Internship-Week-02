// note : This task can also be done by creating the file in the local machine.

const http = require('http'); // Import HTTP module
const fs = require('fs'); // Import File System module
const path = require('path'); // Import Path module

const port = 3000; // Define the port

const requestHandler = (req, res) => {
  const { url, method } = req;
    
    // file system
  if (url === "/create" && method ==="'POST") {
    const filePath = path.join(__dirname, "example.txt");
    fs.writeFile(filePath, "Hello world", (err) => {                // syntax of write in the file
      if (err) {
        res.statusCode = 500;
        return res.end("Error occured in creating file");
      }
      res.statusCode = 200;
      res.end('File created successfully');
    });  
  }
  
  
  else if (url === "/read" && method === 'GET') {                   // syntax of read in the file
    const filePath = path.join(__dirname, 'example.txt');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        return res.end("Error while reading file");
      }
      res.statusCode = 200;
      res.end(data);
    });
  }
  
  
  else if (url === "/delete" && method === "DELETE") {                 // syntax of delete or remove in the file
    const filePath = path.join(__dirname, 'example.txt');
    fs.unlink(filePath, (err) => {
      if (err) {
        res.statusCode = 500;
        return res.end("Error while deleting file");
      }
      res.statusCode = 200;
      res.end("File deleted successfully");
    });
  }
  
  
  else {
    res.statusCode = 404;
    res.end("Not Found");
  }
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


