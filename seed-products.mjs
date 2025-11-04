import { getDb } from './server/db.ts';
import { products } from './drizzle/schema.ts';

const sampleProducts = [
  {
    title: "Camiseta Branca Básica",
    description: "Camiseta branca 100% algodão, em perfeito estado. Tamanho M.",
    category: "Camisetas",
    size: "M",
    condition: "como novo",
    originalPrice: 8999,
    salePrice: 2999,
    available: 1,
    sellerId: 1,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop"
  },
  {
    title: "Jeans Azul Escuro",
    description: "Calça jeans azul escuro, modelo slim fit. Pouco usado, sem defeitos. Tamanho 38.",
    category: "Calças",
    size: "38",
    condition: "como novo",
    originalPrice: 15999,
    salePrice: 4999,
    available: 1,
    sellerId: 1,
    imageUrl: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=400&fit=crop"
  },
  {
    title: "Jaqueta de Couro Marrom",
    description: "Jaqueta de couro genuíno, cor marrom. Clássica e elegante. Tamanho P.",
    category: "Jaquetas",
    size: "P",
    condition: "bom",
    originalPrice: 35999,
    salePrice: 12999,
    available: 1,
    sellerId: 1,
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=400&h=400&fit=crop"
  }
];

async function seedProducts() {
  try {
    console.log("Iniciando seed de produtos...");
    process.exit(0);
  } catch (error) {
    console.error("Erro:", error);
    process.exit(1);
  }
}

seedProducts();
