"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Users,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Settings,
  BarChart3,
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Clock,
  MessageSquare,
  Download,
  Bell,
  Activity,
  Briefcase,
} from "lucide-react";

// Dummy data
const dashboardStats = {
  totalUsers: 15847,
  totalVendors: 2341,
  totalRevenue: 847650,
  activeServices: 1234,
  pendingApprovals: 23,
  supportTickets: 45,
  monthlyGrowth: 12.5,
  userGrowth: 8.3,
};

const recentUsers = [
  {
    id: 1,
    name: "John Kamau",
    email: "john.kamau@email.com",
    type: "Client",
    status: "Active",
    joinDate: "2024-01-15",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "Nairobi",
    services: 3,
  },
  {
    id: 2,
    name: "Grace Wanjiku",
    email: "grace.wanjiku@email.com",
    type: "Vendor",
    status: "Pending",
    joinDate: "2024-01-14",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "Mombasa",
    services: 0,
  },
  {
    id: 3,
    name: "David Ochieng",
    email: "david.ochieng@email.com",
    type: "Client",
    status: "Active",
    joinDate: "2024-01-13",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "Kisumu",
    services: 7,
  },
  {
    id: 4,
    name: "Mary Njeri",
    email: "mary.njeri@email.com",
    type: "Vendor",
    status: "Active",
    joinDate: "2024-01-12",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "Nakuru",
    services: 12,
  },
];

const supportTickets = [
  {
    id: "TK-001",
    user: "Alice Muthoni",
    subject: "Payment not processed",
    priority: "High",
    status: "Open",
    created: "2024-01-15",
    category: "Payment",
  },
  {
    id: "TK-002",
    user: "Peter Kiprotich",
    subject: "Unable to access dashboard",
    priority: "Medium",
    status: "In Progress",
    created: "2024-01-14",
    category: "Technical",
  },
  {
    id: "TK-003",
    user: "Sarah Wambui",
    subject: "Service provider not responding",
    priority: "Low",
    status: "Resolved",
    created: "2024-01-13",
    category: "Service",
  },
];

const recentTransactions = [
  {
    id: "TXN-001",
    user: "John Kamau",
    vendor: "Grace Wanjiku",
    service: "House Cleaning",
    amount: 2500,
    status: "Completed",
    date: "2024-01-15",
    commission: 250,
  },
  {
    id: "TXN-002",
    user: "David Ochieng",
    vendor: "Mary Njeri",
    service: "Plumbing Repair",
    amount: 4500,
    status: "Pending",
    date: "2024-01-14",
    commission: 450,
  },
  {
    id: "TXN-003",
    user: "Alice Muthoni",
    vendor: "Peter Kiprotich",
    service: "Electrical Work",
    amount: 6000,
    status: "Completed",
    date: "2024-01-13",
    commission: 600,
  },
];

