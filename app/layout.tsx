import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alpha Net",
  description: "KẾT NỐI KHÔNG GIỚI HẠN - CHIA SẺ KHÔNG RANH GIỚI",
  keywords: "forex trading, khóa học forex, trading miễn phí, scalping, nến thanh khoản, XAUUSD, Master Phúc, HP Trading",
  authors: [{ name: "Master Phúc - HP Trading" }],
  openGraph: {
    title: "Bí Quyết Sống Sót Cùng Crypto - Khóa Học Trading Miễn Phí",
    description: "Phương pháp Scalping với Nến Thanh Khoản - Dành cho 10% Trader Thắng Cuộc",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bí Quyết Sống Sót Cùng Crypto",
    description: "Khóa học trading miễn phí với Master Phúc",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.alphanet.vn/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
        <body className="antialiased">
            {children}
        </body>
    </html>
  );
}
