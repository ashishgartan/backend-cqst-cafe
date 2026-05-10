
exports.submitSupportRequest = async (req, res) => {
  try {
    const { name, orderId, subject, message } = req.body;

    if (!name || !message) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill in all required fields." });
    }

    res.status(200).json({
      success: true,
      message: `Thank you, ${name}. Your message has been received!`,
      request: { orderId, subject },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
};
