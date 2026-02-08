const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

// 🌍 بيانات فنادق عالمية (أوروبا + أمريكا + آسيا)
const hotels = [
  { id: 1, name: "Hotel Ritz", city: "Paris", country: "France", stars: 5, price: 420 },
  { id: 2, name: "Grand Palace", city: "Rome", country: "Italy", stars: 4, price: 180 },
  { id: 3, name: "Royal London", city: "London", country: "UK", stars: 5, price: 350 },
  { id: 4, name: "Berlin Central", city: "Berlin", country: "Germany", stars: 4, price: 150 },
  { id: 5, name: "Madrid Comfort", city: "Madrid", country: "Spain", stars: 3, price: 95 },
  { id: 6, name: "Amsterdam Canal Hotel", city: "Amsterdam", country: "Netherlands", stars: 4, price: 210 },
  { id: 7, name: "New York Plaza", city: "New York", country: "USA", stars: 5, price: 500 },
  { id: 8, name: "Tokyo Sky Inn", city: "Tokyo", country: "Japan", stars: 4, price: 260 }
];

// الصفحة الرئيسية
app.get('/', (req, res) => {
  res.send('World Hotels is running');
});

// كل الفنادق
app.get('/hotels', (req, res) => {
  res.json(hotels);
});

// فلترة
app.get('/hotels/filter', (req, res) => {
  let results = hotels;
  const { city, country, stars, maxPrice } = req.query;

  if (city) {
    results = results.filter(h => h.city.toLowerCase() === city.toLowerCase());
  }

  if (country) {
    results = results.filter(h => h.country.toLowerCase() === country.toLowerCase());
  }

  if (stars) {
    results = results.filter(h => h.stars == stars);
  }

  if (maxPrice) {
    results = results.filter(h => h.price <= maxPrice);
  }

  res.json({
    count: results.length,
    hotels: results
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
