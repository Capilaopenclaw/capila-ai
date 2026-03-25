---
title: "Logistická Firma: Predikčná Údržba"
industry: "Logistika"
result: "Zníženie nákladov o 25%"
---

# Case Study: Predikčná Údržba Vozového Parku

## Klient
Stredná logistická firma s 120 vozidlami pôsobiaca v strednej Európe.

## Výzva
Naplánovaná údržba bola neefektívna:
- Pravidelné servisné prehliadky podľa kilometrov
- Neočakávané poruchy zastavovali vozidlá
- Náklady na odťahovanie a náhradné vozidlá
- Oneskorené dodávky = nespokojní klienti

**Štatistiky pred implementáciou:**
- 15 neočakávaných porúch mesačne
- Priemerná doba odstavenia: 3 dni
- Náklady na náhradné vozidlá: €8,000/mesiac
- Pokuty za oneskorené dodávky: €3,000/mesiac

## Riešenie
Implementovali sme IoT + AI systém predikčnej údržby:

### Hardware
- GPS trackery vo všetkých vozidlách
- OBD-II dongles pre čítanie diagnostiky
- Teplomer a tlakomer v nákladnom priestore

### AI Model
- Time-series forecasting pre kritické komponenty
- Anomaly detection na senzorové dáta
- Failure prediction s 2-týždňovým warningom

### Dashboard
- Real-time stav vozového parku
- Maintenance schedule
- Cost tracking

## Výsledky (po 6 mesiacoch)

| Metrika | Pred | Po | Zlepšenie |
|---------|------|-----|-----------|
| Neočakávané poruchy | 15/mesiac | 3/mesiac | -80% |
| Priemerná doba odstavenia | 3 dni | 0.5 dňa | -83% |
| Náklady na náhradné vozidlá | €8,000 | €1,500 | -81% |
| Celkové náklady na údržbu | €45,000 | €33,750 | -25% |

**Neočakávané benefity:**
- Lepšie plánovanie trás (vieme predpovedať dostupnosť vozidiel)
- Vyjednávacia pozícia pri servisoch (plánovaná údržba = zľavy)
- Zníženie poistného (menej nárokov)

## Technológie
- AWS IoT Core (device management)
- Python + scikit-learn (ML modely)
- React + Node.js (dashboard)
- PostgreSQL + TimescaleDB (time-series data)

## Implementačné Lekcie
1. **Driver adoption** — vodiči spočiatku odolávali "sledovaniu"
2. **False positives** — prvé mesiace bolo veľa falošných poplachov
3. **Integration s existujúcimi procesmi** — servisné partneri museli prispôsobiť kapacitu

## Ďalšie Kroky
- Rozšírenie na prívesy a nákladné priestory
- Fuel optimization pomocou AI
- Route optimization s predikciou dopravy
