# Dynamic Content Creation
## Overview 

In this lab, you will create a dynamic shopping cart application to practice and reinforce your DOM manipulation skills. 
The application will allow users to add, update, and remove items dynamically while keeping track of the total price. 
This lab focuses on modifying elements, creating and appending new elements, and updating content dynamically using JavaScript.

## Criteria:
1. Semantic HTML Structure
2. Accessibility Features
3. JavaScript 
4. Dom Manipulation
5. Delegation 


## Objective 
1. Add items to their cart dynamically.
2. View the items they have added, along with their prices and quantities.
3. Update the quantity of items in the cart, reflecting real-time price changes.
4. Remove items from the cart.
5. Dynamically create and manipulate DOM elements to build interactive features.
6. Update the DOM to reflect changes in user input, such as quantity updates and price calculations.
7. Use event handling to implement interactivity for adding, updating, and removing items.
8. Use efficient DOM manipulation techniques to minimize performance bottlenecks

## Steps taken 
1. Repourposed code 
    - I made a code similar to this one before so I decided to try to repourpose this code to make things work easier. 
2. I added a render function to render items ( i wanted to proactice functions +)  
3. I noticed inconsisitencies in the code and mis mached variablees due to spelling mistakes. 
4. I got the  full cart to work 
5. I added darkmode 
## Reflection
1. How did you dynamically create and append new elements to the DOM?
I addded delegation that would create a new list item in their respective boxes . 
2. What steps did you take to ensure accurate updates to the total price?
I made a function to calculate the total price. 

3. How did you handle invalid input for product name or price?

    I toggled a paragraph element that was highlighted red and said to enter everything in the field

4. What challenges did you face when implementing the remove functionality?
    

##references (by link)
    - https://stackoverflow.com/questions/24163889/html5-input-for-money-currency
    - https://www.geeksforgeeks.org/javascript/how-to-move-an-array-element-from-one-array-position-to-another-in-javascript/
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    - https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild