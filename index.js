const express = require("express");
const app = express();

app.get("/login", (req, res) => {
  res.redirect("https://bengkulukini.com/wordpress/wp-login.php");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

