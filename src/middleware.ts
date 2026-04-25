import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Define que qualquer rota que comece com /secretaria precisa de proteção
  const isSecretariaPage = request.nextUrl.pathname.startsWith('/secretaria');
  
  // Verifica se o cookie de login "ipvp_auth" existe
  const authCookie = request.cookies.get('ipvp_auth');

  if (isSecretariaPage && !authCookie) {
    // Se tentar acessar a secretaria sem estar logado, redireciona para o login
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Configura o middleware para monitorar apenas a pasta da secretaria
export const config = {
  matcher: ['/secretaria/:path*'],
}