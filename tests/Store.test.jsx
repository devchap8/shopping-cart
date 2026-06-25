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
});

it("all elements work in tandem", async () => {
    setup();
    const user = userEvent.setup();
    const searchInput = screen.getByRole('searchbox');
    const selectFilter = screen.getByTestId("select-filter");
    const selectSort = screen.getByTestId("select-sort");

    await userEvent.selectOptions(selectFilter, "clothing");
    let itemList = screen.getAllByTestId("item-name");
    expect(itemList.length).toBe(9);
    expect(itemList[0].innerHTML).toBe("Cotton Hoodie");

    await userEvent.selectOptions(selectSort, "highest");
    itemList = screen.getAllByTestId("item-name");
    expect(itemList.length).toBe(9);
    expect(itemList[0].innerHTML).toBe("Waterproof Raincoat");
    expect(itemList[8].innerHTML).toBe("Knitted Wool Beanie");

    await user.type(searchInput, "to");
    itemList = screen.getAllByTestId("item-name");
    expect(itemList.length).toBe(3);
    expect(itemList[0].innerHTML).toBe("High-Top Sneakers");

    await userEvent.selectOptions(selectSort, "lowest");
    itemList = screen.getAllByTestId("item-name");
    expect(itemList.length).toBe(3);
    expect(itemList[0].innerHTML).toBe("Button-Down Shirt");

    await userEvent.selectOptions(selectFilter, "lifestyle");
    itemList = screen.getAllByTestId("item-name");
    expect(itemList.length).toBe(2);
    expect(itemList[0].innerHTML).toBe("Canvas Tote Bag");

    await user.type(searchInput, "ooo");
    itemList = screen.queryAllByTestId("item-name");
    expect(itemList.length).toBe(0);

    await userEvent.clear(searchInput);
    itemList = screen.getAllByTestId("item-name");
    expect(itemList.length).toBe(9);
    expect(itemList[0].innerHTML).toBe("Canvas Tote Bag");

    await userEvent.selectOptions(selectFilter, "all");
    itemList = screen.getAllByTestId("item-name");
    expect(itemList.length).toBe(36);
    expect(itemList[itemList.length - 1].innerHTML).toBe("Ultra-Wide Monitor");

    await userEvent.selectOptions(selectSort, "category");
    itemList = screen.getAllByTestId("item-name");
    expect(itemList.length).toBe(36);
    expect(itemList[0].innerHTML).toBe("Television");
});

it("adding items to cart changes cart notification", async () => {
    setup();
    const user = userEvent.setup();
    const cartSize = screen.getByTestId("cart-size");
    expect(cartSize.innerHTML).toBe("1");

    expect(screen.getByTestId("gaming-mouse-input").value).toBe("");
    await user.type(screen.getByTestId("gaming-mouse-input"), "3");
    expect(screen.getByTestId("gaming-mouse-input").value).toBe("3");
    await user.click(screen.getByTestId("gaming-mouse-cart"));
    expect(cartSize.innerHTML).toBe("4");

    await user.click(screen.getByTestId("gaming-mouse-minus"));
    expect(screen.getByTestId("gaming-mouse-input").value).toBe("2");
    await user.click(screen.getByTestId("gaming-mouse-cart"));
    expect(cartSize.innerHTML).toBe("3");

    await user.click(screen.getByTestId("wireless-headphones-plus"));
    await user.click(screen.getByTestId("wireless-headphones-plus"));
    expect(screen.getByTestId("wireless-headphones-input").value).toBe("2");
    await user.click(screen.getByTestId("wireless-headphones-cart"));
    expect(cartSize.innerHTML).toBe("5");
});

