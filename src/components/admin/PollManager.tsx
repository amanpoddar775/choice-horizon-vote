
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Users, 
  BarChart3, 
  Play,
  Pause,
  Calendar
} from 'lucide-react';

interface Poll {
  id: number;
  title: string;
  description: string;
  category: string;
  status: 'Active' | 'Paused' | 'Ended';
  votes: number;
  endDate: string;
  options: string[];
  createdAt: string;
}

const PollManager = () => {
  const [polls, setPolls] = useState<Poll[]>([
    {
      id: 1,
      title: "Best Programming Language 2024",
      description: "Vote for your favorite programming language",
      category: "Technology",
      status: "Active",
      votes: 1247,
      endDate: "2024-07-10",
      options: ["JavaScript", "Python", "TypeScript", "Go"],
      createdAt: "2024-07-01"
    },
    {
      id: 2,
      title: "Favorite Coffee Shop Chain",
      description: "Which coffee shop do you prefer?",
      category: "Food & Drink",
      status: "Active",
      votes: 892,
      endDate: "2024-07-15",
      options: ["Starbucks", "Dunkin'", "Local Coffee Shop", "Tim Hortons"],
      createdAt: "2024-07-02"
    }
  ]);

  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [editingPoll, setEditingPoll] = useState<Poll | null>(null);
  const [newPoll, setNewPoll] = useState({
    title: '',
    description: '',
    category: '',
    endDate: '',
    options: ['', '']
  });

  const handleCreatePoll = () => {
    if (!newPoll.title || !newPoll.category || !newPoll.endDate) return;
    
    const poll: Poll = {
      id: Math.max(...polls.map(p => p.id)) + 1,
      title: newPoll.title,
      description: newPoll.description,
      category: newPoll.category,
      status: 'Active',
      votes: 0,
      endDate: newPoll.endDate,
      options: newPoll.options.filter(opt => opt.trim() !== ''),
      createdAt: new Date().toISOString().split('T')[0]
    };

    setPolls([...polls, poll]);
    setNewPoll({ title: '', description: '', category: '', endDate: '', options: ['', ''] });
    setShowCreateDialog(false);
  };

  const handleUpdatePoll = () => {
    if (!editingPoll) return;
    
    setPolls(polls.map(poll => 
      poll.id === editingPoll.id ? editingPoll : poll
    ));
    setEditingPoll(null);
  };

  const handleDeletePoll = (id: number) => {
    setPolls(polls.filter(poll => poll.id !== id));
  };

  const handleToggleStatus = (id: number) => {
    setPolls(polls.map(poll => 
      poll.id === id 
        ? { ...poll, status: poll.status === 'Active' ? 'Paused' : 'Active' as 'Active' | 'Paused' }
        : poll
    ));
  };

  const addOption = (isEdit = false) => {
    if (isEdit && editingPoll) {
      setEditingPoll({ ...editingPoll, options: [...editingPoll.options, ''] });
    } else {
      setNewPoll({ ...newPoll, options: [...newPoll.options, ''] });
    }
  };

  const updateOption = (index: number, value: string, isEdit = false) => {
    if (isEdit && editingPoll) {
      const newOptions = [...editingPoll.options];
      newOptions[index] = value;
      setEditingPoll({ ...editingPoll, options: newOptions });
    } else {
      const newOptions = [...newPoll.options];
      newOptions[index] = value;
      setNewPoll({ ...newPoll, options: newOptions });
    }
  };

  const removeOption = (index: number, isEdit = false) => {
    if (isEdit && editingPoll) {
      setEditingPoll({ ...editingPoll, options: editingPoll.options.filter((_, i) => i !== index) });
    } else {
      setNewPoll({ ...newPoll, options: newPoll.options.filter((_, i) => i !== index) });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Polls Management</h2>
        <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Poll
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Poll</DialogTitle>
              <DialogDescription>
                Create a new poll for users to vote on
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="poll-title">Poll Title</Label>
                <Input 
                  id="poll-title" 
                  placeholder="Enter poll title"
                  value={newPoll.title}
                  onChange={(e) => setNewPoll({ ...newPoll, title: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="poll-description">Description</Label>
                <Textarea 
                  id="poll-description" 
                  placeholder="Enter poll description"
                  value={newPoll.description}
                  onChange={(e) => setNewPoll({ ...newPoll, description: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="poll-category">Category</Label>
                <Select value={newPoll.category} onValueChange={(value) => setNewPoll({ ...newPoll, category: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                    <SelectItem value="food">Food & Drink</SelectItem>
                    <SelectItem value="sports">Sports</SelectItem>
                    <SelectItem value="politics">Politics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="poll-end-date">End Date</Label>
                <Input 
                  id="poll-end-date" 
                  type="date"
                  value={newPoll.endDate}
                  onChange={(e) => setNewPoll({ ...newPoll, endDate: e.target.value })}
                />
              </div>
              <div>
                <Label>Poll Options</Label>
                <div className="space-y-2">
                  {newPoll.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Input
                        placeholder={`Option ${index + 1}`}
                        value={option}
                        onChange={(e) => updateOption(index, e.target.value)}
                      />
                      {newPoll.options.length > 2 && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => removeOption(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button variant="outline" onClick={() => addOption()} className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Option
                  </Button>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setShowCreateDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreatePoll}>
                  Create Poll
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6">
        {polls.map((poll) => (
          <Card key={poll.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{poll.title}</CardTitle>
                  <CardDescription className="flex items-center space-x-4 mt-2">
                    <Badge variant="secondary">{poll.category}</Badge>
                    <Badge variant={poll.status === 'Active' ? 'default' : 'secondary'}>
                      {poll.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Ends: {new Date(poll.endDate).toLocaleDateString()}
                    </span>
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleToggleStatus(poll.id)}
                  >
                    {poll.status === 'Active' ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setEditingPoll(poll)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Poll</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete "{poll.title}"? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction 
                          onClick={() => handleDeletePoll(poll.id)}
                          className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{poll.description}</p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{poll.votes.toLocaleString()} votes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  <span>{poll.options.length} options</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Created {new Date(poll.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Poll Dialog */}
      <Dialog open={!!editingPoll} onOpenChange={() => setEditingPoll(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Poll</DialogTitle>
            <DialogDescription>
              Update poll details and options
            </DialogDescription>
          </DialogHeader>
          {editingPoll && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="edit-poll-title">Poll Title</Label>
                <Input 
                  id="edit-poll-title" 
                  value={editingPoll.title}
                  onChange={(e) => setEditingPoll({ ...editingPoll, title: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="edit-poll-description">Description</Label>
                <Textarea 
                  id="edit-poll-description" 
                  value={editingPoll.description}
                  onChange={(e) => setEditingPoll({ ...editingPoll, description: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="edit-poll-category">Category</Label>
                <Select 
                  value={editingPoll.category} 
                  onValueChange={(value) => setEditingPoll({ ...editingPoll, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                    <SelectItem value="food">Food & Drink</SelectItem>
                    <SelectItem value="sports">Sports</SelectItem>
                    <SelectItem value="politics">Politics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="edit-poll-end-date">End Date</Label>
                <Input 
                  id="edit-poll-end-date" 
                  type="date"
                  value={editingPoll.endDate}
                  onChange={(e) => setEditingPoll({ ...editingPoll, endDate: e.target.value })}
                />
              </div>
              <div>
                <Label>Poll Options</Label>
                <div className="space-y-2">
                  {editingPoll.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Input
                        placeholder={`Option ${index + 1}`}
                        value={option}
                        onChange={(e) => updateOption(index, e.target.value, true)}
                      />
                      {editingPoll.options.length > 2 && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => removeOption(index, true)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button variant="outline" onClick={() => addOption(true)} className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Option
                  </Button>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setEditingPoll(null)}>
                  Cancel
                </Button>
                <Button onClick={handleUpdatePoll}>
                  Update Poll
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PollManager;
