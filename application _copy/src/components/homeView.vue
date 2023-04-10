<template>
    <div class="container">
      <h3 class="p-3 text-center">Display a list of Users:-</h3>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>MobileNo.</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Profile</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in content" :key="user.id">
                    <td>{{user.name}}</td>
                    <td>{{user.mobileNo}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.date}}</td>
                    <td>{{user.profile}}</td>
                    <td class="action-btn">
                      <button @click="edit(user._id)">Edit</button> 
                      <button @click="remove(user._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
  </template>
  
  <script>
  import UserService from "../services/userService";
  export default {
    name: "HomeView",
    data() {
      return {
        content: "",
      };
    },
    methods:{
      edit(id){
        console.log("user id", id)
      },
      remove(id){
        console.log("user id", id)
      }
    },
    mounted() {
      UserService.userList().then(
        (response) => {
          console.log(response.data)
          this.content = response.data;
        },
        (error) => {
          this.content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  };
  </script>

<style>
.action-btn{
  display: flex;
}
.action-btn button{
  margin-left: 10px;
}
</style>