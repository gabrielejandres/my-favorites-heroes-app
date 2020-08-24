<template>
  <div class='message'>
      <h2> {{ main }} </h2>
      <p> {{ paragraph }} </p>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    props: ['main', 'paragraph']
  }
</script>

<style scoped lang="scss">
  .message {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5vh;
    height: 80vh;
    color: #fff;
    text-align: center;

    p {
      margin-top: 2vh;
    }
  }
</style>
