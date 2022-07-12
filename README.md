### Frontend
[Frontend Deployment](https://verdant-paletas-443b1f.netlify.app)

# Welcome to Hiyo. 

**Hiyo** helps people make reservations at their favorite (or soon to be) restaurants in New York City. 

---

## How to use 

### On landing page
(Please give it a few seconds while it fetches data for the landing page! Loading animation in process)
1) Users can search a restaurant with the search bar
- ```By default``` clicking the search button without any input and any search option gives a list of every restaurant
- ```By default``` without selecting any search option, users can type into the search bar and the app finds restaurants. ex) hai => the app looks for hai in restaurants' names and descriptions. 
- ```None``` search option does the above
- ```Name``` users can search restaurants based on name * `case insenstive`
- ```Cuisine``` users can search restaurants based on cuisine * `case insenstive`
- ```Location``` users cans search restaurants based on location * `case sensitve` ex) type New York City or Queens
- ```Price``` users can search restaurants based on price  ex) $, $$, $$$, or $$$$. `Max is $$$$. Min is $`
- ```Takeout/Delivery``` users can search restaurants based on dining restriction. You can type `Takeout Only` or `Delivery Only`
2) Users can navigate to the reservation page where they can see all reservations with an option to see details.
- Click `My Reservations` at the top right side. When hovered, its color changes to white
3) Users can see a list of recommend restaurants 
- `Restaurants of Today` displays randomly selected restaurants of a day
4) Users can see a list of restaurants with eight person tables for large events.
- ```Big Tables for a big group event - restaurants with eight person tables``` displays how many 8 person tables are available at a moment
5) Users can see a list of restaurants that open till midnight
- ```Open Till Midnight for your late night food``` displays restaurants that open till midnight with their dining availability. ex) X means Takeout Only
6) Users can fill out a form to add a new restaurant
- ```name``` **required** 
- ```description``` **required** 
- ```phone number``` **required** ex) 1113337777
- ```opening time``` **required** ex) 10:00:00 
- ```closing time``` r**required** ex) 22:00:00. If it closes at 24:00:00, enter 00:00:00 instead
- ```price``` r**required** enter between $ and $$$$ ex) $ or $$$
- ```cuisine``` **required** first letter must be capitalized and the rest must be lowercase
- ```location``` **required** For Manhattan, enter New York City instead. space and case sensitve. ex) Queens or New York City
- ```dining option``` optional. You can type `Takeout Only`, `Delivery Only` or leave this field empty

---
### On Search page (after clicking the search button on landing page) 
1) Users can see a list of specific restaurants based on their search option with basic information such as cuisine, location, price, and description.
2) Upon clicking a restaurant, users will be directed to that specific restaurant's detail page
3) Google map shows locations of restaurants. (Not implemented yet. Static image as a placeholder for now)

---
### On Search page (after clicking the search button on landing page) 
1) Users can see a specific restaurant with details.
2) Users can see a list of time slots and currently available tables at the restaurant.
3) Users can make a reservation at their preferred time by clicking one of those time slots
- `first name` **required**
- `last name ` **required**
- `phone number` **required**
- `email` optional
- `time` **pre-selected based on a time slot users chose**
- `number of guests` **required**
---
### On Reservation page (after clicking the `My Reservations` at the top right)
1) Users can see a list of all reservations in two ways
- With `Quick look`, users can view 10 reservations per page quickly & efficiently 
- With `Detail` users can view all reservations in card format and upon clicking `VIEW MORE`, users will be directed to that specific reservations' detail page
---
### On Reservation Detail page 
1) Users can see a specific reservation with details, containing information like `Reservation Date, Reservation Time, and Reservation Made on`
2) Users can edit the existing reservation information by clicking the pencil icon at the bottom left
- The existing information is pre-typed for users
- Users can update any field they wish to. Without any change, users can still submit but it won't update anything.
- Users can submit with the `SUBMIT` button at the bottom left
- Users can go back by clicking `BACK TO THE RESERVATION` button at the bottom
3) Users can delete the existing reservation by clicking the trash bin icon
4) Users can expand the detail card by clicking arrow mark at the bottom of the card
- Users can see a note
---

## Features

- Dropdown search options for better searching experience
- Image slider implemented for easy viewing
- Real-time notification when making a reservation successfully 
- Expandable reservation detail card
- Reservation time slot table
- Editing feature for reservation & delete option
- Creating a new restaurant & reservation

---

## Future Implementations

- Loading animation for the landing page
- Enhanced searching engine 
- Display unavailable time slots


