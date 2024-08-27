<template>
  <v-container class="d-flex justify-center align-center" height="100vh">
    <v-card class="pa-3" width="400">
      <v-card-title class="text-center"><h3>Đăng nhập</h3></v-card-title>
      <v-card-text class="mt-3">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="email"
            label="Email"
            prepend-icon="mdi-email"
            type="email"
            variant="solo"
            :rules="emailRules"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Mật khẩu"
            prepend-icon="mdi-lock"
            type="password"
            :rules="passwordRules"
            variant="solo"
            class="mt-2"
            required
          ></v-text-field>
          <v-btn color="success" class="mt-4" @click="login">Đăng nhập</v-btn>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" class="mt-4" @click="forgotPassword"
          >Quên mật khẩu?</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const email = ref();
const form = ref(null);
const valid = ref(false);
const password = ref();
const emailRules = [
  (v) => !!v || " Email không được để trống ",
  (v) => /.+@.+\..+/.test(v) || "Email chưa hợp lệ",
];
const passwordRules = [
  (v) => !!v || "Mật khẩu không được để trống",
  (v) => (v && v.length >= 3) || "Mật khẩu phải trên 10 kí tự",
];
const login = () => {
  if (form.value.validate()) {
    console.log(email.value && password.value);
  }
};
const forgotPassword = () => {
  alert("Chức năng quên mật khẩu chưa được hỗ trợ.");
};
</script>

<style scoped>
.v-messages__message {
}
</style>