const systemAlerts = [
  {
    id: 1,
    type: "warning",
    message: "Server load is above 80%",
    time: "5 minutes ago",
  },
  {
    id: 2,
    type: "info",
    message: "Scheduled maintenance in 2 hours",
    time: "1 hour ago",
  },
  {
    id: 3,
    type: "error",
    message: "Payment gateway timeout reported",
    time: "2 hours ago",
  },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "users", label: "Users", icon: Users },
    { id: "vendors", label: "Vendors", icon: Briefcase },
    { id: "transactions", label: "Transactions", icon: DollarSign },
    { id: "support", label: "Support", icon: MessageSquare },
    { id: "analytics", label: "Analytics", icon: TrendingUp },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Total Users</p>
                <p className="text-3xl font-bold">
                  {dashboardStats.totalUsers.toLocaleString()}
                </p>
                <p className="text-blue-100 text-sm">
                  +{dashboardStats.userGrowth}% this month
                </p>
              </div>
              <Users className="w-8 h-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">
                  Total Revenue
                </p>
                <p className="text-3xl font-bold">
                  KSh {dashboardStats.totalRevenue.toLocaleString()}
                </p>
                <p className="text-green-100 text-sm">
                  +{dashboardStats.monthlyGrowth}% this month
                </p>
              </div>
              <DollarSign className="w-8 h-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">
                  Active Vendors
                </p>
                <p className="text-3xl font-bold">
                  {dashboardStats.totalVendors.toLocaleString()}
                </p>
                <p className="text-purple-100 text-sm">
                  Verified professionals
                </p>
              </div>
              <Briefcase className="w-8 h-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm font-medium">
                  Support Tickets
                </p>
                <p className="text-3xl font-bold">
                  {dashboardStats.supportTickets}
                </p>
                <p className="text-orange-100 text-sm">
                  {dashboardStats.pendingApprovals} pending
                </p>
              </div>
              <MessageSquare className="w-8 h-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Recent Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.slice(0, 4).map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={user.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={
                        user.status === "Active" ? "default" : "secondary"
                      }
                    >
                      {user.status}
                    </Badge>
                    <p className="text-sm text-gray-600 mt-1">{user.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              System Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${
                      alert.type === "error"
                        ? "bg-red-500"
                        : alert.type === "warning"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{alert.message}</p>
                    <p className="text-xs text-gray-600">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">User Management</h2>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-medium">User</th>
                  <th className="text-left p-4 font-medium">Type</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Location</th>
                  <th className="text-left p-4 font-medium">Services</th>
                  <th className="text-left p-4 font-medium">Join Date</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user) => (
                  <tr key={user.id} className="border-t">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage
                            src={user.avatar || "/placeholder.svg"}
                          />
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-gray-600">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge
                        variant={
                          user.type === "Vendor" ? "default" : "secondary"
                        }
                      >
                        {user.type}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Badge
                        variant={
                          user.status === "Active" ? "default" : "secondary"
                        }
                      >
                        {user.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-gray-600">{user.location}</td>
                    <td className="p-4 text-gray-600">{user.services}</td>
                    <td className="p-4 text-gray-600">{user.joinDate}</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderTransactions = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Transaction Management</h2>
        <Button>
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Revenue</p>
                <p className="text-2xl font-bold">KSh 847,650</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Commission Earned</p>
                <p className="text-2xl font-bold">KSh 84,765</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Pending Payments</p>
                <p className="text-2xl font-bold">KSh 12,450</p>
              </div>
              <Clock className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-medium">Transaction ID</th>
                  <th className="text-left p-4 font-medium">Client</th>
                  <th className="text-left p-4 font-medium">Vendor</th>
                  <th className="text-left p-4 font-medium">Service</th>
                  <th className="text-left p-4 font-medium">Amount</th>
                  <th className="text-left p-4 font-medium">Commission</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-t">
                    <td className="p-4 font-mono text-sm">{transaction.id}</td>
                    <td className="p-4">{transaction.user}</td>
                    <td className="p-4">{transaction.vendor}</td>
                    <td className="p-4">{transaction.service}</td>
                    <td className="p-4 font-medium">
                      KSh {transaction.amount.toLocaleString()}
                    </td>
                    <td className="p-4 text-green-600">
                      KSh {transaction.commission.toLocaleString()}
                    </td>
                    <td className="p-4">
                      <Badge
                        variant={
                          transaction.status === "Completed"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {transaction.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-gray-600">{transaction.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSupport = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Support Management</h2>
        <div className="flex gap-2">
          <Badge variant="outline" className="text-red-600">
            {supportTickets.filter((t) => t.status === "Open").length} Open
          </Badge>
          <Badge variant="outline" className="text-yellow-600">
            {supportTickets.filter((t) => t.status === "In Progress").length} In
            Progress
          </Badge>
          <Badge variant="outline" className="text-green-600">
            {supportTickets.filter((t) => t.status === "Resolved").length}{" "}
            Resolved
          </Badge>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-medium">Ticket ID</th>
                  <th className="text-left p-4 font-medium">User</th>
                  <th className="text-left p-4 font-medium">Subject</th>
                  <th className="text-left p-4 font-medium">Category</th>
                  <th className="text-left p-4 font-medium">Priority</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Created</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {supportTickets.map((ticket) => (
                  <tr key={ticket.id} className="border-t">
                    <td className="p-4 font-mono text-sm">{ticket.id}</td>
                    <td className="p-4">{ticket.user}</td>
                    <td className="p-4">{ticket.subject}</td>
                    <td className="p-4">{ticket.category}</td>
                    <td className="p-4">
                      <Badge
                        variant={
                          ticket.priority === "High"
                            ? "destructive"
                            : ticket.priority === "Medium"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {ticket.priority}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Badge
                        variant={
                          ticket.status === "Open"
                            ? "destructive"
                            : ticket.status === "In Progress"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {ticket.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-gray-600">{ticket.created}</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">System Settings</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Platform Configuration</CardTitle>
            <CardDescription>Manage core platform settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="platform-name">Platform Name</Label>
              <Input id="platform-name" defaultValue="Karibu Plus" />
            </div>
            <div>
              <Label htmlFor="commission-rate">Commission Rate (%)</Label>
              <Input id="commission-rate" type="number" defaultValue="10" />
            </div>
            <div>
              <Label htmlFor="support-email">Support Email</Label>
              <Input
                id="support-email"
                type="email"
                defaultValue="support@karibuplus.com"
              />
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>Configure system notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Email Notifications</Label>
              <Button variant="outline" size="sm">
                Enabled
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <Label>SMS Notifications</Label>
              <Button variant="outline" size="sm">
                Enabled
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <Label>Push Notifications</Label>
              <Button variant="outline" size="sm">
                Disabled
              </Button>
            </div>
            <Button>Update Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return renderOverview();
      case "users":
        return renderUsers();
      case "vendors":
        return renderUsers(); // Same component, different filter
      case "transactions":
        return renderTransactions();
      case "support":
        return renderSupport();
      case "analytics":
        return renderOverview(); // Placeholder
      case "settings":
        return renderSettings();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold">
                K+
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Admin Dashboard
                </h1>
                <p className="text-sm text-gray-600">
                  Karibu Plus Administration
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Avatar>
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="p-4">
            <div className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">{renderContent()}</main>
      </div>
    </div>
  );
}
