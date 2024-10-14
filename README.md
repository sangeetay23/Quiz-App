## JavaScript Quiz Application

This repository contains the code for a simple JavaScript quiz application. It features a user interface for taking a quiz and displaying the final score.

### Project Structure

* **index.html:** The main HTML file that defines the structure of the quiz page.
* **style.css:**  The CSS file that provides styling for the user interface elements.
* **script.js:** The JavaScript file that handles the quiz logic, fetches questions, evaluates answers, and updates the display.

### index.html - Structure and Functionality

* **DOCTYPE Declaration:** Specifies the document type as HTML5.
* **HTML Tags:**
    * **`<html>`:** The root element for the HTML document.
    * **`<head>`:**
        * **`<meta charset="UTF-8">`:** Sets the character encoding to UTF-8 for proper display of all characters.
        * **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`:** Configures the viewport for responsive design.
        * **`<title>JavaScript Quiz</title>`:** Sets the title for the HTML document.
        * **`<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">`:** Imports the Roboto font from Google Fonts.
        * **`<link rel="stylesheet" href="style.css">`:** Links the external CSS file for styling.
    * **`<body>`:**
        * **`<div class="container">`:**  The main container for the quiz content.
            * **`<h1>JavaScript Quiz</h1>`:**  The title of the quiz.
            * **`<div id="quiz-container">`:**  Container for the quiz questions and options.
                * **`<div id="question-card" class="card">`:** The card containing the question and options.
                    * **`<p id="question"></p>`:** Displays the current question text.
                    * **`<div id="options"></div>`:**  Contains the list of answer options.
                * **`<div id="progress-bar"></div>`:**  A visual representation of quiz progress.
                * **`<button id="next-btn">Next Question</button>`:**  Button to proceed to the next question.
            * **`<div id="result-container" class="hidden">`:**  Container for displaying the final result.
                * **`<h2>Your Score: <span id="score"></span></h2>`:**  Displays the user's score.
                * **`<button id="restart-btn">Restart Quiz</button>`:**  Button to start the quiz again.
        * **`<script src="script.js"></script>`:**  Links the external JavaScript file for functionality.

### style.css - Styling the Quiz Interface

This file defines the CSS styles for various elements, including:

* **General Styles:** Resets default margins and paddings, sets the default font family, background color, and ensures responsive layout.
* **Container Styles:** Defines the appearance of the main container for the quiz content.
* **Heading Styles:**  Styles the `<h1>` element.
* **Question Card Styles:** Styles the card containing the question and options.
* **Option Labels:** Styles the labels for the answer options.
* **Button Styles:** Styles the "Next Question" and "Restart Quiz" buttons.
* **Progress Bar Styles:**  Defines the appearance of the progress bar.
* **Result Container Styles:**  Styles the container for displaying the final score.
* **Responsive Design:** Provides media queries to adjust the styling for different screen sizes.

### script.js - Quiz Logic and Functionality

The `script.js` file contains the JavaScript code that manages the quiz logic. Key functionalities include:

* **Fetching Questions:**
    * `fetchQuestions()`:  Retrieves quiz questions from an external API.
* **Displaying Questions:**
    * `showQuestion()`:  Presents the current question and answer options to the user.
    * `decodeHTML()`:  Decodes HTML entities in question and option text for proper display.
* **Handling Answers:**
    * `handleAnswer()`:  Evaluates the user's selected answer, updates the score, and displays feedback.
    * `highlightCorrectAnswer()`:  Highlights the correct answer after the user selects an option.
* **Next Question Logic:**
    * `nextQuestion()`: Handles the transition to the next question, or displays the result if the quiz is finished.
* **Showing Results:**
    * `showResult()`:  Displays the final score and provides an option to restart the quiz.
* **Restart Quiz Functionality:**
    * `restartQuiz()`:  Resets the quiz state and allows the user to start over.

### How to Use

1. **Clone or Download:**  Get a copy of the repository.
2. **Open index.html:**  Open the `index.html` file in your web browser.
3. **Take the Quiz:**  Answer the questions and click "Next Question" to proceed.
4. **View Results:**  Once all questions are answered, the final score will be displayed. 

**Please note:** The quiz uses an external API to fetch questions. You may need to modify the `apiUrl` variable in `script.js` if you want to use a different API.

This project serves as a simple demonstration of a JavaScript quiz application. You can expand it by adding features like:

* **More Quiz Categories:** Fetch questions from different categories using the API.
* **Timer:** Implement a timer to track the time spent on each question or the entire quiz.
* **Feedback:**  Provide more detailed feedback on each question, indicating why the correct answer is correct.
* **User Accounts:** Allow users to create accounts, save their scores, and compete with others.
