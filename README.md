# hpdf
HPDF: Individual task for Week-1 
## Description

<p>Individual task for Week-1</p>

## Workflow

- A simple hello-world at http://localhost:8081/ that displays a simple string like "Hello World - Jobis"
- List of Authors and Posts at http://localhost:8081/authors
- Setting a simple cookie at http://localhost:8081/setcookie with the following values: name=<Jobis> and age=<22>.
- Fetching the set cookie with http://localhost:8081/getcookies and display the stored key-values in it.
- Deny requests to http://localhost:8081/robots.txt page then you will redirect to  http://httpbin.org/deny 
- Render an image at http://localhost:8081/image.
- A text box at http://localhost:8081/input which sends the data as POST to an endpoint http://localhost:8081/inputrecieves. 
  This endpoint should log the received the received to stdout.

## Stack

**Frontend**

- Html
- css

**Backend**

- Nodejs
- Express

**Dependencies**

- Express
    body-parser
    cookie-parser
    https
    path

Installation

    Create a folder hpdftask mkdir hpdftask
    Navigate to that folder cd hpdftask
    Clone this repository git clone https://github.com/jobizzz/MBook.git
    Navigate into hpdf cd hpdf
    Install all the nodemodules npm install
    Run npm run start
    Go to http://localhost:8081
    Go to http://localhost:8081/authors
    Go to http://localhost:8081/setcookie
    Go to http://localhost:8081/getcookies
    Go to http://localhost:8081/robots.txt
    Go to http://localhost:8081/image
    Go to http://localhost:8081/input
