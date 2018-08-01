import React from 'react';
import { shallow } from 'enzyme';
import { AddBusiness } from '../../container/AddBusiness';
// import AddBusinessForm from '../../components/AddBusinessForm';

let props;
const setup = () => {
  props = {
    context: {
      router: {
        history: {
          push: jest.fn()
        },
      }
    },
    addOneBusiness: jest.fn(() => Promise.resolve()),
  };
  return shallow(<AddBusiness {...props} />);
};

describe('<AddBusiness />', () => {
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
        name: 'name',
        value: 'Andela'
      }
    };
    action.onChange(event);
    expect(action.state.name).toEqual('Andela');
  });

  it('should return  items if not', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('AddBusinessForm').length).toBe(1);
  });

  it('should submit', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onSubmit = jest.spyOn(action, 'onSubmit');
    const event = {
      target: {
        name: 'lorem',
        location: 'yemi',
        category: 'isaiah@gmail.com',
        details: 'password',
        businessImage: 'link',
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
      businessImage: file,
      imagePreview: newImage.src
    });
    expect(action.state.businessImage).toBe(file);
  });
});

