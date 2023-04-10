<template>
  <div class="container">
    <div>
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
     

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>
    <div class="jumbotron">
      <!-- <h3>{{ content.username }}</h3> -->
     
      <div>
        <h3>Add New Post</h3>
        <form>
          <input
            type="text"
            v-model="form.title"
            placeholder="Title"
          /><br /><br />
          <input
            type="text"
            v-model="form.description"
            placeholder="Description"
          /><br /><br />
        </form>
        <button type="submit" @click="Submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
// import UserService from "../services/userService";

export default {
  name: "BoardUser",
  data() {
    return {
      // content: "",
      form: {
        title: "",
        description: "",
        author: "",
      },
    };
  },
  // mounted() {
  // UserService.getUser().then(
  //   (response) => {
  //     this.content = response.data;
  //   },
  //   (error) => {
  //     this.content =
  //       (error.response &&
  //         error.response.data &&
  //         error.response.data.message) ||
  //       error.message ||
  //       error.toString();
  //   }
  // );
  // },
  methods: {
    Submit() {
      console.log("clickeddd");
      console.log(this.form);
    },
  },
};
</script>
