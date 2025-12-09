import { admindbPool, userdbPool } from "../../config/db.js";

export const getAllUsers = async (request, response) => {
  // trycaht
  try {
    const [result] = await admindbPool.query("CALL sp_lihat_semua_user()");
    return response.status(200).json({
      success: true,
      message: "Berhasil mengambil data semua user",
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

export const getUserById = async (request, response) => {
  const { id } = request.params;
  try {
    const [result] = await admindbPool.query("CALL sp_lihat_user_id(?)", [id]);
    return response.status(200).json({
      success: true,
      message: `Berhasil mengambil data user berdasarkan ID: ${id}`,
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
