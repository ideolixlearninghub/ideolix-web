// Math Engine for Grade 1 Mathematics
const MathEngine = {
    generateProblem(gradeLevel) {
        const problemTypes = ['addition', 'subtraction', 'counting', 'patterns', 'comparison'];
        const type = problemTypes[Math.floor(Math.random() * problemTypes.length)];
        
        switch(type) {
            case 'addition':
                return this.generateAdditionProblem(gradeLevel);
            case 'subtraction':
                return this.generateSubtractionProblem(gradeLevel);
            case 'counting':
                return this.generateCountingProblem(gradeLevel);
            case 'patterns':
                return this.generatePatternProblem(gradeLevel);
            case 'comparison':
                return this.generateComparisonProblem(gradeLevel);
            default:
                return this.generateAdditionProblem(gradeLevel);
        }
    },

    generateAdditionProblem(gradeLevel) {
        let a, b, answer;
        
        if (gradeLevel === 1) {
            a = Math.floor(Math.random() * 15) + 1; // 1-15
            b = Math.floor(Math.random() * 15) + 1; // 1-15
            answer = a + b;
            
            // Ensure answer is within 20 for Grade 1
            while (answer > 20) {
                a = Math.floor(Math.random() * 10) + 1;
                b = Math.floor(Math.random() * 10) + 1;
                answer = a + b;
            }
        }
        
        return {
            text: `${a} + ${b} = ?`,
            answer: answer,
            type: 'addition',
            hint: `Try counting: ${a} + ${b}`,
            explanation: `${a} + ${b} = ${answer}. Great addition skills!`
        };
    },

    generateSubtractionProblem(gradeLevel) {
        let a, b, answer;
        
        if (gradeLevel === 1) {
            a = Math.floor(Math.random() * 15) + 5; // 5-20
            b = Math.floor(Math.random() * (a - 1)) + 1; // 1 to a-1
            answer = a - b;
            
            // Ensure positive result
            while (answer < 1) {
                a = Math.floor(Math.random() * 15) + 5;
                b = Math.floor(Math.random() * (a - 1)) + 1;
                answer = a - b;
            }
        }
        
        return {
            text: `${a} - ${b} = ?`,
            answer: answer,
            type: 'subtraction',
            hint: `Start from ${a} and count backwards ${b}`,
            explanation: `${a} - ${b} = ${answer}. Excellent subtraction!`
        };
    },

    generateCountingProblem(gradeLevel) {
        const start = Math.floor(Math.random() * 15) + 1;
        const sequence = [];
        
        for (let i = 0; i < 4; i++) {
            sequence.push(start + i);
        }
        
        const missingIndex = Math.floor(Math.random() * 4);
        sequence[missingIndex] = '?';
        
        return {
            text: `Complete the sequence: ${sequence.join(', ')}`,
            answer: start + missingIndex,
            type: 'counting',
            hint: 'Count forward by 1 each time',
            explanation: `The pattern is counting up by 1. The missing number is ${start + missingIndex}.`
        };
    },

    generatePatternProblem(gradeLevel) {
        const shapes = ['🔺', '⬜', '🔴', '🟦'];
        const pattern = [];
        const patternLength = 4;
        
        for (let i = 0; i < patternLength; i++) {
            pattern.push(shapes[i % shapes.length]);
        }
        
        const nextShape = shapes[patternLength % shapes.length];
        pattern.push('?');
        
        return {
            text: `What comes next: ${pattern.join(' ')}`,
            answer: nextShape,
            type: 'pattern',
            hint: 'Look at the repeating pattern of shapes',
            explanation: `The pattern repeats: 🔺, ⬜, 🔴, 🟦. Next is ${nextShape}.`
        };
    },

    generateComparisonProblem(gradeLevel) {
        const a = Math.floor(Math.random() * 15) + 1;
        let b;
        
        // Ensure they're different
        do {
            b = Math.floor(Math.random() * 15) + 1;
        } while (a === b);
        
        const comparison = a > b ? 'greater' : 'less';
        const answer = a > b ? 'greater' : 'less';
        
        return {
            text: `Is ${a} greater or less than ${b}?`,
            answer: answer,
            type: 'comparison',
            hint: `Compare the numbers: ${a} and ${b}`,
            explanation: `${a} is ${comparison} than ${b}.`
        };
    },

    checkAnswer(problem, userAnswer) {
        if (problem.type === 'pattern' || problem.type === 'comparison') {
            return userAnswer.toString().toLowerCase() === problem.answer.toString().toLowerCase();
        }
        return parseInt(userAnswer) === problem.answer;
    },

    getTopicDescription(topic) {
        const descriptions = {
            'addition': 'Learn to combine numbers',
            'subtraction': 'Learn to take away numbers', 
            'counting': 'Practice number sequences',
            'patterns': 'Recognize visual and number patterns',
            'comparison': 'Compare numbers and quantities'
        };
        return descriptions[topic] || 'Practice math skills';
    }
};

// Make it available globally
window.MathEngine = MathEngine;
