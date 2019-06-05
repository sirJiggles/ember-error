import { tracked } from '@glimmer/tracking';

export default class SomeModel {
  // accessing this is what causes the error
  @tracked
  someProp = 'This is on the model :D';
}
