import WLTextField from './WLTextField';

export default {
  title: 'Example/WLTextField',
};

function createTextField() {
    let element = document.createElement('wl-textfield');
    return element;
}

export const Something = () => {
    let element = createTextField();

    return (element);
};
