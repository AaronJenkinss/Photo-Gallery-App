import Database from "@/Database/SQLite/SQLite";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    const { searchParams } = new URL(request.url);

    return NextResponse.json('test');
};