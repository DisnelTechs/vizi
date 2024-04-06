import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path");
  if (!path) {
    return Response.json({ message: "Path not provided" }, { status: 400 });
  }
  revalidatePath(path);
  return Response.json({ message: "Revalidation done" });
}
