import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Gift, Star, Crown, Target } from "lucide-react";

const Rewards = () => {
  const monthlyRewards = [
    {
      position: "1st",
      icon: <Crown className="h-8 w-8 text-yellow-500" />,
      title: "Quán quân tháng",
      prize: "5,000,000 VNĐ",
      badge: "gold",
      description: "Người chơi có điểm số cao nhất trong tháng"
    },
    {
      position: "2nd",
      icon: <Trophy className="h-8 w-8 text-gray-400" />,
      title: "Á quân tháng",
      prize: "3,000,000 VNĐ",
      badge: "silver",
      description: "Người chơi có điểm số cao thứ 2 trong tháng"
    },
    {
      position: "3rd",
      icon: <Medal className="h-8 w-8 text-amber-600" />,
      title: "Hạng 3 tháng",
      prize: "1,000,000 VNĐ",
      badge: "bronze",
      description: "Người chơi có điểm số cao thứ 3 trong tháng"
    },
  ];

  const seasonRewards = [
    {
      title: "Champion mùa giải",
      prize: "50,000,000 VNĐ",
      icon: <Crown className="h-12 w-12 text-yellow-500" />,
      description: "Người chơi có tổng điểm cao nhất toàn mùa giải"
    },
    {
      title: "Runner-up mùa giải",
      prize: "30,000,000 VNĐ", 
      icon: <Trophy className="h-12 w-12 text-gray-400" />,
      description: "Người chơi có tổng điểm cao thứ 2 toàn mùa giải"
    },
    {
      title: "Top 3 mùa giải",
      prize: "15,000,000 VNĐ",
      icon: <Medal className="h-12 w-12 text-amber-600" />,
      description: "Người chơi có tổng điểm cao thứ 3 toàn mùa giải"
    },
  ];

  const specialRewards = [
    {
      title: "Perfect Round",
      description: "Dự đoán đúng 100% trong 1 vòng",
      prize: "500,000 VNĐ",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Hot Streak",
      description: "Dự đoán đúng 5 vòng liên tiếp",
      prize: "1,000,000 VNĐ",
      icon: <Star className="h-6 w-6" />
    },
    {
      title: "Consistency King",
      description: "Tham gia đầy đủ 95% số vòng",
      prize: "2,000,000 VNĐ",
      icon: <Gift className="h-6 w-6" />
    },
  ];

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "gold": return "default";
      case "silver": return "secondary";
      case "bronze": return "outline";
      default: return "default";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="bg-gradient-ocean p-4 rounded-full">
                <Gift className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-primary">Phần thưởng</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hệ thống phần thưởng hấp dẫn dành cho những người chơi xuất sắc nhất
            </p>
          </div>

          {/* Season Rewards */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-primary">🏆 Giải thưởng mùa giải</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {seasonRewards.map((reward, index) => (
                <Card key={index} className="shadow-card-ocean hover:shadow-ocean transition-all duration-300 transform hover:scale-105">
                  <CardHeader className="text-center bg-gradient-ocean-light">
                    <div className="flex justify-center mb-2">
                      {reward.icon}
                    </div>
                    <CardTitle className="text-primary">{reward.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="text-3xl font-bold text-ocean-primary">{reward.prize}</div>
                    <p className="text-sm text-muted-foreground">{reward.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Monthly Rewards */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-primary">📅 Giải thưởng hàng tháng</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {monthlyRewards.map((reward, index) => (
                <Card key={index} className="shadow-card-ocean hover:shadow-ocean transition-all duration-300 transform hover:scale-105">
                  <CardHeader className="text-center bg-gradient-ocean-light">
                    <div className="flex justify-center items-center gap-2 mb-2">
                      {reward.icon}
                      <Badge variant={getBadgeVariant(reward.badge)} className="text-xs">
                        {reward.position}
                      </Badge>
                    </div>
                    <CardTitle className="text-primary">{reward.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="text-2xl font-bold text-ocean-primary">{reward.prize}</div>
                    <p className="text-sm text-muted-foreground">{reward.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Special Achievements */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-primary">🌟 Thành tựu đặc biệt</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specialRewards.map((reward, index) => (
                <Card key={index} className="shadow-card-ocean hover:shadow-ocean transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-ocean p-3 rounded-full text-white">
                        {reward.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary mb-2">{reward.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{reward.description}</p>
                        <div className="font-bold text-ocean-primary">{reward.prize}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Prize Distribution Rules */}
          <Card className="shadow-card-ocean">
            <CardHeader className="bg-gradient-ocean-light">
              <CardTitle className="text-primary text-center">📋 Quy định phát thưởng</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-ocean-primary">Thời gian phát thưởng</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Giải thưởng tháng: Trong vòng 7 ngày đầu tháng tiếp theo</li>
                    <li>• Giải thưởng mùa giải: Trong vòng 15 ngày sau khi kết thúc mùa giải</li>
                    <li>• Thành tựu đặc biệt: Trong vòng 3 ngày sau khi đạt được</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-ocean-primary">Điều kiện nhận thưởng</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Tài khoản phải được xác thực đầy đủ</li>
                    <li>• Không vi phạm bất kỳ quy tắc nào trong thời gian thi đấu</li>
                    <li>• Tham gia tối thiểu 80% số vòng đấu trong tháng/mùa giải</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-ocean-light rounded-lg">
                <p className="text-sm text-center">
                  <strong>Lưu ý:</strong> Tất cả giải thưởng sẽ được chuyển khoản trực tiếp vào tài khoản ngân hàng đã đăng ký. 
                  Thuế thu nhập cá nhân (nếu có) sẽ do người nhận chịu trách nhiệm.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Rewards;