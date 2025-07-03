
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Vote, Users, Clock, TrendingUp, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Polls = () => {
  const [selectedPoll, setSelectedPoll] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [hasVoted, setHasVoted] = useState(false);

  const polls = [
    {
      id: 1,
      title: "Best Programming Language 2024",
      description: "Vote for your favorite programming language for web development",
      category: "Technology",
      totalVotes: 1247,
      timeLeft: "2 days left",
      options: [
        { id: 'js', name: 'JavaScript', votes: 425, percentage: 34.1 },
        { id: 'py', name: 'Python', votes: 312, percentage: 25.0 },
        { id: 'ts', name: 'TypeScript', votes: 298, percentage: 23.9 },
        { id: 'java', name: 'Java', votes: 212, percentage: 17.0 }
      ]
    },
    {
      id: 2,
      title: "Favorite Coffee Shop Chain",
      description: "Which coffee shop serves the best brew in your opinion?",
      category: "Food & Drink",
      totalVotes: 892,
      timeLeft: "5 days left",
      options: [
        { id: 'starbucks', name: 'Starbucks', votes: 267, percentage: 29.9 },
        { id: 'costa', name: 'Costa Coffee', votes: 223, percentage: 25.0 },
        { id: 'local', name: 'Local Coffee Shops', votes: 201, percentage: 22.5 },
        { id: 'dunkin', name: 'Dunkin Donuts', votes: 201, percentage: 22.5 }
      ]
    },
    {
      id: 3,
      title: "Best Movie Genre",
      description: "What's your favorite movie genre to watch?",
      category: "Entertainment",
      totalVotes: 2156,
      timeLeft: "1 week left",
      options: [
        { id: 'action', name: 'Action/Adventure', votes: 647, percentage: 30.0 },
        { id: 'comedy', name: 'Comedy', votes: 539, percentage: 25.0 },
        { id: 'drama', name: 'Drama', votes: 431, percentage: 20.0 },
        { id: 'scifi', name: 'Sci-Fi', votes: 323, percentage: 15.0 },
        { id: 'horror', name: 'Horror', votes: 216, percentage: 10.0 }
      ]
    }
  ];

  const handleVote = () => {
    if (selectedOption) {
      setHasVoted(true);
      // In a real app, this would send the vote to the backend
      console.log(`Voted for option: ${selectedOption} in poll: ${selectedPoll.id}`);
    }
  };

  const handleBackToPolls = () => {
    setSelectedPoll(null);
    setSelectedOption('');
    setHasVoted(false);
  };

  if (selectedPoll) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Button
              variant="ghost"
              onClick={handleBackToPolls}
              className="mb-6 hover:bg-blue-50"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Polls
            </Button>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    {selectedPoll.category}
                  </Badge>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{selectedPoll.timeLeft}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl">{selectedPoll.title}</CardTitle>
                <CardDescription className="text-blue-100">
                  {selectedPoll.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-6">
                {!hasVoted ? (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Cast Your Vote</h3>
                    <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
                      {selectedPoll.options.map((option) => (
                        <div key={option.id} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <RadioGroupItem value={option.id} id={option.id} />
                          <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                            {option.name}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    
                    <Button
                      onClick={handleVote}
                      disabled={!selectedOption}
                      className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
                    >
                      <Vote className="mr-2 h-4 w-4" />
                      Submit Vote
                    </Button>
                  </div>
                ) : (
                  <div>
                    <div className="text-center mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="text-green-600 font-semibold">✓ Vote Submitted Successfully!</div>
                      <div className="text-green-600 text-sm">Thank you for participating</div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5" />
                      Current Results
                    </h3>
                    
                    <div className="space-y-4">
                      {selectedPoll.options.map((option) => (
                        <div key={option.id} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{option.name}</span>
                            <div className="text-right">
                              <div className="text-sm font-semibold">{option.percentage}%</div>
                              <div className="text-xs text-gray-500">{option.votes} votes</div>
                            </div>
                          </div>
                          <Progress value={option.percentage} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-center mt-6 pt-6 border-t border-gray-200 text-gray-600">
                  <Users className="h-4 w-4 mr-2" />
                  <span className="text-sm">{selectedPoll.totalVotes.toLocaleString()} total votes</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Active Polls</h1>
          <p className="text-xl text-gray-600">Share your opinion on topics that matter to you</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {polls.map((poll) => (
            <Card key={poll.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md hover:scale-105">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    {poll.category}
                  </Badge>
                  <div className="flex items-center space-x-1 text-green-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">{poll.timeLeft}</span>
                  </div>
                </div>
                <CardTitle className="text-lg hover:text-blue-600 transition-colors">
                  {poll.title}
                </CardTitle>
                <CardDescription>{poll.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{poll.totalVotes.toLocaleString()} votes</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">{poll.options.length} options</span>
                  </div>
                </div>
                
                <Button
                  onClick={() => setSelectedPoll(poll)}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Vote className="mr-2 h-4 w-4" />
                  Vote Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/">
            <Button variant="outline" size="lg">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Polls;
