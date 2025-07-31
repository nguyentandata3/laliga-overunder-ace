import { Heart, Trophy } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-ocean text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white/10 p-2 rounded-full">
                <Trophy className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">La Liga Predictor</span>
            </div>
            <p className="text-white/80 text-sm">
              Nền tảng dự đoán kết quả Over/Under cho các trận đấu La Liga. 
              Tham gia cùng chúng tôi để có những trải nghiệm thú vị!
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-white/80 hover:text-white transition-colors">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="/rules" className="text-white/80 hover:text-white transition-colors">
                  Luật chơi
                </a>
              </li>
              <li>
                <a href="/rewards" className="text-white/80 hover:text-white transition-colors">
                  Phần thưởng
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Thông tin liên hệ</h3>
            <div className="text-sm text-white/80 space-y-2">
              <p>Email: contact@laliagpredictor.com</p>
              <p>Telegram: @laliagpredictor</p>
              <p>Hotline: 1900-LALIGA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
            <p>&copy; 2024 La Liga Predictor. Tất cả quyền được bảo lưu.</p>
            <p className="flex items-center mt-2 md:mt-0">
              Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> for football fans
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;