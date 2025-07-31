import Layout from "@/components/Layout";
import PredictionForm from "@/components/PredictionForm";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Target, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/laliga-hero.jpg";

const Index = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Dự đoán chính xác",
      description: "Sử dụng kiến thức bóng đá và trực giác để dự đoán kết quả Over/Under các trận đấu La Liga."
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Giải thưởng hấp dẫn",
      description: "Phần thưởng lên đến hàng chục triệu đồng cho những người chơi xuất sắc nhất mỗi tháng."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Cộng đồng sôi động",
      description: "Tham gia cùng hàng nghìn fan bóng đá khác trong cuộc thi dự đoán thú vị này."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Theo dõi thống kê",
      description: "Xem bảng xếp hạng, lịch sử dự đoán và thống kê chi tiết của bạn qua từng vòng đấu."
    },
  ];

  return (
    <Layout>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-ocean">
          <div className="absolute inset-0 bg-black/20"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: `url(${heroImage})` }}
          ></div>
          <div className="relative container mx-auto px-4 py-20">
            <div className="text-center text-white space-y-6 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-float">
                La Liga Predictor
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
                Tham gia dự đoán kết quả Over/Under cho tất cả các trận đấu La Liga. 
                Thử thách khả năng phân tích bóng đá của bạn và giành những phần thưởng hấp dẫn!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="text-lg font-semibold">🏆 Mùa giải 2024-2025</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="text-lg font-semibold">💰 Giải thưởng đến 50 triệu VNĐ</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Tại sao chọn La Liga Predictor?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nền tảng dự đoán bóng đá chuyên nghiệp với hệ thống tính điểm công bằng và minh bạch
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card-ocean hover:shadow-ocean transition-all duration-300 transform hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-ocean p-4 rounded-full w-fit mx-auto mb-4 text-white group-hover:animate-pulse-ocean">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Prediction Form Section */}
        <section className="container mx-auto px-4 py-16 bg-gradient-ocean-light">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Tham gia dự đoán ngay!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hoàn thành form dự đoán dưới đây để tham gia vòng đấu hiện tại
            </p>
          </div>
          
          <PredictionForm round="Vòng 1/38 của giải La Liga 2024-2025" />
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Thống kê ấn tượng
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-ocean-primary mb-2">10,000+</div>
              <div className="text-lg text-muted-foreground">Người chơi tham gia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-ocean-primary mb-2">380</div>
              <div className="text-lg text-muted-foreground">Trận đấu mỗi mùa</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-ocean-primary mb-2">100M+</div>
              <div className="text-lg text-muted-foreground">VNĐ giải thưởng</div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
