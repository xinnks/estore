const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const categoryData = [
  {
    name: "Accessories",
    articles: {
      create: [
        {
          name: "Butler - Tortoise frame with Rust Mirror ",
          price: 35.0,
          image: "https://asset-train.twic.pics/images/shades-1.jpg",
          details:
            "The Butler is our restyled and redesigned classic. It's an ultra-reliable choice for all with it's medium size and timeless wire accents.",
        },
        {
          name: "Slate Sunglassse",
          price: 30.0,
          image: "https://asset-train.twic.pics/images/shades-2.jpg",
          details:
            "The Slate Sunglasses are our restyled and redesigned classic. It's an ultra-reliable choice for all with it's medium size and timeless wire accents.",
        },
        {
          name: "Super Bass Headphones",
          price: 60.0,
          image: "https://asset-train.twic.pics/images/headphone-1.jpg",
          details:
            "The Super Bass Headphones is our restyled and redesigned classic. It's an ultra-reliable choice for all with it's medium size and timeless wire accents.",
        },
      ],
    },
  },
  {
    name: "Shoes",
    articles: {
      create: [
        {
          name: "Baby Shoes",
          price: 22.0,
          image: "https://asset-train.twic.pics/images/shoes-1.jpg",
          details:
            "The Baby Shoes are our restyled and redesigned classic. It's an ultra-reliable choice for all with it's medium size and timeless wire accents.",
        },
        {
          name: "Super MVP Sneakers",
          price: 87.0,
          image: "https://asset-train.twic.pics/images/shoes-2.jpg",
          details:
            "The Super MVP Sneakers are our restyled and redesigned classic. It's an ultra-reliable choice for all with it's medium size and timeless wire accents.",
        },
        {
          name: "Hip Kicks",
          price: 38.0,
          image: "https://asset-train.twic.pics/images/shoes-3.jpg",
          details:
            "The Hip Kicks are our restyled and redesigned classic. It's an ultra-reliable choice for all with it's medium size and timeless wire accents.",
        },
      ],
    },
  },
  {
    name: "Furniture",
    articles: {
      create: [
        {
          name: "Brown Furry Leather",
          price: 120.0,
          image: "https://asset-train.twic.pics/images/chair-1.jpg",
          details:
            "The Brown Furry Leather is our restyled and redesigned classic. It's an ultra-reliable choice for all with it's medium size and timeless wire accents.",
        },
        {
          name: "Wooden Relax",
          price: 180.0,
          image: "https://asset-train.twic.pics/images/chair-2.jpg",
          details:
            "The Wooden Relax is our restyled and redesigned classic. It's an ultra-reliable choice for all with it's medium size and timeless wire accents.",
        },
        {
          name: "Light Leather Sofa",
          price: 180.0,
          image: "https://asset-train.twic.pics/images/sofa-1.jpg",
          details:
            "The Light Leather Sofa is our restyled and redesigned classic. It's an ultra-reliable choice for all with it's medium size and timeless wire accents.",
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const cat of categoryData) {
    const category = await prisma.category.create({
      data: cat,
    });
    console.log(`Created category with id: ${category.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
