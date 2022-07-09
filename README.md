### Frontend
[Frontend Deployment](https://verdant-paletas-443b1f.netlify.app)

# Welcome to Hiyo. 

**Hiyo** helps people make reservations at their favorite restaurants in New York City. 

---

## How to use 

### On landing page

1) Users can search a restaurant with the search bar
- ```By default``` clicking the search button without any input and any search option gives a list of every restaurant
- ```By default``` without selecting any search option, users can type into the search bar and the app finds restaurants. ex) hai => the app looks for hai in restaurants' names and descriptions. 
- ```None``` search option does the above
- ```Name``` users can search restaurants based on name * `case insenstive`
- ```Cuisine``` users can search restaurants based on cuisine * `case insenstive`
- ```Location``` users cans search restaurants based on location * `case sensitve` ex) type New York City or Queens
- ```Price``` users can search restaurants based on price  ex) $, $$, $$$, or $$$$. `Max is $$$$. Min is $`
- ```Takeout/Delivery``` users can search restaurants based on dining restriction. You can type `Takeout Only` or `Delivery Only`
2) Users can fill out a form to add a new restaurant
- ```description``` **required**
- ```phone number``` **required** ex) 1113337777
- ```opening time``` **required** ex) 10:00:00 
- ```closing time``` r**required** ex) 22:00:00. If it closes at 24:00:00, enter 00:00:00 instead
- ```price``` r**required** enter between $ and $$$$ ex) $ or $$$
- ```cuisine``` **required** first letter must be capitalized and the rest must be lowercase
- ```location``` **required** For Manhattan, enter New York City instead. space and case sensitve. ex) Queens or New York City
- ```dining option``` optional. You can type `Takeout Only`, `Delivery Only` or leave this field empty


3) Results are displayed in a list, sorted from newest to oldest.
4) You can open and use it on your phone or your computer.
5) You can choose the randomness of A.I's answers.  

---

## Features

- GPT-3, a powerful AI model created by OpenAI, implemented. Users can type any questions they may have and GPT-3 will answer.

- Users can choose the randomness of answers. 'General' gives users more general answers whereas 'Specific' gives users more specific answers.

- Loading animation implemented. When users start typing, users can see the loading bar changing which gives a sense of live interaction

- Hovering effect for the submit button. 

- Shopify favicon

- Results are displayed in a list, sorted from newest to oldest. Each result inclues the original question and a response from the API.

- Responsive app. Mobile friendly. 


---



