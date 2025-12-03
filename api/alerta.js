export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { caja, tipo, valor } = req.body || {};

  if (!caja || !tipo || !valor) {
    return res.status(400).json({ error: "Faltan campos" });
  }

  // Ejemplo: guardar en memoria (en Vercel no hay persistencia real)
  console.log("Nueva alerta recibida:", { caja, tipo, valor });

  return res.status(200).json({ mensaje: "Alerta recibida correctamente" });
}