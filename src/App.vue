<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  //最初ログイン画面に自動で遷移させる
  mounted() {
   this.$router.push({ name: "login" });
  },
};
</script>
