import { admindbPool, userdbPool } from "../../config/db.js";

// lihat all Booking
export const getAllBooking = async (request, response) => {
  try {
    const [result] = await admindbPool.query("CALL sp_lihat_semua_booking()");

    return response.status(200).json({
      success: true,
      message: "Berhasil mengambil data semua Booking",
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
    return response.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server",
    });
  }
};

export const getBookingIDUser = async (request, response) => {
  const { id } = request.params;
  try {
    const [result] = await userdbPool.query("CALL sp_lihat_pesanan_user(?)", [
      id,
    ]);

    return response.status(200).json({
      success: true,
      message: `Berhasil mengambil data Booking dengan id: ${id}`,
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
    return response.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server",
    });
  }
};

export const getBookingIDAdmin = async (request, response) => {
  const { id } = request.params;
  try {
    const [result] = await admindbPool.query("CALL sp_lihat_pesanan_user(?)", [
      id,
    ]);

    return response.status(200).json({
      success: true,
      message: `Berhasil mengambil data Booking dengan id: ${id}`,
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
    return response.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server",
    });
  }
};

export const createBooking = async (request, response) => {
  const { user_id, studio_id, tanggal_sewa, jam_mulai, jam_selesai } =
    request.body;
  try {
    const [result] = await userdbPool.query("CALL sp_booking(?,?,?,?,?)", [
      user_id,
      studio_id,
      tanggal_sewa,
      jam_mulai,
      jam_selesai,
    ]);

    return response.status(201).json({
      success: true,
      message: "Berhasil menambahkan data Booking",
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
    return response.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server",
    });
  }
};

export const payBooking = async (req, res) => {
  const { booking_id } = req.params;
  const { metode, bukti_pembayaran } = req.body;

  try {
    const [result] = await userdbPool.query("CALL sp_pembayaran (?, ?, ?)", [
      booking_id,
      metode,
      bukti_pembayaran,
    ]);

    return res.status(200).json({
      success: true,
      message: `Berhasil membayar untuk booking ID: ${booking_id}`,
      data: result[0],
    });
  } catch (error) {
    console.error(error);

    if (error.sqlMessage) {
      return res.status(400).json({
        success: false,
        message: error.sqlMessage,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getPenghasilanTotal = async (request, response) => {
  try {
    const [result] = await admindbPool.query(
      "CALL sp_lihat_penghasilan_total()"
    );

    return response.status(200).json({
      success: true,
      message: "Berhasil melihat penghasilan",
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
    return response.status(500).json({
      success: false,
      message: "Terjadi kesalahan server",
    });
  }
};

export const getPenghasilanByStudio = async (request, response) => {
  const { studio_id } = request.params;
  try {
    const [result] = await admindbPool.query(
      "CALL sp_lihat_penghasilan_by_studio(?)",
      [studio_id]
    );

    return response.status(200).json({
      success: true,
      message: "Berhasil melihat penghasilan",
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
    return response.status(500).json({
      success: false,
      message: "Terjadi kesalahan server",
    });
  }
};
