// pages/api/account/confirm.js
export default async function handler(req, res) {
    const { token } = req.query;
  
    // Vérifiez le token ici (par exemple, dans votre base de données)
    if (!token) {
      return res.status(400).json({ message: "Token invalide ou manquant" });
    }
  
    // Validation réussie
    return res.status(200).json({ message: "Email confirmé avec succès" });
  }
  