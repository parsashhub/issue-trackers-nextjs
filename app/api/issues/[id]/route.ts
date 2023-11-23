import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { issueSchema } from "@/app/validationSchemas";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) NextResponse.json("", { status: 404 });

  return NextResponse.json(issue);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json();
  const validation = issueSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) return NextResponse.json("", { status: 404 });

  await prisma.issue.update({ where: { id: parseInt(params.id) }, data: body });
  return NextResponse.json("updated");
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) return NextResponse.json("", { status: 404 });

  prisma.issue.delete({ where: { id: issue.id } });
}
