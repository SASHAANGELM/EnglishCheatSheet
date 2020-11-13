<template>
  <div class="flex items-center w-full px-2 py-1 bg-gray-300 rounded-lg text-lg">
    <div class="w-1/6 text-green-500">{{ irregularVerb.first }}</div>
    <div class="w-1/6 text-orange-500">{{ irregularVerb.second }}</div>
    <div class="w-1/6 text-red-500">{{ irregularVerb.third }}</div>
    <div class="w-3/6 py-2 text-xs leading-none">
      <span v-for="(translate, translateIndex) in irregularVerb.translates">
        <span v-if="translateIndex > 0">, </span>
        <span>{{ translate }}</span>
      </span>
    </div>
  </div>
</template>

<script>
import { id } from '../utils/id';

export default {
  props: {
    irregularVerb: {
      required: true
    }
  },
  data() {
    return {
      
    };
  },
  computed: {
  }
};
</script>

<style lang="scss" scoped>

</style>
