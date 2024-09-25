import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, MenuItem, Button } from '@mui/material';
import { Form, Row, Col } from 'react-bootstrap';
import { RootState } from '../redux/store';
import { setFormValues, setErrors } from '../redux/slices/studentSlice';

const StudentForm = () => {
  const dispatch = useDispatch();
  const { formValues, errors } = useSelector((state: RootState) => state.student);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    dispatch(setFormValues({ [name]: value }));

    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      dispatch(setErrors(newErrors));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    Object.keys(formValues).forEach((key) => {
      if (!formValues[key as keyof typeof formValues]) {
        newErrors[key] = `${key} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      dispatch(setErrors(newErrors));
    } else {
      console.log('Form submitted:', formValues);
    }
  };

  return (
    <Form onSubmit={handleSubmit} style={{ marginLeft: '400px',backgroundColor:'whitesmoke'}}>
      <Row style={{ marginBottom: '5px' }}>
        <Col md={6}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
        </Col>
        <Col md={6} style={{ marginTop: '5px' }}>
          <TextField 
            fullWidth
            label="Last Name"
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
        </Col>
      </Row>

      <Row style={{ marginBottom: '5px' }}>
        <Col md={6}>
          <TextField
            fullWidth
            select
            label="Gender"
            name="gender"
            value={formValues.gender}
            onChange={handleChange}
            error={!!errors.gender}
            helperText={errors.gender}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </TextField>
        </Col>
        <Col md={6}style={{ marginTop: '5px' }}>
          <TextField
            fullWidth
            label="Date of Birth"
            name="dob"
            type="date"
            value={formValues.dob}
            onChange={handleChange}
            error={!!errors.dob}
            helperText={errors.dob}
            InputLabelProps={{ shrink: true }}
          />
        </Col>
      </Row>

      <Row style={{ marginBottom: '5px' }}>
        <Col md={6}>
          <TextField
            fullWidth
            label="Student ID"
            name="studentID"
            value={formValues.studentID}
            onChange={handleChange}
            error={!!errors.studentID}
            helperText={errors.studentID}
          />
        </Col>
        <Col md={6} style={{ marginTop: '5px' }}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Col>
      </Row>

      <Row style={{ marginBottom: '5px' }}>
        <Col md={6}>
          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={handleChange}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
          />
        </Col>
        <Col md={6}style={{ marginTop: '5px' }}>
          <TextField
            fullWidth
            label="Enrollment Date"
            name="enrollmentDate"
            type="date"
            value={formValues.enrollmentDate}
            onChange={handleChange}
            error={!!errors.enrollmentDate}
            helperText={errors.enrollmentDate}
            InputLabelProps={{ shrink: true }}
          />
        </Col>
      </Row>

      <Row style={{ marginBottom: '5px' }}>
        <Col md={6}>
          <TextField
            fullWidth
            label="Program/Course"
            name="course"
            value={formValues.course}
            onChange={handleChange}
            error={!!errors.course}
            helperText={errors.course}
          />
        </Col>
        <Col md={6} style={{ marginTop: '5px' }}>
          <TextField
            fullWidth
            label="Grade Level"
            name="gradeLevel"
            value={formValues.gradeLevel}
            onChange={handleChange}
            error={!!errors.gradeLevel}
            helperText={errors.gradeLevel}
          />
        </Col>
      </Row>

      <Row style={{ marginBottom: '5px' }}>
        <Col md={6}>
          <TextField
            fullWidth
            label="CGPA"
            name="cgpa"
            value={formValues.cgpa}
            onChange={handleChange}
            error={!!errors.cgpa}
            helperText={errors.cgpa}
          />
        </Col>
      </Row>

      <Row style={{ marginBottom: '5px' }}>
        <Col md={6}>
          <TextField
            fullWidth
            label="Street Address"
            name="streetAddress"
            value={formValues.streetAddress}
            onChange={handleChange}
            error={!!errors.streetAddress}
            helperText={errors.streetAddress}
          />
        </Col>
        <Col md={6}style={{ marginTop: '5px' }}>
          <TextField
            fullWidth
            label="City"
            name="city"
            value={formValues.city}
            onChange={handleChange}
            error={!!errors.city}
            helperText={errors.city}
          />
        </Col>
      </Row>

      <Row style={{ marginBottom: '5px' }}>
        <Col md={6}>
          <TextField
            fullWidth
            label="State"
            name="state"
            value={formValues.state}
            onChange={handleChange}
            error={!!errors.state}
            helperText={errors.state}
          />
        </Col>
        <Col md={6}style={{ marginTop: '5px' }}>
          <TextField
            fullWidth
            label="Postal Code"
            name="postalCode"
            value={formValues.postalCode}
            onChange={handleChange}
            error={!!errors.postalCode}
            helperText={errors.postalCode}
          />
        </Col>
      </Row>

      <Row style={{ marginBottom: '5px' }}>
        <Col md={6}>
          <TextField
            fullWidth
            label="Country"
            name="country"
            value={formValues.country}
            onChange={handleChange}
            error={!!errors.country}
            helperText={errors.country}
          />
        </Col>
      </Row>

      <Button variant="contained" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
};

export default StudentForm;
