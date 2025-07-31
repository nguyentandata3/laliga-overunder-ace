import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Clock, Trophy } from "lucide-react";

interface Match {
  id: number;
  home_team: string;
  away_team: string;
  home_logo: string;
  away_logo: string;
  match_time: string;
  odds: string;
}

interface PredictionFormProps {
  round: string;
}

const PredictionForm = ({ round }: PredictionFormProps) => {
  const [username, setUsername] = useState("");
  const [telegram, setTelegram] = useState("");
  const [predictions, setPredictions] = useState<{[key: number]: 'over' | 'under' | null}>({});
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Mock data for demonstration - in real app, fetch from data.php
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockMatches: Match[] = [
        {
          id: 1,
          home_team: "Real Madrid",
          away_team: "Barcelona",
          home_logo: "🏆",
          away_logo: "⚽",
          match_time: "20:00 - 15/12/2024",
          odds: "2.5"
        },
        {
          id: 2,
          home_team: "Atletico Madrid",
          away_team: "Sevilla",
          home_logo: "🔴",
          away_logo: "⚪",
          match_time: "18:00 - 15/12/2024",
          odds: "2.25"
        },
        {
          id: 3,
          home_team: "Valencia",
          away_team: "Villarreal",
          home_logo: "🍊",
          away_logo: "🟡",
          match_time: "16:00 - 15/12/2024",
          odds: "2.75"
        },
        {
          id: 4,
          home_team: "Real Sociedad",
          away_team: "Athletic Bilbao",
          home_logo: "🔵",
          away_logo: "🔴",
          match_time: "21:00 - 15/12/2024",
          odds: "2.0"
        },
        {
          id: 5,
          home_team: "Betis",
          away_team: "Getafe",
          home_logo: "🟢",
          away_logo: "🔵",
          match_time: "19:00 - 15/12/2024",
          odds: "2.5"
        }
      ];
      setMatches(mockMatches);
      setLoading(false);
    }, 1000);
  }, []);

  const handlePrediction = (matchId: number, prediction: 'over' | 'under') => {
    setPredictions(prev => ({
      ...prev,
      [matchId]: prediction
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      toast({
        title: "Lỗi",
        description: "Vui lòng nhập tên người dùng",
        variant: "destructive",
      });
      return;
    }

    const completePredictions = Object.keys(predictions).length === matches.length;
    if (!completePredictions) {
      toast({
        title: "Lỗi",
        description: "Vui lòng hoàn thành tất cả dự đoán",
        variant: "destructive",
      });
      return;
    }

    // Here you would submit to your backend
    console.log({ username, telegram, predictions });
    
    toast({
      title: "Thành công!",
      description: "Dự đoán của bạn đã được gửi thành công",
    });

    // Reset form
    setUsername("");
    setTelegram("");
    setPredictions({});
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-card-ocean">
      <CardHeader className="bg-gradient-ocean-light">
        <CardTitle className="text-2xl font-bold text-center text-primary flex items-center justify-center gap-2">
          <Trophy className="h-6 w-6" />
          {round}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* User Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="username">Tên người dùng *</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nhập tên của bạn"
                className="transition-all duration-300 focus:shadow-ocean"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telegram">Telegram (tùy chọn)</Label>
              <Input
                id="telegram"
                type="text"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                placeholder="@telegram_username"
                className="transition-all duration-300 focus:shadow-ocean"
              />
            </div>
          </div>

          {/* Matches */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Dự đoán kết quả các trận đấu:</h3>
            <div className="grid gap-4">
              {matches.map((match) => (
                <Card key={match.id} className="border-2 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      {/* Match Info */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{match.match_time}</span>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{match.home_logo}</span>
                            <span className="font-medium">{match.home_team}</span>
                          </div>
                          <span className="text-xl font-bold text-primary">VS</span>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{match.away_team}</span>
                            <span className="text-2xl">{match.away_logo}</span>
                          </div>
                        </div>
                        <div className="mt-2">
                          <span className="text-sm bg-ocean-light px-2 py-1 rounded-full">
                            Kèo: {match.odds}
                          </span>
                        </div>
                      </div>

                      {/* Prediction Buttons */}
                      <div className="flex gap-3">
                        <Button
                          type="button"
                          variant={predictions[match.id] === 'over' ? 'over' : 'outline'}
                          onClick={() => handlePrediction(match.id, 'over')}
                          className="min-w-[80px]"
                        >
                          Over
                        </Button>
                        <Button
                          type="button"
                          variant={predictions[match.id] === 'under' ? 'under' : 'outline'}
                          onClick={() => handlePrediction(match.id, 'under')}
                          className="min-w-[80px]"
                        >
                          Under
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button type="submit" size="lg" className="min-w-[200px]">
              Gửi dự đoán
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default PredictionForm;