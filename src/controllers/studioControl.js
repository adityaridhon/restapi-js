import { userdbPool, admindbPool } from "../../config/db.js";

// api lihat studio user
export const getStudioUser = async (request, response) => {
  try {
    const [result] = await userdbPool.query(
      "CALL sp_lihat_semua_studio_user()"
    );
    return response.status(200).json({
      success: true,
      message: "Berhasil mengambil data studio yang aktif",
      data: result[0],
    });
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ message: "Terjadi kesalahan pada server" });
  }
};

// api lihat studio admin
export const getStudioAdmin = async (request, response) => {
  try {
    const [result] = await admindbPool.query(
      "CALL sp_lihat_semua_studio_admin()"
    );
    return response.status(200).json({
      success: true,
      message: "Berhasil mengambil data studio admin",
      data: result[0],
    });
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ message: "Terjadi kesalahan pada server" });
  }
};

// get studio by id
export const getStudioByIdAdmin = async (request, response) => {
  const { id } = request.params;
  try {
    const [result] = await admindbPool.query("CALL sp_lihat_studio_id(?)", [
      id,
    ]);
    return response.status(200).json({
      success: true,
      message: `Berhasil mengambil data studio berdasarkan ID: ${id}`,
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

export const getStudioByIdUser = async (request, response) => {
  const { id } = request.params;
  try {
    const [result] = await userdbPool.query("CALL sp_lihat_studio_id(?)", [id]);
    return response.status(200).json({
      success: true,
      message: `Berhasil mengambil data studio berdasarkan ID: ${id}`,
      data: result[0],
    });
  } catch (error) {
    console.log(error);
    if (error.sqlMessage) {
      return response.status(400).json({
        success: false,
        message: error.sqlMessage,
      });
    }
    return response
      .status(500)
      .json({ message: "Terjadi kesalahan pada server" });
  }
};

// api tambah studio
export const createStudio = async (request, response) => {
  const {
    nama_studio,
    deskripsi,
    gambar,
    harga,
    kapasitas,
    status_operasional,
    id_fasilitas,
  } = request.body;
  try {
    const [result] = await admindbPool.query(
      "CALL sp_tambah_studio(?, ?, ?, ?, ?, ?, ?)",
      [
        nama_studio,
        deskripsi,
        gambar,
        harga,
        kapasitas,
        status_operasional,
        id_fasilitas,
      ]
    );
    return response.status(201).json({
      success: true,
      message: "Studiio berhasil ditambahkan.",
      data: result[0],
    });
  } catch (error) {
    console.log(error);
    if (error.sqlMessage) {
      return response.status(400).json({
        success: false,
        message: error.sqlMessage,
      });
    }
    return response
      .status(500)
      .json({ message: "Terjadi kesalahan pada server" });
  }
};

// api udpdate studio
export const updateStudio = async (request, response) => {
  const { id } = request.params;
  const {
    nama_studio,
    deskripsi,
    gambar,
    harga,
    kapasitas,
    status_operasional,
    id_fasilitas,
  } = request.body;

  try {
    const [result] = await admindbPool.query(
      "CALL sp_edit_studio(?, ?, ?, ?, ?, ?, ?, ?)",
      [
        id,
        nama_studio,
        deskripsi,
        gambar,
        harga,
        kapasitas,
        status_operasional,
        id_fasilitas,
      ]
    );
    return response.status(200).json({
      success: true,
      message: "Studio berhasil diperbarui.",
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

// api hapus strudio
export const deleteStudio = async (request, response) => {
  const { id } = request.params;
  try {
    const [result] = await admindbPool.query("CALL sp_hapus_studio(?)", [id]);
    return response.status(200).json({
      success: true,
      message: "Studio berhasil dihapus.",
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
