const questions = [
    "O que eu sei hoje, que não sabia antes?",
    "O que me aborreceu e o que posso fazer para melhorar?",
    "O que me deixou feliz?",
    "Quem ajudei hoje?"
]

const answers = []

function asks(index = 0) {
    process.stdout.write(`\n ${questions[index]} R: ` )
}

asks()

process.stdin.on("data", data =>{
    answers.push(data)
    if (answers.length < questions.length) {
        asks(answers.length)
    }else{
        process.exit()
    }
    
})

process.on("exit", () =>{
    process.stdout.write(`\n\n ---------------RESUMO---------------\n\n`)
    for (let index = 0; index < questions.length; index++) {
        process.stdout.write(`\n ${questions[index]} R: ${answers[index]}` )
    }
})