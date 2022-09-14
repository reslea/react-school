import axios from 'axios';
import { Button } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import { useContext } from 'react';
import { TokenContext } from '../../App';
// import { useFormikClone } from '../../contexts/FormikCloneContext';
import { Field, Formik, Form as FormikForm, ErrorMessage } from '../../formik/FormikClone';

export default function LoginPage() {
  const { token, setToken } = useContext(TokenContext);

  function onSubmit(values) {
    alert(JSON.stringify(values));
    
    axios.post('https://localhost:7078/auth/login', values)
    .then(response => {
      const token = response.data.token;
      localStorage.setItem('token', token);
      console.log('set token to context');
      setToken(token);      
    });
  }

  return (
    <Formik 
      initialValues={{
        username: 'testUsername',
        password: 'testPassword'
      }}
      onSubmit={onSubmit}
      validate={values => ({ username: 'test error' })}
      >
      <FormikForm as={Form}>
        <p>{token}</p>
        <div className="mb-3 col-md-4">
          <label>User name</label>
          <Field as={Form.Control} name="username" type="text" placeholder="Enter user name" />
          <ErrorMessage name="username" />
        </div>

        <div className="mb-3 col-md-4">
          <label>Password</label>
          <Field as={Form.Control} name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" />
        </div>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </FormikForm>
    </Formik>
  )
}
