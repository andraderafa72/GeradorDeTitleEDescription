function randomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
}

const SEOContent = {
  Portal: (palavraChave) => {
    const titleOptions = [
      `Tudo sobre ${palavraChave}`,
      `Novidades sobre ${palavraChave}`,
    ];
    const descriptionOptions = [
      `Quer saber tudo sobre ${palavraChave}? Clique aqui e tenha todas as informações em primeira mão!`,
      `Todas a novidades sobre ${palavraChave} em primeira mão. Acompanhe o site e assine a newsletter!`,
    ];

    return {
      title: titleOptions[randomInt(0, titleOptions.length)],
      description:
        descriptionOptions[randomInt(0, descriptionOptions.length)],
    };
  },

  Outros: (palavraChave) => {
    const titleOptions = [
      `Quer saber mais sobre ${palavraChave}?`,
      `Conheça ${palavraChave}`,
      `Você quer ${palavraChave}?`,
    ];
    const descriptionOptions = [
      `Quer saber mais sobre ${palavraChave}? Clique aqui e encontre todas as informações que você precisa!`,
      `Conheça mais sobre ${palavraChave} Acesse nosso site e encontre todas as informações que você precisa!`,
      `Você quer mais sobre ${palavraChave}? Acesse nosso site e encontre todas as informações que deseja!`,
    ];

    return {
      title: titleOptions[randomInt(0, titleOptions.length)],
      description:
        descriptionOptions[randomInt(0, descriptionOptions.length)],
    };
  },
  Loja: (palavraChave) => {
    const titleOptions = [
      `Comprar ${palavraChave}`,
      `Compre ${palavraChave}`,
      `Procurando por ${palavraChave}`,
      `Encontre ${palavraChave}`,
    ];
    const descriptionOptions = [
      `Comprar ${palavraChave} de maneira rápida e segura é aqui. Acesse e confira nossa linha completa com o melhor preço!`,
      `Compre ${palavraChave} com agilidade e segurança aqui. Acesse e confira nossa linha completa com o melhor preço!`,
      `Procurando por ${palavraChave}? Compre com agilidade e segurança. Acesse e confira nossa linha completa com o melhor preço!`,
      `Encontre ${palavraChave} com preços incríveis, entrega rápida e garantida. Aproveite e garanta descontos, confira!`,
    ];

    return {
      title: titleOptions[randomInt(0, titleOptions.length)],
      description:
        descriptionOptions[randomInt(0, descriptionOptions.length)],
    };
  },
  Blog: (palavraChave) => {
    const titleOptions = [
      `Leia mais sobre ${palavraChave}`,
      `Conheça ${palavraChave}`,
      `Dicas sobre ${palavraChave}`,
    ];
    const descriptionOptions = [
      `O conteúdo mais completo você encontra aqui! Clique e leia mais sobre ${palavraChave}.`,
      `Conheça ${palavraChave} e veja como seu dia-a-dia será facilitado. Nós temos as melhores soluções para seu negócio. Confira!`,
      `Preparamos algumas Dicas de ${palavraChave} para você. Acesse e confira. Não se esqueça de compartilhar!`,
    ];

    return {
      title: titleOptions[randomInt(0, titleOptions.length)],
      description:
        descriptionOptions[randomInt(0, descriptionOptions.length)],
    };
  },
  Institucional: (palavraChave) => {
    const titleOptions = [
      `Conheça ${palavraChave}`,
      `Trabalhamos com ${palavraChave}`,
    ];
    const descriptionOptions = [
      `Conheça ${palavraChave}. Comprove nossa qualidade. Acesse e confira nosso trabalho e cases de sucesso!`,
      `Trabalhamos com ${palavraChave} e toda a qualidade que você merece. Conheça nosso trabalho e entre em contato!`,
    ];

    return {
      title: titleOptions[randomInt(0, titleOptions.length)],
      description:
        descriptionOptions[randomInt(0, descriptionOptions.length)],
    };
  },
};

function gerarTitleEDescription(){
  const palavraChave = document.querySelector(".palavra-chave").value;
  const tipo = document.querySelector('#select-tipo').value;

  const titleTextArea = document.querySelector('#title-textarea')
  const descriptionTextArea = document.querySelector('#description-textarea')

  console.log(palavraChave, tipo);

  const { title, description } = SEOContent[tipo](palavraChave);

  console.log(title);
  titleTextArea.value = title
  descriptionTextArea.value = description
}

function copyText(id){
  const textarea = document.querySelector("#" + id).value;

  const htmlCode = id === 'title-textarea' ? `` : `<meta name="description" content="${textarea}">`

  navigator.clipboard.writeText(htmlCode).then(() => {
    alert("Texto copiado")
  })
}