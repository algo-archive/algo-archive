import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';

// react 
import App from '../client/App';
import CodeViewer from '../client/components/CodeViewer';
import QuestionsList from '../client/components/QuestionsList';
import TitleCard from '../client/components/TitleCard';

describe('Testing React Components', () => {
  describe('CodeViewer', () => {
    let text;
    const mockHandleAddTitle = jest.fn();
    const mockprops = {
      title: 'test title',
      description: 'test description',
      solution: 'test solution',
      comments: 'test commment', 
      handleAddTitle: jest.fn(),
      handleClear: jest.fn(),
    }
    
    test('Renders the passed-in text', () => {
      text = render(<CodeViewer {...mockprops}/>);
      expect(text.getByLabelText(/challenge title/i).value).toBe(mockprops.title); 
      expect(text.getByLabelText(/challenge question/i).value).toBe(mockprops.description); 
      // expect(text.getByLabelText(/challenge solution/i).value).toBe(mockprops.solution); 
      expect(text.getByLabelText(/comments/i).value).toBe(mockprops.comments); 
    })
    
    test('Submit button is invoked when clicked', async () => {
      const { getByTestId } = render(<CodeViewer {...mockprops}/>);
      fireEvent.submit(getByTestId("form"));
      expect(mockprops.handleAddTitle).toHaveBeenCalled();
    });

    test('Clear button is invoked when clicked', async () => {
      render(<CodeViewer {...mockprops}/>);
      const clearButton = screen.getByText('Clear')
      fireEvent.click(clearButton)
      expect(mockprops.handleClear).toHaveBeenCalled();
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


