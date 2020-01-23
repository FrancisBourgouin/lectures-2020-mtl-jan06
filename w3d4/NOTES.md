# Lecture Notes

## Reminder of HTTP Verbs

GET -> Retrieve information
POST -> Action from client
PUT -> Change / edit something ?
DELETE -> Delete something

GET /urls/:short_url
POST /urls/:short_url
PUT /urls/:short_url
DELETE /urls/:short_url

## Approach of specific elements

/category_or_theme_context/selector

### Good

/urls -> list of urls
/urls/b2xvn2 -> specific

/posts
/posts/2020202

/users/1

### Bad

/urls, if you have a cookie with b2xvn2 -> specific
(Because it's not a )
