# Web Development Project 3 - **Interactive Quiz with Feedback**

Submitted by: **Omar Madjitov**

This web app: **An interactive flashcard-based quiz app where users can guess the answer to questions before revealing the answer. Users are given feedback on whether their guess was correct or incorrect and can navigate between questions using next and previous buttons.**

Time spent: **7 hours** spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess in a box before seeing the flipside of the card**
- [x] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [x] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [x] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [ ] A shuffle button is used to randomize the order of the cards
- [ ] A user's answer may be counted as correct even when it is slightly different from the target answer
- [ ] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:

- [x] **A card-flipping animation where the card flips horizontally when clicked to reveal the answer**
- [x] **A dynamically hidden or revealed message to give feedback on whether the answer was correct or incorrect**
- [x] **Cards are visually styled based on the question category, with each category having a distinct background color**

## Video Walkthrough

Here's a walkthrough of the implemented user stories:

<img src='https://imgur.com/a/lHeQxx1.gif' title='Video Walkthrough' width='480px' alt='Video Walkthrough' />

GIF created with ScreenToGif.

## Notes

Some challenges encountered while building the app:

- **Managing user feedback dynamically**: Handling the state of correct/incorrect feedback and hiding/showing elements based on that state required careful state management.
- **CSS perspective for the card flip**: Getting the flip animation to look smooth while hiding and showing the front/back sides properly was challenging, especially with 3D CSS properties.
- **Ensuring user input validation**: Correctly comparing user input with the expected answer and providing feedback immediately was tricky to implement cleanly.

## License

    Copyright 2024 Omar Madjitov

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
