import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

export default class model {
  constructor() {
    this.state = {
      model: this.buildModel()
    }
  }

  // func build model
  async buildModel () {
    //await tf.ready();
    // Model Initialisation
    /*
    const model = tf.sequential();
    model.add(tf.layers.dense({inputShape: [30], units: 300, activation: 'relu'}));
    model.add(tf.layers.dense({units: 1, activation: 'sigmoid'}));
    */
    const model = tf.sequential();
    model.add(tf.layers.dense({inputShape: [784], units: 32, activation: 'relu'}));
    model.add(tf.layers.dense({units: 10, activation: 'softmax'}));

    /*
    model.compile({
      optimizer: 'sgd',
      loss: 'binary_crossentropy',
      metrics: ['accuracy']
    });
    */
    console.log(model.summary())
    return model;
  }
  /*

  // func clone model
  cloneModel() {
    var modelClone = this.model.clone();
    modelClone.compile({
      optimizer: 'sgd',
      loss: 'binary_crossentropy',
      metrics: ['accuracy']
    });
    return modelClone;
  }

  // evaluate
  fit(x, y) {
    this.model.fit(x, y, {
      epochs: 1,
      batchSize: 30,
      callbacks: {onBatchEnd}
    }).then(info => {
      console.log('Final accuracy', info.history.acc);
    });
  }

  // get model
  getModel() {
    return this.model;
  }
  // set model
  setModel(model) {
    this.model = model;
  }
  summary() {
    return this.model.summary();
  }
  */
}