# Welcome to the Color Guess project repository

### README Translations:

-   [English](/README.en.md)
-   [Portuguese](/README.md)

* * *

## 👨‍💻 What was developed:

-   An application using JavaScript, HTML5 and CSS3.
-   In this application it is possible to play a color guessing game where:
    -   Within a range of colors, the player must try to guess which color was randomly selected as the right color;
    -   The color palette is presented by colored circles;
    -   There is a button to start and restart the game;
    -   When selecting a color, a text should inform whether or not you got the correct color.

:bulb:**See a sample below:**

  <p align="center">
  <img
    class="rounded mx-auto d-block"
    src="/sample.gif"
    alt="Gif exibindo um jogo de adivinhar a cor"
  >
</p>

# requirements

## 1 - Add on your website a title with the name of your game

<details>
  <summary>Sua página deve conter um elemento html com o id title</summary><br />

**What will be checked:**

-   There is an element with**id**It is`title`.

</details>

## 2 - Add a text with the RGB code to be guessed

<details>
  <summary>Sua página deverá conter um texto com a cor a ser adivinhada no formato rgb</summary><br />

**What will be checked:**

-   If the text id is rgb-color;

-   If the text contains the three numbers of the RGB colors to be guessed, in the following format:`(168, 34, 1)`.

</details>

## 3 - Add color options to the page to be guessed

<details>
  <summary>Sua página deverá conter 6 círculos que deverão conter a classe ball</summary><br />

**What will be checked:**

-   If there are 6 circles as a guessing color option;

-   If the width and height of the circles are the same size;

-   If all circles have the class ball.

</details>

## 4 - Add colors to the balls, they must be dynamically generated

<details>
  <summary>As cores dos círculos são geradas por javascript</summary><br />

**What will be checked:**

-   The colors of each of the 6 colored circles must be generated via JavaScript when loading the page.

</details>

## 5 - When clicking on a colored circle, a text should be shown indicating if it is correct

<details>
  <summary>Sua página deverá ter um texto que deverá mudar conforme a situação do jogo</summary><br />

**What will be checked:**

-   O**id**of the element with the response text must be`answer`;

-   When the game starts, the text displayed should be`"Escolha uma cor"`;

-   If the colored circle is the**correct**, the text "You got it right!" should be displayed;

-   If the colored circle is the**incorrect**, the text "Wrong! Try again!" should be displayed.

</details>

## 6 - Create a button to start/restart the game

<details>
  <summary>Sua página deverá contér um botão que possibilite iniciar e jogar novamente</summary><br />

**What will be checked:**

-   The button must have the id reset-game;

-   When clicking on the button, new colors must be generated via JavaScript and the rgb-color element must be updated;

-   Upon clicking the button, the answer element should return to its initial state, displaying the text "Pick a color".

</details>

# Bonus

## 7 - Create a score that increments 3 points for each hit in the game

<details>
  <summary>Sua página deverá conter um elemento que deverá marcar o placar da pessoa jogadora</summary><br />

**What will be checked:**

-   The element must have**id**`score`;

-   Its initial value must be 0;

-   For each hit, 3 points are added to the scoreboard;

-   By clicking the reset button, the score must NOT be reset.

</details>
