import { NextResponse } from "next/server";

// Simple in-memory storage for MVP (replace with Supabase in production)
const leads: any[] = [];

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const lead = {
      id: Date.now().toString(),
      ...data,
      status: "new",
      createdAt: new Date().toISOString(),
    };
    
    leads.push(lead);
    
    // TODO: Send email notification
    // TODO: Save to Supabase
    
    return NextResponse.json({ success: true, lead });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create lead" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ leads });
}
