//let alertas = []; // Memoria temporal (se reinicia en cada deploy)

let UltimaAlerta = null;

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(UltimaAlerta || { mensaje: "Sin alertas recientes" });
  }

  if (req.method === "POST") {
    const { caja, tipo, valor } = req.body || {};
    if (!caja || !tipo || !valor) {
      return res.status(400).json({ error: "faltan parámetros" });
    }

    const alerta = {
      fecha: new Date().toISOString(),
      caja,
      tipo,
      valor,
      estado: tipo === "HUMEDAD" ? "ALTO" : "IMPACTO"
    };

    //alertas.push(alerta);

    UltimaAlerta = alerta;

    return res.status(200).json({ mensaje: "Alerta agregada", alerta });
  }

  return res.status(405).json({ error: "Método no permitido" });
}