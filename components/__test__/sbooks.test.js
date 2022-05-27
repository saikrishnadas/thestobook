import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Sbooks from "../../pages/sbooks";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { RecoilRoot } from "recoil";

const createMockRouter = (router) => {
  return {
    query: {},
    isFallback: false,
    back: jest.fn(),
    beforePopState: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    ...router,
  };
};

const MockSbooks = () => {
  return (
    <RecoilRoot>
      <Sbooks />
    </RecoilRoot>
  );
};

describe("Sbooks", () => {
  // it("should navigate to sbooks", async () => {
  //   render(
  //     <RouterContext.Provider
  //       value={createMockRouter({ query: { id: "sbooks" } })}
  //     >
  //       <MockSbooks />
  //     </RouterContext.Provider>
  //   );
  //   const textScreen = await screen.findByTestId("openSuggestionBox");
  //   waitFor(() => expect(textScreen).toBeInTheDocument());
  // });

  it("test dummy", async () => {});
});
