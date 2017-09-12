// export default function () {
//     return ({ option: [
//         { option: 'Option 1', isCorrect: true },
//         { option: 'Option 2nd' },
//         { option: 'Option 3', isCorrect: true },
//         { option: 'Option 4' }
//     ]});
// }

export default function () {
    return [
        { index: 1, id: 1, difficulty: '1', ideal_bg: 2, question: 'Question', explanation: 'Explanation', question_audio: 'https://lgwarehouse.s3.amazonaws.com/media/resources/slide/5683/zeroes-after-decimals.mp3', 
        options: [
            { option: 'Option 1', isCorrect: true },
            { option: 'Option 2' },
            { option: 'Option 3' },
            { option: 'Option 4' }
        ]},
        { index: 2, id: 2, difficulty: '3', ideal_bg: 12, question: 'Question', explanation: 'Explanation', options: [
            { option: 'Option 1' },
            { option: 'Option 2' },
            { option: 'Option 3' },
            { option: 'Option 4' }
        ]}
    ];
}