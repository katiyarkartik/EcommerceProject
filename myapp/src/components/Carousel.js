import Carousel from "react-bootstrap/Carousel";

function CarouselComp() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/stone-banner_1_2000x.jpg?v=1659681411"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner-shop-now_2_2000x.gif?v=1661324429"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Banner-Wave-Select-Desktop_3_2000x.gif?v=1660741182"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;
