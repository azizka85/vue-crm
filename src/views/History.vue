<template>
  <div>
    <div class="page-title">
      <h3>History of records</h3>
    </div>

    <div class="history-chart">
      <canvas></canvas>
    </div>

    <Loader v-if="loading" />

    <p class="center" v-else-if="!records.length">
      No records yet.
      <router-link to="/record">Create first record</router-link>
    </p>

    <section v-else>
      <HistoryTable :records="records" />
    </section>
  </div>  
</template>

<script>
import HistoryTable from '@/components/HistoryTable'

export default {
  data: () => ({
    loading: true,
    records: [],
    categories: []
  }),
  async mounted() {
    const records = await this.$store.dispatch('fetchRecords')
    this.categories = await this.$store.dispatch('fetchCategories')
    this.records = records.map(record => ({
      ...record, 
      categoryName: this.categories.find(category => category.id === record.categoryId).title,
      typeClass: record.type === 'income' ? 'green' : 'red',
      typeText: record.type === 'income' ? 'Income' : 'Outcome'
    }))
    
    this.loading = false
  },
  components: {
    HistoryTable
  }
}
</script>
