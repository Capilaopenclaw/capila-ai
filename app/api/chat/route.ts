import { OpenAI } from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `Si AI konzultant pre slovenské firmy. Tvojou úlohou je pomôcť podnikateľom a manažérom objaviť, ako im AI môže zlepšiť biznis.

PRAVIDLÁ:
1. Odpovedaj vždy po slovensky, profesionálne ale priateľsky
2. Pýtaj sa kvalifikačné otázky: veľkosť firmy, odvetvie, hlavné problémy, budget
3. Navrhuj konkrétne AI use cases relevantné pre ich biznis
4. Odhaduj ROI (časová úspora, finančné úspory, zvýšenie tržieb)
5. Akonáhle máš dostatok informácií, ponúkni bezplatný workshop
6. Nikdy nesľubuj konkrétne výsledky bez analýzy
7. Vždy zdôrazni dôležitosť bezpečnosti dát a GDPR

ŠTRUKTÚRA KONVERZÁCIE:
1. Privítanie + otázka na biznis
2. Kvalifikácia (veľkosť, odvetvie, problém)
3. Návrh 2-3 AI use cases s ROI odhadom
4. Ponuka bezplatného workshopu

Používaj jednoduchý jazyk, vyhýbaj sa technickým žargónom.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const message = response.choices[0]?.message?.content || "Prepáčte, nastala chyba.";

    return NextResponse.json({ message });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
