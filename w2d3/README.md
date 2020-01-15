# Networking with TCP and HTTP

## What is networking ?

### OSI Layers

#### Interesting to know

1 - Physical
(Ethernet / USB / IEEE1394)
2 - Datalink Layer
(WiFi / ARP / MAC / PPP)
3 - Network
(IP / NAT / ARP)

#### Should be aware of

4 - Transport
(TCP / UDP / FCP)
5 - Session
(TCP\* / SMB / NetBEUI)
6 - Presentation
(TLS / SSL / GZIP)
7 - Application
(HTTP / SMTP / SSH)

## TCP vs UDP

### Intro

Being in the fourth layer*, these two protocols manage the transmission of our information.
*TCP can be attributed to the fourth and fifth layer, since it manages sessions too.

#### Small Joke about TCP

Hello, would you like to hear a TCP joke?
Yes, I'd like to hear a TCP joke.
OK, I'll tell you a TCP joke.
OK, I'll hear a TCP joke.
Are you ready to hear a TCP joke?
Yes, I am ready to hear a TCP joke.
OK, I'm about to send the TCP joke. It will last 10 seconds, it has two characters, it does not have a setting, it ends with a punchline.
OK, I'm ready to hear the TCP joke that will last 10 seconds, has two characters, does not have a setting and will end with a punchline.
I'm sorry, your connection has timed out... ...Hello, would you like to hear a TCP joke?

#### Small Joke about UDP

I'll tell you a joke about UDP, but you might not get it.

### TCP Demo

In the TCP folder, run npm start and use telnet to commmunicate !
net package information : https://nodejs.org/api/net.html

## HTTP

### What is HTTP ?

Hypertext Transfer Protocol

### Mechanics of a HTTP exchange

#### Request

The initial step of an HTTP exchange is the request. In the request, we want to make an action, decided by the method, to a specific path, the URL, with specific headers and an optional body content.

##### Method

GET - I want to GET information from the server
POST - I want to post something on the server
PUT/PATCH
DELETE

##### Path

URI
URL

More info : https://damnhandy.com/2011/01/18/url-vs-uri-vs-urn-the-confusion-continues/

##### Request Header

Cookies
User Agent

##### Request Body

Information we want to send

#### Response

##### Status

100 series
200 series
300 series
400 series
500 series

##### Headers

Size
Media type
ETags

##### Body

Content
