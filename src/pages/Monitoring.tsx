
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Monitoring = () => {
  return (
    <div className="flex flex-col min-h-screen bg-eco-background">
      <Header />
      <main className="flex-1 py-8">
        <div className="container">
          <h1 className="text-2xl font-bold mb-6">Мониторинг энергопотребления</h1>
          <div className="bg-eco-widget rounded-lg shadow-sm p-6">
            <p className="text-eco-text-secondary">Страница мониторинга находится в разработке.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Monitoring;
