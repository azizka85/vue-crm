<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link 
      tag="li"
      to="/"
      active-class="active"
      exact
    >
      <a href="#" class="waves-effect waves-orange pointer">Bill</a>
    </router-link>
    <router-link 
      tag="li"
      to="/detail"
      active-class="active"
    >
      <a href="#" class="waves-effect waves-orange pointer">Detail</a>
    </router-link>
    <router-link 
      tag="li"
      to="/history"
      active-class="active"
    >
      <a href="#" class="waves-effect waves-orange pointer">History</a>
    </router-link>
    <router-link 
      tag="li"
      to="/planning"
      active-class="active"
    >
      <a href="#" class="waves-effect waves-orange pointer">Planning</a>
    </router-link>
    <router-link 
      tag="li"
      to="/record"
      active-class="active"
    >
      <a href="#" class="waves-effect waves-orange pointer">New record</a>
    </router-link>
    <router-link 
      tag="li"
      to="/categories"
      active-class="active"
    >
      <a href="#" class="waves-effect waves-orange pointer">Categories</a>
    </router-link>
  </ul>  
</template>

<script>
export default {
  props: ['value']
}
</script>
