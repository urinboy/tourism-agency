export const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("uz-UZ", options);
};

export const formatPrice = (price) => {
    return new Intl.NumberFormat("uz-UZ", {
        style: "currency",
        currency: "UZS",
    }).format(price);
};
