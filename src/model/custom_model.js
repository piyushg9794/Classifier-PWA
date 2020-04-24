import * as mobilenet from '@tensorflow-models/mobilenet';
import * as knnClassifier from '@tensorflow-models/knn-classifier';

let net;
const classifier = knnClassifier.create();

export default async function custom_model() {

    net = await mobilenet.load();
    console.log('Successfully loaded model');
  
    const addExample = async (classId, Id) => {
  
      const img = new Image(100, 100);
      img.src = document.getElementById(Id);
      console.log('img loaded');
      const activation = net.infer(img, true);
      classifier.addExample(activation, classId);
      console.log('exmp added');

  
    };

    async function predict(Id){
      if (classifier.getNumClasses() > 0) {
        
        const img = new Image(100, 100);
        img.src = document.getElementById(Id);
        const activation = net.infer(img, 'conv_preds');
        const result = await classifier.predictClass(activation);
        const classes = ['A', 'B', 'C'];
        
        document.getElementById('custom_console').innerText = `
          prediction: ${classes[result.label]}\n
          probability: ${result.confidences[result.label]}
        `;

        console.log(result);
  
      }
    }
  
    document.getElementById('a').addEventListener('click', () => addExample(0, 'ima'));
    document.getElementById('b').addEventListener('click', () => addExample(1, 'imb'));
    document.getElementById('c').addEventListener('click', () => addExample(2, 'imc'));
    document.getElementById('pred').addEventListener('click', () => predict('impred'));



  }