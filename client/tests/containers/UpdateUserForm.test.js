import React from 'react';
import { shallow } from 'enzyme';
import { UpdateUserForm } from '../../components/UpdateUserForm';
import { oneUserDetail } from '../mock/userData';

let props;
const setup = () => {
  props = {
    history: {
      push: jest.fn()
    },
    updateUserDetails: jest.fn(() => Promise.resolve()),
    user: oneUserDetail
  };
  return shallow(<UpdateUserForm {...props} />);
};

describe('<UpdateUserForm test />', () => {
  beforeEach(() => {
    global.alertify = {
      set: () => {},
      success: () => {},
      error: () => {}
    };
    global.FileReader = () => ({
      readAsDataURL: () => {},
      onload: () => {},
      result: () => {}
    });
  });
  it('should set state', () => {
    const wrapper = setup();
    const action = wrapper.instance();

    const event = {
      target: {
        name: 'firstName',
        value: 'Timi'
      }
    };
    action.onChange(event);
    expect(action.state.firstName).toEqual('Timi');
  });

  it('should return  items if not', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(3);
  });

  it('should submit', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onSubmit = jest.spyOn(action, 'onSubmit');
    const event = {
      target: {
        firstName: 'lorem',
        lastName: 'yemi',
        email: 'eam@e.com',
        password: 'pass',
        Image: 'link'
      },
      preventDefault: jest.fn()
    };
    action.onSubmit(event);

    expect(onSubmit).toBeCalled();
  });
});

describe('onFileChange()', () => {
  it('should call onFileChange()', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'image',
        files: [{
          name: 'sdkhbjn.jpg',
          lastModified: 151435461554600,
          size: 132454,
          type: 'image/jpeg',
          webkitRelativePath: ''

        }]
      }
    };
    action.onFileChange(event);
    let newImage = new Image();
    newImage = {
      src: FileReader.result
    };
    const file = event.target.files[0];
    action.setState({
      Image: file,
      imagePreview: newImage.src
    });
    expect(action.state.Image).toBe(file);
  });
});