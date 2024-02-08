// Fungsi untuk memeriksa apakah barang baru
const isNewProduct = (timestamp: number, periodDay: number) => {
  const createdAt = new Date(timestamp);
  const now = new Date();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(now.getDate() - periodDay); // Kurangi 7 hari dari tanggal saat ini

  return createdAt >= oneWeekAgo;
};

export default isNewProduct;
