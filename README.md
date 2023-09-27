# React | Redux | Material-Ui | Validation

This is a React Application with Redux based Visitor management app and configured with:

1. *Linters:* ESLint and Prettier.
2. *React specific folders:* `components`, `lib`,`actions`, `reducers`, `store` , `routes`, and `css` (Folder Structure).
3. *Styled-Components:* configured Material-UI types.
4. *Redux:* for state management.
5. *Validation:* Validate form.

## Project structure

The app has the following structure:

`components`, `lib`,`actions`, `reducers`, `store` , `routes`, and `css`

- `components`: React components used accross the app.
- `lib`: Contains the unilities function and constant values.
- `actions`: Define functions for what to do.
- `reducers`: Contains what should next once Action will perform.
- `store`: Redux store which contains single object with holding entire data of application.
- `routes`: used for redirection from one page to another.
- `css`: Define the layout, styling, and design of React components.

### Tasks : What I done.

1. Create React Application with redux-based Visitor Management App.
2. Used Material UI for Design - https://mui.com/
3. Used this Figma for Design - https://www.figma.com/file/NNG1aL0c7PCToYFSAwxkch/Awesome-Guestbook?type=design&node-id=0-1&mode=design&t=NehVMVYl9JNlvPTg-0
4. App perform like below step,
- `Home Screen` - `Add Visitor`
    - Insert form input field.
    - Select dropdown item.
    - Conformation checkbox before adding new visitor to the table.
    - Add new customer button for adding the new visitor to the table.
    - Without checking the conformation check box we can not add the new visitor to the table.
    - If the form is empty then it will ot let us add new visitor
    - reset form button to reset the inputed fields.

5. `Home Screen` - `Show Visitor Data on Table`
    - Newly added visitor will shown on this table.
    - Every row has one checkbox to select the particular data.
    - Select All checkbox is also there to select all the row of table.
    - We can remove any row by selecting the row and clicking the remove button.
    - We can remove all the row by selecting all rows by select all checkbox and clicking the remove button.

6. App is responsive as much as I can.
7. Validations are implimented.
8. Used Local is Storage for storing data so there is no need API.
9. Used redux concept for state management.
10. Setuped ESLint for Code standardization.
11. Setuped Prettier for Code formatting.


### I Make sure below things for this app.

1. Structure of the code: both in terms of the actual code and the organization of files/folders.
2. React patterns: efficient and well-structure React code.
3. Redux: to manage the application's state in a predictable and centralized manner.
4. Documentation: clear and well commented your code.
5. Git processes: clear and well-structured your commits and commit messages are.

## Prerequisites

To set up the codebase and the required dependencies, simply run the following command.

# Installing the dependencies

$ npm install


# Running the app

## development
$ npm run start

## production
$ npm run build && npm run start
