# Virtual Pet App

This project was built as part of a hackathon during the Brainstation Software Engineering bootcamp. The objective was to build an application within 24 hours that included a web API.

I wanted to build a tamagotchi-style online game that incorporated a joke API, so when your virtual pet's happiness level is low, you can tell it a joke.

# How to play:

1. Enter a name for your virtual pet and click 'Start'
2. You will see that there are hunger, hydration, happiness and energy levels; these will start at 10 and gradually decrease down to 0.
3. You will need to use the Food, Drink, Play, and Sleep buttons to increase your pet's health levels and ensure that they stay above 0.
4. You can feed your pet, give it water, turn the light off so that it can sleep, and tell your pet a joke to keep it entertained.
5. If a level is already at the max (10), you will not be able to click the buttons.
6. If any of the levels reach 0 - you have lost!

# Approach

- I used a JS class for the 'Pet' aspect, which would allow you to invoke the eat/play/drink/sleep actions when the separate buttons were pressed.
- I included the default health levels in an array, so that I could use setInterval to randomly change one every 6 seconds, by a random amount between 0 and 3.
- I added if conditions to make sure that the level does not increase above 10 and that a user cannot click a button if the level is already at 10
-

# Challenges

- The currentLevel states were being parsed as strings instead of integers, which meant that I was getting a NaN response when trying to increase the level by integers. I needed to use the ParseInt function to make sure that the level output remained as a number.
- Some of the jokes are quite long so the timing doesn't match up.

# What I'd Like To Add

- I did originally want to add a weather API and allow this to dictate the temperature of the virtual pet, to add more complexity and work with an alternative API, however did not have time to do this.
- I would like to add more variation to the decrease/increase of the levels, e.g. if the pet eats, the energy level goes up slightly and not just the food level.
- Currently the game doesn't end if you reach 0 on any of the levels - this needs to be fixed.

# Additional functionality added after Hackathon

- Timeout wasn't working properly so this was fixed
- Refactored the code to make it more readable and less repetitive
