<template>
  <form class="card auth-card" @submit.prevent="submit">
    <div class="card-content">
      <span class="card-title">Home bookkeeping</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{ invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }"
        >
        <label for="email">Email</label>
        <small 
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
        >
          Field Email must be filled
        </small>
        <small 
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
        >
          Incorrect Email format
        </small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model.trim="password"
            :class="{ invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength) }"
        >
        <label for="password">Password</label>
        <small 
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
        >
          Field Password must be filled
        </small>
        <small 
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
        >
          Minimum length of Password must be {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}
        </small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Login
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Not registered yet?
        <router-link to="/register">Register</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
export default {
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) }
  },
  methods: {
    submit() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const formData = {
        email: this.email,
        password: this.password        
      }

      this.$router.push('/')
    }
  }
}
</script>
