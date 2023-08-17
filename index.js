import express from "express";

const app = express();

/* 1. FUP que peça um número e imprima a tabuada deste número

app.get("/api/", (req, res) => {
  const num = parseInt(req.query.num);
});
for (i = 0; i <= 10; i++) {
  res.json(`${num} x ${i} = ${i * num}`);
}

// 2. FUP que peça um número e imprima uma mensagem se esse número é positivo ou negativo

app.get("/api/fup2", (req, res) => {
  const num = parseInt(req.query.num);
  if (num >= 0) {
    console.log("Esse número é positivo");
  } else if (num < 0) {
    console.log("Esse número é negativo");
  } else {
  }
});

// 3. FUP que leia:

//• a percentagem do IPI a ser acrescido no valor das peças
//• o código da peça 1, valor unitario da peça 1, quantidade de peças 1
//• o código da peça 2, valor unitario da peça 2, quantidade de peças 2
//O algoritmo deve calcular o valor total a ser pago e apresentar o resultado.

//Fórmula : ValorTotal = (valor1 * quant1 + valor2 * quant2) * (IPI/100 + 1)

app.get("/api/fup3", (req, res) => {
  const ipi = parseFloat(req.query.ipi);
  const cod1 = parseInt(req.query.cod1)
  const cod2 = parseInt(req.query.cod2)
  const valor1 = parseFloat(req.query.valor1);
  const valor2 = parseFloat(req.query.valor2);
  const quant1 = parseInt(req.query.quant1);
  const quant2 = parseInt(req.query.quant2);

  valorTotal = (valor1*quant1 + valor2*quant2)*(IPI/100 + 1);

  res.json(`"O valor total a ser pago com a porcentagem do IPI acrescido ao valor das peças é de:" ${valorTotal}`);
});

// 4. FUP que imprima a tabuada de um numero de 0 a 10;

app.get("/api/fup4", (req, res) => {
  const num = parseInt(req.query.num);
});
for (i = 0; i <= 10; i++) {
  res.json(`\n${num} x ${i} = ${i * num}`);
}

// 5. FUP que solicite quantidade de pessoas, depois solicite a altura de cada uma e calcule a media da altura das pessoas;

app.get("/api/fup5", (req, res) => {
  const pessoas = parseInt(req.query.pessoas);
 
  for(i = 1; i <= pessoas; i++) {
    const altura = parseInt(req.query.altura);
    totalAltura = totalAltura + altura;
  }

  console.log(`"A média de altura é de:" ${totalAltura / pessoas} "cm"`);
})

*/
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
