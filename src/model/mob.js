import * as mobilenet from '@tensorflow-models/mobilenet';

let net;

export default async function mob() {

  net = await mobilenet.load();
  console.log('Successfully loaded model');

  async function predict(){
      
    const img = new Image(100, 100);
    img.src = document.getElementById('defimg');
    const result = await net.classify(img);
    document.getElementById('defconsole').innerText = `
          prediction: ${result[0]['className']}\n
          probability: ${result[0]['probability']}
        `;
    
    console.log(result);

  }

  document.getElementById('def').addEventListener('click', () => predict());

  
  
}

