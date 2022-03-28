function checkIsTrue(para, val, cat) {
  return cat.get(val) === para;
}

function decideCategoriesBrand(dispatch, cat) {
  dispatch({ type: "RESET" });
  checkIsTrue("Top-notch Processor", "categories", cat) &&
    dispatch({ type: "TOPPROCESSOR" });
  checkIsTrue("High-end GPU for gamers", "categories", cat) &&
    dispatch({ type: "GPU" });
  checkIsTrue("Pixel perfect Camera for memories", "categories", cat) &&
    dispatch({ type: "CAMERA" });
  checkIsTrue("Apple", "brand", cat) &&
    dispatch({ type: "BRAND", payload: "APPLE" });
  checkIsTrue("OnePlus", "brand", cat) &&
    dispatch({ type: "BRAND", payload: "ONEPLUS" });
  checkIsTrue("Samsung", "brand", cat) &&
    dispatch({ type: "BRAND", payload: "SAMSUNG" });
}

export { decideCategoriesBrand };
