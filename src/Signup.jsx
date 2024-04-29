import { TextField, Card, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password:"",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password:Yup.string().required("Password is Required")
});

function Signup() {
  const navigate = useNavigate();

  const change = () => {
    navigate("/form");
  };

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <center>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form  id="formik-head">
        <Card variant="outlined" >
            <CardContent sx={{ background: "gray" }}> 
              <h1>Login</h1>
              <Field
                as={TextField}
                id="outlined-basic"
                name="name"
                label="Name"
                variant="outlined"
                style={{ marginBottom: "20px" }} 

              
              />
              <ErrorMessage name="name" component="div" />
              <br />
              <Field
                as={TextField}
                id="outlined-basic"
                name="email"
                label="Email"
                variant="outlined"
                style={{ marginBottom: "20px" }} 

                
              />
              <ErrorMessage name="email" component="div" />
              <br />
                 <Field
                as={TextField}
                id="outlined-basic"
                name="password"
                label="Password"
                variant="outlined"
                style={{ marginBottom: "20px" }} 

              />
              <ErrorMessage name="password" component="div" />
              <br/>
              <Button type="submit" variant="contained">
                Submit
              </Button>
              <br />
              <br />
              <Button variant="contained" onClick={change}>
                BACK
              </Button>
            </CardContent>
          </Card>
        </Form>
      </Formik>
    </center>
  );
}

export default Signup;
