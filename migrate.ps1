# migrate.ps1
# Run from project root: .\migrate.ps1

$base = "$PSScriptRoot/notes/class-11/coms"

Write-Host "Migrating files to superior structure..." -ForegroundColor Cyan

# 1. Rename mock-tests (01-practice-paper.en.md -> 01-mock-test.en.md)
$mockTestsDir = "$base/sem-1/mock-tests"
if (Test-Path $mockTestsDir) {
    Get-ChildItem -Path $mockTestsDir -Filter "*-practice-paper.en.md" | ForEach-Object {
        $newName = $_.Name -replace "-practice-paper\.en\.md$", "-mock-test.en.md"
        Rename-Item -Path $_.FullName -NewName $newName -Force
        Write-Host "  Renamed: $($_.Name) -> $newName" -ForegroundColor Green
    }
}

# 2. Rename practical (practical.en.md -> 01-practical-lab.en.md)
$practicalFile = "$base/sem-1/practicals/practical.en.md"
if (Test-Path $practicalFile) {
    Rename-Item -Path $practicalFile -NewName "01-practical-lab.en.md" -Force
    Write-Host "  Renamed: practical.en.md -> 01-practical-lab.en.md" -ForegroundColor Green
}

# 3. Rename networking OSI model note (06-referential-model.en.md -> 06-osi-reference-model.en.md)
$osiFile = "$base/sem-2/unit-02-networking/notes/06-referential-model.en.md"
if (Test-Path $osiFile) {
    Rename-Item -Path $osiFile -NewName "06-osi-reference-model.en.md" -Force
    Write-Host "  Renamed: 06-referential-model.en.md -> 06-osi-reference-model.en.md" -ForegroundColor Green
}

Write-Host "Migration complete! Now running build..." -ForegroundColor Cyan