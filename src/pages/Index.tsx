import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Car, Sofa, Bed, Sparkles, Phone, MapPin, Clock, Shield, Droplets, Award, MessageCircle, CheckCircle2 } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import serviceSofa from "@/assets/service-sofa.jpg";
import serviceMattress from "@/assets/service-mattress.jpg";
import serviceRugs from "@/assets/service-rugs.jpg";

const WHATSAPP = "https://wa.me/5511000000000?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20de%20higieniza%C3%A7%C3%A3o.";

const services = [
  { icon: Car, title: "Higienização Automotiva", desc: "Bancos, teto, painel e carpetes 100% higienizados com extração profunda.", img: heroCar },
  { icon: Sofa, title: "Sofás & Estofados", desc: "Remoção de ácaros, manchas e odores. Seu sofá renovado em horas.", img: serviceSofa },
  { icon: Bed, title: "Colchões", desc: "Eliminação de ácaros, fungos e bactérias. Sono saudável garantido.", img: serviceMattress },
  { icon: Sparkles, title: "Tapetes & Carpetes", desc: "Lavagem profunda com secagem rápida. Cores e fibras revitalizadas.", img: serviceRugs },
];

const benefits = [
  { icon: Droplets, title: "Extração Profunda", desc: "Equipamentos profissionais que removem até 95% dos ácaros." },
  { icon: Shield, title: "Produtos Certificados", desc: "Biodegradáveis, seguros para crianças e pets." },
  { icon: Clock, title: "Secagem Rápida", desc: "Em poucas horas tudo pronto para uso." },
  { icon: Award, title: "Garantia de Satisfação", desc: "Não ficou bom? Refazemos sem custo." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-glow">
              <Droplets className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight" style={{ fontFamily: 'Playfair Display' }}>Pure<span className="text-gradient-gold">Clean</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a>
            <a href="#beneficios" className="hover:text-foreground transition-colors">Benefícios</a>
            <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
          </nav>
          <Button asChild size="sm" className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-90 shadow-glow">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4 mr-2" />Orçamento</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 bg-hero-gradient">
        <div className="absolute inset-0 opacity-40">
          <img src={heroCar} alt="" width={1600} height={1200} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 backdrop-blur border border-border mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground">Atendendo São Paulo e Região</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-6">
              Higienização que<br />
              <span className="text-gradient-gold">renova tudo</span><br />
              que você ama.
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Carros, sofás, colchões e tapetes higienizados com tecnologia profissional. Eliminamos ácaros, manchas e odores devolvendo a vida nova ao que é seu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-90 shadow-glow text-base h-14 px-8">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5 mr-2" />Pedir Orçamento</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border bg-background/40 backdrop-blur hover:bg-secondary text-base h-14 px-8">
                <a href="#servicos">Ver serviços</a>
              </Button>
            </div>

            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-black text-gradient-gold">+1.200</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Clientes felizes</div>
              </div>
              <div>
                <div className="text-3xl font-black text-gradient-gold">5.0★</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Avaliação média</div>
              </div>
              <div>
                <div className="text-3xl font-black text-gradient-gold">24h</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Resposta rápida</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative animate-float">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border">
              <img src={heroCar} alt="Higienização automotiva profissional" width={1600} height={1200} className="w-full h-[600px] object-cover" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-background/80 backdrop-blur-xl border border-border">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold">Resultado Garantido</div>
                    <div className="text-xs text-muted-foreground">Equipamento profissional Karcher</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-accent/40 to-transparent blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-primary/40 to-transparent blur-3xl" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-32 relative">
        <div className="container">
          <div className="max-w-2xl mb-20">
            <div className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Nossos serviços</div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Limpeza profunda para cada <span className="text-gradient-gold">superfície</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Card key={i} className="group relative overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-500">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" width={1200} height={900} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                </div>
                <div className="p-8 -mt-20 relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4 shadow-glow">
                    <s.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="py-32 bg-secondary/30 relative">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Por que nos escolher</div>
            <h2 className="text-4xl md:text-5xl font-black">Qualidade que você <span className="text-gradient-gold">sente</span> e <span className="text-gradient-gold">vê</span>.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="p-8 rounded-2xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-card to-accent/10 border border-border p-12 md:p-20 text-center">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary blur-[120px]" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent blur-[120px]" />
            </div>
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-black mb-6 max-w-3xl mx-auto leading-tight">
                Pronto para ver seus móveis <span className="text-gradient-gold">como novos</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                Agende seu orçamento gratuito agora mesmo. Atendimento em todo São Paulo.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-90 shadow-glow text-base h-14 px-10">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5 mr-2" />Falar no WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contato" className="border-t border-border bg-card/50 py-20">
        <div className="container grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-glow">
                <Droplets className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'Playfair Display' }}>Pure<span className="text-gradient-gold">Clean</span></span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Higienização profissional com excelência. Renovamos automóveis, estofados e ambientes com cuidado e precisão.</p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-5">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">Rua Afonso Rodrigues Adorno, 110<br />Ipiranga, São Paulo - SP<br />04191-210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href={WHATSAPP} className="text-muted-foreground hover:text-foreground transition-colors">WhatsApp — Orçamento rápido</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Seg a Sáb · 08h às 19h</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-5">Atendimento</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Higienização Automotiva</li>
              <li>✓ Sofás e Poltronas</li>
              <li>✓ Colchões e Travesseiros</li>
              <li>✓ Tapetes e Carpetes</li>
              <li>✓ Cadeiras de escritório</li>
            </ul>
          </div>
        </div>

        <div className="container mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} PureClean Higienização. Todos os direitos reservados.</span>
          <span>Ipiranga · São Paulo · SP</span>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-glow hover:scale-110 transition-transform">
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </a>
    </div>
  );
};

export default Index;
