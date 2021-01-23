<template>
  <div>
    <div class="page-title">
      <h3>New record</h3>
    </div>

    <form class="form">
      <div class="input-field" >
        <select>
          <option
          >name cat</option>
        </select>
        <label>Choose category</label>
      </div>

      <p>
        <label>
          <input
              class="with-gap"
              name="type"
              type="radio"
              value="income"
          />
          <span>Income</span>
        </label>
      </p>

      <p>
        <label>
          <input
              class="with-gap"
              name="type"
              type="radio"
              value="outcome"
          />
          <span>Expense</span>
        </label>
      </p>

      <div class="input-field">
        <input
            id="amount"
            type="number"
        >
        <label for="amount">Sum</label>
        <span class="helper-text invalid">amount password</span>
      </div>

      <div class="input-field">
        <input
            id="description"
            type="text"
        >
        <label for="description">Description</label>
        <span
              class="helper-text invalid">description password</span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Create
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>  
</template>
