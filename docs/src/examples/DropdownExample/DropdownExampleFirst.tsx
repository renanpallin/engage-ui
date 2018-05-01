import * as React from 'react';
import { Dropdown, DropdownItemProps } from '../../../../src/components/';
import * as styles from '../../styles/components-page.scss';

export interface IProps{
}

export interface IState {
  activated: boolean;
}

class DropdownExampleFirst extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      activated: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  
  private toggle() {
    this.setState({
      activated: !this.state.activated
    });
  }

  render() {
    const items : DropdownItemProps[] = [
      {
        children: "Item 1",
        header: false,
        divider: false,
        disabled: true
      }, {
        children: "Item 2",
        divider: true,
        header: false,
        disabled: true
      }, {
        children: "Item 3",
        disabled: false,
        header: false,
        divider: false
      }, {
        children: "Item 4",
        header: true,
        divider: false,
        disabled: false
      }
    ]

    return (
      <div className={styles.example}>
         <Dropdown
          active={this.state.activated}
          DropdownItems={items}
          toggle={this.toggle}
        >
          Actions
        </Dropdown>
      </div>
    );
  }
}

export default DropdownExampleFirst;
