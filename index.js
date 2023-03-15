/*
It is the year 2223, and the human race has made it to the stars! As a rocket scientist, though, you know that the conditions on each planet can be very different from one to the next. In particular, you care about each planet's gravity and its effect on items in the world. You wonder if there is some sort of way to calculate how an object will respond when dropped from a given height on a given planet. 

Write an algorithm that accepts 3 parameters:
    1) An integer representing the height in feet that you are dropping an item from 
    2) An integer representing the height in feet that you are observing the item from
    3) A float number representing the gravity ratio of the planet, represented as a value between 0 and 1 (with 0 being 0%, 1 being 100%, and .5 being 50%). Items dropped from a given height will rebound to a height equivalent to the height the item is falling from, multiplied by the gravity ratio.

For example,
You have your drone drop a basketball from a height of 100 feet. 
You are observing this from a height of 50 feet. 
The gravity ratio of the planet is .75
From your standing position, you will see the ball bounce up to you twice because:
100 * .75 = 75 feet, meaning on the first bounce, the ball rebounded to a height of 75 feet.
On the second bounce, the rebound height was calculated by:
75 * .75 = 56.25 feet. 
On the third bounce, the rebound height was:
56.25 * .75 = 42.18 feet (below your standing position at 50 feet).
Because you were standing from a height of 50 feet, you saw the ball bounce up to you twice. 

Your function should return the number of times the item will rebound to a given standing height position. 
In the above example, your function would return 2. 

Note: Be sure to handle edge cases. Consider what unusual inputs your function could receive, and how would your function respond to such unusual inputs? For example, if the falling height is less than the standing height on input, how would you have your function respond?  
*/

// Write your code below: 