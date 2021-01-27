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
      <HistoryTable :records="items" />

      <Paginate 
        v-model="page"
        :page-count="pageCount"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :click-handler="moveToPage"
        :container-class="'pagination'"
        :page-class="'waves-effect'"
      />
    </section>
  </div>  
</template>

<script>
import paginationMixin from '@/mixins/pagination.mixin.js'
import HistoryTable from '@/components/HistoryTable'

export default {
  mixins: [paginationMixin],
  data: () => ({
    loading: true,
    records: []
  }),
  async mounted() {
    this.records = await this.$store.dispatch('fetchRecords')
    const categories = await this.$store.dispatch('fetchCategories')

    this.setupPagination(this.records.map(record => ({
      ...record, 
      categoryName: categories.find(category => category.id === record.categoryId).title,
      typeClass: record.type === 'income' ? 'green' : 'red',
      typeText: record.type === 'income' ? 'Income' : 'Outcome'
    })))
    
    this.loading = false
  },
  components: {
    HistoryTable
  }
}
</script>
