import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [registrationData, setRegistrationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const events = [
    {
      id: 1,
      title: 'Ретрит в лесу',
      date: '15 августа 2025',
      time: '10:00',
      price: '12 000 ₽',
      description: 'Трёхдневный ретрит с медитациями на природе и практиками осознанности',
      type: 'Медитация'
    },
    {
      id: 2,
      title: 'Кулинарный мастер-класс',
      date: '22 августа 2025',
      time: '14:00',
      price: '8 500 ₽',
      description: 'Готовим на костре блюда из местных продуктов',
      type: 'Кулинария'
    },
    {
      id: 3,
      title: 'Йога на рассвете',
      date: '28 августа 2025',
      time: '06:00',
      price: '3 500 ₽',
      description: 'Утренняя практика йоги встречаем рассвет в горах',
      type: 'Йога'
    }
  ];

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Регистрация:', registrationData);
    alert('Регистрация отправлена! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Trees" className="text-forest-800" size={32} />
              <h1 className="text-2xl font-heading font-bold text-forest-800">ДУХ&LES</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-forest-700 hover:text-forest-900 transition-colors">Главная</a>
              <a href="#events" className="text-forest-700 hover:text-forest-900 transition-colors">Мероприятия</a>
              <a href="#calendar" className="text-forest-700 hover:text-forest-900 transition-colors">Календарь</a>
              <a href="#registration" className="text-forest-700 hover:text-forest-900 transition-colors">Регистрация</a>
              <a href="#contacts" className="text-forest-700 hover:text-forest-900 transition-colors">Контакты</a>
            </div>
            <Button className="bg-forest-800 hover:bg-forest-900">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/img/9ca2dc38-4d93-4253-9238-8a0a09ae4799.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-forest-900/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in">
            Глэмпинг ДУХ&LES
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-body opacity-90">
            Комфортный отдых на природе в гармонии с собой и окружающим миром
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-forest-700 hover:bg-forest-800 text-white px-8 py-3">
              <Icon name="Calendar" className="mr-2" size={20} />
              Посмотреть мероприятия
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-forest-800 px-8 py-3">
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-forest-800 mb-4">
              Предстоящие мероприятия
            </h2>
            <p className="text-lg text-sage-700 max-w-2xl mx-auto">
              Присоединяйтесь к нашим уникальным программам, созданным для восстановления гармонии и единения с природой
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-sage-200">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-forest-100 text-forest-800">{event.type}</Badge>
                    <span className="text-2xl font-heading font-bold text-forest-800">{event.price}</span>
                  </div>
                  <CardTitle className="text-xl font-heading text-forest-800">{event.title}</CardTitle>
                  <CardDescription className="flex items-center text-sage-600">
                    <Icon name="Calendar" className="mr-2" size={16} />
                    {event.date} в {event.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sage-700 mb-4">{event.description}</p>
                  <Button className="w-full bg-forest-700 hover:bg-forest-800">
                    Зарегистрироваться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section id="calendar" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-forest-800 mb-4">
              Календарь мероприятий
            </h2>
            <p className="text-lg text-sage-700">
              Выберите удобную дату для посещения наших программ
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border border-sage-200 shadow-sm"
            />
            
            {selectedDate && (
              <Card className="mt-6 border-sage-200">
                <CardHeader>
                  <CardTitle className="text-center text-forest-800">
                    События на {selectedDate.toLocaleDateString('ru-RU')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-sage-600">
                    На выбранную дату мероприятий не запланировано
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-forest-800 mb-4">
                Регистрация на мероприятия
              </h2>
              <p className="text-lg text-sage-700">
                Заполните форму, и мы свяжемся с вами для подтверждения участия
              </p>
            </div>
            
            <Card className="border-sage-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-forest-800">Форма регистрации</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegistration} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-forest-700">Имя</Label>
                      <Input
                        id="firstName"
                        value={registrationData.firstName}
                        onChange={(e) => setRegistrationData({...registrationData, firstName: e.target.value})}
                        className="border-sage-300 focus:border-forest-500"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-forest-700">Фамилия</Label>
                      <Input
                        id="lastName"
                        value={registrationData.lastName}
                        onChange={(e) => setRegistrationData({...registrationData, lastName: e.target.value})}
                        className="border-sage-300 focus:border-forest-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-forest-700">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={registrationData.email}
                      onChange={(e) => setRegistrationData({...registrationData, email: e.target.value})}
                      className="border-sage-300 focus:border-forest-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-forest-700">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={registrationData.phone}
                      onChange={(e) => setRegistrationData({...registrationData, phone: e.target.value})}
                      className="border-sage-300 focus:border-forest-500"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-forest-700 hover:bg-forest-800 py-3">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-forest-800 mb-4">
              Контакты
            </h2>
            <p className="text-lg text-sage-700">
              Свяжитесь с нами для получения дополнительной информации
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="border-sage-200">
              <CardHeader>
                <CardTitle className="text-forest-800 flex items-center">
                  <Icon name="MapPin" className="mr-3 text-forest-600" size={24} />
                  Наше местоположение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sage-700 text-lg">
                  Сочи, ул. Чекменева 30
                </p>
                <p className="text-sage-600 mt-2">
                  В окружении живописной природы Краснодарского края
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-sage-200">
              <CardHeader>
                <CardTitle className="text-forest-800 flex items-center">
                  <Icon name="Phone" className="mr-3 text-forest-600" size={24} />
                  Связь с нами
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sage-700 text-lg font-medium">
                  +7 (912) 263-01-08
                </p>
                <p className="text-sage-600 mt-2">
                  Ежедневно с 9:00 до 21:00
                </p>
                <Button className="mt-4 bg-forest-700 hover:bg-forest-800">
                  <Icon name="MessageCircle" className="mr-2" size={16} />
                  Написать в WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Trees" size={32} />
              <h3 className="text-2xl font-heading font-bold">ДУХ&LES</h3>
            </div>
            <p className="text-sage-200 mb-6">
              Глэмпинг для души и тела в гармонии с природой
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-sage-300 hover:text-white transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-sage-300 hover:text-white transition-colors">
                <Icon name="Phone" size={24} />
              </a>
              <a href="#" className="text-sage-300 hover:text-white transition-colors">
                <Icon name="Mail" size={24} />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-forest-800">
              <p className="text-sage-400">
                © 2025 ДУХ&LES. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;