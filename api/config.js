module.exports = function handler(req, res) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    return res.status(500).json({ error: "Variables d'environnement manquantes" });
  }

  res.setHeader("Cache-Control", "private, max-age=300");
  res.status(200).json({ url, key });
};
