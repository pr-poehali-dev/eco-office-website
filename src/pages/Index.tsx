
import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { StatCard } from "@/components/dashboard/StatCard";
import { OfficeStatList } from "@/components/dashboard/OfficeStatList";
import { EventList } from "@/components/events/EventList";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { Office, Event, EnergyStats } from "@/types/eco-office";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  
  // Примерные данные для отображения
  const energyStats: EnergyStats = {
    current: 126.4,
    previous: 142.8,
    change: -11.5,
    units: "кВт·ч",
  };

  // Данные для разных периодов (день, неделя, месяц)
  const dailyOffices: Office[] = [
    { id: 1, name: "Главный офис", status: "Оптимально", energyUsage: 126.4, change: -11.5 },
    { id: 2, name: "Отдел разработки", status: "Повышенное", energyUsage: 98.2, change: 5.2 },
    { id: 3, name: "Переговорная", status: "Оптимально", energyUsage: 42.6, change: -3.8 },
  ];

  const weeklyOffices: Office[] = [
    { id: 1, name: "Главный офис", status: "Оптимально", energyUsage: 782.5, change: -8.3 },
    { id: 2, name: "Отдел разработки", status: "Оптимально", energyUsage: 654.3, change: -2.1 },
    { id: 3, name: "Переговорная", status: "Повышенное", energyUsage: 312.8, change: 7.4 },
  ];

  const monthlyOffices: Office[] = [
    { id: 1, name: "Главный офис", status: "Оптимально", energyUsage: 3240.6, change: -12.5 },
    { id: 2, name: "Отдел разработки", status: "Оптимально", energyUsage: 2875.2, change: -6.8 },
    { id: 3, name: "Переговорная", status: "Оптимально", energyUsage: 1428.9, change: -4.3 },
  ];

  const recentEvents: Event[] = [
    { id: 1, time: "10:24", message: "Повышенное энергопотребление в Отделе разработки", type: "warning" },
    { id: 2, time: "09:15", message: "Система кондиционирования переключена в эко-режим", type: "success" },
    { id: 3, time: "08:32", message: "Отчет за апрель 2025 сформирован", type: "info" },
    { id: 4, time: "Вчера", message: "Обновлены настройки лимитов потребления", type: "info" },
  ];

  const quickActions = [
    { icon: "FileText", label: "Отчеты", onClick: () => navigate("/reports") },
    { icon: "Settings2", label: "Управление", onClick: () => navigate("/devices") },
    { icon: "Users", label: "Пользователи", onClick: () => console.log("Переход к пользователям") },
    { icon: "Bell", label: "Уведомления", onClick: () => console.log("Переход к уведомлениям") },
  ];

  // Обработчики событий
  const handleOfficeAction = useCallback((officeId: number) => {
    console.log(`Действие для офиса ${officeId}`);
  }, []);

  const handleShowAllEvents = useCallback(() => {
    console.log("Показать все события");
  }, []);

  const handleOfficeDetailsClick = useCallback(() => {
    navigate("/monitoring");
  }, [navigate]);
  
  return (
    <div className="flex flex-col min-h-screen bg-eco-background">
      <Header />

      <main className="flex-1 py-8">
        <div className="container">
          <h1 className="text-2xl font-bold mb-6">Обзор состояния офисов</h1>
          
          {/* Карточки с основными показателями */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard 
              title="Потребление энергии"
              icon="Zap"
              value={`${energyStats.current} ${energyStats.units}`}
              subtitle="Сегодня"
              change={energyStats.change}
            />
            
            <StatCard 
              title="Активные офисы"
              icon="Home"
              value="3/4"
              subtitle="Сейчас работают"
              action={{
                label: "Подробнее",
                onClick: handleOfficeDetailsClick
              }}
            />
            
            <StatCard 
              title="Углеродный след"
              icon="Co2"
              value="-35.6%"
              subtitle="По сравнению с прошлым месяцем"
            />
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
                    <TabsContent value="day">
                      <OfficeStatList 
                        offices={dailyOffices} 
                        onOfficeAction={handleOfficeAction}
                      />
                    </TabsContent>
                    <TabsContent value="week">
                      <OfficeStatList 
                        offices={weeklyOffices} 
                        onOfficeAction={handleOfficeAction}
                      />
                    </TabsContent>
                    <TabsContent value="month">
                      <OfficeStatList 
                        offices={monthlyOffices} 
                        onOfficeAction={handleOfficeAction}
                      />
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
                  <EventList 
                    events={recentEvents} 
                    onShowAllClick={handleShowAllEvents}
                  />
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Быстрые действия</CardTitle>
                </CardHeader>
                <CardContent>
                  <QuickActions actions={quickActions} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DashboardPage;
