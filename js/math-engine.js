// COMPREHENSIVE MATH ENGINE FOR GRADES 1-12
const MathEngine = {
    // Complete K-12 Curriculum Structure
    getCurriculum(grade) {
        const curriculum = {
            1: {
                title: "Grade 1 Mathematics",
                description: "Counting, basic operations, time and money",
                topics: [
                    { id: 'counting', name: 'Counting & Number Patterns (0-120)', icon: '🔢' },
                    { id: 'place-value', name: 'Place Value (ones and tens)', icon: '🏠' },
                    { id: 'addition', name: 'Addition within 20', icon: '➕' },
                    { id: 'subtraction', name: 'Subtraction within 20', icon: '➖' },
                    { id: 'fact-families', name: 'Fact Families & Missing Numbers', icon: '🏘️' },
                    { id: 'comparing', name: 'Comparing & Ordering Numbers', icon: '⚖️' },
                    { id: 'time', name: 'Time (hour & half hour)', icon: '⏰' },
                    { id: 'money', name: 'Money & Coins', icon: '💰' },
                    { id: 'geometry', name: '2D & 3D Shapes', icon: '🔺' },
                    { id: 'measurement', name: 'Measurement', icon: '📏' },
                    { id: 'graphs', name: 'Graphs & Tally Charts', icon: '📊' }
                ]
            },
            2: {
                title: "Grade 2 Mathematics", 
                description: "Place value, regrouping, multiplication foundations",
                topics: [
                    { id: 'place-value', name: 'Place Value to 1,000', icon: '🏠' },
                    { id: 'addition', name: 'Addition within 1,000', icon: '➕' },
                    { id: 'subtraction', name: 'Subtraction within 1,000', icon: '➖' },
                    { id: 'odd-even', name: 'Odd & Even Numbers', icon: '🔢' },
                    { id: 'multiplication', name: 'Multiplication Basics', icon: '✖️' },
                    { id: 'division', name: 'Division Basics', icon: '➗' },
                    { id: 'fractions', name: 'Fractions (halves, thirds, fourths)', icon: '½' },
                    { id: 'measurement', name: 'Measurement', icon: '📏' },
                    { id: 'time', name: 'Time to 5 Minutes', icon: '⏰' },
                    { id: 'money', name: 'Money & Making Change', icon: '💰' },
                    { id: 'geometry', name: 'Geometry & Symmetry', icon: '🔺' },
                    { id: 'graphs', name: 'Picture & Bar Graphs', icon: '📊' }
                ]
            },
            3: {
                title: "Grade 3 Mathematics",
                description: "Multiplication mastery, fractions, area",
                topics: [
                    { id: 'place-value', name: 'Place Value to 10,000', icon: '🏠' },
                    { id: 'multiplication', name: 'Multiplication Facts to 12', icon: '✖️' },
                    { id: 'division', name: 'Division Facts', icon: '➗' },
                    { id: 'word-problems', name: 'Word Problems', icon: '📝' },
                    { id: 'fractions', name: 'Fractions & Equivalents', icon: '½' },
                    { id: 'time', name: 'Time, Volume & Mass', icon: '⏰' },
                    { id: 'area-perimeter', name: 'Area & Perimeter', icon: '📐' },
                    { id: 'geometry', name: 'Angles & Lines', icon: '📐' },
                    { id: 'graphs', name: 'Graphs & Line Plots', icon: '📊' }
                ]
            },
            4: {
                title: "Grade 4 Mathematics",
                description: "Decimals, factors, geometry",
                topics: [
                    { id: 'place-value', name: 'Place Value to 1,000,000', icon: '🏠' },
                    { id: 'multiplication', name: 'Multi-digit Multiplication', icon: '✖️' },
                    { id: 'division', name: 'Long Division', icon: '➗' },
                    { id: 'factors', name: 'Factors & Multiples', icon: '🔢' },
                    { id: 'fractions', name: 'Fractions & Mixed Numbers', icon: '½' },
                    { id: 'decimals', name: 'Decimals (tenths/hundredths)', icon: '.' },
                    { id: 'measurement', name: 'Measurement Conversions', icon: '📏' },
                    { id: 'angles', name: 'Angles', icon: '📐' },
                    { id: 'geometry', name: 'Geometry & Symmetry', icon: '🔺' },
                    { id: 'graphs', name: 'Graphing', icon: '📊' }
                ]
            },
            5: {
                title: "Grade 5 Mathematics",
                description: "Algebra basics, volume, coordinate plane",
                topics: [
                    { id: 'place-value', name: 'Place Value to Billions', icon: '🏠' },
                    { id: 'operations', name: 'Operations with Decimals', icon: '🔢' },
                    { id: 'fractions', name: 'Fraction Operations', icon: '½' },
                    { id: 'pemdas', name: 'Order of Operations', icon: '🔣' },
                    { id: 'volume', name: 'Volume', icon: '🧊' },
                    { id: 'coordinate', name: 'Coordinate Plane', icon: '📈' },
                    { id: 'geometry', name: 'Triangles & Quadrilaterals', icon: '🔺' },
                    { id: 'data', name: 'Data & Statistics', icon: '📊' }
                ]
            },
            6: {
                title: "Grade 6 Mathematics",
                description: "Ratios, percentages, integers",
                topics: [
                    { id: 'integers', name: 'Integers & Absolute Value', icon: 'ℤ' },
                    { id: 'factors', name: 'Factors & Prime Factorization', icon: '🔢' },
                    { id: 'fractions', name: 'Fractions, Decimals, Percents', icon: '½' },
                    { id: 'ratios', name: 'Ratios & Proportions', icon: '∶' },
                    { id: 'expressions', name: 'Expressions & Equations', icon: '𝑓' },
                    { id: 'geometry', name: 'Area & Volume', icon: '📐' },
                    { id: 'statistics', name: 'Statistics', icon: '📊' },
                    { id: 'coordinate', name: 'Coordinate Plane', icon: '📈' }
                ]
            },
            7: {
                title: "Grade 7 Mathematics",
                description: "Proportions, probability, equations",
                topics: [
                    { id: 'rational', name: 'Rational Numbers', icon: '🔢' },
                    { id: 'proportions', name: 'Proportions & Percent', icon: '%' },
                    { id: 'equations', name: 'Equations & Inequalities', icon: '=' },
                    { id: 'geometry', name: 'Angles & Geometry', icon: '📐' },
                    { id: 'area-volume', name: 'Area & Volume', icon: '🧊' },
                    { id: 'probability', name: 'Probability', icon: '🎲' },
                    { id: 'data', name: 'Data Analysis', icon: '📊' }
                ]
            },
            8: {
                title: "Grade 8 Mathematics",
                description: "Functions, linear equations, transformations",
                topics: [
                    { id: 'real-numbers', name: 'Real Numbers & Exponents', icon: 'ℝ' },
                    { id: 'scientific', name: 'Scientific Notation', icon: '🔬' },
                    { id: 'linear-equations', name: 'Linear Equations', icon: '📈' },
                    { id: 'functions', name: 'Functions', icon: '𝑓' },
                    { id: 'transformations', name: 'Transformations', icon: '🔄' },
                    { id: 'congruence', name: 'Congruence & Similarity', icon: '≅' },
                    { id: 'pythagorean', name: 'Pythagorean Theorem', icon: '📐' },
                    { id: 'volume', name: 'Volume', icon: '🧊' },
                    { id: 'graphs', name: 'Scatter Plots', icon: '📊' }
                ]
            },
            9: {
                title: "Algebra I",
                description: "Linear equations, inequalities, functions",
                topics: [
                    { id: 'real-numbers', name: 'Real Numbers', icon: 'ℝ' },
                    { id: 'linear-equations', name: 'Linear Equations', icon: '📈' },
                    { id: 'inequalities', name: 'Inequalities', icon: '≠' },
                    { id: 'systems', name: 'Systems of Equations', icon: '⚖️' },
                    { id: 'exponents', name: 'Exponents & Polynomials', icon: '^' },
                    { id: 'factoring', name: 'Factoring', icon: '🔣' },
                    { id: 'quadratics', name: 'Quadratic Equations', icon: '𝑥²' },
                    { id: 'rational', name: 'Rational Expressions', icon: '½' },
                    { id: 'radicals', name: 'Radical Expressions', icon: '√' },
                    { id: 'graphing', name: 'Graphing Functions', icon: '📈' },
                    { id: 'sequences', name: 'Sequences & Patterns', icon: '⋯' }
                ]
            },
            10: {
                title: "Geometry",
                description: "Proofs, triangles, circles, trigonometry",
                topics: [
                    { id: 'points-lines', name: 'Points, Lines, Planes', icon: '📐' },
                    { id: 'proofs', name: 'Proofs & Reasoning', icon: '∴' },
                    { id: 'triangles', name: 'Triangles', icon: '🔺' },
                    { id: 'quadrilaterals', name: 'Quadrilaterals & Polygons', icon: '⬢' },
                    { id: 'circles', name: 'Circles', icon: '⭕' },
                    { id: 'coordinate', name: 'Coordinate Geometry', icon: '📈' },
                    { id: 'area-volume', name: 'Surface Area & Volume', icon: '🧊' },
                    { id: 'transformations', name: 'Transformations', icon: '🔄' },
                    { id: 'trigonometry', name: 'Trigonometry Basics', icon: 'θ' }
                ]
            },
            11: {
                title: "Algebra II",
                description: "Polynomials, complex numbers, logarithms",
                topics: [
                    { id: 'complex', name: 'Complex Numbers', icon: 'ℂ' },
                    { id: 'quadratics', name: 'Quadratic Functions', icon: '𝑥²' },
                    { id: 'polynomials', name: 'Polynomial Functions', icon: '𝑃' },
                    { id: 'exponential', name: 'Exponential & Logarithmic', icon: 'log' },
                    { id: 'rational', name: 'Rational Functions', icon: '½' },
                    { id: 'radical', name: 'Radical Functions', icon: '√' },
                    { id: 'systems', name: 'Systems & Inequalities', icon: '⚖️' },
                    { id: 'matrices', name: 'Matrices', icon: '[]' },
                    { id: 'sequences', name: 'Sequences & Series', icon: '⋯' },
                    { id: 'probability', name: 'Probability & Statistics', icon: '🎲' },
                    { id: 'conics', name: 'Conic Sections', icon: '○' }
                ]
            },
            12: {
                title: "Pre-Calculus / Calculus Prep",
                description: "Limits, derivatives, integrals",
                topics: [
                    { id: 'functions', name: 'Advanced Functions', icon: '𝑓' },
                    { id: 'trigonometry', name: 'Trigonometric Identities', icon: 'θ' },
                    { id: 'graphing', name: 'Graphing Trig Functions', icon: '📈' },
                    { id: 'limits', name: 'Limits & Continuity', icon: 'lim' },
                    { id: 'derivatives', name: 'Derivatives', icon: '𝑑' },
                    { id: 'integrals', name: 'Integrals', icon: '∫' },
                    { id: 'sequences', name: 'Sequences & Series', icon: '⋯' },
                    { id: 'vectors', name: 'Vectors', icon: '➡️' }
                ]
            }
        };
        return curriculum[grade] || curriculum[1];
    },

    // MAIN PROBLEM GENERATOR
    generateProblem(grade, topic) {
        const problemMap = {
            // ========== GRADE 1 ==========
            1: {
                'counting': () => this.generateGrade1Counting(),
                'place-value': () => this.generateGrade1PlaceValue(),
                'addition': () => this.generateGrade1Addition(),
                'subtraction': () => this.generateGrade1Subtraction(),
                'fact-families': () => this.generateGrade1FactFamilies(),
                'comparing': () => this.generateGrade1Comparing(),
                'time': () => this.generateGrade1Time(),
                'money': () => this.generateGrade1Money(),
                'geometry': () => this.generateGrade1Geometry(),
                'measurement': () => this.generateGrade1Measurement(),
                'graphs': () => this.generateGrade1Graphs()
            },
            // ========== GRADE 2 ==========
            2: {
                'place-value': () => this.generateGrade2PlaceValue(),
                'addition': () => this.generateGrade2Addition(),
                'subtraction': () => this.generateGrade2Subtraction(),
                'odd-even': () => this.generateGrade2OddEven(),
                'multiplication': () => this.generateGrade2Multiplication(),
                'division': () => this.generateGrade2Division(),
                'fractions': () => this.generateGrade2Fractions(),
                'measurement': () => this.generateGrade2Measurement(),
                'time': () => this.generateGrade2Time(),
                'money': () => this.generateGrade2Money(),
                'geometry': () => this.generateGrade2Geometry(),
                'graphs': () => this.generateGrade2Graphs()
            },
            // ========== GRADE 3 ==========
            3: {
                'place-value': () => this.generateGrade3PlaceValue(),
                'multiplication': () => this.generateGrade3Multiplication(),
                'division': () => this.generateGrade3Division(),
                'word-problems': () => this.generateGrade3WordProblems(),
                'fractions': () => this.generateGrade3Fractions(),
                'time': () => this.generateGrade3Time(),
                'area-perimeter': () => this.generateGrade3AreaPerimeter(),
                'geometry': () => this.generateGrade3Geometry(),
                'graphs': () => this.generateGrade3Graphs()
            },
            // ========== GRADE 4 ==========
            4: {
                'place-value': () => this.generateGrade4PlaceValue(),
                'multiplication': () => this.generateGrade4Multiplication(),
                'division': () => this.generateGrade4Division(),
                'factors': () => this.generateGrade4Factors(),
                'fractions': () => this.generateGrade4Fractions(),
                'decimals': () => this.generateGrade4Decimals(),
                'measurement': () => this.generateGrade4Measurement(),
                'angles': () => this.generateGrade4Angles(),
                'geometry': () => this.generateGrade4Geometry(),
                'graphs': () => this.generateGrade4Graphs()
            },
            // ========== GRADE 5 ==========
            5: {
                'place-value': () => this.generateGrade5PlaceValue(),
                'operations': () => this.generateGrade5Operations(),
                'fractions': () => this.generateGrade5Fractions(),
                'pemdas': () => this.generateGrade5PEMDAS(),
                'volume': () => this.generateGrade5Volume(),
                'coordinate': () => this.generateGrade5Coordinate(),
                'geometry': () => this.generateGrade5Geometry(),
                'data': () => this.generateGrade5Data()
            },
            // ========== GRADE 6 ==========
            6: {
                'integers': () => this.generateGrade6Integers(),
                'factors': () => this.generateGrade6Factors(),
                'fractions': () => this.generateGrade6Fractions(),
                'ratios': () => this.generateGrade6Ratios(),
                'expressions': () => this.generateGrade6Expressions(),
                'geometry': () => this.generateGrade6Geometry(),
                'statistics': () => this.generateGrade6Statistics(),
                'coordinate': () => this.generateGrade6Coordinate()
            },
            // ========== GRADE 7 ==========
            7: {
                'rational': () => this.generateGrade7Rational(),
                'proportions': () => this.generateGrade7Proportions(),
                'equations': () => this.generateGrade7Equations(),
                'geometry': () => this.generateGrade7Geometry(),
                'area-volume': () => this.generateGrade7AreaVolume(),
                'probability': () => this.generateGrade7Probability(),
                'data': () => this.generateGrade7Data()
            },
            // ========== GRADE 8 ==========
            8: {
                'real-numbers': () => this.generateGrade8RealNumbers(),
                'scientific': () => this.generateGrade8Scientific(),
                'linear-equations': () => this.generateGrade8LinearEquations(),
                'functions': () => this.generateGrade8Functions(),
                'transformations': () => this.generateGrade8Transformations(),
                'congruence': () => this.generateGrade8Congruence(),
                'pythagorean': () => this.generateGrade8Pythagorean(),
                'volume': () => this.generateGrade8Volume(),
                'graphs': () => this.generateGrade8Graphs()
            },
            // ========== HIGH SCHOOL ==========
            9: this.generateAlgebra1Problems(),
            10: this.generateGeometryProblems(),
            11: this.generateAlgebra2Problems(),
            12: this.generatePreCalculusProblems()
        };

        const generator = problemMap[grade]?.[topic] || (() => this.generateDefaultProblem(grade, topic));
        return generator();
    },

    // ========== GRADE 1 GENERATORS ==========
    generateGrade1Counting() {
        const start = Math.floor(Math.random() * 100) + 1;
        const gap = Math.floor(Math.random() * 3) + 1;
        const sequence = [start, start + gap, start + 2*gap, '?', start + 4*gap];
        return {
            text: `Complete the pattern: ${sequence.join(', ')}`,
            answer: start + 3*gap,
            type: 'counting',
            hint: `Count by ${gap}s`,
            explanation: `The pattern counts by ${gap}. Missing number: ${start + 3*gap}`
        };
    },

    generateGrade1PlaceValue() {
        const number = Math.floor(Math.random() * 90) + 10;
        const tens = Math.floor(number / 10);
        const ones = number % 10;
        return {
            text: `How many tens and ones in ${number}?`,
            answer: `${tens} tens and ${ones} ones`,
            type: 'place-value',
            hint: 'Look at each digit',
            explanation: `${number} = ${tens} tens + ${ones} ones`
        };
    },

    generateGrade1Addition() {
        const a = Math.floor(Math.random() * 10) + 5;
        const b = Math.floor(Math.random() * 10) + 5;
        const items = ['apples', 'toys', 'candies', 'books'];
        const item = items[Math.floor(Math.random() * items.length)];
        return {
            text: `You have ${a} ${item} and get ${b} more. How many total?`,
            answer: a + b,
            type: 'addition',
            hint: `Add ${a} + ${b}`,
            explanation: `${a} + ${b} = ${a + b}`
        };
    },

    generateGrade1Subtraction() {
        const total = Math.floor(Math.random() * 10) + 10;
        const take = Math.floor(Math.random() * 8) + 3;
        const items = ['cookies', 'balloons', 'marbles', 'stickers'];
        const item = items[Math.floor(Math.random() * items.length)];
        return {
            text: `There are ${total} ${item}. ${take} are eaten. How many left?`,
            answer: total - take,
            type: 'subtraction',
            hint: `Subtract ${take} from ${total}`,
            explanation: `${total} - ${take} = ${total - take}`
        };
    },

    generateGrade1FactFamilies() {
        const a = Math.floor(Math.random() * 8) + 3;
        const b = Math.floor(Math.random() * 8) + 3;
        const sum = a + b;
        return {
            text: `Complete the fact family: ${a} + ${b} = ${sum}, ${b} + ${a} = ${sum}, ${sum} - ${a} = ?`,
            answer: b,
            type: 'fact-families',
            hint: 'Think about related facts',
            explanation: `If ${a} + ${b} = ${sum}, then ${sum} - ${a} = ${b}`
        };
    },

    generateGrade1Comparing() {
        const a = Math.floor(Math.random() * 50) + 10;
        const b = Math.floor(Math.random() * 50) + 10;
        const comparison = a > b ? 'greater than' : a < b ? 'less than' : 'equal to';
        return {
            text: `Is ${a} greater than, less than, or equal to ${b}?`,
            answer: comparison,
            type: 'comparing',
            hint: 'Compare the numbers',
            explanation: `${a} is ${comparison} ${b}`
        };
    },

    generateGrade1Time() {
        const hour = Math.floor(Math.random() * 12) + 1;
        const minutes = Math.random() > 0.5 ? '00' : '30';
        return {
            text: `What time is shown? (${hour}:${minutes})`,
            answer: minutes === '00' ? `${hour} o'clock` : `half past ${hour}`,
            type: 'time',
            hint: 'Look at clock hands',
            explanation: `${hour}:${minutes} is ${minutes === '00' ? `${hour} o'clock` : `half past ${hour}`}`
        };
    },

    generateGrade1Money() {
        const coins = ['penny', 'nickel', 'dime', 'quarter'];
        const coin1 = coins[Math.floor(Math.random() * coins.length)];
        const coin2 = coins[Math.floor(Math.random() * coins.length)];
        const values = { penny: 1, nickel: 5, dime: 10, quarter: 25 };
        return {
            text: `You have 1 ${coin1} and 1 ${coin2}. How many cents total?`,
            answer: values[coin1] + values[coin2],
            type: 'money',
            hint: 'Add coin values',
            explanation: `${coin1} = ${values[coin1]}¢, ${coin2} = ${values[coin2]}¢, total = ${values[coin1] + values[coin2]}¢`
        };
    },

    generateGrade1Geometry() {
        const shapes = [
            { name: 'triangle', sides: 3, emoji: '🔺' },
            { name: 'square', sides: 4, emoji: '⬜' },
            { name: 'rectangle', sides: 4, emoji: '📱' },
            { name: 'circle', sides: 0, emoji: '⭕' }
        ];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        return {
            text: `How many sides does a ${shape.name} ${shape.emoji} have?`,
            answer: shape.sides,
            type: 'geometry',
            hint: 'Count the sides',
            explanation: `A ${shape.name} has ${shape.sides} sides`
        };
    },

    // ========== GRADE 2 GENERATORS ==========
    generateGrade2PlaceValue() {
        const number = Math.floor(Math.random() * 900) + 100;
        const places = ['hundreds', 'tens', 'ones'];
        const place = places[Math.floor(Math.random() * places.length)];
        const digit = place === 'hundreds' ? Math.floor(number / 100) :
                     place === 'tens' ? Math.floor((number % 100) / 10) : number % 10;
        return {
            text: `In ${number}, what digit is in the ${place} place?`,
            answer: digit,
            type: 'place-value',
            hint: `Look at the ${place} place`,
            explanation: `The ${place} place is ${digit}`
        };
    },

    generateGrade2Addition() {
        const a = Math.floor(Math.random() * 400) + 100;
        const b = Math.floor(Math.random() * 400) + 100;
        return {
            text: `${a} + ${b} = ?`,
            answer: a + b,
            type: 'addition',
            hint: 'Add with regrouping',
            explanation: `${a} + ${b} = ${a + b}`
        };
    },

    generateGrade2Multiplication() {
        const tables = [2, 3, 4, 5];
        const a = tables[Math.floor(Math.random() * tables.length)];
        const b = Math.floor(Math.random() * 6) + 2;
        return {
            text: `${a} × ${b} = ?`,
            answer: a * b,
            type: 'multiplication',
            hint: `Think of ${a} groups of ${b}`,
            explanation: `${a} × ${b} = ${a * b}`
        };
    },

    generateGrade2Fractions() {
        const fractions = ['1/2', '1/3', '1/4', '2/4'];
        const fraction = fractions[Math.floor(Math.random() * fractions.length)];
        const shapes = ['pizza', 'cake', 'chocolate bar', 'sandwich'];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        return {
            text: `If you have ${fraction} of a ${shape}, how much is shaded?`,
            answer: fraction,
            type: 'fractions',
            hint: 'Look at the fraction',
            explanation: `${fraction} of the ${shape} is shaded`
        };
    },

    // ========== GRADE 3-12 GENERATORS (Placeholders - can expand) ==========
    generateGrade3Multiplication() {
        const a = Math.floor(Math.random() * 8) + 5;
        const b = Math.floor(Math.random() * 8) + 5;
        return {
            text: `${a} × ${b} = ?`,
            answer: a * b,
            type: 'multiplication',
            hint: 'Use multiplication facts',
            explanation: `${a} × ${b} = ${a * b}`
        };
    },

    generateGrade4Decimals() {
        const a = (Math.floor(Math.random() * 90) + 10) / 10;
        const b = (Math.floor(Math.random() * 90) + 10) / 10;
        return {
            text: `${a.toFixed(1)} + ${b.toFixed(1)} = ?`,
            answer: (a + b).toFixed(1),
            type: 'decimals',
            hint: 'Add decimals carefully',
            explanation: `${a.toFixed(1)} + ${b.toFixed(1)} = ${(a + b).toFixed(1)}`
        };
    },

    generateGrade5PEMDAS() {
        const a = Math.floor(Math.random() * 5) + 2;
        const b = Math.floor(Math.random() * 5) + 2;
        const c = Math.floor(Math.random() * 5) + 2;
        return {
            text: `(${a} + ${b}) × ${c} = ?`,
            answer: (a + b) * c,
            type: 'pemdas',
            hint: 'Do parentheses first',
            explanation: `(${a} + ${b}) = ${a + b}, then × ${c} = ${(a + b) * c}`
        };
    },

    generateGrade6Integers() {
        const a = Math.floor(Math.random() * 20) - 10;
        const b = Math.floor(Math.random() * 20) - 10;
        return {
            text: `${a} + ${b} = ?`,
            answer: a + b,
            type: 'integers',
            hint: 'Watch positive/negative signs',
            explanation: `${a} + ${b} = ${a + b}`
        };
    },

    generateGrade7Equations() {
        const a = Math.floor(Math.random() * 5) + 2;
        const b = Math.floor(Math.random() * 10) + 5;
        const c = Math.floor(Math.random() * 20) + 10;
        return {
            text: `Solve: ${a}x + ${b} = ${c}`,
            answer: (c - b) / a,
            type: 'equations',
            hint: 'Isolate x',
            explanation: `${a}x = ${c - b}, so x = ${(c - b) / a}`
        };
    },

    generateGrade8Pythagorean() {
        const a = Math.floor(Math.random() * 5) + 3;
        const b = Math.floor(Math.random() * 5) + 3;
        const c = Math.sqrt(a*a + b*b).toFixed(2);
        return {
            text: `Find the hypotenuse: a=${a}, b=${b}, c=?`,
            answer: c,
            type: 'pythagorean',
            hint: 'Use a² + b² = c²',
            explanation: `${a}² + ${b}² = ${a*a + b*b}, so c = √${a*a + b*b} = ${c}`
        };
    },

    // High School placeholders
    generateAlgebra1Problems() {
        return {
            'linear-equations': () => this.generateAlgebra1LinearEquations(),
            'quadratics': () => this.generateAlgebra1Quadratics()
        };
    },

    generateAlgebra1LinearEquations() {
        const m = Math.floor(Math.random() * 5) + 1;
        const b = Math.floor(Math.random() * 10) + 1;
        const x = Math.floor(Math.random() * 5) + 1;
        return {
            text: `If y = ${m}x + ${b}, find y when x = ${x}`,
            answer: m * x + b,
            type: 'algebra',
            hint: 'Substitute x into the equation',
            explanation: `y = ${m}(${x}) + ${b} = ${m*x + b}`
        };
    },

    generateGeometryProblems() {
        return {
            'triangles': () => this.generateGeometryTriangles(),
            'circles': () => this.generateGeometryCircles()
        };
    },

    generateGeometryTriangles() {
        const base = Math.floor(Math.random() * 10) + 5;
        const height = Math.floor(Math.random() * 10) + 5;
        return {
            text: `Find area of triangle: base=${base}, height=${height}`,
            answer: (base * height / 2).toFixed(1),
            type: 'geometry',
            hint: 'Area = ½ × base × height',
            explanation: `½ × ${base} × ${height} = ${(base * height / 2).toFixed(1)}`
        };
    },

    generateAlgebra2Problems() {
        return {
            'polynomials': () => this.generateAlgebra2Polynomials()
        };
    },

    generateAlgebra2Polynomials() {
        const a = Math.floor(Math.random() * 3) + 1;
        const b = Math.floor(Math.random() * 5) + 1;
        return {
            text: `Simplify: (${a}x + ${b})²`,
            answer: `${a*a}x² + ${2*a*b}x + ${b*b}`,
            type: 'algebra',
            hint: 'Use (a+b)² = a² + 2ab + b²',
            explanation: `(${a}x)² + 2(${a}x)(${b}) + (${b})² = ${a*a}x² + ${2*a*b}x + ${b*b}`
        };
    },

    generatePreCalculusProblems() {
        return {
            'limits': () => this.generatePreCalcLimits()
        };
    },

    generatePreCalcLimits() {
        return {
            text: 'lim(x→2) of x² = ?',
            answer: '4',
            type: 'calculus',
            hint: 'Substitute x=2',
            explanation: 'When x=2, x² = 4'
        };
    },

    // Default problem generator
    generateDefaultProblem(grade, topic) {
        return {
            text: `Grade ${grade} ${topic} - Practice problem`,
            answer: 'Practice answer',
            type: topic,
            hint: 'Think carefully',
            explanation: 'Practice makes perfect!'
        };
    },

    // Universal answer checker
    checkAnswer(problem, userAnswer) {
        // Handle text answers
        if (typeof problem.answer === 'string') {
            const userStr = userAnswer.toString().toLowerCase().replace(/\s+/g, '');
            const correctStr = problem.answer.toString().toLowerCase().replace(/\s+/g, '');
            return userStr === correctStr;
        }
        
        // Handle numeric answers
        const userNum = parseFloat(userAnswer);
        const correctNum = parseFloat(problem.answer);
        
        return !isNaN(userNum) && Math.abs(userNum - correctNum) < 0.001;
    },

    // Get topic description
    getTopicDescription(grade, topic) {
        const curriculum = this.getCurriculum(grade);
        const topicObj = curriculum.topics.find(t => t.id === topic);
        return topicObj ? topicObj.name : `${grade > 8 ? 'High School' : 'Grade '+grade} ${topic}`;
    }
};

// Make it available globally
window.MathEngine = MathEngine;
