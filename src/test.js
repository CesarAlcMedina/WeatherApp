import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import path from "path"
import { fileURLToPath } from 'url';

// Obtener __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar las variables de entorno
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Imprimir la clave API para verificar
console.log(`API Key: ${process.env.OPENWEATHER_API_KEY}`);
