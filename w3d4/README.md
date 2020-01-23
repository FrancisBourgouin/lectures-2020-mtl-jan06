# W3D4 - Real world HTTP servers

## REST

### What is it

REST stands for REpresentational State Transfer and is an architectural style, or guideline to build RESTful routes, meaning that they adhere to a set of principles that will facilitate the understanding of a project structure.

#### Main points

- Client / Server independence
- Stateless
- Cacheable
- Uniform interface
- Layered
- Code on demand (optional)

### How is it used

On the board we talked about what kind of routes a blog would have, and we came up with these resources :

- Posts
- Categories
- Pages
- Users

Then we made a routing board about what should be where. Examples :

- /users/:user_id/posts to access/modify information of all posts by a specific user
- /users/:user_id to access/modify information about a specific user
- /posts/:post_id or /users/:user_id/posts/:post_id to access/modify information about a specific post

With the last one we see that we could have multiple routes that would be valid for a case, so it's important to plan well !

## Express tips

Express is full of functionalities to help us with different problematics we can encounter when working on a big project. Here's a few tips to help you build a server that will be more understandable and more modular.

### Modular routing

Modular routing is there to help us manage our routes in multiples files so we can easily find what we need and to be easily reusable. We did in the folder routes an api, posts and users file to manage the routes of thoses resources.

### Method override

Using the POST method for everything is not ideal, but if we want to use PUT and DELETE in our routes, we need to use a middleware called method-override to allow the usage of PUT and DELETE in our forms.

### Middlewares

Middlewares come in different forms, but they are there to act most of the time between the receiving of the request and your route actions. The ones you already know are cookie-parser, body-parser, method-override, etc. You can also build your own middleware that will, as an example, add an authentication check on all routes.

## REST JSON APIs

### What are they

Depending on who will get the content you want to serve, it's important to deliver it in a good way. Sometimes rendering an EJS template to show the content is good, sometimes giving a JSON response instead will be better. It's important to remember that EJS or JSON, having a proper structure for your data is the important part. Adhering to REST guidelines is a good way to achieve that.

### Why is it used

Sometimes a client will need your data to do some manipulation, and in that case, we should give JSON content instead of a rendered page. If you remember the ISS and cat projects, it's easier to grab content in a parsed JSON than in an HTML page.

### Express example

In the routes/api.js, an implementation of a REST JSON API using express has been added.

### Real world example

During the lecture we talked about the WordPress REST API, and looked at the implementation and the importance of a versioning number.

## Express alternatives

- Koa.js (Javascript) - https://koajs.com/
- Sinatra (Ruby) - http://sinatrarb.com/
- Flask (Python) - http://flask.pocoo.org/

###### Interesting links 

- About REST and naming convention : https://restfulapi.net/resource-naming/
- Express modular routing (end of document) : http://expressjs.com/en/guide/routing.html#routing
- Method override : https://www.npmjs.com/package/method-override
- Express middleware : https://expressjs.com/en/guide/using-middleware.html
- JSON APIs responses : https://jsonapi.org/examples
- WordPress REST API : https://developer.wordpress.org/rest-api/