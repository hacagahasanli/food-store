import {
  SliderItem,
  SliderItemInner,
  SliderItemContainer,
  ItemPic,
  ItemText,
  LatestItemImg,
  LatestItemHeader,
  SwiperSlide,
  Swiper,
  Pagination,
  Navigation,
  Autoplay,
  latestProducts,
  latestProductsHeaders,
  ProductTextItem,
  v4,
} from "../../index";
import "../styles.css";

const ReviewProducts = () => {
  return (
    <div>
      <ProductTextItem name={latestProductsHeaders[2]} />
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1500}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        navigation={true}
        className="mySwiper"
      >
        {latestProducts.map((imageArr) => (
          <SwiperSlide key={1 + v4()}>
            <SliderItem>
              <SliderItemInner>
                {imageArr.map((img) => (
                  <SliderItemContainer
                    key={img + v4()}
                    href="/#"
                    className="bottomAnchor"
                  >
                    <ItemPic>
                      <LatestItemImg src={img.image} alt="image1" />
                    </ItemPic>
                    <ItemText>
                      <LatestItemHeader>{img.name}</LatestItemHeader>
                      <span>{img.price}</span>
                    </ItemText>
                  </SliderItemContainer>
                ))}
              </SliderItemInner>
            </SliderItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewProducts;
