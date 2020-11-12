<template>
  <div class="container mx-auto py-2 px-4 sm:px-0">
    <h1>Irregular Verbs</h1>
    <div class="py-6">

      <IrregularVerbRow :irregularVerb="randomVerb"></IrregularVerbRow>

      <vs-button @click="randomizeVerb">Randomize verb</vs-button>


      <input v-model="search" type="text">
      <IrregularVerbRow v-for="verb in filteredVerbs" :key="verb.id" :irregularVerb="verb"></IrregularVerbRow>

      <!-- <table class="w-full">
        <thead>
          <tr>
            <td>First</td>
            <td>Second</td>
            <td>Third</td>
            <td>Translate</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="verb in verbs" :key="verb.id">
            <td>{{ verb.first }}</td>
            <td>{{ verb.second }}</td>
            <td>{{ verb.third }}</td>
            <td>
              <div class="py-2 text-xs leading-none">
                <div v-for="translate in verb.translate">{{ translate }}</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table> -->
    </div>
  </div>
</template>

<script>
import { id } from '../utils/id';
import { irregularVerbs } from '../services/verbs';

import IrregularVerbRow from '../components/IrregularVerbRow';
// console.log('irregularVerbs', irregularVerbs);

export default {
  components: {
    IrregularVerbRow
  },
  data() {
    return {
      search: '',
      verbs: [],
      randomVerb: null
    };
  },
  computed: {
    filteredVerbs() {
      const s = this.search;
      // console.log('!s', !s)
      if (!s) {
        return this.verbs;
      }

      return this.verbs.filter(verb => {
        const translate = verb.translate.some((translate) => translate.includes(s));

        return verb.first.includes(s) ||
               verb.second.includes(s) ||
               verb.third.includes(s) ||
               translate;
      });
    }
  },
  watch: {

  },
  created() {
    this.verbs = irregularVerbs.map(item => {
      item.id = id();
      return item;
    });

    this.randomizeVerb();
  },
  methods: {
    randomizeVerb() {
      const randomIndex = Math.floor(Math.random() * this.verbs.length);
      // console.log('randomIndex', randomIndex)
      this.randomVerb = this.verbs[randomIndex];
    }
  }
};
</script>

<style lang="scss">


.verbs {
  width: 100%;

  .row {
    display: flex;

    .first {
      min-width: 60px;
    }
    .second {
      min-width: 60px;
    }
    .third {
      min-width: 60px;
    }

    > div {
      flex: 1 1 auto;
    }
  }
}

</style>
