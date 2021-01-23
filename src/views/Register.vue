<template>
  <form class="card auth-card">
    <div class="card-content">
      <span class="card-title">Home bookkeeping</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
        >
        <label for="email">Email</label>
        <small class="helper-text invalid">Email</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            class="validate"
        >
        <label for="password">Password</label>
        <small class="helper-text invalid">Password</small>
      </div>
      <div class="input-field">
        <input
            id="name"
            type="text"
            class="validate"
        >
        <label for="name">Name</label>
        <small class="helper-text invalid">Name</small>
      </div>
      <p>
        <label>
          <input type="checkbox" />
          <span>I agree with the rules</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Register
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Already have an account?
        <router-link to="/login">Login!</router-link>
      </p>
    </div>
  </form>  
</template>
