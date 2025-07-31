import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle, Trophy, Target } from "lucide-react";

const Rules = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="bg-gradient-ocean p-4 rounded-full">
                <Trophy className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-primary">Luật chơi</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tìm hiểu các quy tắc và điều khoản khi tham gia dự đoán kết quả Over/Under La Liga
            </p>
          </div>

          {/* Basic Rules */}
          <Card className="shadow-card-ocean">
            <CardHeader className="bg-gradient-ocean-light">
              <CardTitle className="flex items-center gap-2 text-primary">
                <Target className="h-6 w-6" />
                Quy tắc cơ bản
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p><strong>Dự đoán Over/Under:</strong> Người chơi dự đoán tổng số bàn thắng của trận đấu sẽ cao hơn (Over) hoặc thấp hơn (Under) so với kèo đã đưa ra.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p><strong>Thời gian dự đoán:</strong> Phải hoàn thành dự đoán trước giờ bóng lăn của trận đấu đầu tiên trong vòng.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p><strong>Dự đoán đầy đủ:</strong> Người chơi phải dự đoán tất cả các trận đấu trong vòng để tham gia.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p><strong>Kết quả chính thức:</strong> Chỉ tính kết quả trong 90 phút chính thức + thời gian bù giờ.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scoring System */}
          <Card className="shadow-card-ocean">
            <CardHeader className="bg-gradient-ocean-light">
              <CardTitle className="flex items-center gap-2 text-primary">
                <Trophy className="h-6 w-6" />
                Hệ thống tính điểm
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-600">Điểm thưởng</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Dự đoán đúng:</span>
                      <span className="font-semibold text-green-600">+10 điểm</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Hoàn thành đủ vòng:</span>
                      <span className="font-semibold text-green-600">+5 điểm bonus</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Dự đoán đúng 100%:</span>
                      <span className="font-semibold text-green-600">+50 điểm bonus</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-red-600">Điểm trừ</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Dự đoán sai:</span>
                      <span className="font-semibold text-red-600">0 điểm</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Không hoàn thành:</span>
                      <span className="font-semibold text-red-600">-10 điểm</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Vi phạm quy tắc:</span>
                      <span className="font-semibold text-red-600">-20 điểm</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Notes */}
          <Card className="shadow-card-ocean border-amber-200">
            <CardHeader className="bg-amber-50">
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <AlertCircle className="h-6 w-6" />
                Lưu ý quan trọng
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-amber-50 rounded-md">
                  <p><strong>Thay đổi dự đoán:</strong> Không được phép thay đổi dự đoán sau khi đã gửi thành công.</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-md">
                  <p><strong>Trận đấu bị hoãn:</strong> Nếu trận đấu bị hoãn quá 24h, sẽ được loại khỏi vòng tính điểm.</p>
                </div>
                <div className="p-3 bg-red-50 rounded-md">
                  <p><strong>Fair Play:</strong> Nghiêm cấm sử dụng nhiều tài khoản. Vi phạm sẽ bị disqualify toàn bộ điểm số.</p>
                </div>
                <div className="p-3 bg-green-50 rounded-md">
                  <p><strong>Tranh chấp:</strong> Mọi tranh chấp sẽ được giải quyết dựa trên kết quả chính thức từ La Liga.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card className="shadow-card-ocean">
            <CardHeader className="bg-gradient-ocean-light">
              <CardTitle className="text-primary">Lịch trình mùa giải</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center text-white font-bold">
                    38
                  </div>
                  <div>
                    <p className="font-semibold">Tổng số vòng đấu trong mùa giải</p>
                    <p className="text-sm text-muted-foreground">Từ tháng 8 đến tháng 5 năm sau</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center text-white font-bold">
                    10
                  </div>
                  <div>
                    <p className="font-semibold">Số trận đấu mỗi vòng</p>
                    <p className="text-sm text-muted-foreground">20 đội thi đấu vòng tròn</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Rules;