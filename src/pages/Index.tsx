import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Vote, BarChart3, Users, Shield, TrendingUp, Award, LogOut, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header with user info */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Vote className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">VoteHub</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <User className="h-4 w-4" />
                <span className="text-sm">{user?.email}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                className="flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Your Voice, <span className="text-blue-600">Your Vote</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our modern voting platform where democracy meets technology. 
              Participate in polls, elections, and make your opinion count in a secure, transparent environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/polls">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  <Vote className="mr-2 h-5 w-5" />
                  Start Voting
                </Button>
              </Link>
              <Link to="/results">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  View Results
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose VoteHub?</h2>
            <p className="text-lg text-gray-600">Experience the future of democratic participation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Vote className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Easy Voting</CardTitle>
                <CardDescription>Simple, intuitive interface for all users</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Secure & Private</CardTitle>
                <CardDescription>Your vote is protected with advanced security</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Real-time Results</CardTitle>
                <CardDescription>Watch results update as votes come in</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Community Driven</CardTitle>
                <CardDescription>Join thousands of engaged citizens</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Quick Access</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/polls" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md group-hover:scale-105">
                <CardHeader className="text-center">
                  <Vote className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">Active Polls</CardTitle>
                  <CardDescription>Vote on current community polls</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="w-full justify-center">
                    12 Active
                  </Badge>
                </CardContent>
              </Card>
            </Link>

            <Link to="/elections" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md group-hover:scale-105">
                <CardHeader className="text-center">
                  <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-xl group-hover:text-green-600 transition-colors">Elections</CardTitle>
                  <CardDescription>Participate in formal elections</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="w-full justify-center">
                    3 Upcoming
                  </Badge>
                </CardContent>
              </Card>
            </Link>

            <Link to="/results" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md group-hover:scale-105">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">Results</CardTitle>
                  <CardDescription>View live voting results</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="w-full justify-center">
                    Live Updates
                  </Badge>
                </CardContent>
              </Card>
            </Link>

            <Link to="/admin" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md group-hover:scale-105">
                <CardHeader className="text-center">
                  <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">Admin Panel</CardTitle>
                  <CardDescription>Manage polls and elections</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="w-full justify-center">
                    Admin Only
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">50,000+</h3>
              <p className="text-gray-600">Active Voters</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-green-600 mb-2">1,200+</h3>
              <p className="text-gray-600">Completed Polls</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-purple-600 mb-2">99.9%</h3>
              <p className="text-gray-600">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Vote className="h-6 w-6" />
                <span className="text-xl font-bold">VoteHub</span>
              </div>
              <p className="text-gray-400">
                Empowering democracy through secure, accessible voting technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/polls" className="hover:text-white transition-colors">Polls</Link></li>
                <li><Link to="/elections" className="hover:text-white transition-colors">Elections</Link></li>
                <li><Link to="/results" className="hover:text-white transition-colors">Results</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
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
