const express = require("express"); // import thư viện express đã cài ở trên
const app = express(); // app ở đây đại diện cho cái dự án nodejs mà mình sẽ làm việc xuyên suốt
const port = 3000; // muốn run app ở port 3000
app.use(express.json())


app.get("/hello", (req, res) => {
  // tạo tuyến đường, khi gõ địa chỉ + '/hello' thì nó sẽ trả về chuỗi 'Hello World!'
  res.send("Hello World!");
});

app.listen(port, () => {
  // Cho app lắng nghe địa chỉ localhost (127.0.0.1) trên port 3000
  console.log(`Example app listening on port ${port}`);
});

app.post("/add", (req, res) => {
  console.log("tien xem req", req.body);
  res.send({
    "status": "oke",
    "result": "Hello "   + req.body.name + ", you are " + req.body.age + " years old."
  })
});
