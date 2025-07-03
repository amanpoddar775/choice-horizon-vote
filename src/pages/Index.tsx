
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Vote, Users, BarChart3, Shield, ArrowRight, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [activeTab, setActiveTab] = useState('polls');

  const featuredPolls = [
    {
      id: 1,
      title: "Best Programming Language 2024",
      description: "Vote for your favorite programming language",
      totalVotes: 1247,
      timeLeft: "2 days left",
      category: "Technology"
    },
    {
      id: 2,
      title: "Favorite Coffee Shop Chain",
      description: "Which coffee shop serves the best brew?",
      totalVotes: 892,
      timeLeft: "5 days left",
      category: "Food & Drink"
    },
    {
      id: 3,
      title: "Best Movie of the Year",
      description: "Cast your vote for the year's best film",
      totalVotes: 2156,
      timeLeft: "1 week left",
      category: "Entertainment"
    }
  ];

  const featuredElections = [
    {
      id: 1,
      title: "Student Council President",
      description: "Choose your next student body leader",
      totalVotes: 3421,
      timeLeft: "3 days left",
      category: "Education"
    },
    {
      id: 2,
      title: "Community Board Election",
      description: "Select your neighborhood representatives",
      totalVotes: 1876,
      timeLeft: "1 week left",
      category: "Government"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-xl">
                <Vote className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">VoteHub</h1>
                <p className="text-sm text-gray-500">Democratic Participation Platform</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/polls" className="text-gray-600 hover:text-blue-600 transition-colors">Polls</Link>
              <Link to="/elections" className="text-gray-600 hover:text-blue-600 transition-colors">Elections</Link>
              <Link to="/results" className="text-gray-600 hover:text-blue-600 transition-colors">Results</Link>
              <Link to="/admin" className="text-gray-600 hover:text-blue-600 transition-colors">Admin</Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="hidden sm:inline-flex">
                Sign In
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Your Voice, <span className="text-blue-600">Your Vote</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Participate in polls and elections that matter. Make your opinion count in a secure, 
              transparent, and user-friendly voting platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                Start Voting
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                View Results
                <BarChart3 className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose VoteHub?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the future of digital voting with our secure, transparent, and intuitive platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Secure & Transparent</h4>
              <p className="text-gray-600">Advanced security measures ensure your vote is protected and counted accurately</p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:bg-green-50 transition-colors">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Community Driven</h4>
              <p className="text-gray-600">Join thousands of users making their voices heard on topics that matter</p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:bg-purple-50 transition-colors">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Real-time Results</h4>
              <p className="text-gray-600">Watch results update live and see detailed analytics and insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Voting Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Active Voting</h3>
            <p className="text-gray-600">Participate in ongoing polls and elections</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('polls')}
                className={`px-6 py-2 rounded-md transition-colors ${
                  activeTab === 'polls' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Polls
              </button>
              <button
                onClick={() => setActiveTab('elections')}
                className={`px-6 py-2 rounded-md transition-colors ${
                  activeTab === 'elections' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Elections
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeTab === 'polls' ? featuredPolls : featuredElections).map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow cursor-pointer border-0 shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {item.category}
                    </Badge>
                    <span className="text-sm text-green-600 font-medium">{item.timeLeft}</span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{item.totalVotes.toLocaleString()} votes</span>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Vote Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <div className="text-blue-100">Total Votes Cast</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1,200+</div>
              <div className="text-blue-100">Active Polls</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25,000+</div>
              <div className="text-blue-100">Registered Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Reliability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-xl">
                  <Vote className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">VoteHub</span>
              </div>
              <p className="text-gray-400">
                Empowering democratic participation through secure and transparent digital voting.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Polls</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Elections</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Results</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VoteHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
