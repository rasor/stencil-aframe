import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() position: string;
  @Prop() last: string;

  render() {
    return (
      <a-box position={this.position} rotation="0 45 0" color="#4CC3D9">Pos {this.position}</a-box>
    );
  }
}

//<div>
//Hello, World! I'm {this.first} {this.last}
//</div>
