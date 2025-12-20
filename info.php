<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Informations PHP</title>
</head>
<body>

<h1>Informations Générales</h1>

<?php
$etablissement = "Faculté des Sciences et Techniques";
$module = "Développement Web";
$annee = 2024;

$a = 6;
$b = 4;

echo "<p><strong>Établissement :</strong> $etablissement</p>";
echo "<p><strong>Module :</strong> $module</p>";
echo "<p><strong>Année :</strong> $annee</p>";

echo "<h2>Calculs</h2>";
echo "<p>$a + $b = " . ($a + $b) . "</p>";
echo "<p>$a × $b = " . ($a * $b) . "</p>";
?>

</body>
</html>
