<style scoped>
  a {
    color: rgb(50, 174, 110);
    text-decoration: none;

    &:hover { color: rgb(40, 56, 76); }
  }

  ul {
    list-style-type: none;
    margin-top: 10px;
  }

  li { display: inline-block; }
</style>

<template>
  <ul>
    <li><a href="https://simulatedgreg.gitbooks.io/electron-vue/content/index.html">documentation</a></li> |
    <li><a href="http://electron.atom.io/">electron</a></li> |
    <li><a href="http://vuejs.org/">vue.js</a></li> |
    <li><a v-link="{ path: '/' }">Pomodoro</a></li>
  </ul>
</template>
