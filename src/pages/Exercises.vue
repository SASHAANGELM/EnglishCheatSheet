<template>
  <div class="flex flex-col py-8 space-y-8 bg-gradient-to-r from-teal-400 to-blue-500">
    <div class="flex-1 container mx-auto h-full bg-gray-100 rounded-lg">
      <div class="p-4">
        <div class="flex space-x-2">
          <div :class="question.time" class="tag">{{ question.time }} Perfect Tens</div>
          <div :class="question.type" class="tag">{{ question.type }} Sentence</div>
        </div>
        <div class="mt-4 text-xl">
          <div>{{ question.question }}</div>
          <!-- <div>{{ question.answers }}</div> -->
        </div>
      </div>
    </div>
    <div class="flex-1 container mx-auto h-full p-4  bg-gray-100 rounded-lg">
      <div class="flex">
        <input v-model="answer" type="text" class="w-full border border-gray-500 text-xl" @keyup.enter="enter">
        <vs-button @click="check">Check</vs-button>
      </div>
      <div v-if="checked" class="flex justify-center">
        <div>
          <div v-if="checkResult">
            <div class="result correct">Correct</div>
          </div>
        </div>
        
        <div v-if="!checkResult">
          <div class="result wrong">Wrong</div>
          correct answer: {{ question.answers[0] }}
        </div>
      </div>
      <vs-button @click="next">Next question</vs-button>
    </div>
  </div>
</template>

<script>

import { generateQuestion } from '../services/questions';

const TYPES = {
  VERBS: 'VERBS'
}

export default {
  data() {
    return {
      answer: '',
      question: generateQuestion(),
      checked: false,
      checkResult: null
    }
  },
  methods: {
    enter() {
      if (this.checked) {
        this.next();
      } else {
        this.check();
      }
    },

    check() {
      const result = this.question.answers.some(answer => {
        return this.answer === answer;
      });
      console.log('result', result)
      console.log('this.answer', this.answer)
      console.log('this.question', this.question)
      this.checked = true;
      this.checkResult = result;
    },
    next() {
      this.checked = false;
      this.checkResult = null;
      this.answer = '';
      this.question = generateQuestion();
    }
  }
};
</script>

<style lang="scss">

.tag {
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 12px;
  text-transform: capitalize;

  &.past, &.question {
    background-color: rgba(#ed8936, 0.2);
    color: #ed8936
  }
  &.present, &.positive {
    background-color: rgba(#48bb78, 0.2);
    color: #48bb78
  }
  &.future {
    background-color: rgba(#667eea, 0.2);
    color: #667eea
  }

  &.negative {
    background-color: rgba(#e53e3e, 0.2);
    color: #e53e3e
  }
}

.result {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 60px;
  padding: 2px 4px;
  border-radius: 8px;

  &.correct {
    background-color: rgba(#48bb78, 0.2);
    color: #48bb78
  }
  &.wrong {
    background-color: rgba(#e53e3e, 0.2);
    color: #e53e3e
  }
}

</style>
