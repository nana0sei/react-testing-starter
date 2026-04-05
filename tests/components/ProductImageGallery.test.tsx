import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("UserList", () => {
  it("should render nothing if no images are provided", () => {
    const result = render(<ProductImageGallery imageUrls={[]} />);
    expect(result.container).toBeEmptyDOMElement();
  });

  it("should render a list of images", () => {
    const imageUrls = ["url2", "url1"];
    render(<ProductImageGallery imageUrls={imageUrls} />);

    const images = screen.getAllByRole("img");
    expect(images.length).toBe(2);

    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", `${url}`);
    });
  });
});
