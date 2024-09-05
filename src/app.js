import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import path from "path"
import { fileURLToPath } from 'url';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();


app.set("view engine", "ejs");
app.set("views",(path.join(__dirname, "../views")) );


app.use(express.static(path.join(__dirname, "../public")));


app.get("/", (req,res) => {
    res.render("index.ejs");
});


app.get("/weather", async (req, res) => {
    
    const {city} = req.query;
    const API_KEY = process.env.OPENWEATHER_API_KEY;
    const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

    try {
        const result = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const weatherData = result.data;
        res.render("weather", {weatherData});
    } catch(error) {
        console.log(error);
        res.render("error", {error:`no se puede obtener la informacion del clima` });
    }
});

 //inciar el servidor 

 const PORT = process.env.PORT || 3000;

 app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
 });