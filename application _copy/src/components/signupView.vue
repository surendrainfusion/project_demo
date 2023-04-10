<template>
  <div class="col-md-4 signup-form">
    <div class="card card-container">
      <h3>Create account</h3>
      <div
        v-if="message"
        class="alert"
        :class="status ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
      </div>

      <Form
        @submit="handleRegister"
        :validation-schema="schema"
        enctype="multipart/form-data"
      >
        <div>{{ user }}</div>

        <!-- v-if="!successful" -->
        <div>
          <div class="form-group">
            <label for="name">Name:</label>
            <Field name="name" type="text" class="form-control" />
            <ErrorMessage name="name" class="error-feedback" />
          </div>

          <div class="form-group">
            <label for="mobileNo">MobileNo.:</label>
            <Field name="mobileNo" type="text" class="form-control" />
            <ErrorMessage name="mobileNo" class="error-feedback" />
          </div>

          <div class="form-group">
            <label for="email">Email:</label>
            <Field name="email" type="email" class="form-control" />
            <ErrorMessage name="email" class="error-feedback" />
          </div>

          <div class="form-group">
            <label for="password">Password:</label>
            <Field name="password" type="password" class="form-control" />
            <ErrorMessage name="password" class="error-feedback" />
          </div>

          <div class="form-group">
            <label for="profile">Upload Image</label>
            <Field
              name="profile"
              type="file"
              class="form-control file-upload"
            />
            <ErrorMessage name="profile" class="error-feedback" />
          </div>

          <div class="form-group">
            <p class="forgot-password">
              Already have an account? -
              <router-link to="/login">Login</router-link>
            </p>
            <button class="btn btn-primary btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              Sign Up
            </button>
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { mapState, mapActions } from "vuex";
export default {
  name: "signupView",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      name: yup
        .string()
        .required("Name is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      mobileNo: yup
        .string()
        .required("MobileNo is required!")
        .min(10, "Must be at least 10 numbers!")
        .max(10, "Must be maximum 10 numbers!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(30, "Must be maximum 30 characters!"),

      profile: yup.string().required("image upload is required!"),
    });

    return {
      loading: false,
      schema,
    };
  },
  computed: {
    ...mapState({
      status: (state) => state.status,
      message: (state) => state.message,
    }),
  },
  methods: {
    ...mapActions({handleRegister: "register"}),
  },
};
</script>

<style scoped>
.signup-form {
  margin: 20px auto;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
}
.card {
  border: none;
}
.card h3 {
  text-align: center;
}
p {
  text-align: center;
}
.file-upload {
  height: auto;
  margin-left: 0;
}
</style>
