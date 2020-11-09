<template>
  <div class="container mx-auto py-2 px-4 sm:px-0">
    <h1>Conditions</h1>

    <div>Condition contains by two parts:</div>
    <div class="rule">
      <span class="condition rules if">If clause</span>, <span class="condition rules result">Result clause</span>
    </div>
    <div class="rule">
      <span class="condition rules result">Result clause</span> <span class="condition rules if">If clause</span>
    </div>

    If the sentence start from "<span class="condition rule if">If clause</span>" coma places between two parst.

    <div class="my-4">
      <ConditionSection type="0"></ConditionSection>
      <ConditionSection type="1"></ConditionSection>
      <ConditionSection type="2"></ConditionSection>
      <ConditionSection type="3"></ConditionSection>
    </div>

    <h2></h2>

    <p>
      If + Present Simple, Present Simple
      If he listens, she will play the piano.
    </p>

    <div class="mt-64">
      <table>
        <thead>
          <tr>
            <td>Type</td>
            <td>Rule</td>
            <td>Examples</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(type, index) in types" :key="type.id">
            <td>{{ index }}</td>
            <td>
              <span>
                <span class="condition rules if">{{ type.rules.if }}</span>
                <span>, </span>
                <span class="condition rules result">{{ type.rules.result }}</span>
              </span>
            </td>
            <td>
              <div>
                <div v-for="example in type.examples" :key="`example-${example}`" class="text-sm italic">{{ example }}</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ConditionSection from '../components/ConditionSection';
import { id } from '../utils/id';

export default {
  components: {
    ConditionSection
  },
  data() {
    return {
      types: [
        {
          id: id(),
          rule: 'If + Present Simple, Present Simple',
          rules: {
            if: 'If + Present Simple',
            result: 'Present Simple'
          },
          examples: [
            'If he listens, she plays the piano',
            'If I get sick, I go to the doctor'
          ]
        },
        {
          id: id(),
          rule: 'If + Present Simple, Future Simple',
          rules: {
            if: 'If + Present Simple',
            result: 'Future Simple'
          },
          examples: [
            'If he listens, she will play the piano',
            'If I get sick, I will go to the doctor'
          ]
        },
        {
          id: id(),
          rule: 'If + Past Simple, Would + Verb(1)',
          rules: {
            if: 'If + Past Simple',
            result: 'Would + Verb(1)'
          },
          examples: [
            'If he listened, she would play the piano',
            'If I got sick, I would go to the doctor'
          ]
        },
        {
          id: id(),
          rule: 'If + Past Perfect, Would + Have + Verb(3)',
          rules: {
            if: 'If + Past Perfect',
            result: 'Would + Have + Verb(3)'
          },
          examples: [
            'If he had listened, she would have played the piano',
            'If I had been sick, I would have gone to the doctor'
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">

</style>
