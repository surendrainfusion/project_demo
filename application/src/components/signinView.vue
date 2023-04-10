<template>
  <div class="col-md-4 login-form">
    <div class="card card-container">
      <img
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <!-- message show -->
      <div class="form-group">
        <div v-if="message" class="alert-message">
          {{ message }}
        </div>
      </div>

      <!-- Form -->
      <Form @submit="handleLogin" :validation-schema="schema">
        <div class="form-group">
          <label for="email">Username</label>
          <Field name="email" type="text" class="form-control" />
          <ErrorMessage name="email" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <Field name="password" type="password" class="form-control" />
          <ErrorMessage name="password" class="error-feedback" />
        </div>

        <div class="form-group">
          <p class="forgot-password">
            Don't have an account? -
            <router-link to="/signup">Register</router-link>
          </p>
          <button class="btn btn-primary btn-block" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Login</span>
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "loginView",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      email: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });

    return {
      loading: false,
      message: "",
      profile: "",
      schema,
    };
  },
  methods: {
    handleLogin(user) {
      this.loading = true;
      this.$store
        .dispatch("auth/login", user)
        .then((data) => {
          this.message = data.message;
          setTimeout(() => this.message, 2000);
          if (this.$store.state.auth.status.loggedIn) {
            this.loading = false;
            this.$router.push("/home");
          }
          // this.created
        })
        .catch((err) => {
          this.message = err.response.data.message;
          setTimeout(() => {
            this.message = "";
            this.loading = false;
            this.$router.push("/login");
          }, 2000);
        });
    },
  },
};
</script>

<style>
.login-form {
  margin: 20px auto;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
}
.card {
  border: none;
}
.profile-img-card {
  margin: 10px auto;
  border-radius: 50%;
}
img {
  width: 100px;
  height: 100px;
}
.btn {
  margin-top: 20px;
}
p {
  text-align: center;
}
.error-feedback {
  color: red;
}
.alert-message {
  text-align: center;
  color: lightcoral;
}
</style>
