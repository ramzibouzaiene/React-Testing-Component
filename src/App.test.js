import { render, screen } from '@testing-library/react';
import App from './App';

test('header renders react testing component in the document', () => {
  render(<App />);
  const linkElement = screen.getByText(/React Testing Component/i);
  expect(linkElement).toBeInTheDocument();
});

test("render login component in the document", () => {
  const { getByLabelText } = render(<App />);
  const childElement = screen.getByLabelText("Email");
  //const childElement = screen.getByLabelText("Adress"); Test Not Passed
  expect(childElement).toBeTruthy();
})