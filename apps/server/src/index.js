const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const port = 5000;
const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Estore Server",
  });
});

app.post(`/category`, async (req, res) => {
  const { name } = req.body;
  const result = await prisma.category.create({
    data: {
      name,
    },
  });
  res.json(result);
});

app.post(`/article`, async (req, res) => {
  const { name, price, image, details, categoryId } = req.body;
  if (!name || !price || !image || !categoryId)
    return res.status(422).json({
      message: "Missing fields",
    });
  const result = await prisma.article.create({
    data: {
      name,
      price,
      image,
      details,
      categoryId,
    },
  });
  res.json(result);
});

app.put("/sold-out/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const articleData = await prisma.article.findUnique({
      where: { id: Number(id) },
      select: {
        soldOut: true,
      },
    });

    const updatedArticle = await prisma.article.update({
      where: { id: Number(id) || undefined },
      data: { soldOut: !articleData.soldOut || undefined },
    });
    res.json(updatedArticle);
  } catch (error) {
    res.json({ error: `Post with ID ${id} does not exist in the database` });
  }
});

app.get("/articles", async (req, res) => {
  const articles = await prisma.article.findMany();
  res.json(articles);
});

app.get(`/article/:id`, async (req, res) => {
  const { id } = req.params;
  const article = await prisma.article.findUnique({
    where: {
      id: Number(id),
    },
    include: { category: true },
  });
  res.json(article);
});

app.get("/categories", async (req, res) => {
  const categories = await prisma.category.findMany();
  res.json(categories);
});

app.get("/category/:id", async (req, res) => {
  const { id } = req.params;

  const articles = await prisma.article.findMany({
    where: {
      categoryId: Number(id),
    },
    include: { category: true },
  });
  const category = articles[0]?.category;

  res.json({
    category,
    articles,
  });
});

app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);
