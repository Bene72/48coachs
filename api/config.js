// Vercel Serverless Function — /api/config
// Les clés Supabase sont dans les variables d'environnement Vercel
// Elles ne sont JAMAIS dans le code GitHub

export default function handler(req, res) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    return res.status(500).json({ error: "Variables d'environnement manquantes" });
  }

  // Cache 5 min côté client, pas de cache CDN (données sensibles)
  res.setHeader("Cache-Control", "private, max-age=300");
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({ url, key });
}
