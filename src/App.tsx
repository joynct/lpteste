import React, { useState } from 'react';
import { Sun, Zap, TrendingDown, Shield, Phone, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const benefits = [
    {
      icon: <TrendingDown className="w-8 h-8 text-green-600" />,
      title: "Economia de até 95%",
      description: "Reduza drasticamente sua conta de energia elétrica"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Proteção contra aumentos",
      description: "Livre-se das tarifas abusivas e aumentos constantes"
    },
    {
      icon: <Sun className="w-8 h-8 text-yellow-600" />,
      title: "Energia limpa e renovável",
      description: "Contribua para um planeta mais sustentável"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Valorização do imóvel",
      description: "Aumente o valor da sua propriedade em até 20%"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* TÍTULO PRINCIPAL - EDITÁVEL */}
      <header id="hero" className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-green-800">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-400 p-4 rounded-full">
                <Sun className="w-12 h-12 text-yellow-900" />
              </div>
            </div>
            <h1 id="titulo-principal" className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Chega de contas caras de energia.
              <span className="text-yellow-400 block">Produza a sua própria!</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 font-light">
              Transforme a luz do sol em economia real para sua família
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#formulario" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Fazer simulação gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#descricao" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Saiba mais
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </header>

      {/* BANNER EDITÁVEL */}
      <section id="banner" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <img 
              src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Painéis solares instalados em residência moderna" 
              id="banner-imagem"
              className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-800">
              Por que escolher energia solar?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEXTO EXPLICATIVO EDITÁVEL */}
      <section id="descricao" className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="descricao-titulo" className="text-3xl lg:text-4xl font-bold mb-8 text-gray-800">
              Transforme luz do sol em economia
            </h2>
            <div id="descricao-texto" className="text-lg lg:text-xl text-gray-700 leading-relaxed space-y-6">
              <p>
                Todos os meses, o valor da conta de energia aumenta — e você continua pagando por algo que poderia ser seu. Com energia solar, você reduz sua conta em até <strong className="text-green-600">95%</strong> e ainda valoriza seu imóvel.
              </p>
              <p>
                Chega de incertezas e tarifas abusivas. Torne-se independente da rede elétrica e comece a economizar já no primeiro mês após a instalação!
              </p>
            </div>
            <div className="mt-12 grid sm:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600">Redução na conta</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">25 anos</div>
                <div className="text-gray-600">Garantia do sistema</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-yellow-600 mb-2">30 dias</div>
                <div className="text-gray-600">Instalação rápida</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO DE CONTATO COM CALL TO ACTION */}
      <section id="formulario" className="py-16 bg-gradient-to-br from-blue-900 to-green-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-400 p-3 rounded-full">
                <CheckCircle className="w-8 h-8 text-yellow-900" />
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Faça uma simulação gratuita
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Preencha seus dados e descubra quanto você pode economizar com energia solar.
            </p>
            
            <form 
              name="lead-solar" 
              method="POST" 
              data-netlify="true"
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              <input type="hidden" name="form-name" value="lead-solar" />
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input 
                    type="text" 
                    name="nome" 
                    placeholder="Seu nome completo"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 text-lg"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Seu melhor e-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 text-lg"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <input 
                    type="tel" 
                    name="telefone" 
                    placeholder="WhatsApp para contato"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 text-lg"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    name="cidade" 
                    placeholder="Sua cidade/UF"
                    value={formData.cidade}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 text-lg"
                  />
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Sun className="mr-3 w-6 h-6" />
                Quero economizar agora
              </button>
              
              <p className="text-gray-600 text-sm mt-4">
                ✓ Simulação 100% gratuita • ✓ Sem compromisso • ✓ Resposta em 24h
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ENDEREÇO E INFORMAÇÕES DE CONTATO */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Endereço:</p>
                  <p className="text-gray-300">Rua Exemplo, nº 123 - Centro</p>
                  <p className="text-gray-300">Cidade/UF</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Atendimento:</p>
                  <p className="text-gray-300">Segunda a sexta</p>
                  <p className="text-gray-300">das 08h às 18h</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Contato:</p>
                  <p className="text-gray-300">(11) 99999-9999</p>
                  <p className="text-gray-300">contato@energiasolar.com</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Sun className="w-8 h-8 text-yellow-400 mr-2" />
                <span className="text-xl font-bold">Energia Solar</span>
              </div>
              <p className="text-gray-400">
                © 2024 Energia Solar. Todos os direitos reservados. Transformando luz solar em economia para sua família.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;