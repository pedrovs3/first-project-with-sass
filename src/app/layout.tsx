import '@/assets/styles/globals.css'
import {dmSans} from "@/config/fonts";

// const inter = Inter({ subsets: ['latin'] })
// const dmSans = DM_Sans({weight: ['700', '500', '400'], subsets: ['latin']})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
