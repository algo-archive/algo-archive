import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';

// react 
// import App from '../client/App';
import CodeViewer from '../client/components/CodeViewer';
// import QuestionsList from '../client/components/QuestionsList';
// import TitleCard from '../client/components/TitleCard';

describe('Testing React Components', () => {
  describe('CodeViewer', () => {
    let text;
    const mockprops = {
      title: 'test title',
      description: 'test description',
      solution: 'test solution',
      comments: 'test commment'
    }

    beforeAll(()=> {
        text = render(<CodeViewer {...mockprops}/>);
    })
    
    test('Renders the passed-in text', () => {
      expect(text.getByLabelText(/challenge title/i).value).toBe(mockprops.title); 
      expect(text.getByLabelText(/challenge question/i).value).toBe(mockprops.description); 
      expect(text.getByLabelText(/challenge solution/i).value).toBe(mockprops.solution); 
      expect(text.getByLabelText(/comments/i).value).toBe(mockprops.comments); 
    })
    
    test('Submit button should save data as props', () => {
      
    });
    
    test('Clear button resets all components', () => {
      
    });

  });

  describe('QuestionsList', () => {

    test('Renders a list of questions', () => {

    });

  });

  describe('Title Card', () => {

    test('Clicking on title card should pull up that question', () => {

    });

    test('Delete button should remove the Question and rerender the new list', () => {

    });
  });
});


