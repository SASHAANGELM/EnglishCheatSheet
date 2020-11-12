import { getVerbByFirstForm, irregularVerbs } from './verbs';

const pronouns = [
  {
    subject: 'I',
    object: 'me',
    person: 1
  },
  {
    subject: 'you',
    object: 'you',
    person: 2
  },
  {
    subject: 'we',
    object: 'us',
    person: 2
  },
  {
    subject: 'they',
    object: 'them',
    person: 2
  },
  {
    subject: 'he',
    object: 'him',
    person: 3
  },
  {
    subject: 'she',
    object: 'her',
    person: 3
  },
  {
    subject: 'it',
    object: 'it',
    person: 3
  }
];

function getSubject(id) {
  return pronouns.find(pronoun => {
    console.log('pronoun', pronoun.subject)
    return pronoun.subject.toLowerCase() === id.toLowerCase();
  })
}
function getOrGenerateSubject(string) {
  const subjectGetterReg = new RegExp('(?<=\\[SUBJECT.)[\\w]+(?=\\])', 'g');
  if (subjectGetterReg.test(string)) {
    const subjectKey = string.match(subjectGetterReg)[0];
    return getSubject(subjectKey);
  } else {
    return randomInArray(pronouns);
  }
}
function getOrGenerateVerb(string) {  
  const verbGetterReg = new RegExp('(?<=\\[VERB.)[\\w]+(?=\\])', 'g');
  if (verbGetterReg.test(string)) {
    const verbKey = string.match(verbGetterReg)[0];
    return getVerbByFirstForm(verbKey);
  } else {
    return randomInArray(irregularVerbs);
  }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getPostfix(string) {
  const reg = new RegExp('\\[[\\w.]+\\]', 'g');
  string = string.replace(reg, '').trim();
  return string;
}

function questionGenerator(question, subject, verb) {
  const postfix = getPostfix(question.question);
  const string =  `${subject.subject} (${verb.first}) ${postfix}`;
  return capitalize(string);
}

function answerGenerator(question, subject, verb) {
  let answers = [];
  const postfix = getPostfix(question.question);
  console.log('postfix', postfix);
  const { tens, time, type } = question
  console.log('question', question);

  if (tens === 'perfect') {
    if (time === 'past') {
      if (type === 'positive') {
        answers.push(`${subject.subject} had ${verb.third} ${postfix}`);
      } else if (type === 'negative') {
        answers.push(`${subject.subject} had not ${verb.third} ${postfix}`);
        answers.push(`${subject.subject} hadn't ${verb.third} ${postfix}`);
      } else if (type === 'question') {
        answers.push(`Had ${subject.subject} ${verb.third} ${postfix}?`);
      }
    } else if (time === 'present') {
      const have = subject.person === 3 ? 'has' : 'have';
      if (type === 'positive') {
        answers.push(`${subject.subject} ${have} ${verb.third} ${postfix}`);
      } else if (type === 'negative') {
        answers.push(`${subject.subject} ${have} not ${verb.third} ${postfix}`);
        answers.push(`${subject.subject} ${have}n't ${verb.third} ${postfix}`);
      } else if (type === 'question') {
        answers.push(`${have} ${subject.subject} ${verb.third} ${postfix}?`);
      }
    } else if (time === 'future') {
      if (type === 'positive') {
        answers.push(`${subject.subject} will have ${verb.third} ${postfix}`);
      } else if (type === 'negative') {
        answers.push(`${subject.subject} will have not ${verb.third} ${postfix}`);
        answers.push(`${subject.subject} will haven't ${verb.third} ${postfix}`);
      } else if (type === 'question') {
        answers.push(`Will ${subject.subject} have ${verb.third} ${postfix}?`);
      }
    }
  }

  // Capitalize
  answers = answers.map(answer => {
    return capitalize(answer);
  })

  return answers;
}

const tensType = ['simple', 'continuous', 'perfect'];
const tensTimes = ['past', 'present', 'future'];
const sentencesType = ['positive', 'negative', 'question'];

const questions = [
  {
    question: '[SUBJECT] [VERB.buy] a new lamp',
    answers: {
      perfect: {
        past: {
          positive: [
            `I had worked`
          ],
          negative: [
            `I had not worked`,
            `I hadn't worked`
          ],
          question: [
            `Had I worked?`
          ]
        },
        present: {
          positive: [
            `I have worked`
          ],
          negative: [
            `I have not worked`,
            `I haven't worked`
          ],
          question: [
            `Have I worked?`
          ]
        },
        future: {
          positive: [
            `I will have worked`
          ],
          negative: [
            `I will have not worked`,
            `I will haven't worked`
          ],
          question: [
            `Will I have worked?`
          ]
        }
      }
    }
  },
  {
    question: '[SUBJECT.he] [VERB.write] five letters',
    answers: {
      perfect: {
        past: {
          positive: '',
          negative: '',
          question: ''
        },
        present: {
          positive: '',
          negative: '',
          question: ''
        },
        future: {
          positive: '',
          negative: '',
          question: ''
        }
      }
    }
  },
  {
    question: '[SUBJECT] [VERB] today',
    answers: {
      perfect: {
        past: {
          positive: '',
          negative: '',
          question: ''
        },
        present: {
          positive: '',
          negative: '',
          question: ''
        },
        future: {
          positive: '',
          negative: '',
          question: ''
        }
      }
    }
  }
]

export function randomInArray(array) {
  const i = Math.floor(Math.random() * array.length)
  return array[i];
}

function questionGen() {
  const randomTensType = randomInArray(tensType);
  const randomTensTimes = randomInArray(tensTimes);
  const randomSentencesType = randomInArray(sentencesType);
  const randomQuestion = randomInArray(questions);
  
  if (
    randomTensType in randomQuestion.answers &&
    randomTensTimes in randomQuestion.answers[randomTensType] &&
    randomSentencesType in randomQuestion.answers[randomTensType][randomTensTimes]
  ) {
    return {
      tens: randomTensType,
      time: randomTensTimes,
      type: randomSentencesType,
      question: randomQuestion.question,
      answers: randomQuestion.answers[randomTensType][randomTensTimes][randomSentencesType]
    };
  } else {
    return questionGen()
  }
}

export function generateQuestion() {
  const question = questionGen();
  const verb = getOrGenerateVerb(question.question);
  const subject = getOrGenerateSubject(question.question);

  const string = questionGenerator(question, subject, verb);
  const answers = answerGenerator(question, subject, verb);
  question.question = string;
  question.answers = answers;

  return question;
}


'I have worked today.'
'We have bought a new lamp.'
'We have not planned our holiday yet.'
'Where have you been ?'
'He has written five letters.'
'She has not seen him for a long time.'
'Have you been at school?'
'School has not started yet.'
'Has he spoken to his boss?'
'No, he has not had the time yet.'