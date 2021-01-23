<template>
  <div>
    <div class="page-title">
      <h3>Profile</h3>
    </div>

    <form class="form">
      <div class="input-field">
        <input
            id="description"
            type="text"
        >
        <label for="description">Name</label>
        <span
              class="helper-text invalid">name</span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Update
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>  
</template>
