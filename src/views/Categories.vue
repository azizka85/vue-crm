<template>
  <div>
    <div class="page-title">
      <h3>Categories</h3>
    </div>
    <section>
      <Loader v-if="loading" />
      <div v-else class="row">
        <CategoryCreate @created="addCategory" />

        <CategoryEdit 
          v-if="categories.length" 
          :categories="categories" 
          :key="categories.length + updateCount"
          @updated="updateCategory" />

        <p v-else class="center">No categories yet</p>
      </div>
    </section>
  </div>  
</template>

<script>
import CategoryCreate from '@/components/CategoryCreate'
import CategoryEdit from '@/components/CategoryEdit'

export default {
  data: () => ({
    categories: [],
    loading: true,
    updateCount: 0
  }),
  components: {
    CategoryCreate, 
    CategoryEdit
  },
  methods: {
    addCategory(category) {
      this.categories.push(category)
    },
    updateCategory(category) {
      const idx = this.categories.findIndex(c => c.id === category.id)
      this.categories[idx].title = category.title
      this.categories[idx].limit = category.limit
      this.updateCount++
    }
  },
  async mounted() {
    this.categories = await this.$store.dispatch('fetchCategories')
    this.loading = false
  }
}
</script>
