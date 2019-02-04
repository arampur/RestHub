# RestHub
RestApiImplementation
Qlik Test Project

Exposes a simple REST API that allows users to:

a. Allows users to submit/post messages:

Method = POST, URL = /users

Parameter = name(Required) -> string -> message(Required) -> string -> Displays success message..

b. Lists received messages:

Method = GET, URL = /api/index.js/users

success and shows list of messages and users (JSON)

c. Retrieves a specific message on demand, and determines if it is a palindrome:

Method = GET, URL = /api/index.js/users/{MSG_ID}

Parameter -> MSG_ID -> integer -> returns with success on successful message retreival

d. Allows users to delete specific messages

Method = DELETE, URL = /api/index.js/users/

Parameter -> MSG_ID -> integer -> returns with success on successful deletion of messages

Creating the Application:

This REST API application contains..

/api /controller UserController.js index.js UsersModel.js

In "index.js", I am identifying the "method" whic]h are GET, POST and DELETE, and "request" which has URL information and message/user ID information.=

With respect to the controllers information, there is one file name "UserController.js". This file contains model structure of GET, PUT and DELETE. In all models I'm fetching data from database and maintained error code if I found any errors.

REST API Documentation:

GET: A GET method (or GET request) is used to retrieve messages and/or retrieve a specific message on demand by using ID and determines if it is a palindrome or not. It should be used SOLELY for retrieving data and should not alter.

POST: A POST method (or POST request) is used to create a message. For instance, when you want to add a new message but have no idea where to store it, you can use the POST method to post it to a URL and let the server decide the URL.

DELETE: A DELETE method (or DELETE request) is used to delete a specific message using ID by a URL.