// MATH QUESTION GENERATION ENGINE
const MathEngine = {
    generateQuestion: function(grade, level) {
        const generators = this.getGeneratorsForGrade(grade, level);
        const randomGenerator = generators[Math.floor(Math.random() * generators.length)];
        return randomGenerator(grade, level);
    },
    
    getGeneratorsForGrade: function(grade, level) {
        if (grade == 1) {
            const grade1Generators = [
                this.generateAdditionBasic,
                this.generateSubtractionBasic,
                this.generateNumberWords,
                this.generateCounting,
                this.generateShapesBasic
            ];
            return grade1Generators.slice(0, level + 1);
        }
        
        return [this.generateAdditionBasic];
    },
    
    generateAdditionBasic: function(grade, level) {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const answer = num1 + num2;
        
        return {
            question: `What is ${num1} + ${num2}?`,
            correctAnswer: answer,
            wrongAnswers: [answer + 1, answer - 1, num1 + num2 - 2].filter(val => val > 0 && val !== answer),
            type: 'addition',
            difficulty: level
        };
    },
    
    generateSubtractionBasic: function(grade, level) {
        const num1 = Math.floor(Math.random() * 10) + 5;
        const num2 = Math.floor(Math.random() * 5) + 1;
        const answer = num1 - num2;
        
        return {
            question: `What is ${num1} - ${num2}?`,
            correctAnswer: answer,
            wrongAnswers: [answer + 1, answer - 1, num1 + num2].filter(val => val !== answer),
            type: 'subtraction',
            difficulty: level
        };
    },
    
    generateNumberWords: function(grade, level) {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
        const index = Math.floor(Math.random() * numbers.length);
        
        return {
            question: `Which number is written as "${words[index]}"?`,
            correctAnswer: numbers[index],
            wrongAnswers: numbers.filter((_, i) => i !== index).slice(0, 3),
            type: 'number-words',
            difficulty: level
        };
    },
    
    generateCounting: function(grade, level) {
        const start = Math.floor(Math.random() * 10) + 1;
        const missingPosition = Math.floor(Math.random() * 3) + 1;
        const sequence = [start, start + 1, start + 2, start + 3];
        const missingValue = sequence[missingPosition];
        sequence[missingPosition] = '?';
        
        return {
            question: `Complete the sequence: ${sequence.join(', ')}`,
            correctAnswer: missingValue,
            wrongAnswers: [missingValue - 1, missingValue + 1, start - 1].filter(val => val > 0),
            type: 'counting',
            difficulty: level
        };
    },
    
    generateShapesBasic: function(grade, level) {
        const shapes = [
            { name: 'circle', sides: '0' },
            { name: 'triangle', sides: '3' },
            { name: 'square', sides: '4' }
        ];
        
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        
        return {
            question: `How many sides does a ${shape.name} have?`,
            correctAnswer: shape.sides,
            wrongAnswers: ['1', '2', '5', '6'].filter(val => val !== shape.sides),
            type: 'shapes',
            difficulty: level
        };
    }
};

window.MathEngine = MathEngine;
