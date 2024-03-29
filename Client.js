import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

export class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTfReady: false,
    };
  }
  async componentDidMount() {
    // Wait for tf to be ready.
    await tf.ready();
    // Signal to the app that tensorflow.js can now be used.
    this.setState({
      isTfReady: true,
    });
  }


  render() {
    return (
      <>
        <Text>Awaiting Response from server...</Text>
      </>
    );
  }
}