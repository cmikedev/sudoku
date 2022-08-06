# Sudoku
The Sudoku website is a user-interactive, JavaScript-based Sudoku puzzle game based on the classic 9x9 board. The intention of this [site](https://cmikedev.github.io/sudoku/) is to provide users with a simple, intuitive gameboard based on their expectations of what a Sudoku puzzle is.
____


![image](https://github.com/cmikedev/sudoku/blob/main/assets/readme-images/amiresponsive-front.png?raw=true)
![image](https://github.com/cmikedev/sudoku/blob/main/assets/readme-images/amiresponsive-game.png?raw=true)
Images created using [Am I Responsive](https://ui.dev/amiresponsive)<br />
<br />


## Deployed Website
[Sudoku](https://cmikedev.github.io/sudoku/)


## Repository
https://github.com/cmikedev/sudoku



## Structure

* The site is divided into two pages:
    * index.html
    * game.html<br />
    <br />

## Styling

The colour palette is simple and subdued with only white, black and shades of grey being utilised. This was intentional and inspired from viewing online Sudoku games. It was surmised that this clean and simplistic style is what regular players of online Sudoku may have come to expect and would also increase usability and clarity for new players.

To hint at a Japanese theme (as Sudoku is Japanese) an opaque image sits behind the instruction text of the front page and 'Noto Serif' was used from Google Fonts.

## Features

* ### Main Text
    * The front page provides instructions for users on how to play Sudoku.

    &nbsp;
    ![image](https://github.com/cmikedev/sudoku/blob/main/assets/readme-images/instructions.png?raw=true)
    &nbsp;


* ### The Footer
    * The footer section contains social media links encouraging the user to connect and engage via social media.
    * The social media links open in a new tab allowing easy navigation for the user.

    &nbsp;
    ![image](https://raw.githubusercontent.com/cmikedev/wicklow-motorcycle-tourers/main/assets/readme-images/footer-screenshot.png)
    &nbsp;


* ### The Game Page
    * The sign up form is located on the [Sign Up](https://cmikedev.github.io/wicklow-motorcycle-tourers/sign-up.html) page.
    * It allows the user to get signed up and be kept abreast of all ride information.
    * The form requires the user to input their first name, last name and their email before submitting.<br />
    <br />


## Testing

### Responsiveness Testing

* The responsiveness tests were carried out manually using Google Chrome's [Inspect Function](https://developer.chrome.com/docs/devtools/open/). Some of the devices tested included (but not limited to):
    * Nest Hub Max
    * iPad Mini
    * Samsung Galaxy S8+
    * iPhone SE <br />
    <br />

* Testing on a real device (Samsung Galaxy S8) revealed that the footer social media links no longer lined up at that screen resolution:
    
    &nbsp;
    ![image](https://raw.githubusercontent.com/cmikedev/wicklow-motorcycle-tourers/main/assets/readme-images/samsung-galaxy-s8-links-overflow-screenshot.jpg)
    &nbsp;

* This was corrected and the footer social media links appear correctly in a row on the Samsung Galaxy S8:
    
    &nbsp;
    ![image](https://raw.githubusercontent.com/cmikedev/wicklow-motorcycle-tourers/main/assets/readme-images/samsung-galaxy-s8-links-corrected-screenshot.jpg)
    &nbsp;

### Validator Testing

* #### W3C
    * HTML
        * There were no errors or warnings within the HTML when checked through The [W3C HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcmikedev.github.io%2Fsudoku%2F)
    * CSS
        * There were no errors or warnings within the CSS when checked through The [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fcmikedev.github.io%2Fsudoku%2Fgame.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)<br />
        <br />

* #### JSHint
    * The JavaScript was tested through [JSHint](https://jshint.com/). There were no errors found.<br />
    <br />

* #### Lighthouse (web.dev)
    * Lighthouse through [web.dev](https://web.dev/) was used to test the site for: 
        * Performance
        * Accessibility
        * Best Practice
        * SEO<br />
        <br />
    On the front page, the Accessibility, Best Practices and SEO were all 100%. However, the Performance dipped to 89%<br />
    <br />
    ![image](https://github.com/cmikedev/sudoku/blob/main/assets/readme-images/lighthouse-front-results-1.png?raw=true)<br />
    <br />
    With the addition of Google Fonts, the Performance score dipped further to 77%.<br />
    <br />
    ![image](https://github.com/cmikedev/sudoku/blob/main/assets/readme-images/lighthouse-front-results-2.png?raw=true)<br />
    <br />
    Althought Google Fonts is a factor, the biggest driver of the sub-optimal performance on the front page is the background image.<br />
    <br />
    ![image](https://github.com/cmikedev/sudoku/blob/main/assets/readme-images/lighthouse-opportunity-image.png?raw=true)<br />
    <br /> 
    [web.dev](https://web.dev/) suggests changing the image format from its current format of .PNG to either AVIF or WebP. However, given that .PNG is widely supported across browsers and that the website itself is relatively small and shows no sluggishness in real-world testing, the image has been left in its .PNG format (see Bugs section for further comment).<br />
    <br />
    On the first test of the game page all returned results with the exception of Accessibility (96%) came in at 100%<br />
    <br />
    ![image](https://github.com/cmikedev/sudoku/blob/main/assets/readme-images/lighthouse-game-results-1.png?raw=true)<br />
    <br />
    Again, with the addition of Google Fonts, the Performance score dropped on the second test to 89%.<br />
    <br />
    ![image](https://github.com/cmikedev/sudoku/blob/main/assets/readme-images/lighthouse-game-results-2.png?raw=true)<br />
    <br />
    <br />
    * The front page full test results can be found [here](https://web.dev/measure/?url=https%3A%2F%2Fcmikedev.github.io%2Fsudoku%2F)<br />
    <br />
    * The game page full test results can be found [here](https://web.dev/measure/?url=https%3A%2F%2Fcmikedev.github.io%2Fsudoku%2Fgame.html)<br />
    <br />

## Bugs


## Deployment

### Deploying the repository via GitHub
* The website was deployed using GitHub pages via the following steps:
    * In the Respository section, select the [sudoku](https://github.com/cmikedev/sudoku) repository
    * From the horizontal menu above the repository contents select __Settings__
    * From the left-hand vertical menu, go to the __code and automation__ section and select __pages__
    * From the __Source__ selection drop-down, select __Branch__ > __main__
    * The page will then automatically refresh displaying a ribbon indicating deployment status<br />
    <br />
    The deployed website can be found here - https://cmikedev.github.io/sudoku/<br />
    <br />

### Forking the repository
* The GitHub repository can be forked to make a copy of the original. This copy can then be viewed or changed without affecting the original repository via the following steps:
    * In the Respository section, select the [sudoku](https://github.com/cmikedev/sudoku) repository
    * At the top right of the page select __fork__ from the menu below your profile
    * A copy of the repository will now be created in your account

### Creating a local clone
* To create a local clone via GitHub:
    * In the Respository section, select the [sudoku](https://github.com/cmikedev/sudoku) repository
    * From the horizontal menu above the repository contents select __Code__
    * __Copy__ the link that that is shown
    * Within __Gitpod__ change the directory to where you would like the location of the cloned directory to be
    * Type __git clone__ and paste the link that you copied
    * Press __Enter__ and the local clone will be created<br />
    <br />



## Credits

### Content
* The favicon in the tile (page tab) was taken from [Flaticon](https://www.flaticon.com/)
* The icons in the footer were taken from [font awesome](https://fontawesome.com/)
* The fonts were taken from [Google Fonts](https://fonts.google.com/)
* Code from the [Love Running](https://github.com/Code-Institute-Solutions/Love-Running-Solutions) project was utilised in the footer sections and social media links

### Media
* The background image was taken from [Pixabay](https://pixabay.com/vectors/dinosaur-katana-japan-ninja-5178645/)

### Research and Guidance
* [KennyYipCoding](https://www.youtube.com/watch?v=S4uRtTb8U-U) code relating to the board creation and game logic was taken and amended.
* [CSS Tricks](https://css-tricks.com/snippets/css/transparent-background-images/) code taken and amended to fix background image opacity.
* [Stackoverflow](https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null) for guidance on the window load console error.
* [RedFlyer Coding](https://www.youtube.com/watch?v=ea3UBpMHDoc&t=1096s) (video series) for guidance on the win or lose game logic.

----

## Acknowledgements
I would like to thank my course mentor Harry Dhillon for providing guidance on this project.