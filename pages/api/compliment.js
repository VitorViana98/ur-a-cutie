export default async (req, res) => {
    
    const compliments = [
        "Você é linda! 💕",
        "Você é uma fofa 😘",
        "Você é incrível 😎",
        "Você é uma gostosa 🍑",
        "Você é linda 😍",
        "Seu sorriso é perfeito 👌",
        "Você merece o mundo 🌎",
        "Você ilumina meu mundo 🔦",
        "Você é muito gostosa 😏",
        "Você está maravilhosa hoje 😊",
        "Você é meu tudo 🤩",
        "Você é uma beleza 🥺",
        "Você é dramática demais 😜",
        "Você é minha rainha 👸",
        "Você é minha pessoa favorita 🍩",
        "Você é meu maior amor 😍",
        "Você tem um ótimo senso de humor 🤪",
        "Você é como um unicórnio, mas real! 🦄",
        "Em uma escala de 1 a 10, você é um 999999999999999999999999999999999999999999999999",
        "Você é um anjo 😇",
        "Você é uma esposa incrível 👧🏻",
        "Você é engraçada demais 😂",
        "Você tem ótimo gosto para comida 🍱",
        "Você é minha maior inspiração ❇️",
        "Você é minha casca de bala 🧳",
        "Você é minha Dora Aventureira 🌍",
        "Tenho tanto orgulho de você 🌟",
        "Você faz as melhores comidinhas 🍪",
        "Amo dormir agarradinho com você 🛏️",
    ]

    const chosenCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    res.statusCode = 200
    res.json({ compliment: chosenCompliment })
  }
  
