"use client";

import { useState } from "react";
import { Card, Box, Typography, Button } from "@mui/material";

const OrderDetails = () => {
  // Initial product data
  const initialProducts = [
    {
      id: 1,
      name: "Maybelline Lash",
      price: 29,
      quantity: 1,
      image: "/images/pos-system/product-45.jpg",
    },
    {
      id: 2,
      name: "Apple iPhone 16",
      price: 799,
      quantity: 1,
      image: "/images/pos-system/product-46.jpg",
    },
    {
      id: 3,
      name: "Adidas Woman",
      price: 85,
      quantity: 1,
      image: "/images/pos-system/product-47.jpg",
    },
  ];

  // State for products
  const [products, setProducts] = useState(initialProducts);

  // State for payment method
  const [paymentMethod, setPaymentMethod] = useState("card");

  // Handle quantity change
  const handleQuantityChange = (id, delta) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + delta) }
          : product
      )
    );
  };

  // Handle payment method change
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  // Calculate subtotal
  const subtotal = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  // Calculate tax (10%)
  const tax = subtotal * 0.1;

  // Calculate total
  const total = subtotal + tax;

  return (
    <>
      <Card
        sx={{
          boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.05)",
          borderRadius: "7px",
          mb: "25px",
        }}
        className="rmui-card bg-f6f7f9 border"
      >
        <Box
          sx={{
            padding: "13px 25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: "16px",
              mb: "0",
              fontWeight: "normal",
            }}
          >
            Order Details
          </Typography>

          <Box className="-mr-10">
            <Button
              sx={{
                minWidth: "auto",
                padding: "0",
                color: "primary.main",
                fontSize: "24px",
                lineHeight: "1",
              }}
            >
              <i className="ri-refresh-line"></i>
            </Button>
          </Box>
        </Box>

        <Box
          className="bg-white border-top"
          sx={{
            borderRadius: "7px 7px 0 0",
          }}
        >
          <Box>
            {products.map((product) => (
              <Box
                key={product.id}
                className="border-bottom"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: { xs: "10px 15px", md: "10px 25px" },
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Box sx={{ flexShrink: 0 }}>
                    <img
                      src={product.image}
                      alt="product"
                      width={40}
                      height={28}
                      style={{
                        borderRadius: "4px",
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: "12px", sm: "14px" },
                        mb: "0",
                        maxWidth: "78px",
                      }}
                    >
                      {product.name}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: { xs: "10px", md: "20px" },
                  }}
                >
                  <Box
                    className="bg-f6f7f9"
                    sx={{
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      type="button"
                      onClick={() => handleQuantityChange(product.id, -1)}
                      sx={{
                        color: "text.primary",
                        fontSize: "25px",
                        height: "30px",
                        width: "30px",
                        minWidth: "auto",
                        padding: "0",
                      }}
                    >
                      -
                    </Button>

                    <input
                      type="text"
                      size={25}
                      value={product.quantity}
                      className="bg-f6f7f9 text-black"
                      style={{
                        maxWidth: "30px",
                        height: "30px",
                        border: "none",
                        textAlign: "center",
                        outline: "none",
                      }}
                      readOnly
                    />

                    <Button
                      type="button"
                      sx={{
                        color: "text.primary",
                        fontSize: "20px",
                        height: "30px",
                        width: "30px",
                        minWidth: "auto",
                        padding: "0",
                      }}
                      onClick={() => handleQuantityChange(product.id, 1)}
                    >
                      +
                    </Button>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "18px" },
                      color: "primary.main",
                    }}
                  >
                    ${(product.price * product.quantity).toFixed(2)}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ padding: "24px" }}>
            <Box
              className="bg-f6f7f9"
              sx={{ padding: "20px", mb: "30px", borderRadius: "6px" }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "7px",
                  }}
                >
                  <Typography>Total</Typography>
                  <Typography>{products.length} Items</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "7px",
                  }}
                >
                  <Typography sx={{ fontWeight: 500 }} className="text-black">
                    Subtotal:
                  </Typography>
                  <Typography sx={{ fontWeight: 500 }} className="text-black">
                    ${subtotal.toFixed(2)}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "7px",
                  }}
                >
                  <Typography sx={{ fontWeight: 500 }} className="text-black">
                    Shipping:
                  </Typography>
                  <Typography sx={{ fontWeight: 500 }} className="text-black">
                    $0.00
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "7px",
                  }}
                >
                  <Typography sx={{ fontWeight: 500 }} className="text-black">
                    Tax (10%):
                  </Typography>
                  <Typography sx={{ fontWeight: 500 }} className="text-black">
                    ${tax.toFixed(2)}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: "15px",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: "16px", md: "20px" },
                    mb: "0",
                  }}
                >
                  Payable Total
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: "16px", md: "20px" },
                    mb: "0",
                  }}
                >
                  ${total.toFixed(2)}
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 500,
                fontSize: { xs: "16px", md: "20px" },
                mb: "10px",
              }}
            >
              Payment Method
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
                mb: "30px",
              }}
            >
              {["cash", "card", "e-wallet"].map((method) => (
                <Box key={method}>
                  <input
                    type="radio"
                    name="options-base"
                    id={method}
                    autoComplete="off"
                    checked={paymentMethod === method}
                    onChange={() => handlePaymentMethodChange(method)}
                    style={{
                      margin: "0",
                    }}
                  />
                  <label
                    className="border bg-f6f7f9"
                    htmlFor={method}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "8px 10px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={`/images/pos-system/${method}.svg`}
                      alt={method}
                      width={27}
                      height={26}
                    />
                    <span className="text-black">
                      {method === "e-wallet"
                        ? "E-Wallet"
                        : method.charAt(0).toUpperCase() + method.slice(1)}
                    </span>
                  </label>
                </Box>
              ))}
            </Box>

            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 500,
                display: "block",
                width: "100%",
                textTransform: "capitalize",
                borderRadius: "7px",
                py: "7px",
                boxShadow: "none",
                color: "#fff !important",
              }}
            >
              Place Order
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default OrderDetails;
