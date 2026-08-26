import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://noir-word-flower.hf5rh9rs8g.chatgpt.site'),
  title: 'ノワールの言葉の花',
  description:
    '黒猫ノワールと、人の言葉を糧に咲く「言の花」を育てる月夜の休息サイト。',
  openGraph: {
    title: 'ノワールの言葉の花',
    description: '言葉が花になる、月明かりの庭。',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ノワールの言葉の花',
    description: '言葉が花になる、月明かりの庭。',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
