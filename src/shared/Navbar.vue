<template>
  <div class="container_nav">
    <el-menu class="el-menu-demo " mode="horizontal">
      <el-menu-item>
        <router-link to="/">Home</router-link>
      </el-menu-item>
      <el-menu-item  >
        <router-link to="/agregar">Add</router-link>
      </el-menu-item>
      <el-menu-item  >
        <router-link to="/list">LIST</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.container_nav {
    background-color: #f5f5f5;
    padding: 10px;
    margin-bottom: 10px;
}
</style>