const Translation = require("../models/Translation");

exports.getTranslations = async (req, res) => {
  try {
    const translations = await Translation.findAll();
    res.json(translations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTranslation = async (req, res) => {
  try {
    if (req.user.role !== "admin") return res.status(403).json({ message: "Ruxsat etilmagan!" });

    const translation = await Translation.create(req.body);
    res.status(201).json(translation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTranslation = async (req, res) => {
  try {
    if (req.user.role !== "admin") return res.status(403).json({ message: "Ruxsat etilmagan!" });

    const { id } = req.params;
    const translation = await Translation.findByPk(id);

    if (!translation) return res.status(404).json({ message: "Tarjima topilmadi!" });

    await translation.update(req.body);
    res.json({ message: "Tarjima yangilandi!", translation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Tarjimani o'chirish
exports.deleteTranslation = async (req, res) => {
    try {
      const translation = await Translation.findByPk(req.params.id);
      if (!translation) {
        return res.status(404).json({ message: "Tarjima topilmadi" });
      }
      await translation.destroy();
      res.json({ message: "Tarjima o'chirildi" });
    } catch (error) {
      res.status(500).json({ message: "Xatolik yuz berdi", error: error.message });
    }
  };