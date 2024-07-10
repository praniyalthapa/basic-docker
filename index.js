const express = require('express');
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});
app.get('/',(req,res)=>{
    res.send("This is response to your server");
})