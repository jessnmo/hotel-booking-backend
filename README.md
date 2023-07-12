# hotel-booking-backend
backend build for the repo (hotel-booking)

## Routes 
/users

/hotels

/hotelRooms

/auth

each routes have a corresponding mongoose model, Schema that's imported to the route files. 

## Completed So Far 

- Hotels model and Schema and routes are fully updated including POST, PUT(update), DELETE, GET (search by ID) and GET (get all)

- Auth Controller fully updated with error handling, returning warning messages when username and password incorrect, which could be tested under route /auth/register and /auth/login using POST method

- password encrypted using bcryptjs. and because it's encrypted, I used bcrypt.compare to compare the input password (req.body.password) and the encrypted one. 


## Currently Working On 

Next step is to set up cookies by installing cookie parser. We can get the accessToken, and use it later to verify if user isAdmin to be able to delete/ update hotels. 

## Intereseting Learning

During the work on authentification, I came across the use of JWT (json web token)
Article that helped me understand how the backend works to identify if no 3rd party is claming to be who it is, in my case if the client is isAdmin, which is granted access to edit / add / delete hotels. 
The article on stackOverflow: https://stackoverflow.com/questions/31309759/what-is-secret-key-for-jwt-based-authentication-and-how-to-generate-it

Once the JWT is received, the verification will take its header and payload, and together with the secret that is still saved on the server, basically create a test signature. Together with the signature that was generated when JWT was received, we can compare the test and original signature to identify. Because the test signature will be different if any was modified. so no cheating there when authentificate! 

**To generate a secret key using openSSL** in terminal: openssl rand -base64 64



