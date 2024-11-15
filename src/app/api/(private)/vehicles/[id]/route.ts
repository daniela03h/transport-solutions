import { HttpClient } from "@/app/infrastructure/utils/client-http";
import { NextResponse} from "next/server";


const url = `https://communnityvolunteering-production.up.railway.app/api/v1/vehicles`;
const client = new HttpClient();
export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const headers = await client.getHeader();
  const response = await fetch(`${url}/${params.id}`, {
    headers: headers,
    method: "DELETE",
  });
  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}