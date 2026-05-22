import { NextRequest, NextResponse } from "next/server";

/**
 * Endpoint para salvar resultados do quiz.
 *
 * ⚠️ PRIVACIDADE: Este endpoint é OPCIONAL no MVP.
 * O quiz usa localStorage por padrão.
 * Só ativar se houver necessidade confirmada de persistência server-side.
 *
 * Ver documentação completa sobre privacidade e ética no prompt do projeto.
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.answers || typeof body.totalScore !== "number") {
      return NextResponse.json(
        { error: "Dados incompletos." },
        { status: 400 }
      );
    }

    // [MOCK] No MVP, apenas retorna sucesso.
    return NextResponse.json(
      { success: true, message: "Resultado registrado." },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Erro ao processar." },
      { status: 500 }
    );
  }
}
