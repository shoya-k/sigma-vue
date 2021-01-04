<template>
  <div class="p-grid p-justify-center" :style="{height:windowsHeight+'px'}">
     <div class="p-col-12 p-md-6 p-col-align-center">
    <Card>
      <template #content>
      <div class="p-fluid">
        <div class="p-field">
          <label for="id">担当者ID</label
          ><InputText
            class="p-inputtext p-component"
            type="text"
            v-model="id"
          />
        </div>
        <div class="p-field">
          <label for="password">パスワード</label>
          <InputText
            class="p-inputtext p-component"
            type="password"
            v-model="password"
          />
        </div>
        <Button label="ログイン" @click="login()" />
      </div>
    
      </template>
    </Card>
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";

export default {
  data() {
    return {
      user:{
        id: "",
        password:"",
      },
      //todo 画面の高さによって、数値が自動で変わるようにする？
      windowsHeight:700
    };
  },
  methods: {
    // ...mapActions("auth", ["login"]),
   login() {
      // todo
      // action呼び出す
      // await this.login(this.user);

      this.$router.push({ name: "menu" });
    },
  },
};
</script>

