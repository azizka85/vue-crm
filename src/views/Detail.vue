<template>
  <div>
    <Loader v-if="loading"/>
    <p class="center" v-else-if="!record">
      Record with id = {{ $route.params.id }} not exist
    </p>
    <div v-else>
      <div class="breadcrumb-wrap">
        <router-link to="/history" class="breadcrumb">History</router-link>
        <a @click.prevent class="breadcrumb">
          {{ record.type === 'income' ? 'Income' : 'Outcome' }}
        </a>
      </div>
      <div class="row">
        <div class="col s12 m6">
          <div 
            class="card"
            :class="{
              red: record.type === 'outcome',
              green: record.type === 'income'
            }"
          >
            <div class="card-content white-text">
              <p>Description: {{ record.description }}</p>
              <p>Sum: {{ record.amount | currency('KZT') }}</p>
              <p>Category: {{ record.categoryName }}</p>

              <small>{{ record.date | date('datetime') }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data: () => ({
    record: null,
    loading: true
  }),
  async mounted() {
    try {
      const id = this.$route.params.id
      const record = await this.$store.dispatch('fetchRecordById', id)
      const category = await this.$store.dispatch('fetchCategoryById', record.categoryId)     
      
      this.record = {
        ...record,
        categoryName: category.title
      }      
    } catch(e) { }

    this.loading = false
  }
}
</script>
