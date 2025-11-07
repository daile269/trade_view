import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Alpha Net",
  description: "KẾT NỐI KHÔNG GIỚI HẠN - CHIA SẺ KHÔNG RANH GIỚI",
  keywords: "forex trading, khóa học forex, trading miễn phí, scalping, nến thanh khoản, XAUUSD, Thế Bảo, Crypto, Alphanet",
  authors: [{ name: "Thế Bảo" }],
  openGraph: {
    title: "Bí Quyết Sống Sót Cùng Crypto - Khóa Học Trading Miễn Phí",
    description: "Phương pháp Scalping với Nến Thanh Khoản - Dành cho 10% Trader Thắng Cuộc",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bí Quyết Sống Sót Cùng Crypto",
    description: "Cộng đồng Alpha Net, cộng đồng crypto số một việt nam",
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
      <body className="antialiased" cz-shortcut-listen="true">
        <ToastContainer
          position="top-right"
          autoClose={2000}
        />
        {children}
      </body>
    </html>
  );
}
