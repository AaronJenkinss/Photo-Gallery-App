import getByUsername from "@/Database/PreparedStatements/Users/GetByUsername";
import { NextResponse } from "next/server";

import bcrypt from 'bcrypt';

export const POST = async (request) => {
    let data;
    try {
        data = await request.json();
    } catch (error) {
        return new NextResponse('Invalid JSON provided on request.', { status: 400, });
    }

    const { username, password } = data;

    console.log(data);

    if (typeof username != 'string' || typeof password != 'string') {
        return new NextResponse('Invalid or missing fields in data.', { status: 400, });
    }

    if (username.length === 0 || password.length === 0) {
        return new NextResponse('Invalid empty fields in data.', { status: 400, });
    }

    const userData = getByUsername(username);

    if (!username) {
        return new NextResponse('Invalid username. Username not found.', { status: 404, });
    }

    if (!bcrypt.compareSync(userData.password, password)) {
        return new NextResponse('Invalid password.', { status: 400, });
    }

    return new NextResponse();
};