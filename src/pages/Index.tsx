
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DashboardPage = () => {
  // Примерные данные для отображения
  const energyStats = {
    current: 126.4,
    previous: 142.8,
    change: -11.5,
    units: "кВт·ч",
  };

  const offices = [
    { id: 1, name: "Главный офис", status: "Оптимально", energyUsage: 126.4, change: -11.5 },
    { id: 2, name: "Отдел разработки", status: "Повышенное", energyUsage: 98.2, change: 5.2 },
    { id: 3, name: "Переговорная", status: "Оптимально", energyUsage: 42.6, change: -3.8 },
  ];

  const recentEvents = [
    { id: 1, time: "10:24", message: "Повышенное энергопотребление в Отделе разработки", type: "warning" },
    { id: 2, time: "09:15", message: "Система кондиционирования переключена в эко-режим", type: "success" },
    { id: 3, time: "08:32", message: "Отчет за апрель 2025 сформирован", type: "info" },
    { id: 4, time: "Вчера", message: "Обновлены настройки лимитов потребления", type: "info" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-eco-background">
      {/* Навигация */}
      <header className="sticky top-0 z-50 w-full border-b bg-eco-widget shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Leaf" className="text-eco-accent-dark" size={24} />
            <span className="text-xl font-bold text-eco-text">Эко Офис</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-eco-accent flex items-center gap-1">
              <Icon name="Home" size={18} />
              <span>Главная</span>
            </a>
            <a href="#" className="text-sm font-medium text-eco-text-secondary hover:text-eco-accent transition-colors flex items-center gap-1">
              <Icon name="User" size={18} />
              <span>Мой профиль</span>
            </a>
            <a href="#" className="text-sm font-medium text-eco-text-secondary hover:text-eco-accent transition-colors flex items-center gap-1">
              <Icon name="LineChart" size={18} />
              <span>Мониторинг</span>
            </a>
            <a href="#" className="text-sm font-medium text-eco-text-secondary hover:text-eco-accent transition-colors flex items-center gap-1">
              <Icon name="Settings2" size={18} />
              <span>Управление</span>
            </a>
            <a href="#" className="text-sm font-medium text-eco-text-secondary hover:text-eco-accent transition-colors flex items-center gap-1">
              <Icon name="FileText" size={18} />
              <span>Отчеты</span>
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="text-eco-text-secondary">
              <Icon name="Settings" size={18} />
            </Button>
            <Button variant="outline" className="text-eco-text-secondary">
              <Icon name="LogOut" size={18} />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8">
        <div className="container">
          <h1 className="text-2xl font-bold mb-6">Обзор состояния офисов</h1>
          
          {/* Карточки с основными показателями */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium flex items-center gap-2">
                  <Icon name="Zap" className="text-eco-accent-dark" size={20} />
                  Потребление энергии
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-3xl font-bold">{energyStats.current} {energyStats.units}</p>
                    <p className="text-sm text-eco-text-secondary">Сегодня</p>
                  </div>
                  <div className={`flex items-center ${energyStats.change < 0 ? 'text-eco-accent' : 'text-eco-error'}`}>
                    <Icon name={energyStats.change < 0 ? 'TrendingDown' : 'TrendingUp'} size={18} />
                    <span className="text-sm font-medium">{Math.abs(energyStats.change)}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium flex items-center gap-2">
                  <Icon name="Home" className="text-eco-accent-dark" size={20} />
                  Активные офисы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-3xl font-bold">3/4</p>
                    <p className="text-sm text-eco-text-secondary">Сейчас работают</p>
                  </div>
                  <Button size="sm" className="bg-eco-accent text-white">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium flex items-center gap-2">
                  <Icon name="Co2" className="text-eco-accent-dark" size={20} />
                  Углеродный след
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-3xl font-bold">-35.6%</p>
                    <p className="text-sm text-eco-text-secondary">По сравнению с прошлым месяцем</p>
                  </div>
                  <div className="text-eco-accent flex items-center">
                    <Icon name="ThumbsUp" size={18} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Основной контент: Последние события и статистика офисов */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Статистика энергопотребления</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="day">
                    <TabsList className="mb-4">
                      <TabsTrigger value="day">День</TabsTrigger>
                      <TabsTrigger value="week">Неделя</TabsTrigger>
                      <TabsTrigger value="month">Месяц</TabsTrigger>
                    </TabsList>
                    <TabsContent value="day" className="space-y-4">
                      {offices.map(office => (
                        <div key={office.id} className="flex items-center justify-between p-3 bg-eco-background rounded-md">
                          <div>
                            <h3 className="font-medium">{office.name}</h3>
                            <p className="text-sm text-eco-text-secondary">{office.status}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div>
                              <p className="font-medium text-right">{office.energyUsage} кВт·ч</p>
                              <p className={`text-sm flex items-center justify-end ${office.change < 0 ? 'text-eco-accent' : 'text-eco-error'}`}>
                                <Icon name={office.change < 0 ? 'TrendingDown' : 'TrendingUp'} size={14} />
                                <span>{Math.abs(office.change)}%</span>
                              </p>
                            </div>
                            <Button variant="outline" size="sm" className="p-0 w-8 h-8">
                              <Icon name="MoreVertical" size={16} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </TabsContent>
                    <TabsContent value="week">
                      <div className="py-8 text-center text-eco-text-secondary">
                        Данные за неделю загружаются...
                      </div>
                    </TabsContent>
                    <TabsContent value="month">
                      <div className="py-8 text-center text-eco-text-secondary">
                        Данные за месяц загружаются...
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Последние события</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentEvents.map(event => (
                      <div key={event.id} className="flex gap-3">
                        <div className={`mt-0.5 p-1.5 rounded-full 
                          ${event.type === 'warning' ? 'bg-yellow-100 text-yellow-600' : 
                            event.type === 'success' ? 'bg-green-100 text-green-600' : 
                            'bg-blue-100 text-blue-600'}`}
                        >
                          <Icon 
                            name={
                              event.type === 'warning' ? 'AlertTriangle' : 
                              event.type === 'success' ? 'CheckCircle' : 
                              'Info'
                            } 
                            size={14} 
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium">{event.message}</p>
                          </div>
                          <p className="text-xs text-eco-text-secondary">{event.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">
                    Показать все события
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Быстрые действия</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="justify-start">
                      <Icon name="FileText" className="mr-2 text-eco-accent-dark" size={18} />
                      Отчеты
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Icon name="Settings2" className="mr-2 text-eco-accent-dark" size={18} />
                      Управление
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Icon name="Users" className="mr-2 text-eco-accent-dark" size={18} />
                      Пользователи
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Icon name="Bell" className="mr-2 text-eco-accent-dark" size={18} />
                      Уведомления
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-4 text-center text-sm text-eco-text-secondary border-t bg-eco-widget">
        <div className="container">
          &copy; 2025 ЭкоОфис. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;
