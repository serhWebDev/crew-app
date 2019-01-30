# Crew applications (test)

Author: Serhii Vekshyn

Start: 25-jan-2019

Available Scripts
--------------------------------------------------------------------------------------------

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm run build`

Builds the app for production to the `build` folder.

Project structure
--------------------------------------------------------------------------------------------

#### Extra dependencies:

1. [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
2. [prop-types](https://www.npmjs.com/package/prop-types) - Runtime type checking for React props and similar objects.
--------------------------------------------------------------------------------------------

#### Components:

|Component name         | Description
|-----------------------|--------------------------------------------------------------------
|config                 | Сonfiguration file, URL for getting response by API
|App                    | Main component
|Title                  | Title (application name)
|Form                   | Filter form. Filter by city and first name
|CrewApplicants         | Component for showing lists of applicants from all category.
|AppliedApplicants      | Component for showing applied applicants
|InterviewingApplicants | Component for showing interviewing applicants
|HiredApplicants        | Component for showing hired applicants
|ApplicantsList         | Component for showing applicants cards
|CrewApplicantCard      | Component for showing information about the applicant

Description of functions and components:
--------------------------------------------------------------------------------------------

##### 1. App-component:

1. `getFilterData` - The function that gets the values from filter by name and city.
1. `previousStatus` - The function which checks the status of the applicant's and assigns it the value of the previous status, "Applied" or "Interviewing".
3. `checkingStatusLeft` - Checking the current value of status in previousStatus function.
4. `nextStatus` - The function which checks the status of the applicant's and assigns it the value of the next status, "Interviewing" or "Hired".
5. `checkingStatusRight` - Checking the current value of status in nextStatus function.
6. `componentWillMount()` - Lifecycle method
7. `randomApplicantStatus` - Random status assignment for applicants.  ***! I have make so because, in API answer i do not found some status for applicants. !***

##### 2. Form - component:
This component show two fields for input, "Name" and "City", for filtering applicants by these criteria. And then passes the obtained values to the parent component "App".

##### 3. CrewApplicants - component:
This component show applikants cards.

##### 4. AppliedApplicants - component:
This component show header with title name applikants card that have status "Applied".

##### 5. InterviewingApplicants - component:
This component show header with title name applikants card that have status "Interviewing".

##### 6. HiredApplicants - component:
This component show header with title name applikants card that have status "Hired".

##### 7. ApplicantsList - component:
This component show applikant cards that satisfy the filters by city or first name or both of them and a required applikant-status received in props.

##### 8. CrewApplicantCard - component:
This component is showing relevant information about the applicant: Photo, Name, City, current application status and buttons for changing status.

