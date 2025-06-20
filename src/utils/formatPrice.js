function formatPrice(price) {
  let formattedPrice = price;

  // if (formattedPrice % 1 !== 0) {
  //   formattedPrice = formattedPrice.toFixed(2);
  // }

  const opts = { style: "currency", currency: "GBP" };
  const numberFormat = new Intl.NumberFormat("en-GB", opts);
  formattedPrice = numberFormat.format(formattedPrice);

  return formattedPrice;
}

export default formatPrice;
