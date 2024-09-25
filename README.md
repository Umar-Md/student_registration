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

##State Management
- The state is managed using Redux. The form values and errors are stored in the Redux store. The slice is located in redux/slices/studentSlice.ts and contains the following actions:
- setFormValues: Updates the form field values in the store.
- setErrors: Sets the validation errors in the store.
- resetFormValues: Resets the form values to initial state.
