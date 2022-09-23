import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    humidity: 30,
    temperature: {
      min: 11,
      max: 22,
    },
    wind: {
      speed: 13,
      direction: "s",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);

    expect(getByText("Thu Jan 01 1970")).toHaveAttribute(
      "class",
      "forecast-details__date"
    );
    expect(getByText("Humidity: 30%")).toHaveAttribute(
      "class",
      "forecast-details__humidity"
    );
    expect(getByText("Min Temperature: 11°C")).toHaveAttribute(
      "class",
      "forecast-details__min-temperature"
    );
    expect(getByText("Max Temperature: 22°C")).toHaveAttribute(
      "class",
      "forecast-details__max-temperature"
    );
    expect(getByText("Wind Speed: 13mph")).toHaveAttribute(
      "class",
      "forecast-details__wind-speed"
    );
    expect(getByText("Wind Direction: s")).toHaveAttribute(
      "class",
      "forecast-details__wind-direction"
    );
  });
});
