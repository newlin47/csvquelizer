# Stackathon: Ethan Newlin

## Project Idea: CSV-quelizer

This project was a chance to review the "full stack" of technologies for me. I put this project together in order to review all steps of the stack, from backend to frontend CSS elements, from scratch. The only code I really copied directly (even if I retyped while looking) was the webpack config.

I created a React Redux application that uses a Postgres database and Sequelize.

I wanted to make sure I did a full review of back to front end, but also that I tried new things at each step of the way.

I decided to go back to the idea of the junior phase project (students) and begin something that would potentially be useful in my portfolio as a minimally viable product in the future.

The use case for this application would be users that have data formatted as CSV files that want to use the data in a database--to turn CSV files into Sequelize databases. A short review of resources online shows this is still an ongoing need. Almost all spreadsheet applications (like Excel and Google Sheets) allow for CSV download/upload/editing. All kinds of information comes in CSV format, which in JavaScript, is simply an array of strings. There are multiple CSV libraries that assist with this utility. Some of them use the native filereader system, which is what I opted to use for the sake of simplicity.

## Here were my specfiic goals:

- Create a more detailed data model: students, teachers, courses, sections, and enrollments with different relationships and join tables.
- Create an app-wide Material UI theme and navbar (I didn't do that part directly in Grace Shopper).
- Create DataGrid components and modules from Material UI to display dynamic tables of information.
- Create simple and dynamic data visualizations using outside libraries for graphs.
- Create a way to sync/seed the backend with stored CSV files.
- Create uploads that took CSV files and turned them into JSON objects and then into Sequelize records and then updated the Redux store.
