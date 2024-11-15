"use client";

import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

async function generateAdvancedExcel() {
  // Crée un nouveau workbook
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Employes");

  // Ajoute des en-têtes avec des styles
  worksheet.columns = [
    { header: "ID", key: "id", width: 10 },
    { header: "Nom", key: "nom", width: 30 },
    { header: "Prénom", key: "prenom", width: 30 },
    { header: "Département", key: "departement", width: 20 },
  ];

  // Remplit la première ligne d'en-tête avec du texte en gras et une couleur de fond jaune
  worksheet.getRow(1).eachCell((cell) => {
    cell.font = { bold: true };
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFFF00" },
    };
  });

  // Ajoute des données
  worksheet.addRow({
    id: 1,
    nom: "Dupont",
    prenom: "Jean",
    departement: "Informatique",
  });
  worksheet.addRow({
    id: 2,
    nom: "Martin",
    prenom: "Marie",
    departement: "Marketing",
  });

  // Fusionne les cellules A1 et B1 pour un en-tête plus large
  worksheet.mergeCells("A1:B1");
  worksheet.getCell("A1").value = "Employés - Détails";

  // Applique un style à la cellule fusionnée
  worksheet.getCell("A1").font = { bold: true, size: 14 };
  worksheet.getCell("A1").alignment = {
    horizontal: "center",
    vertical: "middle",
  };

  // Applique un style de bordure autour de la cellule fusionnée
  worksheet.getCell("A1").border = {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  };

  // Enregistre le fichier
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  saveAs(blob, "test exel.xlsx");
}

export default function Page() {
  return (
    <button onClick={generateAdvancedExcel}>
      Générer le fichier Excel avancé
    </button>
  );
}
