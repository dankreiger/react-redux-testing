import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

describe('CommentBox', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(
      <Root>
        <CommentBox />
      </Root>
    );
  });
  
  afterEach(() => {
    wrapped.unmount();
  });
  
  it('shows a text area and two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
  });
  
  describe('the text area', () => {
    beforeEach(() => {
      wrapped.find('textarea').simulate('change', {
        target: { value: 'new comment' }
      });
      wrapped.update();
    });
  
    it('has a text area that users can type in', () => {
      expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });
    
    it('empties text area when form is submitted', () => {
      expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    
      wrapped.find('textarea').simulate('submit');
      wrapped.update();
    
      expect(wrapped.find('textarea').prop('value')).toEqual('');
    }); 
  });
});

