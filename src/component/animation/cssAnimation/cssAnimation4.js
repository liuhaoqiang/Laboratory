import React, { PureComponent } from 'react'
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';

class CssAnimation4 extends PureComponent{
  state = {
    show: true,
    items: [
      <li key="0"></li>,
      <li key="1"></li>,
      <li key="2"></li>
    ],
  };
  onClick = () => {
    this.setState({
      show: !this.state.show,
    });
  }
  onAdd = () => {
    let items = this.state.items;
    items.push(<li key={Date.now()}></li>);
    this.setState({
      show: true,
      items,
    });
  }
  onRemove = () => {
    let items = this.state.items;
    items.splice(items.length - 1, 1);
    this.setState({
      show: true,
      items,
    });
  }
  render() {
    return (
      <div className="queue-demo">
        <p className="buttons">
          <Button type="primary" onClick={this.onClick}>Switch</Button>
          <Button onClick={this.onAdd} style={{ marginLeft: 10 }}>Add</Button>
          <Button onClick={this.onRemove} style={{ marginLeft: 10 }}>Remove</Button>
        </p>
        <div className="demo-content">
          <div className="demo-thead" key="a">
            <ul>
              <li />
              <li />
              <li />
            </ul>
          </div>
          <div className="demo-tbody" key="b">
            <QueueAnim component="ul" type={['right', 'left']} leaveReverse>
              {this.state.show ? this.state.items : null}
            </QueueAnim>
          </div>
        </div>
      </div>
    );
  }
};

export default  CssAnimation4;
