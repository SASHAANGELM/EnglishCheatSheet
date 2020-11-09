<template>
  <div class="flex items-center py-4 rounded">
    <div class="flex justify-center items-center w-12 h-12 mx-4 bg-white rounded-full shadow-xl text-2xl text-black">{{ type }}</div>
    <div class="flex flex-col md:flex-row">
      <div>
        <div class="rule">{{ item.rule }}</div>
      </div>
      <div>
        <div class="example text-sm">Examples:</div>
        <div v-for="example in item.examples" :key="`example-${example}`" class="example">{{ example }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { id } from '../utils/id';

export default {
  props: {
    type: {
      required: true
    }
  },
  data() {
    return {
      types: [
        {
          id: id(),
          rule: 'If + Present Simple, Present Simple',
          examples: [
            'If he listens, she plays the piano',
            'If I get sick, I go to the doctor'
          ]
        },
        {
          id: id(),
          rule: 'If + Present Simple, Future Simple',
          examples: [
            'If he listens, she will play the piano',
            'If I get sick, I will go to the doctor'
          ]
        },
        {
          id: id(),
          rule: 'If + Past Simple, Would + Verb(1)',
          examples: [
            'If he listened, she would play the piano',
            'If I got sick, I would go to the doctor'
          ]
        },
        {
          id: id(),
          rule: 'If + Past Perfect, Would + Have + Verb(3)',
          examples: [
            'If he had listened, she would have played the piano',
            'If I had been sick, I would have gone to the doctor'
          ]
        }
      ]
    };
  },
  computed: {
    item() {
      return this.types[this.type];
    }
  }
};
</script>

<style lang="scss" scoped>
  .rule {
    font-size: 1.5rem;
    font-weight: 700;
  }
  .example {
    font-size: 1rem;
    font-weight: 400;
    font-style: italic;
  }
</style>
