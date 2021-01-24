<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Create</h4>
      </div>

      <form @submit.prevent="submit">
        <div class="input-field">
          <input
            id="name"
            type="text"
            v-model.trim="title"
            :class="{ invalid: ($v.title.$dirty && !$v.title.required) }"
          >
          <label for="name">Name</label>
          <span 
            class="helper-text invalid"
            v-if="$v.title.$dirty && !$v.title.required"
          >
            Field Name must be filled
          </span>
        </div>

        <div class="input-field">
          <input
            id="limit"
            type="number"
            v-model="limit"
            :class="{ invalid: ($v.limit.$dirty && !$v.limit.minValue) }"
          >
          <label for="limit">Limit</label>
          <span 
            class="helper-text invalid"
            v-if="$v.limit.$dirty && !$v.limit.minValue"
          >
            Minimal value {{ $v.limit.$params.minValue.min }}
          </span>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          Create
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>  
</template>

<script>
import { required, minValue } from 'vuelidate/lib/validators'

export default {
  data: () => ({
    title: '',
    limit: 100
  }),
  validations: {
    title: { required },
    limit: { minValue: minValue(100) }
  },
  methods: {
    async submit() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      try {
        const category = await this.$store.dispatch('createCategory', {
          title: this.title,
          limit: this.limit
        })

        this.title = ''
        this.limit = this.$v.limit.$params.minValue.min
        this.$v.$reset()
        this.$message('New category created')
        this.$emit('created', category)
      } catch(e) { }
    }
  },
  mounted() {
    M.updateTextFields() 
  }
}
</script>
