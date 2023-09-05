/*
HTTP - hypertext transfer protocol -
 a  set of rules that specifies how a server and a browser should communicate

 URL - Universal resource Locators - 
 used to reference web pages, file transfers, email , databases , etc 

 DNS - Domain name system - 
 takes the host name and turns it into an ip address 

 Query string - 
 Provides extra infomation as part of the url commonly used for search tearms and form info 

 HTTP Verbs - 
GET - get data from the server 
POST - send some data to the server 

HTTP request - 
An HTTP request is a request to recieve some date from a client to a server 

HTTP Response - 
data that is sent from a server to a client in response to a HTTP data request 

HTTP Header - 
Headers provide additional information about the request or the response. 
EX: Hostname, data, Language , cookies 

What happens when you type a URL in a browser?
DNS takes the host name and turns it into an IP address
The browser makes a request to that IP address
The server sends a HTML response
The browser makes a DOM from that HTML and makes another HTTP request for other resources such as links,pics, javascript etc.
Once the browser has all resources it will render the page 