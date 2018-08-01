import React from 'react';
import { shallow } from 'enzyme';
import { Signup } from '../../container/Signup';

let props;
const setup = () => {
  props = {
    history: {
      push: jest.fn()
    },
    userSignupRequest: jest.fn(() => Promise.resolve()),
  };
  return shallow(<Signup {...props} />);
};

describe('<Signup test />', () => {
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
  it('should return  items if not', () => {
    const wrapper = setup();
    expect(wrapper.find('SignupForm').length).toBe(1);
  });

  it('should set state', () => {
    const wrapper = setup();
    const action = wrapper.instance();

    const event = {
      target: {
        name: 'name',
        value: 'Isaiah'
      }
    };
    action.onChange(event);
    expect(action.state.name).toEqual('Isaiah');
  });

  it('should submit', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onSubmit = jest.spyOn(action, 'onSubmit');
    const event = {
      target: {
        firstName: 'rotimi',
        lastName: 'yemi',
        email: 'isaiah@gmail.com',
        password: 'password'
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