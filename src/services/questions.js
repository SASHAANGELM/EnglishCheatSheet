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
    const subject = getSubject(subjectKey);
    if (subject) {
      return subject;
    } else {
      return {
        subject: subjectKey,
        person: 3
      }
    }
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

function questionGenerator(question) {
  const { subject, verb } = question;
  const postfix = getPostfix(question.question);
  const string =  `${subject.subject} (${verb.first}) ${postfix}`;
  return capitalize(string);
}

function answerGenerator(question) {
  const { subject, verb } = question;
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
    question: '[SUBJECT] [VERB] today',
    answers: {
      perfect: {
        present: true,
        future: true
      }
    }
  },
  {
    question: '[SUBJECT] [VERB.buy] a new lamp',
    answers: {
      perfect: {
        past: true,
        present: true,
        future: true
      }
    }
  },
  {
    question: '[SUBJECT] [VERB.write] five letters',
    answers: {
      perfect: {
        past: true,
        present: true,
        future: true
      }
    }
  },
  {
    question: '[SUBJECT] [VERB.plan] our holiday yet',
    answers: {
      perfect: {
        present: {
          negative: true,
          question: true
        },
        future: {
          negative: true,
          question: true
        }
      }
    }
  },
  {
    question: '[SUBJECT] [VERB.see] him for a long time',
    answers: {
      perfect: {
        past: true,
        present: true,
        future: true
      }
    }
  },
  {
    question: '[SUBJECT] [VERB.be] at school',
    answers: {
      perfect: {
        past: true,
        present: true,
        future: true
      }
    }
  },
  {
    question: '[SUBJECT.school] [VERB.start] yet',
    answers: {
      perfect: {
        present: {
          negative: true,
          question: true
        },
        future: {
          negative: true,
          question: true
        }
      }
    }
  },
  {
    question: '[SUBJECT] [VERB.speak] to his boss',
    answers: {
      perfect: {
        past: true,
        present: true,
        future: true
      }
    }
  },
  {
    question: '[SUBJECT] [VERB.have] the time yet',
    answers: {
      perfect: {
        present: {
          negative: true,
          question: true
        },
        future: {
          negative: true,
          question: true
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
  const randomQuestion = randomInArray(questions);
  const tens = randomInArray(tensType);
  const time = randomInArray(tensTimes);
  const type = randomInArray(sentencesType);
  
  if (
    tens in randomQuestion.answers &&
    time in randomQuestion.answers[tens] &&
    (
      (
        typeof randomQuestion.answers[tens][time] === 'object' &&
        type in randomQuestion.answers[tens][time] &&
        randomQuestion.answers[tens][time][type]
      ) || 
      (
        typeof randomQuestion.answers[tens][time] === 'boolean' &&
        randomQuestion.answers[tens][time]
      )
    )
  ) {
    return {
      tens,
      time,
      type: type,
      question: randomQuestion.question,
      answers: randomQuestion.answers[tens][time][type]
    };
  } else {
    return questionGen()
  }
}

export function generateQuestion() {
  const question = questionGen();
  const verb = getOrGenerateVerb(question.question);
  const subject = getOrGenerateSubject(question.question);

  question.verb = verb;
  question.subject = subject;

  const string = questionGenerator(question);
  const answers = answerGenerator(question);
  question.question = string;
  question.answers = answers;

  return question;
}
