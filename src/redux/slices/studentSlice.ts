
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StudentState {
  formValues: {
    firstName: string;
    lastName: string;
    gender: string;
    dob: string;
    studentID: string;
    email: string;
    phoneNumber: string;
    enrollmentDate: string;
    course: string;
    gradeLevel: string;
    cgpa: string;
    streetAddress: string;
    city: string;   
    state: string;
    postalCode: string;
    country: string;
  };
  errors: Record<string, string>;
}

const initialState: StudentState = {
  formValues: {
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    studentID: '',
    email: '',
    phoneNumber: '',
    enrollmentDate: '',
    course: '',
    gradeLevel: '',
    cgpa: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  },
  errors: {},
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    setFormValues: (state, action: PayloadAction<Partial<StudentState['formValues']>>) => {
      state.formValues = { ...state.formValues, ...action.payload };
    },
    setErrors: (state, action: PayloadAction<Record<string, string>>) => {
      state.errors = action.payload;
    },
    resetFormValues: (state) => {
      state.formValues = initialState.formValues;
      state.errors = {};
    },
  },
});

export const { setFormValues, setErrors, resetFormValues } = studentSlice.actions;
export default studentSlice.reducer;
