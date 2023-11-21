import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

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
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) return NextResponse.json("", { status: 404 });

  await prisma.issue.update({ where: { id: parseInt(params.id) }, data: body });
  NextResponse.json("", { status: 203 });
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
