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
