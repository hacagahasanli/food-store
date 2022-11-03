import {
  Container,
  CategoriesSection,
  CategoriesRow,
  SwiperSlide,
  Swiper,
  Pagination,
  Navigation,
  Autoplay,
  categoriesimages,
} from "../index";
import "../styles.css";
import "swiper/css";

const Categories = () => {
  let slides;
  const slidesHandle = () => {
    slides = categoriesimages.map((image) => {
      return (
        <SwiperSlide
          style={{ backgroundImage: "url(" + image.image + ")" }}
          key={image.name}
        >
          <div className="swiperDiv">
            <h5>
              <a href="/#">{image.name}</a>
            </h5>
          </div>
        </SwiperSlide>
      );
    });
    return slides;
  };

  return (
    <CategoriesSection>
      <Container>
        <CategoriesRow>
          <Swiper
            slidesPerView={4}
            spaceBetween={28}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            speed={1500}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            navigation={true}
          >
            {slidesHandle()}
            {slidesHandle()}
          </Swiper>
        </CategoriesRow>
      </Container>
    </CategoriesSection>
  );
};

export default Categories;
