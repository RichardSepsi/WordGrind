# WordGrind　・　言葉作業ゲー

A simple web app for memorizing words. It works by randomly picking a word from a deck and asking for an answer. Besides words and their answers there are also "back sides" (made for english meaning of kanji words) and hints, which can all be fully customized. It's a project that I made for my personal use, however if you want, you can also download it and use it freely.


## How to use

### Downloading

Download all of the files from github, extract them and run "home.html".


### Menus

Important! Destructive actions (like deleting and resetting) do not ask for a confirmation. Be careful when browsing menus.

Manage decks by clicking on "セット管理する". There you can modify or delete decks and cards

Add decks by clicking on "セット加える". Enter the name of the deck you want to put the new card into. If you select an existing deck the card will be added there. If you type in a new name, a deck with that name will be created and the card will be added there.

In "オプション" you can change settings:
  Automatically convert to kana (if the answer is entirely in kana)
  Show the back side revealed by default
  Show the clock
  Make sure the same card doesn't follow

"統計" section shows an overview of stats also visible on the home screen. An option to reset the values is also available.


### Playing

Select a deck if more decks are available and click "今勉強する" to start.
If you type in the correct answer then it's counted as correct answer automatically and a next card shows up.
If you click "答え見せる" or the enter key the answer will be shown and the card will be automatically counted as a wrong answer.
You can then proceed onto another card by clicking the arrow next to the input or the enter key.

Exit the game using the "出る" button, otherwise your stats won't get updated.


### Saving

To save your data (decks, cards, stats) click the "保存する" button on the home screen. That will download a "data.js" file with all of your current data.
Replace the "data.js" file in the website source files with the one you just downloaded and everything should be updated.
I know it's not a great solution, but I could not come up with a better one for a local website.


## Notes

  - English version is not available as of now, however it might be some time in the future
  - If you find a bug, don't hesitate to create an issue here on GitHub



![Screenshot_4](https://github.com/user-attachments/assets/94901dd4-5e7e-42fd-9e4e-f4fd768660d0)
![Screenshot_5](https://github.com/user-attachments/assets/2330a8f4-bf1d-433f-98e6-2449fcf08093)
