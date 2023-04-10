<template>
  <div class="col-md-4 login-form">
    <div class="card card-container">
      <img
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <!-- message show -->
      <div class="form-group">
        <div v-if="message" class="alert" :class="success ? 'alert-success' : 'alert-danger'">
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
import { mapState, mapActions } from "vuex";
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
      loading : false,
      schema,
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
      message: (state) => state.message,
      success: (state) => state.success,
    }),
  },
  methods: {
      ...mapActions({handleLogin:"login"})  
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
.alert{
  text-align:center;
}
</style>
