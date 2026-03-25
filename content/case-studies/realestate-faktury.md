---
title: "Real Estate: Automatizácia Správy Nehnuteľností"
industry: "Real Estate"
result: "3x rýchlejšie spracovanie faktúr"
---

# Case Study: Automatizácia Správy Nehnuteľností

## Klient
Správcovská spoločnosť spravujúca 45 komerčných nehnuteľností v Bratislave.

## Výzva
Manuálne spracovanie faktúr bolo nočnou morou:
- 800+ faktúr mesačne od 200+ dodávateľov
- 3 zamestnanci na plný úväzok len na fakturáciu
- Chyby pri manuálnom zadávaní (zlé sumy, zlé účty)
- Oneskorené platby = penále

**Proces pred:**
1. Faktúra príde emailom/PDF
2. Manuálne prepísanie do systému (10-15 minút)
3. Kontrola a schválenie (5 minút)
4. Zadanie do účtovníctva (5 minút)

**Celkový čas:** 20-25 minút na faktúru = 300+ hodín mesačne

## Riešenie
End-to-end automatizácia fakturácie:

### Fáza 1: OCR + Data Extraction
- Azure Form Recognizer pre čítanie PDF faktúr
- 98% accuracy na štandardných faktúrach
- Custom training pre špecifické dodávateľov

### Fáza 2: Smart Matching
- Automatické párovanie s nájomnými zmluvami
- GL code predikcia pomocou ML
- Exception handling pre neznáme faktúry

### Fáza 3: Approval Workflow
- Automated routing podľa sumy a typu
- Mobile app pre rýchle schválenie
- Automated payment scheduling

## Výsledky

| Metrika | Pred | Po | Zlepšenie |
|---------|------|-----|-----------|
| Čas na faktúru | 25 minút | 3 minúty | -88% |
| Ľudské zdroje | 3 FTE | 0.5 FTE | -83% |
| Chyby | 5-10% | < 1% | -90% |
| Oneskorené platby | 15% | 0% | -100% |

**Finančný dopad:**
- Úspora miezd: €45,000/rok
- Zníženie penále: €8,000/rok
- Lepšie cash flow (včasné platby = zľavy)

## Technológie
- Azure Form Recognizer (OCR)
- Python + FastAPI (backend)
- React (dashboard)
- PostgreSQL
- Power Automate (workflows)

## Neočakávané Benefity
1. **Lepšie vzťahy s dodávateľmi** — včasné platby = lepšie ceny
2. **Data insights** — konečne sme videli, kam tečú peniaze
3. **Audit readiness** — všetko automaticky logované

## Implementačné Lekcie
1. **Change management** — účtovníčky sa báli o prácu
2. **Data quality** — prvé týždne sme museli manuálne opravovať OCR
3. **Vendor onboarding** — nie všetci dodávatelia mali štandardné faktúry

## Ďalšie Kroky
- Automatizácia nájomných zmlúv
- Predikčná údržba budov
- Energetická optimalizácia
