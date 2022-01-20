<template>
  <div id="app">
    <div id="nav">
      <router-link to="/about">About</router-link> |
      <router-link to="/ch04">Ch04</router-link> |
      <router-link to="/ch05">Ch05</router-link> |
      <router-link to="/ch06">Ch06</router-link> |
      <router-link to="/ch07">Ch07</router-link> |
      <router-link to="/ch08">Ch08</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
