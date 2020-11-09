<template>
  <div>
    <nav class="h-16 bg-orange-500">
      <div class="flex items-center container h-full mx-auto">
        <router-link v-for="link in links" :key="link.id" :to="link.to" tag="button" class="h-10 px-4 text-white hover:bg-orange-400 rounded-lg">{{ link.label }}</router-link>
      </div>
    </nav>
    <router-view class=""></router-view>
  </div>
</template>

<script>

import { id } from '../utils/id';

export default {
  data() {
    return {
      links: [
        {
          id: id(),
          label: 'Home',
          to: '/'
        },
        {
          id: id(),
          label: 'Tenses',
          to: '/tenses'
        },
        {
          id: id(),
          label: 'Conditions',
          to: '/conditions'
        },
        {
          id: id(),
          label: 'IrregularVerbs',
          to: '/irregular-verbs'
        }
      ]
    };
  }
};
</script>
