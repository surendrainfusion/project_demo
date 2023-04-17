## Application

#### install dependencies
npm install

#### serve with hot reload at localhost:8080
npm run dev

#### build for production with minification
npm run build

### Dispatch
It has been available in both Vue.js 2 and Vue.js 3.

dispatch is a method that allows a component to trigger an action in a Vuex store.
When a component dispatches an action, the store receives the action and runs the corresponding mutation to update its state. 

The dispatch method takes the action type and payload as arguments, and can be used both inside a component's methods and computed properties.

### mapAction / mapState
mapState and mapActions are part of Vuex, which is the official state management library for Vue.js.
These helper functions were introduced in Vuex version 2.1

mapActions creates a method that dispatches a specific action to the store.

mapState creates a computed property that is bound to a specific state property in the store.


## Server
    $ node --version
    v18.15.0

    $ npm --version
    9.5.0

    $ nvm --version
    0.39.3

If you need to update `npm`;
    $ npm install npm -g


#### Install
    $ git clone https://github.com/surendrainfusion/project_demo
    $ cd project_demo
    $ npm install

#### Running the Server
    $ npm run server

#### Simple build for production
    $ npm build