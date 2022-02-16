import App from './App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('just testing the app and its functionalities', () => {
  render(<App />);

  const header = screen.getByText(/shopping list/i);

  const label = screen.getByText(/item:/i);
  const label2 = screen.getByText(/how many/i);
  expect(header).toBeInTheDocument();
  expect(label).toBeInTheDocument();
  expect(label2).toBeInTheDocument();

  const itemTextBox = screen.getByRole('textbox', {
    name: /item:/i,
  });
  const numberInput = screen.getByRole('spinbutton', {
    name: /how many\?/i,
  });

  userEvent.type(itemTextBox, 'gummi bears');
  userEvent.type(numberInput, '66');

  const addButton = screen.getByRole('button', {
    name: /add item/i,
  });

  userEvent.click(addButton);

  const newItem = screen.getByText(/gummi bears/i);
  const newItemCount = screen.getByText(/66/i);
  expect(newItem).toBeInTheDocument();
  expect(newItemCount).toBeInTheDocument();
});
