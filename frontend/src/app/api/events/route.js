import data from "@/data/events.json";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(data);
}