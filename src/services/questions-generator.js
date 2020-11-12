const verbs: []

const TENS_TIME = {
  PAST: 'PAST',
  PRESENT: 'PRESENT',
  FUTURE: 'FUTURE',
};

const TENS_TYPE = {
  SIMPLE: 'SIMPLE',
  CONTINUOUS: 'CONTINUOUS',
  PERFECT: 'PERFECT',
};

const PERSONAL = {
  I: 'I',
  HE: 'he',
  SHE: 'he',
  IT: 'he',
  YOU: 'you',
  WE: 'we',
  THEY: 'they',
}

const BE = {
  AM: 'am',
  IS: 'am',
  ARE: 'am'
}

const questions = [
  {
    text: '{{ PERSONAL }} {{ BE }} {{ VERB }}',
    answers: {
      simple: {
        past: 'I was {{ VERB }} today',
        present: 'I am {{ VERB }} today.',
        future: 'I will {{ VERB }} today.'
      },
      simple: {
        past: 'I was {{ VERB }} today',
        present: 'I am {{ VERB }} today.',
        future: 'I will {{ VERB }} today.'
      }
    }
  }
]


function generateQuestion() {
  
}