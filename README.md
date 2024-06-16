# Employee Poll App

## Introduction
This project is a polling application designed to assist employees in creating, responding to, and viewing polls. It provides functionalities such as user authentication, poll creation, voting, and leaderboard viewing.

## Functionality
### User Authentication
- The application offers a secure login and logout mechanism for employees.
- Employees can log in by selecting a user from the list with the username and password

### Dashboard
- The Dashboard show both answered and unanswered polls.
- The logged-in employee's name is prominently displayed on the page.
- Employees can easily navigate to the leaderboard and the poll creation form.

### Polling Questions
- Polling questions are appropriately categorized as either unanswered or answered.
- Each question links to the details of its corresponding poll.
- Polls in both categories are sorted from the most recently created to the least recently created.
- Detailed information, including text, user avatars, and options, is provided for each poll.
- For answered polls, the number of votes and percentage for each option are displayed, with the employee's selection clearly highlighted.
- Employees are prompted to sign in and shown a 404 page if they attempt to access a poll via URL without being logged in.

### Voting Mechanism
- Upon voting in a poll, all pertinent information regarding the answered poll is displayed.
- The employee's response is securely recorded and visible on the poll details page.
- Upon returning to the home page, the polled question is promptly categorized under the "Answered" column.
- The voting mechanism dynamically updates the leaderboard as needed.

### Adding New Polls
- Employees can seamlessly add new polls via the dedicated form located at /add.
- Upon submission, the new poll is promptly created, and the employee is seamlessly redirected to the home page.
- Newly added polling questions are intuitively categorized and displayed in the appropriate section on the home page.

### Leaderboard
- The leaderboard, accessible at /leaderboard, showcases employee performance.
- Each entry displays the employee's name, avatar, number of questions asked, and number of questions answered.
- Employees are listed in descending order based on the sum of questions asked and questions answered.

### Navigation
- The application features a user-friendly navigation bar visible across all pages.
- Employees can effortlessly navigate between the home page, leaderboard page, and new poll creation page without manually inputting addresses into the address bar.

## Installation

To run the application locally:

1. Navigate to the project directory by `cd employee-polls`.
2. Install dependencies using `npm install`.
3. Start the development server by running `npm start`.

To run the unit test:
- Start test by running `npm test` 

