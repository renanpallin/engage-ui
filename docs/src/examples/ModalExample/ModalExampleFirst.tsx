import * as React from 'react';
import { Modal, Button } from '../../../../src/components/';
import * as styles from '../../styles/components-page.scss';

const childBody =
<span>
  <p>
    Test Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
    ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum.Test Lorem ipsum dolor sit amet, consectetur elit,
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
    ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum.
  </p>
</span>;

const ModalExample = () => (
  <div className={styles.example}>
    <Modal
      activator={<Button>Click Here-1</Button>}
      header="This is modal header-1"
      close
      closeOnBackgroud
      closeOnEsc
      modalOverflow
      backdropEnabled
      footer={<Button> OK </Button>}
      id="111"
      size="Large"
    >
      header="This is modal header"<br/>
      close<br/>
      closeOnBackgroud<br/>
      closeOnEsc<br/>
      modalOverflow<br/>
      backdropEnabled<br/>
      id="111"<br/>
      size="Large"<br/>
      {childBody}
    </Modal>
  </div>
);

export default ModalExample;
