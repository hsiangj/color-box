import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it("renders without crashing", function(){
  render(<BoxList />);
});

it("matches snapshot", function(){
  const {asFragment} = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

function createBox(boxList, height="50", width="50", color="blue"){
  // select input fields
  const heightInput = boxList.getByLabelText('Height (10-300)');
  const widthInput = boxList.getByLabelText('Width (10-300)');
  const colorInput = boxList.getByLabelText('Color');
  // add value to input fields
  fireEvent.change(heightInput, {target: {value: height}});
  fireEvent.change(widthInput, {target: {value: width}});
  fireEvent.change(colorInput, {target: {value: color}});
  // select button
  const btn = boxList.queryByText('Create Box');
  // click button to submit input fields
  fireEvent.click(btn);
}

it("should add new box", function(){
  const boxList = render(<BoxList />);
  // no box yet therefore no remove button
  expect(boxList.queryByText('x')).not.toBeInTheDocument();
  createBox(boxList);
  const removeButton = boxList.queryByText('x');
  expect(removeButton).toBeInTheDocument();
  expect(removeButton.previousSibling).toHaveStyle("width: 50px");
  // empty form. Color picker does not show empty string
  expect(boxList.getAllByDisplayValue("")).toHaveLength(2);
  
});

it("able to remove a box", function(){
  const boxList = render(<BoxList />);
  createBox(boxList);
  const removeButton = boxList.queryByText('x');
  fireEvent.click(removeButton);
  expect(removeButton).not.toBeInTheDocument();
});