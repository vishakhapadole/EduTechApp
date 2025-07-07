import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const quizBank = {
  'Intro to AI': [
    {
      question: 'What is the goal of Artificial Intelligence?',
      options: ['To create intelligent machines', 'To replace humans', 'To build websites', 'To play games'],
      answer: 0,
    },
    {
      question: 'Which of these is a type of AI?',
      options: ['Narrow AI', 'Broad AI', 'Deep AI', 'Shallow AI'],
      answer: 0,
    },
    {
      question: 'Which language is commonly used in AI?',
      options: ['Python', 'HTML', 'CSS', 'PHP'],
      answer: 0,
    },
    {
      question: 'What is machine learning?',
      options: ['Learning to code', 'Learning from data', 'Learning from books', 'Learning manually'],
      answer: 1,
    },
    {
      question: 'Which of these is an AI application?',
      options: ['Face recognition', 'WordPress', 'Excel', 'Notepad'],
      answer: 0,
    },
  ],
  'JavaScript Basics': [
    {
      question: 'Which keyword declares a variable in JavaScript?',
      options: ['var', 'int', 'define', 'let'],
      answer: 0,
    },
    {
      question: 'What is the output of "2" + 2 in JS?',
      options: ['4', '22', 'NaN', 'undefined'],
      answer: 1,
    },
    {
      question: 'Which symbol is used for comments in JS?',
      options: ['//', '##', '<!--', '--'],
      answer: 0,
    },
    {
      question: 'Which method converts JSON to an object?',
      options: ['JSON.parse()', 'JSON.stringify()', 'JSON.convert()', 'JSON.objectify()'],
      answer: 0,
    },
    {
      question: 'Which of these is a JavaScript framework?',
      options: ['React', 'Laravel', 'Django', 'Flask'],
      answer: 0,
    },
  ],
  'React Native': [
    {
      question: 'Which component is used to render text?',
      options: ['<Text>', '<Label>', '<Paragraph>', '<Span>'],
      answer: 0,
    },
    {
      question: 'Which hook is used for state?',
      options: ['useEffect', 'useState', 'useRef', 'useMemo'],
      answer: 1,
    },
    {
      question: 'What is used to navigate between screens?',
      options: ['React Navigation', 'React Router', 'Redux', 'MobX'],
      answer: 0,
    },
    {
      question: 'Which command runs a React Native app on Android?',
      options: ['npx react-native run-android', 'npm start', 'expo start', 'yarn dev'],
      answer: 0,
    },
    {
      question: 'Which file defines Android settings?',
      options: ['AndroidManifest.xml', 'package.json', 'index.js', 'App.js'],
      answer: 0,
    },
  ],
  'Java Programming': [
    {
      question: 'Which method is the entry point in Java?',
      options: ['start()', 'main()', 'run()', 'init()'],
      answer: 1,
    },
    {
      question: 'Which keyword is used to inherit a class?',
      options: ['this', 'super', 'extends', 'implements'],
      answer: 2,
    },
    {
      question: 'Which of these is not a primitive type?',
      options: ['int', 'String', 'boolean', 'char'],
      answer: 1,
    },
    {
      question: 'Which package contains Scanner class?',
      options: ['java.util', 'java.io', 'java.lang', 'java.net'],
      answer: 0,
    },
    {
      question: 'Which keyword is used to create an object?',
      options: ['new', 'create', 'make', 'object'],
      answer: 0,
    },
  ],
  'Python for Beginners': [
    {
      question: 'What is the output of print(2 ** 3)?',
      options: ['6', '8', '9', '5'],
      answer: 1,
    },
    {
      question: 'Which keyword defines a function in Python?',
      options: ['func', 'define', 'def', 'function'],
      answer: 2,
    },
    {
      question: 'Which of these is a list in Python?',
      options: ['[1, 2, 3]', '{1, 2, 3}', '(1, 2, 3)', '<1, 2, 3>'],
      answer: 0,
    },
    {
      question: 'What does len() do?',
      options: ['Returns length', 'Returns type', 'Returns value', 'Returns index'],
      answer: 0,
    },
    {
      question: 'Which operator is used for division?',
      options: ['/', '%', '//', '*'],
      answer: 0,
    },
  ],
  'Data Structures': [
    {
      question: 'Which data structure uses FIFO?',
      options: ['Stack', 'Queue', 'Tree', 'Graph'],
      answer: 1,
    },
    {
      question: 'Which structure uses LIFO?',
      options: ['Queue', 'Stack', 'Array', 'LinkedList'],
      answer: 1,
    },
    {
      question: 'Which structure is hierarchical?',
      options: ['Tree', 'Array', 'Queue', 'Stack'],
      answer: 0,
    },
    {
      question: 'Which structure has nodes and edges?',
      options: ['Graph', 'Stack', 'Queue', 'Array'],
      answer: 0,
    },
    {
      question: 'Which structure allows dynamic memory allocation?',
      options: ['LinkedList', 'Array', 'Stack', 'Queue'],
      answer: 0,
    },
  ],
  'Machine Learning': [
    {
      question: 'Which algorithm is used for classification?',
      options: ['K-Means', 'Linear Regression', 'Decision Tree', 'PCA'],
      answer: 2,
    },
    {
      question: 'What is overfitting?',
      options: ['Model fits training data too well', 'Model performs well on test data', 'Model is too simple', 'None'],
      answer: 0,
    },
    {
      question: 'Which library is used in Python for ML?',
      options: ['scikit-learn', 'NumPy', 'Pandas', 'Matplotlib'],
      answer: 0,
    },
    {
      question: 'Which is a supervised learning algorithm?',
      options: ['KNN', 'K-Means', 'PCA', 't-SNE'],
      answer: 0,
    },
    {
      question: 'Which metric is used for regression?',
      options: ['MSE', 'Accuracy', 'Recall', 'F1 Score'],
      answer: 0,
    },
  ],
  'Cybersecurity': [
    {
      question: 'What does HTTPS stand for?',
      options: ['HyperText Transfer Protocol Secure', 'High Transfer Protocol', 'Secure HTML', 'None'],
      answer: 0,
    },
    {
      question: 'Which is a type of malware?',
      options: ['Firewall', 'Antivirus', 'Trojan', 'VPN'],
      answer: 2,
    },
    {
      question: 'What is phishing?',
      options: ['Fake emails to steal data', 'Fishing game', 'Data encryption', 'Firewall breach'],
      answer: 0,
    },
    {
      question: 'Which tool scans for vulnerabilities?',
      options: ['Nmap', 'Photoshop', 'Excel', 'Notepad'],
      answer: 0,
    },
    {
      question: 'What is a strong password?',
      options: ['123456', 'password', 'Qw!7@zL$', 'abc123'],
      answer: 2,
    },
  ],
  'Cloud Computing': [
    {
      question: 'Which is a cloud service provider?',
      options: ['AWS', 'Linux', 'Oracle DB', 'MongoDB'],
      answer: 0,
    },
    {
      question: 'What does SaaS stand for?',
      options: ['Software as a Service', 'Storage as a Service', 'System as a Service', 'None'],
      answer: 0,
    },
    {
      question: 'Which model provides virtual machines?',
      options: ['IaaS', 'SaaS', 'PaaS', 'FaaS'],
      answer: 0,
    },
    {
      question: 'Which platform is serverless?',
      options: ['AWS Lambda', 'EC2', 'S3', 'RDS'],
      answer: 0,
    },
    {
      question: 'Which is a cloud storage service?',
      options: ['S3', 'EC2', 'Lambda', 'CloudFront'],
      answer: 0,
    },
  ],
  'DevOps': [
    {
      question: 'What does CI/CD stand for?',
      options: ['Continuous Integration/Continuous Deployment', 'Code Integration/Code Delivery', 'None', 'Cloud Infrastructure'],
      answer: 0,
    },
    {
      question: 'Which tool is used for containerization?',
      options: ['Docker', 'Git', 'Jenkins', 'Kubernetes'],
            answer: 0,
    },
    {
      question: 'Which tool is used for continuous integration?',
      options: ['Jenkins', 'Docker', 'Kubernetes', 'Nginx'],
      answer: 0,
    },
    {
      question: 'What is the purpose of Kubernetes?',
      options: ['Container orchestration', 'Code editing', 'Version control', 'Monitoring'],
      answer: 0,
    },
    {
      question: 'Which file defines a Docker container?',
      options: ['Dockerfile', 'docker-compose.yml', 'package.json', 'build.gradle'],
      answer: 0,
    },
    {
      question: 'Which command initializes a Git repository?',
      options: ['git init', 'git start', 'git create', 'git new'],
      answer: 0,
    },
  ],
};
const QuizScreen = ({ navigation }) => {
  const [courseSelected, setCourseSelected] = useState('');
  const [started, setStarted] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleStart = () => {
    const selectedQuiz = quizBank[courseSelected] || [];
    const shuffled = [...selectedQuiz].sort(() => 0.5 - Math.random()).slice(0, 5);
    setQuiz(shuffled);
    setStarted(true);
    setIndex(0);
    setScore(0);
    setAnswers([]);
  };

  const handleAnswer = (optionIndex) => {
    const current = quiz[index];
    const isCorrect = optionIndex === current.answer;
    const updatedScore = isCorrect ? score + 1 : score;
    const updatedAnswers = [
      ...answers,
      {
        question: current.question,
        chosen: optionIndex,
        correct: isCorrect,
      },
    ];

    if (index + 1 < quiz.length) {
      setIndex(index + 1);
      setScore(updatedScore);
      setAnswers(updatedAnswers);
    } else {
      navigation.replace('QuizResult', {
        score: updatedScore,
        total: quiz.length,
        answers: updatedAnswers,
        courseTitle: courseSelected,
      });
    }
  };

  if (!started) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Select Course to Start Quiz</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={courseSelected}
            onValueChange={(value) => setCourseSelected(value)}
            style={styles.picker}
          >
            <Picker.Item label="-- Select Course --" value="" />
            {Object.keys(quizBank).map((course, index) => (
              <Picker.Item key={index} label={course} value={course} />
            ))}
          </Picker>
        </View>
        {courseSelected !== '' && (
          <TouchableOpacity style={styles.startButton} onPress={handleStart}>
            <Text style={styles.startButtonText}>Start Quiz</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    );
  }

  const current = quiz[index];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.courseTitle}>{courseSelected}</Text>
      <Text style={styles.question}>{current.question}</Text>
      {current.options.map((opt, idx) => (
        <TouchableOpacity
          key={idx}
          onPress={() => handleAnswer(idx)}
          style={styles.option}
        >
          <Text style={styles.optionText}>{opt}</Text>
        </TouchableOpacity>
      ))}
      <Text style={styles.progress}>
        Question {index + 1} of {quiz.length}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f4f8',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#1e3a8a',
    textAlign: 'center',
  },
  pickerWrapper: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    marginBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#1e293b',
  },
  startButton: {
    backgroundColor: '#4f46e5',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  startButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  courseTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4f46e5',
    marginBottom: 20,
    textAlign: 'center',
  },
  question: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#e0e7ff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#c7d2fe',
    elevation: 1,
  },
  optionText: {
    fontSize: 15,
    color: '#1e3a8a',
  },
  progress: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 14,
    color: '#475569',
  },
});


export default QuizScreen;