import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
  it('has the correct type', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  })
  
  it('has the correct payload', () => {
    const action = saveComment('This is a new comment');
    expect(action.type).toEqual(SAVE_COMMENT);
    expect(action.payload).toEqual('This is a new comment');
  })
});
