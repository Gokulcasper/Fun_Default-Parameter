// Default Parameter for Function in JS

(function totalGST(cost, tax = 18) {
  // here tax have Default value
  taxAmount = (cost * tax) / 100;
  console.log(`Total cost is : ₹${cost} 
    GST for the product is : ₹${tax}% 
    Total Cost with GST is : ₹${cost + taxAmount}`);
})(5000);

// totalGST(5000);
