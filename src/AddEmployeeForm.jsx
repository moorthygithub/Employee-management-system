import { Button, Card, CardContent, TextField } from "@mui/material";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  Designation: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  Designation: Yup.string().required("Enter your Designation"),
});

function AddEmployeeForm() {
  const navigate = useNavigate();

  const change = () => {
    navigate("/login");
  };

  async function postJSON(data) {
    try {
      const response = await fetch("http://localhost:3001/employees", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function handleSubmit(values) {
    console.log(values);

    await postJSON(values);
  }

  return (
    <center>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form id="formik-head">
            <Card variant="outlined">
              <CardContent sx={{ background: "gray" }}>
                <h1>Add Employee</h1>
                <Field
                  error={props.touched.name && props.errors.name}
                  as={TextField}
                  id="outlined-basic"
                  style={{ marginBottom: "20px" }}
                  name="name"
                  label="Name"
                  variant="outlined"
                  helperText={<ErrorMessage name="name" component="div" />}
                />
                {/* <ErrorMessage name="name" component="div" /> */}
                <br />
                <Field
                  error={props.touched.email && props.errors.email}
                  helperText={<ErrorMessage name="email" component="div" />}
                  as={TextField}
                  id="outlined-basic"
                  name="email"
                  label="Email"
                  variant="outlined"
                  style={{ marginBottom: "20px" }}
                />

                <br />
                <Field
                  error={props.touched.Designation && props.errors.Designation}
                  helperText={
                    <ErrorMessage name="Designation" component="div" />
                  }
                  as={TextField}
                  id="outlined-basic"
                  name="Designation"
                  label="Designation"
                  variant="outlined"
                  minRows={3}
                  style={{ marginBottom: "20px" }}
                />
                <br></br>
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
        )}
      </Formik>
    </center>
  );
}

export default AddEmployeeForm;
