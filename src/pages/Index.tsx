
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import EcoOfficeHero from "@/components/EcoOfficeHero";
import ServiceCard from "@/components/ServiceCard";
import BenefitCard from "@/components/BenefitCard";

const Index = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Сообщение отправлено! Мы скоро свяжемся с вами.");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Навигация */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Leaf" className="text-green-600" size={24} />
            <span className="text-xl font-bold text-green-800">ЭкоОфис</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium hover:text-green-600 transition-colors">Услуги</a>
            <a href="#benefits" className="text-sm font-medium hover:text-green-600 transition-colors">Преимущества</a>
            <a href="#gallery" className="text-sm font-medium hover:text-green-600 transition-colors">Галерея</a>
            <a href="#contact" className="text-sm font-medium hover:text-green-600 transition-colors">Контакты</a>
          </nav>
          <Button className="bg-green-600 hover:bg-green-700">Заказать консультацию</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Главный баннер */}
        <EcoOfficeHero />

        {/* Секция услуг */}
        <section id="services" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard 
                title="Эко аудит офиса" 
                description="Комплексная оценка вашего офиса и рекомендации по внедрению экологичных решений"
                icon="ClipboardCheck"
              />
              <ServiceCard 
                title="Подбор эко мебели" 
                description="Эргономичная и экологичная мебель из сертифицированных материалов"
                icon="Armchair"
              />
              <ServiceCard 
                title="Системы энергосбережения" 
                description="Внедрение энергоэффективных технологий и умных систем управления ресурсами"
                icon="Lightbulb"
              />
              <ServiceCard 
                title="Озеленение офиса" 
                description="Живые растения и фитостены для улучшения микроклимата и самочувствия сотрудников"
                icon="Flower"
              />
              <ServiceCard 
                title="Системы переработки" 
                description="Организация раздельного сбора и утилизации отходов в офисе"
                icon="Recycle"
              />
              <ServiceCard 
                title="Экологичное клининг" 
                description="Чистка помещений безопасными для здоровья и окружающей среды средствами"
                icon="Sparkles"
              />
            </div>
          </div>
        </section>

        {/* Секция преимуществ */}
        <section id="benefits" className="py-16 bg-green-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Преимущества эко офиса</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BenefitCard 
                title="Забота о здоровье сотрудников" 
                description="Чистый воздух, естественное освещение и экологичные материалы снижают риск заболеваний"
                icon="Heart"
              />
              <BenefitCard 
                title="Экономия ресурсов" 
                description="Снижение расходов на электроэнергию, воду и расходные материалы до 40%"
                icon="PiggyBank"
              />
              <BenefitCard 
                title="Повышение продуктивности" 
                description="Комфортная рабочая среда повышает эффективность работы сотрудников"
                icon="LineChart"
              />
              <BenefitCard 
                title="Улучшение имиджа компании" 
                description="Забота об экологии привлекает клиентов и повышает репутацию бренда"
                icon="Award"
              />
              <BenefitCard 
                title="Снижение экологического следа" 
                description="Уменьшение негативного воздействия на окружающую среду"
                icon="Footprints"
              />
              <BenefitCard 
                title="Соответствие ESG стандартам" 
                description="Выполнение требований по устойчивому развитию и социальной ответственности"
                icon="CheckCircle"
              />
            </div>
          </div>
        </section>

        {/* Галерея проектов */}
        <section id="gallery" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Наши проекты</h2>
            <Tabs defaultValue="office" className="w-full">
              <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 mb-8">
                <TabsTrigger value="office">Офисы</TabsTrigger>
                <TabsTrigger value="coworking">Коворкинги</TabsTrigger>
                <TabsTrigger value="meeting">Переговорные</TabsTrigger>
              </TabsList>
              <TabsContent value="office" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="overflow-hidden hover:shadow-lg transition-all">
                  <CardContent className="p-0">
                    <img 
                      src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80" 
                      alt="Эко офис с растениями" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-medium">Офис IT-компании «ГринТек»</h3>
                      <p className="text-sm text-gray-600">Москва, 450 м²</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden hover:shadow-lg transition-all">
                  <CardContent className="p-0">
                    <img 
                      src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80" 
                      alt="Современный эко офис" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-medium">Головной офис «ЭкоФинанс»</h3>
                      <p className="text-sm text-gray-600">Санкт-Петербург, 780 м²</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden hover:shadow-lg transition-all">
                  <CardContent className="p-0">
                    <img 
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80" 
                      alt="Офис с панорамными окнами" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-medium">Креативный офис «АртЭко»</h3>
                      <p className="text-sm text-gray-600">Казань, 320 м²</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="coworking" className="text-center py-12">
                <p className="text-gray-500">Проекты коворкингов будут добавлены в ближайшее время</p>
              </TabsContent>
              <TabsContent value="meeting" className="text-center py-12">
                <p className="text-gray-500">Проекты переговорных комнат будут добавлены в ближайшее время</p>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Контактная форма */}
        <section id="contact" className="py-16 bg-green-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Свяжитесь с нами</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Контактная информация</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" className="text-green-600" size={20} />
                      <span>Москва, ул. Зеленая, 42</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Phone" className="text-green-600" size={20} />
                      <span>+7 (800) 123-45-67</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Mail" className="text-green-600" size={20} />
                      <span>info@eco-office.ru</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" className="text-green-600" size={20} />
                      <span>Пн-Пт: 9:00-18:00</span>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <a href="#" className="rounded-full bg-white p-2 shadow-sm hover:shadow-md transition-all">
                      <Icon name="Instagram" size={20} />
                    </a>
                    <a href="#" className="rounded-full bg-white p-2 shadow-sm hover:shadow-md transition-all">
                      <Icon name="Facebook" size={20} />
                    </a>
                    <a href="#" className="rounded-full bg-white p-2 shadow-sm hover:shadow-md transition-all">
                      <Icon name="Telegram" size={20} />
                    </a>
                  </div>
                </div>
                <div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Ваш email" 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Ваше сообщение" 
                        className="min-h-[120px]" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Отправить сообщение
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Футер */}
      <footer className="bg-green-800 text-white py-8">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Leaf" size={24} />
                <span className="text-xl font-bold">ЭкоОфис</span>
              </div>
              <p className="text-green-200">Создаем экологичные офисные пространства для здоровья сотрудников и планеты</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Быстрые ссылки</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-green-200 hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#benefits" className="text-green-200 hover:text-white transition-colors">Преимущества</a></li>
                <li><a href="#gallery" className="text-green-200 hover:text-white transition-colors">Галерея</a></li>
                <li><a href="#contact" className="text-green-200 hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Подписка на новости</h3>
              <div className="flex gap-2">
                <Input placeholder="Ваш email" className="bg-green-700 border-green-700 text-white placeholder:text-green-300" />
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
                  <Icon name="Send" size={18} />
                </Button>
              </div>
              <p className="text-xs text-green-300 mt-2">Подпишитесь на рассылку и получите скидку 10% на первый заказ</p>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-6 text-center text-green-300 text-sm">
            © 2025 ЭкоОфис. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
