import { admindbPool, userdbPool } from "../../config/db.js";

export const registerUser = async (request, response) => {
  // tcath
  try {
    const { nama, email, password } = request.body;
    const [result] = await userdbPool.query("CALL sp_register_user(?, ?, ?)", [
      nama,
      email,
      password,
    ]);
    return response.status(201).json({
      success: true,
      message: "Berhasil registrasi!",
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

export const registerAdmin = async (request, response) => {
  try {
    const { nama, email, password } = request.body;
    const [result] = await admindbPool.query(
      "CALL sp_register_admin(?, ?, ?)",
      [nama, email, password]
    );
    return response.status(201).json({
      success: true,
      message: "Berhasil memebuat akaun: " + nama + "!",
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

export const loginUser = async (request, response) => {
  // trychat
  try {
    const { email, password } = request.body;
    const [result] = await userdbPool.query("CALL sp_login_user(?, ?)", [
      email,
      password,
    ]);
    return response.status(200).json({
      success: true,
      message: `Selamat datang kembali, ${result[0][0].nama}! `,
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

export const loginAdmin = async (request, response) => {
  // trychat
  try {
    const { email, password } = request.body;
    const [result] = await admindbPool.query("CALL sp_login_admin(?, ?)", [
      email,
      password,
    ]);
    return response.status(200).json({
      success: true,
      message: `Selamat datang kembali, ${result[0][0].nama}! `,
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
