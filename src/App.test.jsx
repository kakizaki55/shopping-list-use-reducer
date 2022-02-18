import App from './App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ItemsProvider } from './context/ItemContext';

test('just testing the app and its functionalities', () => {
  render(
    <ItemsProvider>
      <App />
    </ItemsProvider>
  );

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

test('testing the edit/delete buttons', async () => {
  render(
    <ItemsProvider>
      <App />
    </ItemsProvider>
  );

  const delButton1 = screen.getByTestId('del-2');

  const itemBeans = screen.getByText(/beans/i);

  userEvent.click(delButton1);

  expect(itemBeans).not.toBeInTheDocument();

  const editButton = screen.getByTestId('edit-1');
  expect(editButton).toBeInTheDocument();
  userEvent.click(editButton);

  const editableItem = screen.getByPlaceholderText(/banana/i);
  userEvent.type(editableItem, 'blaw blaw');

  const saveButton = screen.getByTestId('save-1');
  userEvent.click(saveButton);
  const newItem = await screen.findByText(/blaw blaw/i);
  expect(newItem).toBeInTheDocument();
});

test('just making sure 3 items render on page load', () => {
  render(
    <ItemsProvider>
      <App />
    </ItemsProvider>
  );
  const shoppingList = screen.getByRole('list');

  expect(shoppingList.children).toHaveLength(3);
});

test('making the header item list numbers change when a new item is added', () => {
  render(
    <ItemsProvider>
      <App />
    </ItemsProvider>
  );
  const itemTextBox = screen.getByRole('textbox', {
    name: /item:/i,
  });
  const numberInput = screen.getByRole('spinbutton', {
    name: /how many\?/i,
  });

  userEvent.type(itemTextBox, 'tomato');
  userEvent.type(numberInput, '4');

  const addButton = screen.getByRole('button', {
    name: /add item/i,
  });

  userEvent.click(addButton);

  const headerText1 = screen.getByText(
    /you have 4 items in you shopping cart/i
  );

  userEvent.type(itemTextBox, 'popcorn');
  userEvent.type(numberInput, '100');

  userEvent.click(addButton);

  const headerText2 = screen.getByText(
    /you have 5 items in you shopping cart/i
  );
});

test('making sure the delete all button to work', () => {
  render(
    <ItemsProvider>
      <App />
    </ItemsProvider>
  );

  const deleteAllButton = screen.getByRole('button', {
    name: /delete all/i,
  });

  userEvent.click(deleteAllButton);
  const shoppingList = screen.getByRole('list');
  expect(shoppingList.children).toHaveLength(0);
});
