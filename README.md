# Virtual Pet App

This project was built as part of a hackathon at the Brainstation bootcamp. The objective was to build an application within 24 hours that included a web API.

I wanted to build a tamagotchi-style online game that incorporated a joke API, so when your virtual pet's happiness level is low, you can tell it a joke.

# How to play:

1. Enter a name for your virtual pet
2. The hunger, hydration, happiness and energy levels with start at 10 and gradually decrease down to 0.
3. You will need to use the Food, Drink, Play, and Sleep buttons provided to increase your pet's health levels and ensure that they stay above 0.
4. You can feed your pet, give it water, turn the light off so that it can sleep, and tell your pet a joke to keep it entertained.
5. If a level is already at the max level (10), you will not be able to click the buttons.
6. If any of the levels reach 0 - you have lost!

# Approach

- I used a JS class for the 'Pet' aspect, which would allow you to invoke the eat/play/drink/sleep actions when the separate buttons were pressed.
- I included the default health levels in an array, so that I could use setInterval to randomly change one every 5 seconds.
- Added if conditions to make sure that the level does not increase above 10 and that a user cannot click a button if the level is at 10
-

# Challenges

- The currentLevel states were being parsed as strings instead of integers, which meant that I was getting a NaN response when trying to increase the level by integers. I needed to use the ParseInt function to make sure that the level output remained as a number.
- Some of the jokes are quite long so the timing doesn't match up.

# What I'd Like To Add

- I did originally want to add a weather API and allow this to dictate the temperature of the virtual pet, to add more complexity and work with an alternative API.
- I would like to add more variation to the decrease/increase of the levels, i.e. if the pet eats, the energy level goes up, etc.
- Clear Timeout needs to be fixed
- Currently the game doesn't end if you reach 0 on any of the levels - this needs to be fixed.
