const somaMultiplica = (num1, num2, num3) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      reject(Error('Informe apenas números'));
    };

    const resultado = (num1 + num2) * num3;

    if (resultado < 50) reject(Error('Valor muito baixo'));

    resolve(resultado);
  });

  return promise;
}

const aleatorio = Math.floor(Math.random() * 100);

async function chamaFuncao(){
  try {
    const result = await somaMultiplica(aleatorio, aleatorio, aleatorio);
    console.log(`sucesso: ${result}`);
  } catch (err){
    console.log(`erro: ${err.message}`);
  } 
}

chamaFuncao();