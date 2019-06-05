import Component from '@glimmer/component';
import SomeModel from '../../models/sample';
import { tracked } from '@glimmer/tracking';

export default class SampleComponent extends Component {
  @tracked
  model = new SomeModel();

  get thing() {
    // this is the line that throws the error
    return this.model.someProp;
  }
}
