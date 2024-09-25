# student_registration
This project is a React-based web application for managing student information using a form. The form allows users to input various student details, such as personal information, contact information, education details, and address, and stores the data using Redux for state management. The form includes validation for each field and displays relevant error messages when fields are left empty.

## Features

- **React** for building the user interface.
- **Redux** for managing the form state.
- **TypeScript** for type safety.
- **Bootstrap** and **Material UI** for styling.
- **Form Validation** on submit with error messages.
- **Console Logging** on successful submission.

## Prerequisites

- Node.js installed on your system.
- npm or yarn as a package manager.

## State Management
- The state is managed using Redux. The form values and errors are stored in the Redux store. The slice is located in redux/slices/studentSlice.ts and contains the following actions:
- setFormValues: Updates the form field values in the store.
- setErrors: Sets the validation errors in the store.
- resetFormValues: Resets the form values to initial state.

## Student Form Fields
The following fields are included in the form:

First Name: Text field
Last Name: Text field
Gender: Dropdown with Male and Female options
Date of Birth: Date picker
Student ID: Text field
Email: Text field with email validation
Phone Number: Text field
Enrollment Date: Date picker
Course: Text field
Grade Level: Text field
CGPA: Text field
Address Information:
Street Address: Text field
City: Text field
State: Text field
Postal Code: Text field
Country: Text field
