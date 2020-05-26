export const displayPrice = (price) => `$${price.toFixed(2)}`

export function formatPrice(cents) {
    return (cents / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  }