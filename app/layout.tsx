import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["vietnamese", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bí Quyết Sống Sót Cùng Forex - Khóa Học Trading Miễn Phí",
  description: "Khóa học miễn phí 3 buổi online, giúp bạn đọc vị dòng tiền cá mập và giao dịch Vàng XAUUSD an toàn – lợi nhuận ổn định. Phương pháp Scalping với Nến Thanh Khoản.",
  keywords: "forex trading, khóa học forex, trading miễn phí, scalping, nến thanh khoản, XAUUSD, Master Phúc, HP Trading",
  authors: [{ name: "Master Phúc - HP Trading" }],
  openGraph: {
    title: "Bí Quyết Sống Sót Cùng Forex - Khóa Học Trading Miễn Phí",
    description: "Phương pháp Scalping với Nến Thanh Khoản - Dành cho 10% Trader Thắng Cuộc",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bí Quyết Sống Sót Cùng Forex",
    description: "Khóa học trading miễn phí với Master Phúc",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.tradedudicho.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
