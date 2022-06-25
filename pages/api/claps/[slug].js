import prisma from 'utils/prisma';

export default async function handler(req, res) {
  try {
    const slug = req.query.slug.toString();

    if (req.method === 'POST') {
      const updateClaps = await prisma.claps.upsert({
        where: { slug },
        create: {
          slug
        },
        update: {
          count: {
            increment: 1
          }
        }
      });

      return res.status(200).json({
        total: updateClaps.count.toString()
      });
    }

    if (req.method === 'GET') {
      const claps = await prisma.claps.findUnique({
        where: {
          slug
        }
      });

      return res.status(200).json({ total: claps.count.toString() });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
