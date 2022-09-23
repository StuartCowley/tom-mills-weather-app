import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const testFunction = () => {};
  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        onSubmit={testFunction}
        searchText=""
        setSearchText={testFunction}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders button text correctly", () => {
    const { getByText } = render(
      <SearchForm
        onSubmit={testFunction}
        searchText=""
        setSearchText={testFunction}
      />
    );
    expect(getByText("Search")).toBeInstanceOf(HTMLButtonElement);
  });
});
