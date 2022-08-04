<template>
  <p>Registration form here</p>
  <button @click="register">REGISTER ME</button>
</template>

<script>
export default {
  props: ['id', 'event'],
  inject: ['GStore'],
  methods: {
    register() {
      //assuming succesful API call to register them
      console.log('register happen')
      this.GStore.flashMessage =
        'You are succesfully registered for ' + this.event.title
      setTimeout(() => {
        //after 3 sec remove it
        this.GStore.flashMessage = ''
      }, 3000)

      //set a flash message to appear on the next page loaded which says
      //you are successfully registered for + this.event.title

      this.$router.push({
        name: 'EventDetails',
        params: { id: this.event.id }
      })
    }
  }
}
</script>
