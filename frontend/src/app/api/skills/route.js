import data from "@/data/skills.json";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(data);
}