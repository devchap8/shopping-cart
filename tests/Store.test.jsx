import { describe, it, expect } from "vitest";
import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RenderMemoryRouter } from "./RenderMemoryRouter";

function setup() {
    return render(
        <RenderMemoryRouter />
  );
}

it("renders memory router", () => {
    setup();
    expect(screen.getByText("Television")).toBeInTheDocument();
});

it("filters items when typing in search bar", async () => {
    const user = userEvent.setup();
    setup();
    const searchInput = screen.getByRole('searchbox');

    expect(screen.getByText("Television")).toBeInTheDocument();
    expect(screen.getByText("Cotton Hoodie")).toBeInTheDocument();  

    await user.type(searchInput, "Television");
    expect(searchInput).toHaveValue("Television");
    expect(screen.getByText("Television")).toBeInTheDocument();
    expect(screen.queryByText("Cotton Hoodie")).not.toBeInTheDocument(); 

    await userEvent.clear(searchInput);
    await user.type(searchInput, "TELEVISION");
    expect(searchInput).toHaveValue("TELEVISION");
    expect(screen.getByText("Television")).toBeInTheDocument();
    expect(screen.queryByText("Cotton Hoodie")).not.toBeInTheDocument(); 

    await userEvent.clear(searchInput);
    expect(screen.getByText("Television")).toBeInTheDocument();
    expect(screen.getByText("Cotton Hoodie")).toBeInTheDocument(); 
    await user.type(searchInput, "AAAAAAAAAAAAAAA");
    expect(screen.queryAllByTestId("item-name").length).toBe(0);
});

it("filters items when option selected", async () => {
    setup();    

    expect(screen.getByTestId("select-filter")).toBeInTheDocument();
    const selectFilter = screen.getByTestId("select-filter");

    expect(selectFilter).toHaveValue("all");
    await userEvent.selectOptions(selectFilter, "tech");
    expect(screen.getByText("Television")).toBeInTheDocument();
    expect(screen.queryByText("Cotton Hoodie")).not.toBeInTheDocument();

    await userEvent.selectOptions(selectFilter, "all");
    expect(screen.getByText("Television")).toBeInTheDocument();
    expect(screen.queryByText("Cotton Hoodie")).toBeInTheDocument();
});

it("sorts items when option selected", async () => {
    setup();

    expect(screen.getByTestId("select-sort")).toBeInTheDocument();
    const selectSort = screen.getByTestId("select-sort");
    expect(selectSort).toHaveValue("category");

    await userEvent.selectOptions(selectSort, "highest");
    let itemList = screen.getAllByTestId("item-name");
    expect(itemList[0].innerHTML).toBe("Ultra-Wide Monitor");
    expect(itemList[35].innerHTML).toBe("Canvas Tote Bag");
    expect(itemList.length).toBe(36);

    await userEvent.selectOptions(selectSort, "lowest");
    itemList = screen.getAllByTestId("item-name");
    expect(itemList[35].innerHTML).toBe("Ultra-Wide Monitor");
    expect(itemList[0].innerHTML).toBe("Canvas Tote Bag");
    expect(itemList.length).toBe(36);

    await userEvent.selectOptions(selectSort, "category");
    itemList = screen.getAllByTestId("item-name");
    expect(itemList[0].innerHTML).toBe("Television");
    expect(itemList[35].innerHTML).toBe("Luxuary Tent");
    expect(itemList.length).toBe(36);
})

