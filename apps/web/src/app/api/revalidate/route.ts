import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const { REVALIDATE_SECRET_KEY } = process.env;

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get("key");

  if (!key || key !== REVALIDATE_SECRET_KEY) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    revalidatePath("/", "layout");
    return NextResponse.json({
      message: "Successful request",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error },
      { status: 500 }
    );
  }
}
