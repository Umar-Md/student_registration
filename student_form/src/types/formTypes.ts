export interface FormValues {
    firstName: string;
    lastName: string;
    gender: string;
    dob: string;
    studentID: string;
    email: string;
    phone: string;
    enrollmentDate: string;
    course: string;
    gradeLevel: string;
    cgpa: string;
    streetAddress: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }
  
  export interface Errors {
    [key: string]: string;
  }
  