import '@/assets/styles/globals.scss'
import {dmSans} from "@/config/fonts";

// const inter = Inter({ subsets: ['latin'] })
// const dmSans = DM_Sans({weight: ['700', '500', '400'], subsets: ['latin']})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>Teslabank</title>
      </head>
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
