export const getCategoryName = (categories, categoryId) => {
  const category = categories.find((cat) => cat.id === categoryId);
  return category ? category.name : "";
};

export const getMerchantName = (merchants, merchantId) => {
  const merchant = merchants.find((mer) => mer.id === merchantId);
  return merchant ? merchant.name : "";
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

export const formatCurrency = (value) => {
  return `$${(value || 0).toFixed(2)}`; // Defaults to 0 if value is undefined
};
