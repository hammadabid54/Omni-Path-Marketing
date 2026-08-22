# Bulk text replacer for service page pricing updates
param(
  [string]$Path,
  [string[]]$Pairs
)
$content = Get-Content $Path -Raw
$count = 0
for ($i = 0; $i -lt $Pairs.Count; $i += 2) {
  $old = $Pairs[$i]
  $new = $Pairs[$i + 1]
  if ($content -like "*$old*") {
    $content = $content.Replace($old, $new)
    $count++
  }
}
Set-Content -Path $Path -Value $content -NoNewline
Write-Output "  $Path -> $count replacements"
