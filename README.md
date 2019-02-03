# RestHub
RestApiImplementation
Rest Api Qlik Test Project

Exposes a simple REST API that allows users to:

a. Allows users to submit/post messages:

Method = POST, URL = /api

Parameter = message(Required) -> string -> message data -> return 201 status code on success

b. Lists received messages:

Method = GET, URL = /api/index.js/messages

return 200 status code on success and shows list of messages

c. Retrieves a specific message on demand, and determines if it is a palindrome:

Method = GET, URL = /api/index.js/messages/{MSG_ID}

Parameter -> MSG_ID -> integer -> return 200 status code on success

d. Allows users to delete specific messages

Method = DELETE, URL = /api/index.js/messages/{MSG_ID}

Parameter -> MSG_ID -> integer -> return 200 status code on success

Creating the Application:

This REST API application contains..

/api /controller messages.js app_db.sql index.js

In "index.js", I am identifying the "method" which are GET, POST and DELETE, and "request" which has URL information and message/user ID information.

Similarly, "app_db.sql" is a database which contains "messages" table and it contains {'id', 'message', 'created_time', 'is_delete', 'delete_time'} attributes.

In "controller" folder there is one file name "messages.js". This file contains model structure of GET, PUT and DELETE. In all models I'm fetching data from database and maintained error code if I found any errors.

REST API Documentation:

GET: A GET method (or GET request) is used to retrieve messages and/or retrieve a specific message on demand by using ID and determines if it is a palindrome or not. It should be used SOLELY for retrieving data and should not alter.

POST: A POST method (or POST request) is used to create a message. For instance, when you want to add a new message but have no idea where to store it, you can use the POST method to post it to a URL and let the server decide the URL.

DELETE: A DELETE method (or DELETE request) is used to delete a specific message using ID by a URL.