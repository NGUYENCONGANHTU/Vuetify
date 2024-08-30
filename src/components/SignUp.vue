<template>
  <v-container class="d-flex justify-center align-center" height="100vh">
    <v-card class="px-5 py-8" width="450">
      <v-card-title class="text-center"
        ><h3 class="mb-4">Đăng kí tài khoản</h3></v-card-title
      >

      <v-form ref="form" v-model="valid" lazy-validation>
        <!-- Name Field -->
        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Tên"
          prepend-icon="mdi-user"
          variant="solo"
          required
          :error-messages="nameErrors"
          ><i class="fa-solid fa-user"></i
        ></v-text-field>

        <!-- Phone Number Field -->
        <v-text-field
          v-model="phone"
          :rules="phoneRules"
          label="Số điện thoại"
          prepend-icon="mdi-phone"
          variant="solo"
          required
          :error-messages="phoneErrors"
        ></v-text-field>

        <!-- Email Field -->
        <v-text-field
          v-model="email"
          :rules="emailRules"
          prepend-icon="mdi-email"
          variant="solo"
          label="Email"
          required
          :error-messages="emailErrors"
        ></v-text-field>

        <!-- Password Field -->
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          prepend-icon="mdi-lock"
          variant="solo"
          label="Mật khẩu"
          type="password"
          required
          :error-messages="passwordErrors"
        ></v-text-field>

        <!-- Submit Button -->
        <v-btn class="mt-5" color="success" @click="submit">
          <router-link to="/login" style="text-decoration: none; color: white"
            >Đăng kí</router-link
          >
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const form = ref(null);
const valid = ref(false);
const name = ref("");
const phone = ref("");
const email = ref("");
const password = ref("");
const nameErrors = ref([]);
const phoneErrors = ref([]);
const emailErrors = ref([]);
const passwordErrors = ref([]);

// Validation rules for each field
const nameRules = [
  (v) => !!v || "Tên không được để trống",
  (v) => v.length <= 50 || "Tên phải ít hơn 50 ký tự",
];

const phoneRules = [
  (v) => !!v || "Số điện thoại không được để trống",
  (v) => /^[0-9]{10}$/.test(v) || "Số điện thoại phải gồm 10 chữ số",
];

const emailRules = [
  (v) => !!v || "Email không được để trống",
  (v) => /.+@.+\..+/.test(v) || "Email phải hợp lệ",
];

const passwordRules = [
  (v) => !!v || "Mật khẩu không được để trống",
  (v) => v.length >= 6 || "Mật khẩu phải ít nhất 6 ký tự",
];

// Submit function to validate the form
const submit = () => {
  if (form.value.validate()) {
    // Nếu form hợp lệ, thực hiện các hành động đăng ký tại đây
    console.log(name.value, phone.value, email.value);
  }
};
</script>
