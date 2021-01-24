<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Edit</h4>
      </div>

      <form @submit.prevent="submit">
        <div class="input-field" >
          <select ref="select" v-model="current">
            <option 
              v-for="category of categories" 
              :key="category.id"
              :value="category.id"
            >
              {{ category.title }}
            </option>
          </select>
          <label>Enter category</label>
        </div>

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
          Update
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>  
</template>

<script>
import { required, minValue } from 'vuelidate/lib/validators'

export default {
  props: ['categories'],
  data: () => ({
    select: null,
    title: '',
    limit: 100,
    current: null
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
        const categoryData = {
          id: this.current,
          title: this.title,
          limit: this.limit
        }
        await this.$store.dispatch('updateCategory', categoryData)
        this.$message('Category successfully updated')
        this.$emit('updated', categoryData)
      } catch(e) { }
    }
  }, 
  watch: {
    current(id) {
      const { title, limit } = this.categories.find(category => category.id === id)
      this.title = title
      this.limit = limit
    }
  },
  created() {
    const { id, title, limit } = this.categories[0]
    this.current = id
    this.title = title
    this.limit = limit
  },
  mounted() {
    this.select = M.FormSelect.init(this.$refs.select, {})
    M.updateTextFields() 
  },
  destroyed() {
    if(this.select && this.select.destroy) {
      this.select.destroy()
    }
  } 
}
</script>
