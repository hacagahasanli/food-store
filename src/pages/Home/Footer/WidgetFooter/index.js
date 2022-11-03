import {
  FooterWidgetCol,
  FooterWidget,
  WidgetLists,
  footerInfos,
  v4,
} from "../../index";

const WidgetFooter = () => {
  return (
    <FooterWidgetCol>
      <FooterWidget>
        <h6>Useful Links</h6>
        {footerInfos.map((items, index) => (
          <WidgetLists key={index}>
            {items.map((item) => (
              <li key={item + v4()}>
                <a href="#!">{item}</a>
              </li>
            ))}
          </WidgetLists>
        ))}
      </FooterWidget>
    </FooterWidgetCol>
  );
};

export default WidgetFooter;
