
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Award, Clock, ArrowLeft, Download, Share, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Results = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const pollResults = [
    {
      id: 1,
      title: "Best Programming Language 2024",
      category: "Technology",
      status: "Completed",
      totalVotes: 1247,
      completedDate: "2 days ago",
      results: [
        { name: 'JavaScript', votes: 425, percentage: 34.1, color: '#f7df1e' },
        { name: 'Python', votes: 312, percentage: 25.0, color: '#3776ab' },
        { name: 'TypeScript', votes: 298, percentage: 23.9, color: '#3178c6' },
        { name: 'Java', votes: 212, percentage: 17.0, color: '#ed8b00' }
      ]
    },
    {
      id: 2,
      title: "Favorite Coffee Shop Chain",
      category: "Food & Drink",
      status: "Active",
      totalVotes: 892,
      timeLeft: "5 days left",
      results: [
        { name: 'Starbucks', votes: 267, percentage: 29.9, color: '#00704A' },
        { name: 'Costa Coffee', votes: 223, percentage: 25.0, color: '#C8102E' },
        { name: 'Local Shops', votes: 201, percentage: 22.5, color: '#8B4513' },
        { name: 'Dunkin', votes: 201, percentage: 22.5, color: '#FF6600' }
      ]
    }
  ];

  const electionResults = [
    {
      id: 1,
      title: "Student Council President",
      category: "Education",
      status: "Active",
      totalVotes: 3421,
      timeLeft: "3 days left",
      candidates: [
        {
          name: 'Sarah Johnson',
          party: 'Progressive Student Alliance',
          votes: 1368,
          percentage: 40.0,
          avatar: '/placeholder.svg',
          color: '#3B82F6'
        },
        {
          name: 'Michael Chen',
          party: 'Unity Coalition',
          votes: 1025,
          percentage: 30.0,
          avatar: '/placeholder.svg',
          color: '#EF4444'
        },
        {
          name: 'Emily Rodriguez',
          party: 'Student Voice Movement',
          votes: 855,
          percentage: 25.0,
          avatar: '/placeholder.svg',
          color: '#10B981'
        },
        {
          name: 'David Kim',
          party: 'Independent',
          votes: 171,
          percentage: 5.0,
          avatar: '/placeholder.svg',
          color: '#F59E0B'
        }
      ]
    }
  ];

  const COLORS = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#F97316'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Voting Results</h1>
          <p className="text-xl text-gray-600">Real-time results and comprehensive analytics</p>
        </div>

        <Tabs defaultValue="polls" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="polls" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Poll Results</span>
            </TabsTrigger>
            <TabsTrigger value="elections" className="flex items-center space-x-2">
              <Award className="h-4 w-4" />
              <span>Election Results</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="polls">
            <div className="space-y-8">
              {pollResults.map((poll) => (
                <Card key={poll.id} className="border-0 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="bg-white/20 text-white">
                          {poll.category}
                        </Badge>
                        <Badge variant="secondary" className={`${poll.status === 'Completed' ? 'bg-green-500/20' : 'bg-yellow-500/20'} text-white`}>
                          {poll.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">
                          {poll.status === 'Completed' ? poll.completedDate : poll.timeLeft}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{poll.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-blue-100">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span className="text-sm">{poll.totalVotes.toLocaleString()} votes</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4" />
                        <span className="text-sm">{poll.results.length} options</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Bar Chart */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Vote Distribution</h3>
                        <ResponsiveContainer width="100%" height={200}>
                          <BarChart data={poll.results}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="votes" fill="#3B82F6" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>

                      {/* Pie Chart */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Percentage Breakdown</h3>
                        <ResponsiveContainer width="100%" height={200}>
                          <PieChart>
                            <Pie
                              data={poll.results}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={({ name, percentage }) => `${name}: ${percentage}%`}
                              outerRadius={60}
                              fill="#8884d8"
                              dataKey="votes"
                            >
                              {poll.results.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color || COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Detailed Results */}
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold mb-4">Detailed Results</h3>
                      <div className="space-y-4">
                        {poll.results
                          .sort((a, b) => b.percentage - a.percentage)
                          .map((result, index) => (
                          <div key={result.name} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="flex items-center space-x-2">
                                  <Trophy className={`h-4 w-4 ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-gray-400' : index === 2 ? 'text-amber-600' : 'text-gray-300'}`} />
                                  <span className="font-medium">{result.name}</span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-semibold">{result.percentage}%</div>
                                <div className="text-sm text-gray-500">{result.votes} votes</div>
                              </div>
                            </div>
                            <Progress value={result.percentage} className="h-3" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-end space-x-3 mt-6 pt-6 border-t border-gray-200">
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="elections">
            <div className="space-y-8">
              {electionResults.map((election) => (
                <Card key={election.id} className="border-0 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="bg-white/20 text-white">
                          {election.category}
                        </Badge>
                        <Badge variant="secondary" className={`${election.status === 'Completed' ? 'bg-green-500/20' : 'bg-yellow-500/20'} text-white`}>
                          {election.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{election.timeLeft}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{election.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-purple-100">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span className="text-sm">{election.totalVotes.toLocaleString()} votes</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="h-4 w-4" />
                        <span className="text-sm">{election.candidates.length} candidates</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Candidate Rankings */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Current Standings</h3>
                        <div className="space-y-4">
                          {election.candidates
                            .sort((a, b) => b.percentage - a.percentage)
                            .map((candidate, index) => (
                            <div key={candidate.name} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                              <div className="text-lg font-bold text-gray-400 w-6">
                                #{index + 1}
                              </div>
                              <Avatar className="h-10 w-10">
                                <AvatarImage src={candidate.avatar} />
                                <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="font-semibold">{candidate.name}</div>
                                <div className="text-sm text-gray-600">{candidate.party}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold">{candidate.percentage}%</div>
                                <div className="text-xs text-gray-500">{candidate.votes} votes</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Vote Share Chart */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Vote Share</h3>
                        <ResponsiveContainer width="100%" height={300}>
                          <PieChart>
                            <Pie
                              data={election.candidates}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={({ name, percentage }) => `${percentage}%`}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="votes"
                            >
                              {election.candidates.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color || COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip formatter={(value, name, props) => [
                              `${props.payload.votes} votes (${props.payload.percentage}%)`,
                              props.payload.name
                            ]} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Progress Bars */}
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold mb-4">Vote Distribution</h3>
                      <div className="space-y-4">
                        {election.candidates
                          .sort((a, b) => b.percentage - a.percentage)
                          .map((candidate, index) => (
                          <div key={candidate.name} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <Trophy className={`h-4 w-4 ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-gray-400' : index === 2 ? 'text-amber-600' : 'text-gray-300'}`} />
                                <Avatar className="h-6 w-6">
                                  <AvatarImage src={candidate.avatar} />
                                  <AvatarFallback className="text-xs">{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{candidate.name}</span>
                                <span className="text-sm text-gray-500">({candidate.party})</span>
                              </div>
                              <div className="text-right">
                                <div className="font-semibold">{candidate.percentage}%</div>
                                <div className="text-sm text-gray-500">{candidate.votes} votes</div>
                              </div>
                            </div>
                            <Progress value={candidate.percentage} className="h-3" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-end space-x-3 mt-6 pt-6 border-t border-gray-200">
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

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

export default Results;
