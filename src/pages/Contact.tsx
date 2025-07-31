import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MessageCircle, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin bắt buộc",
        variant: "destructive",
      });
      return;
    }

    // Here you would send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Thành công!",
      description: "Tin nhắn của bạn đã được gửi. Chúng tôi sẽ phản hồi sớm nhất có thể.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "contact@laliagpredictor.com",
      description: "Gửi email cho chúng tôi bất cứ lúc nào"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Telegram",
      content: "@laliagpredictor",
      description: "Kênh Telegram chính thức"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Hotline",
      content: "1900-LALIGA",
      description: "Hỗ trợ 24/7"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Địa chỉ",
      content: "123 La Liga Street, Football City",
      description: "Văn phòng chính"
    }
  ];

  const operatingHours = [
    { day: "Thứ 2 - Thứ 6", hours: "8:00 - 18:00" },
    { day: "Thứ 7", hours: "9:00 - 17:00" },
    { day: "Chủ nhật", hours: "10:00 - 16:00" },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="bg-gradient-ocean p-4 rounded-full">
                <Mail className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-primary">Liên hệ</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Có thắc mắc hoặc cần hỗ trợ? Đừng ngần ngại liên hệ với chúng tôi!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card-ocean">
                <CardHeader className="bg-gradient-ocean-light">
                  <CardTitle className="text-primary flex items-center gap-2">
                    <Send className="h-6 w-6" />
                    Gửi tin nhắn
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Họ và tên *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Nhập họ và tên"
                          className="transition-all duration-300 focus:shadow-ocean"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Nhập địa chỉ email"
                          className="transition-all duration-300 focus:shadow-ocean"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Chủ đề</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Chủ đề tin nhắn"
                        className="transition-all duration-300 focus:shadow-ocean"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Nội dung tin nhắn *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Nhập nội dung tin nhắn của bạn..."
                        className="min-h-[120px] transition-all duration-300 focus:shadow-ocean"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Gửi tin nhắn
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="shadow-card-ocean">
                <CardHeader className="bg-gradient-ocean-light">
                  <CardTitle className="text-primary">Thông tin liên hệ</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-gradient-ocean p-2 rounded-full text-white">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary">{info.title}</h4>
                        <p className="font-medium">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Operating Hours */}
              <Card className="shadow-card-ocean">
                <CardHeader className="bg-gradient-ocean-light">
                  <CardTitle className="text-primary flex items-center gap-2">
                    <Clock className="h-6 w-6" />
                    Giờ làm việc
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {operatingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-ocean-primary font-semibold">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-ocean-light rounded-lg">
                    <p className="text-sm text-center">
                      <strong>Lưu ý:</strong> Hỗ trợ khẩn cấp 24/7 qua Telegram
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Quick Links */}
              <Card className="shadow-card-ocean">
                <CardHeader className="bg-gradient-ocean-light">
                  <CardTitle className="text-primary">Câu hỏi thường gặp</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <Button variant="ghost" className="w-full justify-start text-left" asChild>
                      <a href="/rules">Làm sao để tham gia dự đoán?</a>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-left" asChild>
                      <a href="/rewards">Khi nào được nhận thưởng?</a>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-left" asChild>
                      <a href="/rules">Quy tắc tính điểm như thế nào?</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;