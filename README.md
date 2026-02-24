## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer :

getElementById : It is used to find an element that contains a unique Id. returns only one element and performs fast.

getElementsByClassName : It returns all those elements of HTML collection that has the required class name. If DOM changes it updates automatically

querySelector : We can use css selectors here which makes easy to target elements. It supports all id, class and tag. if there are multiple of same class or tag name it grabs the first element of them

querySelectorAll : We can also use css selectors here and it grabs all the matching elements. It returns a NodeList. It works statically 

### 2. How do you create and insert a new element into the DOM?

Answer :

At first create the element suppose div 

const div = document.createElement("div")

then add content 

div.innerText = "Creating a new div element"

then add it to parent as a child 

document.body.appendChild(div)

### 3. What is Event Bubbling? And how does it work?

Answer :

Event bubbling is suppose I have to grab an element button which is inside body->div->ul->li->button

when clicked on the button DOM will go in this flow body->div->ul->li->button
 and then bubble back up to the root . this bubbling back to root is called Event bubbling

Example : 

childElement.addEventListener("click", () => console.log("button"));
parentElement.addEventListener("click", () => console.log("div"));

if clicked on the button the output will be 

button
div

There are 3 phases 

Capture Phase ->
Target Phase *
Bubble Phase <-

event.stopPropagation() - this will stop bubbling up

### 4. What is Event Delegation in JavaScript? Why is it useful?

Answer :

Event delegation is controlling the child element from parent element by event listener.
Suppose there are 8 cards . to control 8 cards , putting an event listener on all 8 cards  
is a bad approach. we can target the parent of those 8 cards and control then from there easily.

It is useful because :
elements are dynamically added
code looks cleaner
scalable
better performance

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Answer :

preventDefault() stops browsers default behavior. good examples are when we use a form or an anchor tag . If we click on submit or the link of the anchor tag , browser's default behavior takes us to another link. We can stop this if we use preventDefault()

stopPropagation() stops the event bubbling . If I take the example I gave earlier 

Example :
childElement.addEventListener("click", () => console.log("button"));
parentElement.addEventListener("click", () => console.log("div"));

if clicked on the button the output will be :
button
div

now if we use stopPropagation() here . the output will be only 
output : 
button

it will not bubble up and stop there  
---
