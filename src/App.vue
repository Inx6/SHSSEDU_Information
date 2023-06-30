<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="this.$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!this.$route.meta.keepAlive" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
