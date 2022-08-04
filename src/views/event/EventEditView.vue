<template>
  <p>Edit the event here</p>
  <button @click="Edit">EDIT ME</button>
</template>

<script>
export default {
  props: ['id', 'event'],
  inject: ['GStore'],
  methods: {
    Edit() {
      this.GStore.flashMessage =
        'You are succesfully Edited ' + this.event.title + 'Page'
      setTimeout(() => {
        //after 3 sec remove it
        this.GStore.flashMessage = ''
      }, 3000)
      this.$router.push({
        name: 'EventDetails',
        params: { id: this.event.id }
      })
    }
  }
}
</script>
