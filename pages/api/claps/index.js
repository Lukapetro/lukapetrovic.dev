import prisma from 'utils/prisma';

export default async function handler(req, res) {
  try {
    const totalClaps = await prisma.claps.aggregate({
      _sum: {
        count: true
      }
    });

    return res.status(200).json({ total: totalClaps._sum.count.toString() });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
