import { admindbPool } from "../../config/db.js";

// api lihat semua fasilitas
export const getFasilitas = async (request, response) => {
  try {
    const [result] = await admindbPool.query("CALL sp_lihat_semua_fasilitas()");
    return response.status(200).json({
      message: "Berhasil mengambil data fasilitas",
      data: result[0],
    });
  } catch (error) {
    console.log(error);
    if (error.sqlMessage) {
      return response.status(404).json({
        success: false,
        message: error.sqlMessage,
      });
    }
    return response
      .status(500)
      .json({ message: "Terjadi kesalahan pada server" });
  }
};

export const getFasilitasById = async (request, response) => {
  const { id } = request.params;
  try {
    const [result] = await admindbPool.query("CALL sp_lihat_fasilitas_id(?)", [
      id,
    ]);
    return response.status(200).json({
      success: true,
      message: `Berhasil mengambil data fasilitas dengan id: ${id}`,
      data: result[0],
    });
  } catch (error) {
    console.log(error);
    if (error.sqlMessage) {
      return response.status(404).json({
        success: false,
        message: error.sqlMessage,
      });
    }
    return response
      .status(500)
      .json({ message: "Terjadi kesalahan pada server" });
  }
};

// api tambah fasilitas
export const createFasilitas = async (request, response) => {
  const { nama_fasilitas } = request.body;
  try {
    const [result] = await admindbPool.query("CALL sp_tambah_fasilitas(?)", [
      nama_fasilitas,
    ]);
    return response.status(201).json({
      success: true,
      message: "Fasilitas berhasil ditambahkan.",
      data: result[0],
    });
  } catch (error) {
    console.log(error);
    if (error.sqlMessage) {
      return response.status(403).json({
        success: false,
        message: error.sqlMessage,
      });
    }
    return response
      .status(500)
      .json({ message: "Terjadi kesalahan pada server" });
  }
};

// api udpdate fsiltas
export const updateFasilitas = async (request, response) => {
  const { id } = request.params;
  const { nama_fasilitas } = request.body;

  try {
    const [result] = await admindbPool.query("CALL sp_edit_fasilitas(?, ?)", [
      id,
      nama_fasilitas,
    ]);

    return response.status(200).json({
      success: true,
      message: "Fasilitas berhasil diperbarui.",
      data: result[0],
    });
  } catch (error) {
    console.error(error);

    if (error.sqlMessage) {
      return response.status(400).json({
        success: false,
        message: error.sqlMessage,
      });
    }

    return response.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server.",
    });
  }
};

// api hapus fasilitas
export const deleteFasilitas = async (request, response) => {
  const { id } = request.params;

  try {
    const [result] = await admindbPool.query("CALL sp_hapus_fasilitas(?)", [
      id,
    ]);
    return response.status(200).json({
      success: true,
      message: "Fasilitas berhasil dihapus.",
      data: result[0],
    });
  } catch (error) {
    console.log(error);
    if (error.sqlMessage) {
      return response.status(404).json({
        success: false,
        message: error.sqlMessage,
      });
    }
    return response
      .status(500)
      .json({ message: "Terjadi kesalahan pada server" });
  }
};
